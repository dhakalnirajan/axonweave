# AxonWeave Implementation Checklist

Detailed status of every item in PLAN.md. Verbose, concrete, actionable.

**Status markers:**

- `[x]` Implemented and verified (locally or in CI as noted).
- `[~]` Partially implemented; remaining work specified inline.
- `[ ]` Not started.
- `[!]` Blocked or requires architectural decision.

---

# Phase 0 — Current State Audit and Release Baseline

## Repository / implementation audit

- [x] Audit every `[x]`/`[~]` item in PLAN.md against actual implementation.
- [x] Compare PLAN.md against CHECKLIST.md.
- [x] Separate items into: implemented, unit-tested, CI-tested, cross-backend verified, scientifically validated, benchmarked.
- [x] `docs/development/STATUS.md` created with three-state audit (IMPLEMENTED / CI-VERIFIED / SCIENTIFICALLY-VALIDATED).
- [x] Record current version (0.2.0) and release state.
- [x] Remove obsolete roadmap claims.
- [x] Identify experimental public APIs (signal_policy, disk_backed builder, native extension).
- [x] Identify APIs needing stabilization before v1.0 (BrainModel, runtime state model, encoder/decoder protocols).

---

# Phase 1 — Substrate Artifact and Provenance Completion

## `.awb` substrate format

- [~] Design versioned `.awb` format with manifest schema. (Implemented: `python/axonweave/data/awb.py`; ZIP with `manifest.json` + `graph.npz` + optional `annotations.json` + optional `source/`.)
- [x] Manifest includes: substrate ID, version, source release, source URLs, source checksums, graph fingerprint, schema version, neuron count, edge count, metadata provenance, AxonWeave builder version.
- [x] Store sparse graph representation (CSR) in `.awb`.
- [ ] Store body IDs in `.awb`. (Stored inside `graph.npz` payload; no separate member.)
- [x] Store required annotations in `.awb`. (Both `annotations.json` selection tables and `annotations.feather` neuron metadata are packed when present.)
- [ ] Store selection indexes in `.awb`. (Selection tables ride in `annotations.json`; dedicated binary indexes pending.)
- [x] Store biological metadata required by runtime in `.awb`. (`annotations.feather`, `neurotransmitters.feather`, `receptors.json`, `stats.feather` packed when present; each sha256-verified; restored into the cache on install and wired into `BiologicalBrain`.)
- [x] Avoid embedding multi-gigabyte upstream raw files. (Source files only retained when already cached; packing never downloads.)

## CLI

- [~] `axonweave substrate pack male-cns:v1.0` — pack substrate into a versioned `.awb` artifact. (Implemented over the installed cache entry.)
- [x] `axonweave substrate verify ./male-cns-v1.0.awb` — verify integrity and fingerprint (also accepts installed substrate names).
- [x] `axonweave substrate install-file ./male-cns-v1.0.awb` — install from local file (verify-then-activate; staged extraction; zip-slip guarded).
- [x] `axonweave substrate inspect ./male-cns-v1.0.awb` — display manifest metadata.

## Migration

- [x] Add substrate schema versioning (`schema_version` in the `.awb` manifest; `SUPPORTED_SCHEMA_VERSION = "1.0"`).
- [x] Add migration metadata for schema upgrades. (`SCHEMA_MIGRATIONS` registry + `register_migration` decorator in `data/awb.py`; applied chain recorded in manifest `migrations_applied` and announced via `AXW007` warning; 0.9→1.0 registered.)
- [x] Refuse unsupported schema versions with AXW error (`AXW003`, no silent reinterpretation).
- [x] Never silently reinterpret old substrate.

## CI hardening (2026-09-20)

- [x] Commit `docs-site/src/json-render/` sources (missing `json-render.css` broke the docs build).
- [x] Fix native↔NumPy equivalence dtype failures (scipy may hand back int32 CSR indices; `_calls` now casts any integer array to int64).
- [x] Align Rust `delay_ticks_from_ms` rounding with NumPy ties-to-even (`round_ties_even`). (Verified by CI — no local toolchain.)
- [x] Enable `abi3-py310` so the extension builds on Python 3.13/3.14 without `PYO3_USE_ABI3_FORWARD_COMPATIBILITY`. (Verified by CI.)
- [x] Remove workflow CodeQL job — repository uses GitHub default setup for code scanning (advanced config conflicts with it).

## Acceptance

- [x] Two independently built `.awb` artifacts from same official source produce identical graph fingerprints. (Unit-tested: `tests/test_awb.py::TestPack::test_two_independent_packs_identical_manifest`; MaleCNS-scale fixture pending.)

---

# Phase 2 — Native Streaming Builder Completion

## Native edge mapping

- [x] `_numpy_edge_lut_map` reference implementation.
- [ ] Rust `edge_lut_map` kernel.
- [ ] PyO3 dispatch for `edge_lut_map`.
- [ ] Equivalence test: Rust vs reference.

