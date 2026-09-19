# AxonWeave Implementation Checklist

Status legend:

- **COMPLETED** — implemented; locally verified where the environment allows.
- **WRITTEN (CI-VERIFIED PENDING)** — code and tests exist; execution requires
  GitHub Actions (torch/tensorflow backends, Rust, cross-platform matrix).
  "Written" is not "verified".
- **NOT STARTED** — see PLAN.md for ordering.

## COMPLETED

### Baseline
- [x] Complete repository README.
- [x] Architecture and AI-agent governance documents (`AGENTS.md`, `CODE_TOKENS.md`, docs-site `AGENTS.md`).
- [x] Frontend design system (`docs-site/DESIGN.md`, Google DESIGN.md spec, token linting).
- [x] Documentation typography: IBM Plex Sans (UI/body/headings) + Iosevka Charon Mono (code) loaded via Google Fonts with preconnect and `display=swap`; `--font-ui`/`--font-code` CSS variables with full system fallbacks; tabular-nums for API-reference tables; DESIGN.md + tokens.css kept in sync (lint 0 errors).
- [x] Code-block readability pass: language chip reserved as a header tab (blocks grow a top padding band; no overlap with code or line-number rail), brighter code text / gutter numerals / chip and comment colors, combined gutter+chip layout rule.
- [x] Authoring-scaffolding guard: `verify-render.mjs` check #4 fails CI on leaked writer notes ("One-sentence purpose:", `TODO(writer/author):`, `[DRAFT]`) in page source.
- [x] Reader-facing intro sentence added to the 14 pages that opened directly with a heading (api-reference, backends, brain, configuration, connectome, core-concepts, devices, errors, faq, getting-started, installation, release-engineering, scientific-reference, troubleshooting); intros verified against the real APIs (AXW000–AXW101 codes, `AXONWEAVE_HOME`, `brain.info/capabilities/task/agent`, install flags); one overclaim ("run one step") corrected.
- [x] Leaked "One-sentence purpose:" scaffolding removed from all 13 affected pages in both `docs-site/content/` and the `docs/` mirror.
- [x] SVG logo and favicon.
- [x] Browser-based Markdown documentation renderer.
- [x] Sidebar, navigation, TOC, theme switcher and copy buttons.
- [x] Getting Started through Scientific Reference documentation.
- [x] Privacy, Terms and Cookie Consent UI.
- [x] 404 page.
- [x] robots.txt and sitemap.xml.
- [x] Open Graph metadata and favicon.
- [x] Responsive documentation layout.
- [x] PyTorch/TensorFlow/NumPy/SciPy packaging extras.
- [x] `.gitignore` covering caches, builds and secrets.

### Provisioning and data pipeline
- [x] Disk-backed streaming graph builder (`data/streaming_builder.py`): bounded-RAM two-pass build (ID scan + edge memmap streaming) reducing to CSR via the native core; output byte-compatible with `build_graph` (proven by equivalence test); used by `install_male_cns(disk_backed=True)` / `axonweave substrate install --disk-backed`.
- [x] Built-graph fingerprint validation: `install` records the canonical `csr_fingerprint` in the manifest; `registry.load()` re-derives it and refuses corrupted/swapped `graph.npz` (AXW002); `substrate verify` checks it; declared upstream slot `GRAPH_FINGERPRINTS` (None until measured upstream, no fabricated digests).
- [x] Resumable downloads (`.part` files, HTTP Range requests).
- [x] Stable upstream checksum registry (GCS MD5 per file) enforced at install; sha256 recorded.
- [x] `AXW002` integrity abort before substrate activation on checksum mismatch.
- [x] Graph builder with schema alias resolution, fingerprints, deterministic builds.
- [x] Registry identity/status validation (`AXW001`, `AXW002`).
- [x] CLI `axonweave substrate install male-cns:v1.0`.

