# AxonWeave Implementation Status

Three-state audit required by the development plan (§2). States are **not**
cumulative badges of quality — a feature can be fully implemented and CI-verified
while being scientifically unvalidated.

Legend:

- **IMPLEMENTED** — source code and tests exist in the repository.
- **CI-VERIFIED** — executed and passing on GitHub Actions runners (the local
  dev machine has no torch/tensorflow/Rust toolchain; CI is authoritative).
- **SCIENTIFICALLY-VALIDATED** — compared against official release fixtures,
  analytical solutions, or published reference trajectories.

Last updated: 2026-09-15 (Temporal Runtime Alpha milestone).

## Substrate and provisioning

| Feature | IMPLEMENTED | CI-VERIFIED | SCIENTIFICALLY-VALIDATED |
|---|---|---|---|
| MaleCNS registry metadata, resumable downloads, cache | yes | pending | pending |
| Upstream checksum enforcement (GCS MD5) | yes | pending | source/schema validation required |
| Graph builder (in-memory) | yes | pending | schema fixture validation required |
| Disk-backed streaming builder | yes | pending | schema fixture validation required |
| Graph fingerprint + manifest validation (AXW002) | yes | pending | pending |
| Declared upstream fingerprint slot | yes (None until measured) | n/a | blocked on upstream measurement |
| Versioned `.awb` artifact format (pack/verify/install-file/inspect CLI) | yes | pending | fingerprint-determinism tested |
| Neuron metadata store + selection tables | yes | pending | annotation column fixtures required |

## Core model

| Feature | IMPLEMENTED | CI-VERIFIED | SCIENTIFICALLY-VALIDATED |
|---|---|---|---|
| `ConnectomeGraph` / `BiologicalBrain` | yes | pending | pending |
| Neuron selection (`all/ids/by_type/by_region/by_mask`) | yes | pending | pending |
| `BrainInfo` / `brain.capabilities()` | yes | pending | pending |
| `brain.memory_estimate()` | yes | pending | n/a (self-report, tested against formula) |
| `SignalPolicy`, `SynapseNeurotransmitterModel` | yes | pending | pending |
| Receptors (AMPA/GABA/NMDA/dopamine) | yes | pending | analytical fixtures pending |
| Synaptic delay engine (`DelayRing`) | yes | pending | exact ring-buffer fixtures pending |
| `Rate` / `LIF` / `AdaptiveLIF` dynamics | yes | pending | reference trajectories pending |
| Surrogate gradients (sigmoid/atan/piecewise/STE) | yes | pending | pending |
| STDP / DopamineSTDP (copy-on-write) | yes | pending | reference equations pending |

## Temporal runtime (Temporal Runtime Alpha)

| Feature | IMPLEMENTED | CI-VERIFIED | SCIENTIFICALLY-VALIDATED |
|---|---|---|---|
| `axonweave.runtime.ConnectomeRuntime` (NumPy reference) | yes | yes (local suite; CI lane running) | n/a |
| Explicit state (`NeuronState`/`SynapticState`/`PlasticityState`/`RuntimeState`) | yes | yes | n/a |
| `step()` state persistence semantics | yes | yes | n/a |
| `forward_sequence()` == sequential `step()` equivalence tests | yes | yes | n/a |
| `get_state()`/`set_state()` replay + branching | yes | yes | n/a |
| `detach_state()` (truncated BPTT boundary; NumPy no-op) | yes | yes | n/a |
| Torch bridge `TorchStatefulRuntime` | yes | pending | n/a |
| Stateful torch `BrainModel` (`step`/`forward_sequence`/state API) | yes | pending | n/a |
| BPTT through spiking dynamics (`TorchSurrogateLIF`, `SpikeSurrogate`) | yes | pending | surrogate backward equivalence-tested vs native reference |
| Truncated BPTT (`detach_state` chunk training) | yes | pending | n/a |
| Persistent sparse propagation (no per-step COO rebuild) | yes | pending | n/a |

## Framework adapters

| Feature | IMPLEMENTED | CI-VERIFIED | SCIENTIFICALLY-VALIDATED |
|---|---|---|---|
| NumPy/SciPy reference layer | yes | yes | pending |
| PyTorch `ConnectomeLayer` (+ API hardening) | yes | pending | pending |
| TensorFlow/Keras `ConnectomeLayer` (+ `get_config`) | yes | pending | pending |
| JAX adapter (BCOO) | yes | **no** — no JAX CI lane yet | no |
| Cross-backend numerical equivalence (NumPy=Torch=Keras) | yes | pending | tolerance spec not formalized |
| Torch `BrainModel` / `ConnectomeBlock` | yes | pending | n/a |
| Keras `BrainLayer` / `KerasConnectomeBlock` | yes | pending | n/a |

## Experiments and interfaces

| Feature | IMPLEMENTED | CI-VERIFIED | SCIENTIFICALLY-VALIDATED |
|---|---|---|---|
| Encoders: Image/Token/Sensor | yes | pending | n/a |
| Encoders: Vector/TimeSeries (protocol: `input_shape`/`output_size`/`dtype`) | yes | yes (NumPy path) | n/a |
| Readouts: Classification/Regression/Token/Action | yes | pending | n/a |
| Agent loop (encode→step→decode→env→learn), JSONL logs | yes | pending | n/a |
| Checkpoints with substrate-fingerprint validation (AXW002) | yes | pending | n/a |
| Environment protocol (formal class) | not started | — | — |

## Infrastructure

| Feature | IMPLEMENTED | CI-VERIFIED | SCIENTIFICALLY-VALIDATED |
|---|---|---|---|
| Native kernels (graph/dynamics/signals/receptors/delays/encoders/decoders/readout/provisioning) | yes | pending (native lane runs on built wheel) | equivalence-tested vs `_numpy_*` references |
| `_numpy_*` fallback parity | yes | yes | n/a |
| Benchmark suite (graph-build paths) | yes | local only | benchmark artifacts not published |
| Benchmark suite (temporal/sequence/scaling matrix) | not started | — | — |
| Scientific validation fixtures (§35) | not started | — | — |
| Reproducibility package (`reproducibility/`) | not started | — | — |
| Reference examples (`examples/`) | **partial** — `time_series_forecasting.py` (§39) done; 11 more planned | local help/smoke only | benchmark claims not published |
| API-doc generation from docstrings | not started | — | — |
| OIDC trusted publishing (PyPI) | not started | — | — |

## Honest gaps blocking v1.0

1. JAX adapter has no CI lane (claim of support requires it).
2. Schema/fingerprint validation against real MaleCNS release fixtures.
3. Scientific validation fixtures (dynamics trajectories, receptor analytics, STDP equations).
4. Persistent (non-per-forward) sparse execution in the keras/jax adapters (torch path done).
5. Temporal benchmark matrix and published artifacts.
6. Remaining reference examples (11 of 12 planned).
7. Independent scientific review; reproducibility/benchmark/limitations reports.