## Native body-ID scan

- [x] Python/reference design for body-ID scanning.
- [ ] Rust `scan_body_ids` kernel.
- [ ] PyO3 dispatch for `scan_body_ids`.
- [ ] Equivalence test: Rust vs reference.

## Native Arrow/IPC ingestion

- [ ] Introduce `arrow-rs` dependency.
- [ ] Stream record batches directly from Rust.
- [ ] Avoid materializing Python objects per batch.
- [ ] Preserve Python builder as fallback.

## Parallel CSR construction

- [ ] Rayon row-range partitioning.
- [ ] Per-shard CSR construction.
- [ ] Deterministic concatenation.
- [ ] Fingerprint equivalence after parallel build.

## Acceptance (MaleCNS-scale)

- [ ] Identical graph fingerprint vs sequential build.
- [ ] No unbounded Python edge structures.
- [ ] Measurable RSS behavior documented.
- [ ] Benchmarked speedup with artifacts.
- [ ] Python fallback remains available.

---

# Phase 3 — Biological Model Validation

## Dynamics

- [ ] Validate Rate dynamics: equation, parameters, units, numerical stability.
- [ ] Validate LIF dynamics: equation, parameters, units, timestep behavior, reset semantics.
- [ ] Validate AdaptiveLIF dynamics: equation, parameters, units, adaptation timescale.
- [ ] Validate deterministic trajectories across backends.
- [ ] Validate numerical stability at extreme parameter values.
- [ ] Document assumptions and limitations for each dynamics model.

## Receptors

- [ ] Validate AMPA receptor: equation, parameters, units, source, assumptions, limitations.
- [ ] Validate GABA receptor: equation, parameters, units, source, assumptions, limitations.
- [ ] Validate NMDA Mg block: equation, parameters, units, voltage dependence, source, assumptions, limitations.
- [ ] Validate dopamine receptor: equation, parameters, units, modulatory gain/sign, source, assumptions, limitations.
- [ ] Distinguish published neurotransmitter prediction from AxonWeave computational assumption in all docs.

## Delays

- [ ] Validate fixed delay: equation, ring-buffer semantics, boundary conditions.
- [ ] Validate uniform delay: distribution parameters, boundary conditions.
- [ ] Validate normal delay: distribution parameters, boundary conditions.
- [ ] Validate ring-buffer wraparound correctness.
- [ ] Document boundary conditions and edge cases.

## Neurotransmitters

- [ ] Validate vesicle release step.
- [ ] Validate release probability model.
- [ ] Validate current generation from neurotransmitter.
- [ ] Validate receptor interaction model.
- [ ] Explicitly distinguish prediction vs assumption in documentation.

## Plasticity

- [ ] Validate STDP: timing window, weight update rule, determinism.
- [ ] Validate Dopamine-STDP: three-factor behavior, eligibility traces, reward modulation.
- [ ] Validate deterministic replay under same seeds.
- [ ] Document assumptions about biological plausibility.

---

# Phase 4 — Temporal Runtime Stabilization

## Runtime contract

- [x] `runtime.step(x)` — single timestep forward.
- [x] `runtime.forward_sequence(x)` — full sequence forward.
- [x] `runtime.reset_state()` — reset all state to initial.
- [x] `runtime.get_state()` — snapshot current state.
- [x] `runtime.set_state(state)` — restore state snapshot.
- [x] `runtime.detach_state()` — detach state from computation graph.
- [ ] Semantics identical across all supported backends (NumPy, PyTorch, TensorFlow, JAX).

## State model

- [x] `NeuronState` defined with ownership, mutation, copying semantics.
- [x] `SynapticState` defined with ownership, mutation, copying semantics.
- [x] `PlasticityState` defined with ownership, mutation, copying semantics.
- [x] `RuntimeState` aggregate defined.
- [ ] Define exact serialization format for each state type.
- [ ] Define device movement semantics for each state type.
- [ ] Define dtype behavior for each state type.
- [ ] Define batching semantics for each state type.

## Sequence semantics

- [x] `forward_sequence(x)` equals sequential `step(x[t])` under deterministic conditions (Rate/LIF/AdaptiveLIF verified).
- [ ] Verify equivalence for all dynamics types including AdaptiveLIF with full state.

## State replay

- [x] `get_state()` → `step(x)` → `set_state(state)` → `step(x)` produces equivalent outputs.
- [ ] Verify replay equivalence for all dynamics types.

## State checkpointing

- [x] State-only checkpoint (`get_state()` / `set_state()`).
- [ ] Model + state checkpoint (parameters + state).
- [ ] Optimizer + state checkpoint (parameters + optimizer state + model state).
- [ ] Plasticity-state checkpoint (eligibility traces + weight state).

---

# Phase 5 — Connectome Runtime as the Central Abstraction

## Architecture