### Backend layers
- [x] NumPy/SciPy reference layer with ND batched input.
- [x] PyTorch sparse `ConnectomeLayer` (trainable edges, gain, bias, AXW004 device errors).
- [x] TensorFlow/Keras sparse `ConnectomeLayer`.
- [x] Adapter API hardening (all three backends: torch, keras, jax): `ApiUsageError` (AXW010) consistently for selection type errors; `signal_policy=` accepted for API symmetry but raises an explicit AXW007 warning instead of being silently ignored (scientific-honesty rule); dtype-preserving sparse path (torch float64 round-trip); `extra_repr`/`__repr__` structure report; `get_config()` Keras serialization with n_neurons provenance (keras); vectorized index construction; `graph_weights` property exposing the backing CSR (fixes `ConnectomeBlock`/`KerasConnectomeBlock` selection path reading an unset attribute; JAX `ConnectomeBlock` also no longer recomputes `selection.weights()` per call).
- [x] Backends doc page documents per-adapter layer options, the AXW007 signal_policy contract, JAX functional semantics, and a cross-backend behavioral-parity section; mirrored to `docs/`.
- [x] Cross-backend numerical equivalence tests (NumPy = PyTorch = Keras).
- [x] Ruff lint clean across `python/` and `tests/`.
- [x] Rust core dispatch layer (`python/axonweave/native.py`): compiled `_native` kernels backed by `_numpy_*` references; public API identical with or without the extension.

### Connectome computing framework (Phases 1–5)
- [x] Dynamics: `LIF`, `AdaptiveLIF`, `Rate`, `DynamicsPolicy` (per-type overrides, AXW005 on unknown types).
- [x] Encoders: `ImageEncoder`, `TokenEncoder`, `SensorEncoder` (batched, seeded, AXW010 shape/vocab errors).
- [x] Decoders: `ActionDecoder` (discrete/continuous), `TokenDecoder`, `ClassificationHead`.
- [x] Learning: `STDP`, `DopamineSTDP` (three-factor reward modulation, weight clipping, topology preservation).
- [x] Experiment `Agent` loop: encode → dynamics → decode → action → env → reward → plasticity.
- [x] Copy-on-write plasticity (cached substrate graph never mutated).
- [x] JSON-lines experiment logging.
- [x] Agent checkpoints (weights + substrate/dynamics/learning metadata).
- [x] Brain facades: `brain.task(...)`, `brain.agent(...)`, `brain.layer(...)` alias, `brain.simulate`, `brain.experiment`.
- [x] `AXW006` actionable error when torch is missing for `brain.task`.
- [x] Implementation gap analysis (`docs/development/IMPLEMENTATION_GAP.md`).

### Signals, receptors and delays
- [x] Synapse-level neurotransmitter model (`signals/synapse.py`): `SynapseNeurotransmitterModel` with vesicle-release step and neurotransmitter current generation; vesicle/current kernels in the native core (`vesicle_release_step`, `nt_currents`).
- [x] Receptor models (`receptors/__init__.py`): `AMPA`, `GABA`, `NMDA` (voltage-dependent Mg block), `dopamine` (modulatory gain/sign) via `receptor_step` plus a `ReceptorPolicy`.
- [x] Synaptic delay engine (`delays/__init__.py` + `propagation.py`): `SynapticDelayEngine` with `UniformDelay`, `FixedDelay`, `NormalDelay`; ring-buffer semantics in the native core (`DelayRing` pyclass / `NumpyDelayBuffer` reference) plus the stateless `apply_delays` propagation path.
- [x] Tests: `tests/test_signals.py`, plus delay-ring/receptor/surrogate coverage in `tests/test_native_runtime.py`.

