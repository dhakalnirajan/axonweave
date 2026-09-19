# Backends and Devices

Which frameworks AxonWeave integrates with, what each backend owns (tensor, sparse and device semantics), and how numerical equivalence between them is maintained and proven.

## Supported package integrations

### NumPy/SciPy

Reference CPU implementation. All compute first routes through `native.py`, which dispatches either to the compiled Rust/PyO3 extension or an identical NumPy/SciPy reference — public results are the same either way, and both paths are first-class. Useful for correctness tests, inspection and small graph experiments.

### PyTorch

Installed with:

```bash
pip install "axonweave[torch]"
```

The integration exposes `axonweave.torch.ConnectomeLayer`, a `torch.nn.Module` computing `y = (x @ W) * gain + bias` with PyTorch sparse operations. Layer options:

- `trainable_edges=True` — edge weights become an `nn.Parameter` (Mode 2 synaptic learning; the topology itself never changes).
- `learnable_gain=True` — the global output gain trains.
- `bias=True` — trainable per-neuron bias.
- `selection=` — restrict the layer to a sub-network (`brain.graph.neurons...`).
- `device=` — placement through `module.to(device)`; unsupported combinations raise `AXW004`.

Passing an unrecognized `selection` type raises `ApiUsageError` (AXW010). Passing `signal_policy=` warns with `AXW007`: the sparse layer computes structural propagation only — see [Signals & Receptors](signals.md) for receptor and neurotransmitter models.

The layer preserves input dtype (float32 and float64 both round-trip), reports its structure via `repr` (`n_neurons`, `n_edges`, trainable flags, selection size), and exposes the backing CSR as `layer.graph_weights`.

### TensorFlow/Keras

Installed with:

```bash
pip install "axonweave[tensorflow]"
```

The integration exposes `axonweave.keras.ConnectomeLayer`, a Keras `Layer` using TensorFlow sparse operations, with the same option set (`trainable_edges`, `learnable_gain`, `use_bias`, `selection`, `signal_policy`) and the same AXW010/AXW007 behavior as the PyTorch adapter.

It implements `get_config()`, so layers compose with `model.get_config()` / Keras cloning — the config records the structural options plus `n_neurons` provenance; the sparse topology is re-resolved from the substrate at deserialization time, where fingerprint validation still applies.

## Device model

AxonWeave does not maintain a second device abstraction. The host framework controls placement.

For PyTorch this can include CPU, CUDA, MPS, XPU and other devices supported by the installed PyTorch release. For TensorFlow it can include CPU, GPU and TPU configurations supported by TensorFlow and the specific sparse operator.

:::DOC-WARN
A device being recognized by a framework does not imply that every sparse operation used by AxonWeave is implemented on that device. Capability must be tested. Unsupported combinations must fail explicitly instead of silently copying data to CPU.
:::

## Backend contract

A backend adapter must provide:

- native tensor/layer type;
- sparse graph representation;
- gradient propagation where trainable;
- device placement through native framework APIs;
- dtype policy;
- actionable capability errors.

## JAX integration

Installed with:

```bash
pip install "axonweave[jax]"
```

An experimental adapter exists (`axonweave.jax`): `ConnectomeLayer`, `BrainModel`, `ConnectomeBlock`, `Input` and `Readout` wrapping JAX's native sparse (BCOO) and device APIs. It follows the same API contract as the torch/keras adapters — same option names, same AXW010/AXW007 guards, `layer.graph_weights` exposing the backing CSR, and a structural `repr` — with JAX-specific semantics: the layer is functional, so `trainable_edges` is accepted for API symmetry while gradient-based edge updates happen outside the layer via standard JAX transformations.

The adapter propagates `y = (x @ W) * gain + bias` via JAX BCOO sparse matrices, matching the numpy/torch/keras reference. BCOO construction is hardened: uses `bcoo_from_scipy_sparse` + `bcoo_sum_duplicates` with a fallback path for JAX versions before 0.4.37. Import-time failure raises `AXW006` (`BackendUnavailableError`).

22 tests are authored (`tests/test_jax.py`) covering dense reference parity, 3D batched shapes, gain scaling, AXW010/AXW007 error paths, `jax.grad` through edge weights, `jax.jit` forward, block dynamics and `BrainModel` composition. A cross-backend numerical equivalence test (`test_jax_equals_numpy`) runs in the backend smoke matrix. CI verification across JAX versions is pending.

JAX support remains an explicit optional target rather than a claim that every JAX sparse primitive is equivalent across accelerators.

## Behavioral parity

All three framework adapters guarantee:

- identical propagation semantics (`y = (x @ W) * gain + bias`) and cross-backend numerical equivalence tests;
- `ApiUsageError` (AXW010) for dimension mismatches and invalid selections;
- an explicit AXW007 warning rather than silent acceptance for `signal_policy`;
- device errors as actionable `AXW004` messages, never silent CPU fallback;
- fixed sparsity: trainable parameters change edge values, never the connectome topology.