- [x] `ConnectomeGraph` — substrate graph representation.
- [x] `ConnectomeRuntime` — temporal computation engine.
- [x] `BrainModel` — task-level model facade.
- [x] Clarify responsibilities: ConnectomeLayer vs ConnectomeRuntime vs BrainModel vs Brain facade vs ConnectomeBlock.
- [ ] Document the layered architecture diagram (Substrate → Graph → Runtime → BrainModel).

## Primary conceptual API

- [x] `brain = axonweave.load("male-cns:v1.0")` — load substrate.
- [x] `model = BrainModel(brain=brain, encoder=..., dynamics=..., readout=...)` — construct task model.
- [ ] Lower-level APIs remain available and documented.

---

# Phase 6 — Input Projection Architecture

- [ ] Define `InputProjection` base protocol/interface.
- [ ] Implement `DenseProjection` — full matrix mapping from input to neurons.
- [ ] Implement `SparseProjection` — sparse matrix mapping from input to neurons.
- [ ] Implement `SelectedNeuronProjection` — map input to specific neuron subset.
- [ ] Implement `BiologicalRegionProjection` — map input to biological region.
- [ ] Implement `UserDefinedProjection` — arbitrary user-specified mapping.
- [ ] Projections must be separate from biological substrate.
- [ ] Do not modify source connectome to accommodate task input.
- [ ] Integration with `BrainModel` constructor.
- [ ] Documentation page for input projections.

---

# Phase 7 — Output / Readout Architecture

- [x] `ClassificationReadout` with `n_source` dimension guards.
- [x] `RegressionReadout` with `n_source` dimension guards.
- [x] `TokenReadout` with `n_source` dimension guards.
- [x] `ActionReadout` with `n_source` dimension guards (discrete/continuous).
- [ ] Stabilize readout protocol: source neurons, input dimension, output dimension, aggregation, trainable parameters, device, dtype.
- [ ] Add sequence readout (temporal pooling).
- [ ] Add spike-count readout.
- [ ] Add membrane-potential readout.
- [ ] Add population readout.
- [ ] Readout documentation with protocol specification.

---

# Phase 8 — Encoder Architecture

- [x] `VectorEncoder` — dense vector input encoding.
- [x] `TimeSeriesEncoder` — windowed time-series encoding.
- [x] `ImageEncoder` — image input encoding.
- [x] `TokenEncoder` — discrete token input encoding.
- [x] `SensorEncoder` — sensor data encoding.
- [ ] Stabilize encoder protocol: `input_shape`, `output_size`, `dtype`, `device`.
- [ ] Add `VideoEncoder` — video frame sequence encoding.
- [ ] Add `ObservationEncoder` — generic observation encoding.
- [ ] Add `EventEncoder` — event-driven input encoding.
- [ ] Document custom encoder protocol.
- [ ] Do not embed datasets or tokenizers in AxonWeave.

---

# Phase 9 — Time-Series Computing

- [x] Time-series end-to-end example (`examples/time_series_forecasting.py`).
- [x] TimeSeriesEncoder → recurrent connectome → RegressionReadout pipeline.
- [x] Baseline comparison: MLP, RNN, LSTM, GRU (not ranking, descriptive).
- [x] Metrics: loss, parameter count, runtime, memory, training steps.
- [ ] Sequence-to-one API.
- [ ] Sequence-to-sequence API.
- [ ] Forecasting API.
- [ ] Anomaly detection example.
- [ ] Multivariate forecasting benchmark.
- [ ] BPTT through recurrent connectome for time-series.

---

# Phase 10 — Next-Token / Sequence Modeling

- [ ] Token sequence batching support.
- [ ] Autoregressive stepping.
- [ ] Stateful inference.
- [ ] Teacher forcing.
- [ ] Truncated BPTT.
- [ ] Token prediction example.
- [ ] Small benchmark dataset.
- [ ] Perplexity metric.
- [ ] Do not implement tokenizer ecosystem inside AxonWeave.
- [ ] Document external tokenizer integration (BPE, SentencePiece, WordPiece, character, custom).

---

# Phase 11 — Vision and Temporal Vision

- [ ] Image classification example.
- [ ] Temporal image sequence processing.
- [ ] Video encoder interface.
- [ ] Frame-by-frame recurrent inference.
- [ ] Sequence classification.
- [ ] Document architecture: frame_t → ImageEncoder → connectome state → readout.

---

# Phase 12 — Environment / Agent Runtime

- [x] `Agent` abstraction with encode → dynamics → decode → action → env → reward → plasticity loop.
- [x] `reset()`, `step()`, `run()` methods.
- [ ] Stabilize Agent interface without requiring Gymnasium as hard dependency.
- [ ] Optional Gymnasium integration.
- [ ] Document Agent protocol and extension points.

---

# Phase 13 — Reinforcement Learning