### Documentation site (design-spec UI)
- [x] Structural tabs: Learn / API / Tutorials / GitHub.
- [x] Visible search trigger with `Shift+/` global shortcut and Esc to close.
- [x] Stable/nightly version selector menu.
- [x] Resizable left sidebar (drag handle, width persisted to localStorage).
- [x] Scroll-tracked right TOC with active-section highlighting.
- [x] Always-dark code blocks (theme isolation) with Prism syntax highlighting (Python/Bash/TOML).
- [x] Accent-bar callouts (Note/Constraint/Tip) replacing plain blockquotes.
- [x] MathJax auto-load for pages containing math.
- [x] Spec palette: #121212 dark / #f8f9fa light, #ee4c2c brand accent reserved for active states.
- [x] New doc pages: Framework API, Neuron Dynamics, Encoders & Decoders, Learning & Plasticity, Experiments.
- [x] Three-column grid regression fixed (resizer removed from grid flow).
- [x] Project URLs updated to `dhakalnirajan/axonweave` (topbar, pyproject, canonical, sitemap).

### CI/CD
- [x] Python 3.10–3.14 CI matrix definition.
- [x] Ubuntu/macOS/Windows CI matrix definition.
- [x] Backend smoke jobs (torch, tensorflow, jax) running the full test suite (`tests/test_jax.py` + jax lane in `test_cross_backend.py`).
- [x] Wheel build + wheel import smoke test in CI.
- [x] Source-distribution build check.
- [x] Rust/PyO3 CI.
- [x] Native-equivalence CI lane (build wheel → run `test_native_runtime.py` → full fallback suite against the wheel).
- [x] Least-privilege workflow-level `permissions: contents: read` on `ci.yml` + `rust.yml` (CodeQL-aligned; CodeQL autofix covered `rust.yml`, `ci.yml` aligned for uniform token scope).
- [x] Rust native-runner fixes: `csr_matmul_2d_transpose` E0425 (`_n_cols` → `n_cols` in `rust/src/graph.rs`); test-lane wheel builds switch to `manylinux: off` (manylinux2014 Docker image has no `python3` on PATH — fixes "Couldn't find any python interpreters from 'python3'"); release wheels in `build-wheels.yml` keep `manylinux: auto`.
- [x] Docs sitemap covers every route — `runtime` + `playground` URLs added to `docs-site/public/sitemap.xml` (source of the `sitemap missing: ['runtime', 'playground']` failure).
- [x] Benchmark suite (`benchmarks/bench_graph_build.py`): in-memory vs disk-backed graph build (wall time, Python allocation peak, peak RSS), fingerprint-equality tripwire, JSONL history via `--jsonl`; 7 tests in `tests/test_bench_graph_build.py`.
- [x] Docs CI: typecheck → design-token lint → build → artifact verification.
- [x] Single consolidated GitHub Pages deploy workflow with `configure-pages(enablement: true)`.
- [x] `.gitignore` reviewed; no secrets, no raw data, no build artifacts committed.

## WRITTEN (CI-VERIFIED PENDING)

The following are implemented with tests authored but **not executed locally**
(the machine has no torch/tensorflow/Rust toolchain in PATH). GitHub Actions is
the authoritative validation environment:

- [ ] Rust/PyO3 kernels: `graph`, `dynamics`, `surrogate`, `learning`, `signals`,
      `receptors`, `delays`, `encoders`, `decoders`, `readout`, `provisioning`
      (hand-written against pyo3 0.22 / numpy 0.22; compiled config is CI-verified).
