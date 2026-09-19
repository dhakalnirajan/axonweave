from __future__ import annotations

from ..errors import BackendUnavailableError

try:
    import jax
    import jax.numpy as jnp
    from jax.experimental.sparse import BCOO, bcoo_from_scipy_sparse, bcoo_sum_duplicates
except ImportError:
    # jax < 0.4.37: only the BCOO.from_scipy_sparse classmethod exists.
    try:
        import jax
        import jax.numpy as jnp
        from jax.experimental.sparse import BCOO

        bcoo_from_scipy_sparse = BCOO.from_scipy_sparse

        def bcoo_sum_duplicates(m):
            return m.sum_duplicates(remove_zeros=False)
    except ImportError as e:
        raise BackendUnavailableError(
            "AXW006: axonweave.jax requires JAX; install axonweave[jax]"
        ) from e

from ..core.selection import NeuronSelection
from ..errors import ApiUsageError, UnsupportedDeviceError


def _resolve_device(device):
    if device is None:
        return None
    if isinstance(device, jax.Device):
        return device
    if not isinstance(device, str):
        raise UnsupportedDeviceError(
            f"AXW004: device={device!r} must be a jax.Device or a device string"
        )
    try:
        return jax.devices(device)[0]
    except Exception as e:
        raise UnsupportedDeviceError(f"AXW004: backend rejected device={device!r}: {e}") from e


class ConnectomeLayer:
    """Sparse biological connectome as a JAX module (experimental).

    Propagates batched neuron activity through the substrate's CSR topology
    via a JAX ``BCOO`` sparse matrix: ``y = (x @ W) * gain + bias`` with W's
    sparsity pattern fixed to the connectome (trainable edges change values,
    never the topology — JAX transformations such as ``jax.grad`` apply to
    ``edge_weight`` through functional updates, not in-place mutation).

    Args:
        graph: the ``ConnectomeGraph`` (or a ``NeuronSelection``-derived graph).
        trainable_edges: kept for API symmetry with the torch/keras adapters;
            the layer itself is functional, so edge values are immutable state
            and gradient-based updates happen outside the layer.
        gain: scalar output gain (static, not trained in place).
        bias: per-neuron additive bias (zeros; supply values by replacing
            ``layer.bias`` functionally).
        signal_policy: optional ``SignalPolicy``. The sparse layer computes
            structural propagation only; wiring a receptor/sign model here is
            not yet supported, so passing one raises ``AXW007`` instead of
            being silently ignored.
        selection: ``NeuronSelection`` restricting the layer to a sub-network.
        device: ``jax.Device`` or device string (AXW004 if the backend
            rejects it).
    """

    def __init__(
        self,
        graph,
        trainable_edges=False,
        gain=1.0,
        bias=False,
        signal_policy=None,
        selection=None,
        device=None,
    ):
        if signal_policy is not None:
            import warnings

            warnings.warn(
                "AXW007: ConnectomeLayer computes structural sparse propagation "
                "only; signal_policy is accepted for API symmetry but is not "
                "applied. Use the signals/receptors APIs for receptor and "
                "neurotransmitter models.",
                stacklevel=2,
            )
        if selection is not None:
            if not isinstance(selection, NeuronSelection):
                raise ApiUsageError(
                    "AXW010: selection must be a NeuronSelection from brain.graph.neurons"
                )
            sub = selection.weights()
            self.selection_body_ids = selection.body_ids.copy()
        else:
            sub = graph.weights
            self.selection_body_ids = None
        self.n_neurons = sub.shape[0]
        self.graph_weights = sub
        self.device = _resolve_device(device)
        w = bcoo_from_scipy_sparse(sub)
        w = bcoo_sum_duplicates(w)
        self._indices_sorted = w.indices_sorted
        self._unique_indices = w.unique_indices
        self.indices = jax.device_put(w.indices, self.device)
        self.edge_weight = jax.device_put(w.data.astype(jnp.float32), self.device)
        self.gain = float(gain)
        self.bias = (
            jax.device_put(jnp.zeros(self.n_neurons, dtype=jnp.float32), self.device)
            if bias
            else None
        )
        self.signal_policy = signal_policy
        self.trainable_edges = trainable_edges
        self.shape = (self.n_neurons, self.n_neurons)

    def __repr__(self) -> str:
        parts = [
            f"n_neurons={self.n_neurons}",
            f"n_edges={int(self.edge_weight.shape[0])}",
        ]
        if self.trainable_edges:
            parts.append("trainable_edges=True")
        if self.bias is not None:
            parts.append("bias=True")
        if self.selection_body_ids is not None:
            parts.append(f"selection={len(self.selection_body_ids)} neurons")
        if self.device is not None:
            parts.append(f"device={self.device}")
        return f"ConnectomeLayer({', '.join(parts)})"

    def __call__(self, x):
        xa = jnp.asarray(x)
        if xa.shape[-1] != self.n_neurons:
            raise ApiUsageError(
                f"AXW010: expected last dimension {self.n_neurons}, got {xa.shape[-1]}"
            )
        lead = xa.shape[:-1]
        xf = xa.reshape(-1, self.n_neurons)
        w = BCOO(
            (self.edge_weight, self.indices),
            shape=self.shape,
            indices_sorted=self._indices_sorted,
            unique_indices=self._unique_indices,
        )
        y = xf @ w
        y = y * self.gain
        if self.bias is not None:
            y = y + self.bias
        return y.reshape(*lead, self.n_neurons)
