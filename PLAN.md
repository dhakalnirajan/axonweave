# AxonWeave Development Plan

Status markers: `[x]` done, `[~]` partially implemented (see CHECKLIST.md for
what is written vs CI-verified), `[ ]` not started.

## Phase 0 — Repository foundation

- [x] Python package structure.
- [x] PyO3/Rust boundary.
- [x] NumPy/SciPy reference layer.
- [x] PyTorch layer.
- [x] TensorFlow/Keras layer.
- [x] Substrate registry concept.
- [x] Documentation application scaffold.
- [x] CI/CD scaffold.
- [x] Agent specifications (`AGENTS.md`, docs-site `AGENTS.md`, `CODE_TOKENS.md`).

## Phase 1 — Reproducible substrate provisioning

- [x] Official MaleCNS v1.0 registry metadata.
- [x] Resumable downloads.
- [x] Local cache.
- [x] Stable upstream checksum registry (GCS-published MD5 per file, verified at install; sha256 slot ready).
- [x] Graph fingerprint validation: built-graph content fingerprint recorded in the manifest, re-derived and enforced at load/verify time; declared upstream fingerprint slot (AXW002) ready for release fixtures (`None` until measured upstream).
- [x] Disk-backed graph construction without retaining all edges in RAM (`DiskBackedGraphBuilder`, `axonweave substrate install --disk-backed`).
- [ ] `.awb` portable substrate pack/unpack.
- [ ] Graph fingerprint and migration/versioning.

## Phase 2 — Biological model core

- [x] Typed neuron metadata API.
- [x] ROI/body-ID selectors (`brain.neurons` collection).
- [x] Receptor model interface (`AMPA`, `GABA`, `NMDA (Mg-block)`, `dopamine`; `ReceptorPolicy`).
- [x] Neuron-type dynamics interface (`DynamicsPolicy` overrides per type).
- [x] Synaptic delay engine (`DelayRing` / `NumpyDelayBuffer`, `SynapticDelayEngine`, fixed/uniform/normal delay classes).
- [x] Synapse-level neurotransmitter model (`SynapseNeurotransmitterModel` with vesicle release and current generation).
- [x] Plasticity API (`STDP`, `DopamineSTDP` three-factor rules).
- [x] Deterministic simulation mode (seeded state, deterministic step).
- [ ] Scientific validation fixtures.

## Phase 3 — Framework integration

- [x] PyTorch.
- [x] TensorFlow/Keras.
- [x] NumPy/SciPy.
- [~] JAX adapter (`axonweave.jax` layer + high-level block + `tests/test_jax.py` authored; parity fix `x @ W`; numerical/device CI verification pending).
- [x] Cross-backend numerical equivalence tests (NumPy = PyTorch = Keras).
- [ ] PyTorch CUDA/MPS/XPU test lanes where runners are available.
- [ ] TensorFlow GPU/TPU test lanes where runners are available.
- [ ] Mixed precision policy.
- [ ] Distributed graph partitioning.

## Phase 4 — Native performance

- [x] PyO3 boundary.
- [x] Sparse propagation kernels (CSR matmul ×4, submatrix, fingerprint).
- [x] Native core dispatch (`native.py` + wheel `axonweave._native`) with `_numpy_*` fallbacks proven equivalent in CI.
- [x] Native⇄NumPy equivalence suite (`tests/test_native_runtime.py`).
- [~] Rust Arrow/Parquet/Feather streaming graph builder (roadmap below; benchmark suite tracks the current paths).
- [ ] Parallel graph construction.
- [x] Profiling/benchmark suite (`benchmarks/bench_graph_build.py`: wall time, Python allocation peak, peak RSS, cross-builder fingerprint equality, JSONL history).
- [ ] Memory-budgeted execution.

## Phase 5 — Documentation and developer ecosystem

- [x] Browser-rendered Markdown docs.
- [x] Sidebar/navigation.
- [x] Search-ready page model.
- [x] Theme switching.
- [x] Copyable code blocks.
- [x] TOC.
- [x] Legal pages.
- [x] SEO files.
- [ ] API reference generated from Python docstrings.
- [ ] Versioned documentation.
- [~] Hosted docs deployment (Pages workflow pushed; awaiting repo visibility/Pages enablement).

## Phase 6 — Connectome computing framework (new)

High-level abstractions above the substrate/layer APIs. Additive; all
low-level APIs remain unchanged.