- [ ] Native⇄NumPy equivalence suite (`tests/test_native_runtime.py`) on the built wheel.
- [ ] PyTorch `ConnectomeLayer` test suite (`tests/test_torch_layer.py`).
- [ ] TensorFlow/Keras `ConnectomeLayer` test suite (`tests/test_keras_layer.py`).
- [ ] Cross-backend equivalence tests requiring torch/tensorflow (`tests/test_cross_backend.py`).
- [ ] Torch high-level API: `BrainModel`, `ConnectomeBlock` fit/composition/training-mode tests (`tests/test_torch_brain_model.py`).
- [ ] `brain.task` happy path and `brain.layer` alias (torch-dependent).
- [ ] Keras high-level adapter: `BrainLayer`, `KerasConnectomeBlock`, `brain.keras_task(...)` with 13 authored tests (`tests/test_keras_brain_layer.py`, tensorflow-dependent).
- [ ] JAX adapter (`axonweave.jax`): `ConnectomeLayer`, `BrainModel`, `ConnectomeBlock`, `Input`, `Readout`, `resolve_dynamics` — parity fix (propagates `x @ W` like numpy/torch/keras; BCOO via `bcoo_from_scipy_sparse` with jax<0.4.37 fallback; AXW006 preserved on import failure); 22 tests authored (`tests/test_jax.py`) + `test_jax_equals_numpy` in the cross-backend suite; CPU-forced for deterministic CI; numerical/device CI verification pending.
- [ ] Rust/PyO3 build and tests on CI runners.
- [ ] Wheel builds across the OS × Python matrix.
- [x] GitHub Pages deployment job (`docs.yml` builds the docs site with the `VITE_BASE_PATH=/axonweave/` base on Node 24 LTS and force-pushes the result to the `gh-pages` branch on push to `main`).

## NOT STARTED

- [ ] Rust streaming graph builder kernels per PLAN.md Phase 4 detail (edge-LUT mapping, native ID scan, Arrow/IPC ingestion, parallel CSR reduction) with benchmark acceptance criteria.
- [ ] Capture the real upstream graph fingerprint for male-cns:v1.0 from an independently verified build and fill the `GRAPH_FINGERPRINTS` slot (enforcement activates automatically).
- [ ] Run all CI jobs on GitHub and fix runner-specific failures.
- [ ] Verify Python 3.14 compatibility for every dependency/backend.
- [ ] GPU/TPU self-hosted or vendor runners; sparse-kernel tests on accelerators.
- [ ] Validate exact upstream schemas and release fixtures (incl. real annotation column names for `by_type`/`by_region` alias table).
- [ ] Replace in-memory graph assembly with disk-backed/streaming build.
- [ ] Portable `.awb` substrate pack/unpack.
- [ ] API-doc generation from Python docstrings.
- [ ] Versioned documentation.
- [ ] Keras high-level adapter (written, CI-verified pending — see WRITTEN section).
- [x] Surrogate-gradient training through spiking dynamics.
- [ ] Rust streaming graph builder; parallel construction; benchmark suite.
- [ ] Configure GitHub OIDC trusted publishing on PyPI.
- [ ] Documentation hosting domain and analytics endpoint (pending Pages).
- [x] Security/dependency scanning policy completion (full `LICENSE` (Apache-2.0), `CODE_OF_CONDUCT.md`, and `SECURITY.md` written; mirrored as License / Code of Conduct / Security Policy pages in the docs site).
- [ ] Independent scientific review; reproducibility/benchmark/limitations reports; stable v1.0 API.

## COMPLETED (framework phase additions)