- [ ] Readout-only RL: frozen brain + trainable action head.
- [ ] Gradient-based RL: trainable model + external policy gradient/actor-critic.
- [ ] Plastic connectome: STDP + reward modulation.
- [ ] Hybrid: gradient + plasticity.
- [ ] Learning rule must remain explicit (not hidden).
- [ ] Do not embed specific RL framework.

---

# Phase 14 — Game / Robotics Compatibility

- [ ] Do not put Doom/Mario/Minecraft/MuJoCo code in core package.
- [ ] Stable integration interfaces: game observation → ObservationEncoder → BrainModel → ActionDecoder → environment.
- [ ] One small reference environment (CartPole or tiny custom).
- [ ] Establish architecture for external projects.

---

# Phase 15 — Subnetwork and Region Computing

- [x] `brain.neurons.by_region(...)` — region-based selection.
- [x] `brain.neurons.by_type(...)` — type-based selection.
- [x] `brain.neurons.ids(...)` — ID-based selection.
- [x] `brain.neurons.by_mask(...)` — mask-based selection.
- [x] Selection wired into `ConnectomeLayer` backends (`selection=` parameter).
- [ ] Selection intersection, union, exclusion operations.
- [ ] Named selection persistence.
- [ ] Selection serialization (save/load).
- [ ] `BrainModel(brain=brain, selection=visual, ...)` integration.

---

# Phase 16 — Ablation and Scientific Experiments

- [ ] Remove selected neurons operation.
- [ ] Silence selected neurons operation.
- [ ] Freeze selected edges operation.
- [ ] Scale selected edges operation.
- [ ] Randomize selected weights operation.
- [ ] Block selected neurotransmitters operation.
- [ ] Disable selected receptor classes operation.
- [ ] All operations on derived model configuration (never mutate source substrate).
- [ ] `brain.experiment(ablation=...)` interface.

---

# Phase 17 — Memory-Budgeted Execution

- [x] `brain.memory_estimate(dtype, state)` implemented.
- [ ] `runtime.memory_requirements(...)` — detailed breakdown: state, weights, delays, receptors, plasticity, temporary buffers.
- [ ] Memory-aware modes: full state, selected-subnetwork, reduced precision, inference-only, frozen-weight.
- [ ] Clear error when requested configuration exceeds device memory.
- [ ] Do not silently fall back to CPU.

---

# Phase 18 — Sparse Runtime Performance

- [ ] Benchmark: one timestep, 10, 100, 1000 timesteps.
- [ ] Benchmark: batch 1, 8, 32.
- [ ] Benchmark: selected subnetworks, trainable weights, plasticity, delays.
- [ ] Compare: NumPy, PyTorch CPU, PyTorch accelerator, TensorFlow CPU, TensorFlow accelerator, JAX, Rust/native.
- [ ] Track: latency, throughput, memory, peak RSS, allocation count.
- [ ] Benchmark artifacts with hardware/software context.

---

# Phase 19 — Backend Completion

## NumPy/SciPy

- [x] Reference implementation complete.
- [x] Runtime with step/forward_sequence/reset_state/get_state/set_state.
- [x] Sequence semantics verified.

## PyTorch

- [x] ConnectomeLayer (trainable edges, gain, bias).
- [x] BrainModel with temporal API.
- [x] Surrogate gradients / BPTT.
- [ ] Accelerator CI verification (CUDA/MPS).

## TensorFlow/Keras

- [x] ConnectomeLayer.
- [x] BrainLayer high-level adapter (Keras serialization).
- [ ] Temporal high-level verification.
- [ ] Accelerator CI verification.

## JAX

- [x] ConnectomeLayer with BCOO sparse support.
- [x] BrainModel, ConnectomeBlock, Input, Readout.
- [x] resolve_dynamics.
- [ ] CI numerical verification.
- [ ] Stateful runtime on JAX.
- [ ] Device verification (GPU/TPU).

---

# Phase 20 — Device Capability Certification

- [ ] Capability model: backend × device × operation → supported (boolean).
- [ ] Operations: sparse propagation, dense projection, dynamics, delay, receptor, plasticity, readout, BPTT.
- [ ] Device matrix: CPU, CUDA, MPS, XPU, TPU.
- [ ] Only mark combination verified after CI execution.
- [ ] Report capability matrix in documentation.

---

# Phase 21 — Mixed Precision

- [ ] Define explicit precision policy.
- [ ] Support: float64, float32, float16, bfloat16 (where validated).
- [ ] Specify minimum precision for: dynamics, receptors, delays, plasticity, graph weights.
- [ ] Do not automatically reduce scientific simulation precision.

---

# Phase 22 — Distributed Execution

[!] Blocked until temporal runtime stable, benchmark suite established, memory requirements understood, device capability matrix established.

