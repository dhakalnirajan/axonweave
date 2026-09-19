"""Tests for the JAX adapter: ConnectomeLayer, ConnectomeBlock, BrainModel.

CI-only suite: JAX is not installed on the dev machine, so these run in the
GitHub Actions backend-smoke job (``jax``). CPU execution is forced so the
numerical assertions are deterministic across runners.
"""
import pytest

jax = pytest.importorskip("jax")
jax.config.update("jax_platforms", "cpu")
import jax.numpy as jnp  # noqa: E402
import numpy as np  # noqa: E402

from tests.conftest import make_graph  # noqa: E402

from axonweave.core.brain import BiologicalBrain  # noqa: E402
from axonweave.core.selection import NeuronSelector  # noqa: E402
from axonweave.errors import ApiUsageError, UnsupportedDeviceError  # noqa: E402
from axonweave.jax import (  # noqa: E402
    BrainModel,
    ConnectomeBlock,
    ConnectomeLayer,
    Input,
    Readout,
)
from axonweave.jax.block import resolve_dynamics  # noqa: E402


@pytest.fixture
def graph():
    return make_graph(n=8, seed=11)


@pytest.fixture
def brain(graph):
    return BiologicalBrain(graph)


def _rng(seed):
    return np.random.default_rng(seed)


def _dense(graph):
    return graph.weights.toarray()


# ---------------------------------------------------------------------------
# ConnectomeLayer
# ---------------------------------------------------------------------------

def test_forward_matches_dense_reference(graph):
    """Functional: sparse propagation equals dense x @ W (parity with numpy)."""
    layer = ConnectomeLayer(graph)
    x = jnp.asarray(_rng(1).random((4, graph.n_neurons)).astype(np.float32))
    y = layer(x)
    expected = np.asarray(x) @ _dense(graph)
    np.testing.assert_allclose(np.asarray(y), expected, rtol=1e-4, atol=1e-5)


def test_output_shape_and_batched_3d(graph):
    layer = ConnectomeLayer(graph)
    y = layer(jnp.zeros((2, 3, graph.n_neurons)))
    assert y.shape == (2, 3, graph.n_neurons)


def test_gain_scales_output(graph):
    x = jnp.asarray(_rng(2).random((3, graph.n_neurons)).astype(np.float32))
    y1 = ConnectomeLayer(graph, gain=1.0)(x)
    y2 = ConnectomeLayer(graph, gain=2.0)(x)
    np.testing.assert_allclose(np.asarray(y2), 2.0 * np.asarray(y1), rtol=1e-5)


def test_wrong_feature_dimension_raises(graph):
    layer = ConnectomeLayer(graph)
    with pytest.raises(ApiUsageError, match="AXW010"):
        layer(jnp.zeros((2, graph.n_neurons + 1)))


def test_bad_selection_raises_api_usage_error(graph):
    with pytest.raises(ApiUsageError, match="AXW010"):
        ConnectomeLayer(graph, selection=[1, 2, 3])


def test_selection_restricts_layer(graph):
    sel = NeuronSelector(graph).ids(graph.body_ids.tolist()[:4])
    layer = ConnectomeLayer(graph, selection=sel)
    assert layer.n_neurons == 4
    assert layer.selection_body_ids.shape == (4,)
    x = jnp.asarray(_rng(3).random((2, 4)).astype(np.float32))
    y = layer(x)
    assert y.shape == (2, 4)
    sub = np.asarray(_dense(graph))[sel.indices][:, sel.indices]
    np.testing.assert_allclose(np.asarray(y), np.asarray(x) @ sub, rtol=1e-4, atol=1e-5)


def test_signal_policy_warns_axw007(graph):
    with pytest.warns(UserWarning, match="AXW007"):
        layer = ConnectomeLayer(graph, signal_policy=object())
    assert layer.signal_policy is not None


def test_repr_reports_structure(graph):
    r = repr(ConnectomeLayer(graph, trainable_edges=True, bias=True))
    assert "n_neurons=8" in r
    assert "trainable_edges=True" in r
    assert "bias=True" in r
    assert "n_edges=" in r


def test_trainable_edges_attribute_api_symmetry(graph):
    layer = ConnectomeLayer(graph, trainable_edges=True)
    assert layer.trainable_edges is True
    assert layer.edge_weight.shape[0] == graph.weights.nnz


def test_bias_added(graph):
    layer = ConnectomeLayer(graph, bias=True, gain=1.0)
    y = layer(jnp.zeros((2, graph.n_neurons)))
    assert jnp.count_nonzero(y) == graph.n_neurons * 2


def test_unsupported_device_raises_actionable_error(graph):
    with pytest.raises(UnsupportedDeviceError, match="AXW004"):
        ConnectomeLayer(graph, device="xpu:99")