### Temporal Runtime Alpha (v0.2.0)
- [x] `axonweave.runtime`: `ConnectomeRuntime` with explicit `NeuronState`/`SynapticState`/`PlasticityState`/`RuntimeState`; `step()` persistence, `forward_sequence()` == sequential `step()` equivalence (Rate/LIF/AdaptiveLIF), `get_state`/`set_state` replay, `detach_state`, `memory_estimate`; 20 tests (`tests/test_runtime.py`).
- [x] Encoder protocol (`input_shape`/`output_size`/`dtype`) + `VectorEncoder`/`TimeSeriesEncoder` (windowed); 8 tests (`tests/test_temporal_encoders.py`).
- [x] Torch `TorchStatefulRuntime` bridge + stateful `BrainModel` (constructor injection + temporal API); CI-verified pending (`tests/test_torch_brain_model_temporal.py`).
- [x] `brain.memory_estimate(dtype, state)`.
- [x] `docs/development/STATUS.md` three-state audit (IMPLEMENTED / CI-VERIFIED / SCIENTIFICALLY-VALIDATED).
- [x] Version bump 0.1.0 → 0.2.0 (`__init__.py`, `rust/Cargo.toml`, native `__version__`, checkpoint fallback).
- [x] BPTT/surrogate gradient routing: `frameworks/torch/bptt.py` — `SpikeSurrogate` (hard threshold forward, surrogate backward mirroring `native.surrogate_backward`, equivalence-tested), torch-native recurrent LIF/adaptive-LIF cells with persistent sparse propagation (no per-step COO rebuilds, plan §12); `BrainModel` auto-routes to the differentiable path for `SurrogateLIF`/`SurrogateAdaptiveLIF`; stale AXW007 multi-step warning replaced with actionable routing guidance; 16 CI-pending tests (`tests/test_torch_bptt.py`, `tests/test_torch_brain_model_bptt.py`: grads reach edge weights/gain/readout through T steps, early-timestep gradient contribution, detach truncation, replay, training-loop loss reduction, truncated-BPTT chunk training).
- [x] §39 time-series end-to-end example (`examples/time_series_forecasting.py`): TimeSeriesEncoder -> recurrent connectome -> RegressionReadout vs MLP/RNN/LSTM/GRU baselines, with biological/assumed/learned/task-specific labeling and `run/metrics.json` output.

### Introspection and selection (Phase 6)
- [x] `brain.info()` / `BrainInfo` with `summary()`; `brain.capabilities()` machine-readable report.
- [x] Deterministic substrate fingerprint (sha256 over CSR + body IDs); exposed as `brain.fingerprint`.
- [x] Checkpoint substrate-fingerprint validation (AXW002 on incompatible connectome).
- [x] Neuron selection API (`core/selection.py`): `all()` / `ids()` / `by_mask()` / `by_type()` / `by_region()`, order-preserving, AXW010 on unknown IDs; exposed as `brain.graph.neurons`.
- [x] Selection tables built from annotation columns at install time (`build_annotations`, alias-resolved, degraded gracefully when columns are absent).
- [x] Selections wired into all three `ConnectomeLayer` backends (`selection=` parameter, `selection_body_ids` provenance, AXW010 on non-selection argument).
- [x] Brain docs page documents info/capabilities/fingerprint/selection/selections-in-layers.
- [x] First-class `axonweave.readout` package: `ClassificationReadout`, `RegressionReadout`, `TokenReadout`, `ActionReadout` with explicit `n_source` dimension guards (AXW010), reference-path SGD `update()` gated on `trainable=True`, deterministic seeds, top-level re-exports; 12 tests; Readouts doc page in Concepts section.
- [x] Docs: language label chips on code blocks; line-number gutters on long Python blocks; pinned (sticky) gutter rail outside the scrolling code area; per-page re-highlighting fix; SF Mono leading the code font stack; Prism powershell grammar.

### Typed neuron metadata (Phase 2 biological model core)
- [x] `NeuronMetadata` dataclass (body_id, cell_type, region, hemisphere) with null-safe repr.
- [x] `NeuronMetadataStore` (`core/metadata.py`): lazy load from annotations Feather (pyarrow) or JSON; per-neuron `get`, `get_batch`, `query(cell_type, region, hemisphere)`, `types()`, `regions()`, `has_types/has_regions/has_hemispheres`, `summary()`; graceful degradation (None/empty) when no annotations exist; alias-tolerant column resolution.
- [x] `BiologicalBrain.metadata` property (lazy-loaded `NeuronMetadataStore` from the annotations attachment) with `_metadata_store` field.
- [x] Top-level re-exports of `NeuronMetadata` / `NeuronMetadataStore` (`core/__init__.py`, package `__init__.py`).
- [x] Test suite `tests/test_metadata.py` (16 tests) covering JSON + Feather paths, empty-store degradation, filtering, lazy loading.