- [ ] Graph partitioning.
- [ ] Cross-partition edges.
- [ ] State ownership.
- [ ] Communication layer.
- [ ] Delayed propagation across partitions.
- [ ] Distributed checkpoints.
- [ ] Rust may provide graph partitioning primitives.
- [ ] Do not implement second tensor framework.

---

# Phase 23 — API Reference

- [ ] Generate API docs from Python docstrings, type annotations, public exports.
- [ ] Every public object documents: purpose, parameters, returns, raises, shape, dtype, device, state behavior, scientific assumptions, example.

---

# Phase 24 — Documentation Platform Rebuild

## Documentation Content & UX

- [x] Status definitions page (Stable/Experimental/Planned/Deprecated).
- [ ] Content consolidation: merge redundant installation guides.
- [x] Add Changelog, Migration Guide, Benchmarks, Glossary pages. (All four present: Changelog, `docs/benchmarks.md` graph-build benchmark documentation, Migration Guide, Glossary.)
- [ ] Stub cleanup: flesh out or remove stub files.
- [ ] Playground docs expanded with LIF equations, graph model details, accessibility text.

## Content Provenance & Timestamps

- [ ] Every page displays `Last Updated: YYYY-MM-DD` from Git commit.
- [ ] Changelog linking: timestamps link to release entries.
- [ ] Stale content warning for pages >6 months old.

## Frontend Architecture (COMPLETED)

- [x] Markdown rendering from `.md` source files.
- [x] Sidebar navigation.
- [x] Search foundation (Cmd+K).
- [x] Theme foundation (dark/light).
- [x] Copyable code blocks.
- [x] Table of contents (right column).
- [x] Legal pages (Privacy, Terms, Cookie Consent).
- [x] SEO foundation (meta tags, sitemap, Open Graph).

## Rebuild (COMPLETED)

- [x] Design-token system (`tokens.css`, `DESIGN.md`, `designmd lint`).
- [x] Modular CSS architecture (`tokens.css`, `global.css`, `docs.css`, `playground.css`).
- [x] Dedicated Playground stylesheet.
- [x] Documentation component system (React + Markdown).
- [x] Responsive documentation shell.
- [x] Mobile navigation (hamburger menu, overlay sidebar).
- [x] Accessible focus/keyboard states.
- [x] Error boundaries.
- [x] Lazy-loaded Playground.
- [x] Route architecture cleanup.
- [x] GitHub Pages deep-link handling (404.html fallback for SPA routes).
- [x] Direct `/playground` loading.
- [x] Browser refresh on nested routes.

---

# Phase 25 — Playground Reconstruction

## Layout (COMPLETED)

- [x] TopBar: logo, presets, run/pause/step/reset buttons, share button.
- [x] Left panel: parameter controls (network, dynamics, input, simulation).
- [x] Center: network visualization (Canvas) + raster/voltage/input plots.
- [x] Right panel: metrics grid + code panel (generated AxonWeave Python).
- [x] Explanation panel below visualization.
- [x] Three-column responsive layout.

---

# Phase 26 — Playground Architecture

- [x] Monolithic Playground component broken into modules.
- [x] `Playground.tsx` — top-level orchestrator.
- [x] `Controls.tsx` — parameter panel with sliders/selects.
- [x] `Visualization.tsx` — canvas + plots.
- [x] `StatsCode.tsx` — metrics grid + code panel.
- [x] `TopBar.tsx` — toolbar with presets and controls.
- [x] `simulation.ts` — simulation engine (RNG, dynamics, network).
- [x] `useSimulation.ts` — React hook for simulation lifecycle.
- [x] `codegen.ts` — Python code generation.
- [x] `presets.ts` — preset configurations (LIF, Rate, Adaptive, Delay, STDP, Small).
- [x] `types.ts` — TypeScript type definitions.
- [x] `urlSync.ts` — URL state synchronization.
- [x] `rng.ts` — seeded random number generator.
- [x] `drawing.ts` — Canvas rendering utilities.
- [x] `canvas.ts` — Canvas setup and DPR handling.
- [x] Component size: no component exceeds 300 lines.

---

# Phase 27 — Playground CSS

- [x] Dedicated `playground.css` stylesheet.
- [x] No mixing with documentation article styles.
- [x] Desktop layout (three-column).
- [x] Tablet layout (960px breakpoint: stacked panels).
- [x] Mobile layout (600px breakpoint: single-column, stacked viz).
- [x] Dark theme from design tokens.
- [x] Light theme support.
- [x] All React classes have corresponding CSS rules.
- [x] CSS is readable and unminified.

---

# Phase 28 — Playground Interactivity