def test_explicit_cpu_device_forward(graph):
    layer = ConnectomeLayer(graph, device=jax.devices("cpu")[0])
    assert layer.device is not None
    x = jnp.ones((2, graph.n_neurons), dtype=jnp.float32)
    y = layer(x)
    assert y.shape == (2, graph.n_neurons)
    expected = np.ones((2, graph.n_neurons), dtype=np.float32) @ _dense(graph)
    np.testing.assert_allclose(np.asarray(y), expected, rtol=1e-4)


def test_grad_through_trainable_edges(graph):
    """Functional: reverse-mode differentiation reaches edge weights.

    The layer builds its BCOO matrix from ``edge_weight``; replacing that
    array and differentiating exercises the sparse (x @ W) path.
    """
    layer = ConnectomeLayer(graph)
    x = jnp.ones((2, graph.n_neurons))

    def loss(edge_weight):
        f = ConnectomeLayer(graph)
        f.edge_weight = edge_weight
        return f(x).sum()

    g = jax.grad(loss)(layer.edge_weight)
    assert g.shape == layer.edge_weight.shape
    assert bool(jnp.all(jnp.isfinite(g)))
    assert bool(jnp.any(g != 0))


def test_jit_forward(graph):
    layer = ConnectomeLayer(graph)
    f = jax.jit(layer)
    x = jnp.asarray(_rng(4).random((3, graph.n_neurons)).astype(np.float32))
    np.testing.assert_allclose(np.asarray(f(x)), np.asarray(layer(x)), rtol=1e-6)


# ---------------------------------------------------------------------------
# ConnectomeBlock
# ---------------------------------------------------------------------------

def test_block_rate_nsteps1_matches_layer(brain):
    block = ConnectomeBlock(brain, dynamics="rate")
    layer = ConnectomeLayer(brain.graph)
    x = jnp.asarray(_rng(5).random((2, brain.n_neurons)).astype(np.float32))
    np.testing.assert_allclose(np.asarray(block(x)), np.asarray(layer(x)), rtol=1e-4, atol=1e-5)


def test_block_dimension_error_raises(brain):
    block = ConnectomeBlock(brain, dynamics="rate")
    with pytest.raises(ApiUsageError, match="AXW010"):
        block(jnp.zeros((2, brain.n_neurons + 1)))


def test_block_multistep_runs(brain):
    block = ConnectomeBlock(brain, dynamics="rate", n_steps=3)
    x = jnp.asarray(_rng(6).random((2, brain.n_neurons)).astype(np.float32))
    y = block(x)
    assert y.shape == (2, brain.n_neurons)
    assert bool(jnp.all(jnp.isfinite(y)))


def test_block_warns_multistep_spiking_with_trainable_edges(brain):
    with pytest.warns(UserWarning, match="AXW007"):
        ConnectomeBlock(brain, dynamics="lif", n_steps=4, trainable_edges=True)


def test_block_selection_restricts(brain):
    sel = NeuronSelector(brain.graph).ids(brain.graph.body_ids.tolist()[:3])
    block = ConnectomeBlock(brain, dynamics="rate", selection=sel, n_steps=2)
    assert block.n_active == 3
    y = block(jnp.ones((1, 3)))
    assert y.shape == (1, 3)


# ---------------------------------------------------------------------------
# BrainModel
# ---------------------------------------------------------------------------

def test_resolve_dynamics_known_and_unknown():
    assert resolve_dynamics(None).name == "rate"
    assert resolve_dynamics("lif").name == "lif"
    with pytest.raises(ApiUsageError, match="AXW010"):
        resolve_dynamics("hodgkin_huxley")


def test_brainmodel_connect_forward(brain):
    model = BrainModel(brain, dynamics="rate", trainable_edges=False)
    model.connect(Input(16))
    model.connect(Readout(3))
    x = jnp.asarray(_rng(7).random((4, 16)).astype(np.float32))
    y = model(x)
    assert y.shape == (4, 3)
    assert bool(jnp.all(jnp.isfinite(y)))


def test_brainmodel_passthrough_without_interfaces(brain):
    model = BrainModel(brain, dynamics="rate")
    y = model(jnp.ones((2, brain.n_neurons)))
    assert y.shape == (2, brain.n_neurons)


def test_brainmodel_connect_invalid_module_raises(brain):
    model = BrainModel(brain, dynamics="rate")
    with pytest.raises(ApiUsageError, match="AXW010"):
        model.connect(object())


def test_brainmodel_unknown_dynamics_raises(brain):
    with pytest.raises(ApiUsageError, match="AXW010"):
        BrainModel(brain, dynamics="hodgkin_huxley")