- [x] Neuron dynamics models: `LIF`, `AdaptiveLIF`, `Rate` (`axonweave.dynamics`).
- [x] Encoders: `ImageEncoder`, `TokenEncoder`, `SensorEncoder` (`axonweave.encoders`).
- [x] Decoders/readouts: `ActionDecoder`, `TokenDecoder`, `ClassificationHead` (`axonweave.decoders`).
- [x] Learning/plasticity rules: `STDP`, `DopamineSTDP` (`axonweave.learning`).
- [x] Experiment loop: `Agent` (encode → dynamics → decode → env → reward → plasticity), JSONL logging, checkpoints (`axonweave.experiment`).
- [~] Brain facades: `brain.task(...)`, `brain.agent(...)`, `brain.layer(...)` alias, `brain.simulate`, `brain.experiment` (agent path locally verified; task path requires torch, CI-verified pending).
- [~] Torch high-level adapters: `BrainModel`, `ConnectomeBlock`, `Input`, `Readout` (written + tests; CI-verified pending).
- [x] Neuron selection API (`brain.graph.neurons`: `all()`, `ids()`, `by_mask()`, `by_type()`, `by_region()`; order-preserving, AXW010 on unknown IDs; selection tables built from annotations at install time).
- [x] Selections wired into all three `ConnectomeLayer` backends (`selection=` parameter: sub-network propagation, subset trainable edges, `selection_body_ids` provenance).
- [x] `brain.info()` / `BrainInfo` structured metadata (incl. `summary()`).
- [x] `brain.capabilities()` backend/device reporting.
- [x] Checkpoint substrate-fingerprint validation (refuse mismatched graphs, AXW002).
- [x] First-class `axonweave.readout` package: `ClassificationReadout`, `RegressionReadout`, `TokenReadout`, `ActionReadout` (explicit `n_source` guards, reference SGD `update()`, top-level re-exports).
- [~] Keras high-level adapter (`axonweave.keras.BrainLayer`, written + tests; CI-verified pending).
- [~] JAX high-level adapter (written + tests; CI-verified pending).
- [x] Surrogate-gradient training through spiking dynamics.

## Phase 4 detail — Rust streaming graph builder roadmap

The Python `DiskBackedGraphBuilder` (Phase 1) is the correctness baseline: it
streams Arrow record batches, spills edges to memmaps, and reduces to CSR via
`native.build_csr_from_coo`. The Rust roadmap replaces its two hot stages with
native kernels while preserving its public behavior and fingerprint byte-for-byte:

1. **Native edge LUT mapping.** Kernel `edge_lut_map`: given a record-batch
   triple (src, dst, weight) plus a sorted body-ID array, emit index-mapped
   edge arrays without a Python dict lookup per element. Replaces the
   `np.fromiter(lut[int(x)] ...)` generator, which dominates the streaming
   build's profile.
2. **Native ID scan.** Kernel `scan_body_ids`: per-batch min/max/hash-partition
   of source and target columns so the ID pass needs only an ordered merge,
   not a Python set of all IDs (removes the last unbounded-RAM structure).
3. **Native Arrow/IPC ingestion.** Read the Feather/IPC file directly in Rust
   (arrow-rs) so batches never cross the PyO3 boundary as Python objects; the
   Python side keeps only column-name alias resolution and orchestration.
4. **Parallel CSR reduction.** Shard `build_csr` by row ranges (rayon), then
   concatenate per-shard CSR segments — duplicates never cross shard bounds.
5. **Acceptance criteria (all measurable via `benchmarks/bench_graph_build.py`):
   identical `csr_fingerprint` vs the Python builder on every fixture;
   ≥2× wall-time improvement on the MaleCNS-scale connectivity file; peak RSS
   flat in edge count (no O(n_edges) Python structures).

Each landed kernel follows the native-core contract: Rust kernel + `_numpy_*`
reference + dispatcher + equivalence test in `tests/test_native_runtime.py`.

## Phase 4b — Temporal runtime (Temporal Runtime Alpha, v0.2.0)

- [x] `axonweave.runtime` package: `ConnectomeRuntime` (NumPy reference path) with backend-neutral semantics — `step()` persists state, `forward_sequence()` == sequential `step()` (equivalence-tested across Rate/LIF/AdaptiveLIF), `get_state()`/`set_state()` deep-copied replay/branching, `detach_state()` BPTT boundary, `memory_estimate()`.
- [x] Explicit state objects: `NeuronState`, `SynapticState`, `PlasticityState`, `RuntimeState` (deep-copyable, `to_dict()` serializable snapshot).
- [x] Torch bridge: `TorchStatefulRuntime` + stateful `BrainModel` (`step`/`forward_sequence`/`reset_state`/`get_state`/`set_state`/`detach_state`); constructor injection `BrainModel(brain=, encoder=, dynamics=, readout=)` alongside the legacy `connect()` API; exposes `model.encoder/.brain/.dynamics/.readout/.runtime`.
- [x] Encoder protocol: `input_shape`/`output_size`/`dtype` declarations; `VectorEncoder`, `TimeSeriesEncoder` (windowed, memoryless at window=1).
- [x] `brain.memory_estimate(dtype, state)` per-component footprint.
- [x] Sequence BPTT through the stateful path: torch-native differentiable spiking cells (`TorchSurrogateLIF` + `SpikeSurrogate`, surrogate formulas equivalence-tested vs the native reference), persistent sparse propagation, auto-routing in `BrainModel` for `SurrogateLIF`/`SurrogateAdaptiveLIF`, truncated BPTT via `detach_state()`.
- [x] §39 time-series end-to-end example (`examples/time_series_forecasting.py`) with MLP/RNN/LSTM/GRU baselines and explicit biological/assumed/learned/task labeling.

## Phase 7 — Scientific release

- [ ] Independent scientific review.
- [ ] Reproducibility report.
- [ ] Benchmark report.
- [ ] Biological-model limitations report.
- [ ] Stable v1.0 API.