- [x] Run — start simulation loop.
- [x] Pause — freeze simulation.
- [x] Step — advance one timestep.
- [x] Reset — return to initial state.
- [x] Presets — LIF, Rate, Adaptive, Delay, STDP, Small.
- [x] Exact numeric inputs for parameters.
- [x] Sliders for parameter adjustment.
- [x] Neuron hover — highlight on mouseover.
- [x] Neuron selection — double-click to select.
- [x] Edge highlighting — show connections of selected neuron.
- [x] Neuron inspector — show neuron details in DOM.
- [x] Pan — shift+click drag.
- [x] Zoom — mouse wheel.
- [x] Fit graph — auto-fit button.
- [ ] Raster interaction — click to inspect spike train.
- [ ] Voltage trace selection — click to select neuron trace.
- [ ] Fullscreen mode.
- [ ] Theme toggle (dark/light).
- [x] Copy code — copy generated Python to clipboard.
- [x] Share configuration — URL state sync.

---

# Phase 29 — Playground Scientific Integrity

- [x] Browser states clearly: "DEMO SUBSTRATE — Not MaleCNS v1.0".
- [x] Explanation panel states: "This is a browser-based educational simulation. It uses a synthetic/small graph. It does not execute the full MaleCNS v1.0 substrate."
- [x] Generated Python code corresponds to real AxonWeave APIs.
- [x] No fictional APIs displayed.

---

# Phase 30 — Playground State Model

- [x] `PlaygroundConfig` type defined (network, dynamics, input, simulation, seed).
- [x] `SimulationState` type defined (time, neurons, spikes, metrics).
- [x] `PlaygroundUIState` type defined (selected neuron, fullscreen, active panel).
- [x] State separated: config vs simulation vs UI.

---

# Phase 31 — Shareable Playground Configuration

- [x] `/playground?...configuration...` URL format.
- [x] URL reproduces configuration (not simulation history).
- [x] Share button copies URL to clipboard.
- [x] Configuration encoded in URL search params.

---

# Phase 32 — Documentation ↔ Playground Integration

- [ ] Documentation concepts link to relevant Playground presets.
- [ ] LIF page → "Try LIF" preset link.
- [ ] Synaptic propagation page → "Explore propagation" preset.
- [ ] Delays page → "Explore delays" preset.
- [ ] STDP page → "Explore plasticity" preset.
- [ ] Temporal state page → "Explore recurrent dynamics" preset.
- [ ] Never link to generic Playground when relevant preset exists.

---

# Phase 33 — Interactive Scientific Documentation

- [ ] LIF interactive demo.
- [ ] Synaptic propagation interactive demo.
- [ ] Delays interactive demo.
- [ ] Recurrent state interactive demo.
- [ ] STDP interactive demo.
- [ ] Encoders/readouts interactive demo.
- [ ] Connectome selection interactive demo.
- [ ] No decorative animations.

---

# Phase 34 — Web Performance

- [x] Lazy-loaded Playground (dynamic import).
- [x] Simulation engine separate from React (no rerender per timestep).
- [x] `requestAnimationFrame` for canvas rendering.
- [x] Throttled metrics updates.
- [x] DPR-aware Canvas rendering.
- [ ] Lazy-load heavy visualization code.
- [ ] Use refs for mutable high-frequency state (verify).
- [ ] Avoid React rerender per simulation timestep (verify).

---

# Phase 35 — Accessibility

- [ ] All interactive controls support keyboard operation.
- [ ] Visible focus states on all controls.
- [ ] ARIA labels on interactive elements.
- [ ] Semantic buttons (not div with onClick).
- [ ] Keyboard navigation in Playground.
- [ ] Accessible dialogs and dropdowns.
- [ ] Canvas is not the only source of scientific information.
- [ ] Selected neuron info available in normal DOM.

---

# Phase 36 — Web Testing

## Unit/component tests

- [x] Simulation engine tests (`tests/simulation.test.ts`).
- [ ] LIF dynamics tests.
- [ ] Seeded determinism tests.
- [ ] Configuration serialization tests.
- [ ] URL encoding tests.
- [ ] Code generation tests.
- [ ] Controls interaction tests.
- [ ] Selection behavior tests.
- [ ] Theme switching tests.

## E2E tests (Playwright)

- [ ] Homepage loads.
- [ ] Documentation route loads.
- [ ] Playground loads.
- [ ] Run/Pause/Step/Reset work.
- [ ] Preset switching works.
- [ ] Theme toggle works.
- [ ] Search works.
- [ ] Direct `/playground` loads.
- [ ] Browser refresh on nested route works.
- [ ] Mobile viewport layout works.

---

# Phase 37 — Visual Regression

- [ ] Screenshot: homepage light.
- [ ] Screenshot: homepage dark.
- [ ] Screenshot: documentation light.
- [ ] Screenshot: documentation dark.
- [ ] Screenshot: playground light.
- [ ] Screenshot: playground dark.
- [ ] Screenshot: playground mobile.
- [ ] Screenshot: playground tablet.
- [ ] Visual regression in CI.

---

# Phase 38 — GitHub Pages Deployment

- [x] `/axonweave/` direct navigation works.
- [x] `/axonweave/playground` direct navigation works.
- [x] Initial load works.
- [x] Deep link works.
- [x] Refresh works.
- [x] Back/forward navigation works.
- [x] 404 fallback returns 200 OK for SPA routes.
- [x] Base URL `/axonweave/` correct.
- [ ] Verify deployed URLs actually work (not just build succeeds).

---

# Phase 39 — Documentation Versions

- [ ] Stable docs from actual project version.
- [ ] Version metadata in documentation.
- [ ] Nightly/development docs (optional).
- [ ] Version-specific API links.
- [ ] Versioned API references for every minor version.
- [ ] Do not overwrite old API docs on new release.
- [ ] Version Switcher component preserving page context.
- [ ] Outdated version warning banner.
- [ ] Deprecation policy: minor releases may not remove public APIs.
- [ ] Deprecation policy: major releases may remove with migration guide.
- [ ] Version freeze dates displayed.
- [ ] API validity periods documented.
- [ ] Snapshot immutability after build.

---

# Phase 40 — Scientific Reproducibility

- [ ] `reproducibility/` directory: fixtures, configs, scripts, reports, benchmarks.
- [ ] Every major example has: configuration, seed, substrate fingerprint, model fingerprint, environment metadata, results.

---

# Phase 41 — Benchmark Report

- [ ] Graph construction benchmarks.
- [ ] Substrate loading benchmarks.
- [ ] Single timestep benchmarks.
- [ ] Sequence execution benchmarks.
- [ ] BPTT benchmarks.
- [ ] Plasticity benchmarks.
- [ ] Delay benchmarks.
- [ ] Memory benchmarks.
- [ ] Backend comparison benchmarks.
- [ ] Include: hardware, software versions, dtype, device, batch size, sequence length, substrate.
- [ ] Never publish performance numbers without context.

---

# Phase 42 — Biological Limitations Report

- [ ] Document: What MaleCNS provides.
- [ ] Document: What AxonWeave adds.
- [ ] Document: What AxonWeave assumes.
- [ ] Document: What AxonWeave does not simulate.
- [ ] Document: What remains unknown.
- [ ] Discuss: neurotransmitter prediction, receptor assignment, neuron dynamics, synaptic delays, plasticity, neuromodulation, missing biophysical parameters, abstraction choices.

---

# Phase 43 — Interoperability

- [ ] neuprint target export.
- [ ] navis target export.
- [ ] Import/export examples.
- [ ] body-ID round-trip tests.
- [ ] Neuron-selection interoperability.
- [ ] Graph conversion documentation.

---

# Phase 44 — Scientific Experiment Framework

- [x] `brain.task(...)` — supervised task construction.
- [x] `brain.agent(...)` — environment/closed-loop construction.
- [x] `brain.simulate(...)` — low-level simulation.
- [x] `brain.experiment(...)` — reproducible scientific experiment.
- [ ] Document responsibilities clearly (no competing model APIs).

---

# Phase 45 — API Stability

- [ ] Classify every public API: stable, experimental, deprecated, internal.
- [ ] Public imports explicit with `__all__`.
- [ ] `__version_added__` and optional `__version_deprecated__` on public classes/functions.
- [ ] `warnings.warn()` with `DeprecationWarning` for deprecated APIs.
- [ ] `DEPRECATIONS.md` file listing removed APIs, replacements, migration snippets.
- [ ] Semantic versioning: patch (bug fixes), minor (new features, backward-compatible), major (breaking changes).

---

# Phase 46 — Error System

- [x] AXW001 — substrate unavailable.
- [x] AXW002 — substrate mismatch/integrity.
- [x] AXW003 — schema error.
- [x] AXW004 — unsupported device.
- [x] AXW005 — biological-model configuration.
- [x] AXW006 — backend unavailable.
- [x] AXW007 — scientific-honesty warning (signal_policy).
- [x] AXW010 — API/selection misuse.
- [ ] Every user-facing error contains: what failed, why, how to fix it.

---

# Phase 47 — Security / Integrity

- [ ] Substrate installation verifies source metadata.
- [ ] Substrate installation verifies checksums.
- [ ] Substrate installation validates schema.
- [ ] Substrate installation validates graph.
- [ ] Substrate installation validates fingerprint.
- [ ] Atomically activate verified substrate.
- [ ] Protect against partial installation.
- [ ] Protect against incompatible replacement.
- [ ] Downloaded data never executed as code.

---

# Phase 48 — Release Engineering

- [ ] PyPI trusted publishing verified.
- [ ] Test release performed.
- [ ] Published wheel installation tested.
- [ ] Native extension verification.
- [ ] Substrate installation from clean environment.
- [ ] Documentation deployment verified.
- [ ] Examples run successfully.
- [ ] Release checksum generated.
- [ ] Release provenance recorded.

---

# Phase 49 — v1.0 Scientific Release Gate

## Core

- [ ] Stable substrate format.
- [ ] Stable temporal runtime.
- [ ] Stable BrainModel.
- [ ] Stable encoder protocol.
- [ ] Stable readout protocol.
- [ ] Stable state/checkpoint semantics.

## Biology

- [ ] Scientific validation fixtures.
- [ ] Documented assumptions.
- [ ] Limitations report.
- [ ] Reproducibility report.

## Frameworks

- [ ] NumPy verified.
- [ ] PyTorch verified.
- [ ] TensorFlow verified.
- [ ] JAX verified.

## Native

- [ ] Rust/native equivalence.
- [ ] Wheel verification.
- [ ] Streaming builder.
- [ ] Benchmark report.

## Web

- [ ] Documentation deployment verified.
- [ ] `/playground` direct navigation works (200 OK).
- [ ] Responsive Playground.
- [ ] Interactive Playground.
- [ ] E2E tests.
- [ ] Visual regression.
- [ ] Generated API reference.

## Distribution

- [ ] PyPI release.
- [ ] `.awb` substrate release.
- [ ] Reproducibility metadata.
- [ ] Versioned documentation.

## API & Versioning

- [ ] Versioned documentation archive exists.
- [ ] API reference for v1.0 distinct from v0.x.
- [ ] Deprecation warnings functional and tested.
- [ ] Migration guide from v0.2 to v1.0 complete.

## Content Integrity

- [ ] Every page displays Git-derived "Last Updated" date.
- [ ] Versioned docs display official Release Date.
- [ ] Stale content warnings functional for pages >6 months.
- [ ] API references include validity ranges (Added/Deprecated/Removed).

---

# Phase 50 — Post-v1.0 Research Roadmap

[!] Only after v1.0 release.

- [ ] Richer neuron models.
- [ ] Compartmental approximations.
- [ ] Heterogeneous synaptic models.
- [ ] Neuromodulatory networks.
- [ ] Biochemical state models.
- [ ] Distributed connectome execution.
- [ ] Graph partitioning.
- [ ] Multi-device state.
- [ ] WebGPU/WebAssembly browser runtime.
- [ ] Additional local plasticity rules.
- [ ] Meta-plasticity.
- [ ] Reward-modulated learning.
- [ ] Hybrid gradient/local learning.
- [ ] Evolutionary optimization.
- [ ] Connectome visualization.
- [ ] Ablation studies.
- [ ] Region comparison.
- [ ] Activity replay.
- [ ] Experiment registry.
- [ ] Model comparison framework.

---

# Phase 51 — Legal & Licensing Clarity

- [ ] Code License: MIT or Apache 2.0.
- [ ] Data License: defined for `.awb` substrates (CC-BY-NC or institutional).
- [ ] Docs License: CC-BY for documentation and educational content.
- [ ] `LICENSE.md` distinguishing code, data, and documentation rights.
- [ ] Third-party dependency compatibility verified.
- [ ] "Legal" section in documentation.

---

# Phase 52 — Community Governance & Contribution

- [ ] `GOVERNANCE.md`: merge rights, RFC processes, conflict resolution.
- [ ] Code of Conduct.
- [ ] Expanded `contributing.md`: propose biological models, report inaccuracies, style guides.

---

# Phase 53 — Operational Resilience & Backup

- [ ] `DISASTER_RECOVERY.md` plan.
- [ ] Substrate backups mirrored to secondary location.
- [ ] Documentation archives preserved.

---

# Phase 54 — Academic & Community Infrastructure

- [ ] `CITATION.cff` standard citation file.
- [ ] "How to Cite" section with BibTeX and APA.
- [ ] i18n architecture for multiple languages.
- [ ] Nepali localization of key content.

---

# Currently Completed (CI-verified pending items)

The following are implemented with tests authored but **not executed locally** (no torch/tensorflow/Rust toolchain in PATH). GitHub Actions is the authoritative validation:

- [ ] Rust/PyO3 kernels: graph, dynamics, surrogate, learning, signals, receptors, delays, encoders, decoders, readout, provisioning.
- [ ] Native⇄NumPy equivalence suite on built wheel.
- [ ] PyTorch ConnectomeLayer test suite.
- [ ] TensorFlow/Keras ConnectomeLayer test suite.
- [ ] Cross-backend equivalence tests (torch/tensorflow).
- [ ] Torch BrainModel, ConnectomeBlock fit/composition/training-mode tests.
- [ ] `brain.task` happy path and `brain.layer` alias (torch-dependent).
- [ ] Keras BrainLayer, KerasConnectomeBlock, `brain.keras_task(...)` tests.
- [ ] JAX adapter: ConnectomeLayer, BrainModel, ConnectomeBlock, Input, Readout, resolve_dynamics (22 tests).
- [ ] Rust/PyO3 build and tests on CI runners.
- [ ] Wheel builds across OS × Python matrix.
- [ ] Surrogate-gradient training through spiking dynamics.
