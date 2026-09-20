# AxonWeave Development Plan until v1.0.0

**Status markers:**

- `[x]` implemented and verified
- `[~]` implemented/partially implemented; verification or completion remains
- `[ ]` not started
- `[!]` blocked or requires architectural decision

This plan supersedes the previous roadmap after Temporal Runtime Alpha.

The objective is no longer to add isolated connectome features. The objective is to turn the existing substrate, biological-model, temporal-runtime, framework, native, and documentation foundations into a coherent AxonWeave platform suitable for scientific experimentation and practical model construction.

----------

# Phase 0 — Current State Audit and Release Baseline

The current implementation has reached a significantly more complete state than the original Phase 0–6 roadmap assumed.

Before adding new capabilities, establish a verified baseline.

## Repository / implementation audit

- Audit every item currently marked `[x]` or `[~]` in `PLAN.md` against the actual implementation.
- Compare `PLAN.md` against `CHECKLIST.md`.
- Separate:
  - implemented
  - unit-tested
  - CI-tested
  - cross-backend verified
  - scientifically validated
  - benchmarked
- Create `docs/development/status.md`.
- Record the exact current version and release state.
- Remove obsolete roadmap claims.
- Identify public APIs that are currently experimental.
- Identify APIs that need stabilization before v1.0.

## Important rule

Do not mark a feature `[x]` merely because source code exists.

A feature is `[x]` only when the repository's defined verification requirement has been satisfied.

----------

# Phase 1 — Substrate Artifact and Provenance Completion

The current provisioning architecture is substantially implemented.

The remaining objective is to make the biological substrate itself a first-class, reproducible AxonWeave artifact.

## `.awb` substrate format

- Design versioned `.awb` format.
- Define manifest schema.
- Include:
  - substrate ID
  - substrate version
  - source release
  - source URLs
  - source checksums
  - graph fingerprint
  - schema version
  - neuron count
  - edge count
  - metadata provenance
  - AxonWeave builder version
- Store sparse graph representation.
- Store body IDs.
- Store required annotations.
- Store selection indexes.
- Store biological metadata required by the runtime.
- Avoid embedding unnecessary multi-gigabyte upstream raw files.

## CLI

Implement:

```bash
axonweave substrate pack male-cns:v1.0
axonweave substrate verify ./male-cns-v1.0.awb
axonweave substrate install ./male-cns-v1.0.awb
axonweave substrate inspect ./male-cns-v1.0.awb
```

## Migration

- Add substrate schema versions.
- Add migration metadata.
- Refuse unsupported schema versions.
- Never silently reinterpret an old substrate.

## Acceptance criterion

Two independently built `.awb` artifacts from the same official source release must produce identical graph fingerprints.

----------

# Phase 2 — Native Streaming Builder Completion

The existing Python disk-backed builder is the correctness reference.

The Rust roadmap should now be completed incrementally.

## Native edge mapping

- `_numpy_edge_lut_map` reference.
- Rust `edge_lut_map`.
- PyO3 dispatch.
- Equivalence tests.

## Native body-ID scan

- Python/reference design.
- Rust `scan_body_ids`.
- PyO3 dispatch.
- Equivalence tests.

## Native Arrow/IPC ingestion

- Introduce `arrow-rs`.
- Stream record batches directly from Rust.
- Avoid materializing Python objects for each batch.
- Preserve existing Python builder as fallback.

## Parallel CSR construction

- Rayon row-range partitioning.
- Per-shard CSR construction.
- Deterministic concatenation.
- Fingerprint equivalence.

## Acceptance

For MaleCNS-scale connectivity:

- identical graph fingerprint
- no unbounded Python edge structures
- measurable RSS behavior
- benchmarked speedup
- Python fallback remains available

Do not claim a speedup until benchmark artifacts exist.

----------

# Phase 3 — Biological Model Validation

The biological-model implementation exists. The next requirement is scientific validation.

## Dynamics

Validate:

- Rate
- LIF
- Adaptive LIF
- deterministic trajectories
- numerical stability
- timestep behavior
- reset semantics

## Receptors

Validate:

- AMPA
- GABA
- NMDA Mg block
- dopamine

For every receptor model document:

```text
equation
parameters
units
source
assumptions
limitations
```

## Delays

Validate:

- fixed delay
- uniform delay
- normal delay
- ring-buffer semantics
- boundary conditions

## Neurotransmitters

Validate:

- vesicle release
- release probability
- current generation
- receptor interaction

Explicitly distinguish:

```text
published neurotransmitter prediction
```

from:

```text
AxonWeave computational sign/dynamics assumption
```

## Plasticity

Validate:

- STDP
- Dopamine-STDP
- three-factor behavior
- eligibility traces
- reward modulation
- deterministic replay

----------

# Phase 4 — Temporal Runtime Stabilization

Temporal Runtime Alpha exists.

The next task is to make it a stable public abstraction.

## Runtime contract

Stabilize:

```python
runtime.step(x)
runtime.forward_sequence(x)
runtime.reset_state()
runtime.get_state()
runtime.set_state(state)
runtime.detach_state()
```

The semantics must be identical across supported backends.

## State model

Stabilize:

```text
NeuronState
SynapticState
PlasticityState
RuntimeState
```

Define exactly:

- ownership
- mutation
- copying
- serialization
- device movement
- dtype behavior
- batching

## Sequence semantics

Verify:

```text
forward_sequence(x)
```

equals:

```text
reset_state()

for t:
    step(x[t])
```

under deterministic conditions.

## State replay

Verify:

```python
state = model.get_state()

a = model.step(x)

model.set_state(state)

b = model.step(x)
```

produces equivalent `a` and `b`.

## State checkpointing

Add:

- state-only checkpoint
- model + state checkpoint
- optimizer + state checkpoint
- plasticity-state checkpoint

----------

# Phase 5 — Connectome Runtime as the Central Abstraction

The repository currently has multiple overlapping concepts:

```text
ConnectomeLayer
ConnectomeRuntime
BrainModel
Brain facade
ConnectomeBlock
```

Before v1.0, define their exact responsibilities.

Target architecture:

```text
Biological Substrate
        │
        ▼
ConnectomeGraph
        │
        ▼
ConnectomeRuntime
        │
        ├── signals
        ├── receptors
        ├── delays
        ├── dynamics
        ├── state
        └── plasticity
        │
        ▼
BrainModel
        │
        ├── Encoder
        ├── ConnectomeRuntime
        └── Readout
```

## Required outcome

The user should not have to understand internal implementation layers to build a model.

The primary conceptual API becomes:

```python
brain = axonweave.load("male-cns:v1.0")

model = axonweave.torch.BrainModel(
    brain=brain,
    encoder=...,
    dynamics=...,
    readout=...,
)
```

while lower-level APIs remain available.

----------

# Phase 6 — Input Projection Architecture

This is now one of the most important missing pieces.

A complete connectome contains approximately the entire neural substrate, but arbitrary ML inputs do not naturally have one feature per neuron.

Therefore AxonWeave needs explicit input projection mechanisms.

Introduce:

```text
InputProjection
```

with implementations such as:

- DenseProjection
- SparseProjection
- SelectedNeuronProjection
- BiologicalRegionProjection
- UserDefinedProjection

Example:

```python
model = BrainModel(
    brain=brain,
    input_projection=InputProjection(...),
    encoder=...,
    dynamics=...,
    readout=...,
)
```

The projection must be separate from the biological substrate.

Do not modify the source connectome to accommodate task input.

----------

# Phase 7 — Output / Readout Architecture

Stabilize the existing:

```text
ClassificationReadout
RegressionReadout
TokenReadout
ActionReadout
```

and define the general protocol.

A readout must specify:

```text
source neurons
input dimension
output dimension
aggregation
trainable parameters
device
dtype
```

Support:

- classification
- regression
- token prediction
- action prediction
- sequence readout
- temporal pooling
- spike-count readout
- membrane-potential readout
- population readout

----------

# Phase 8 — Encoder Architecture

Stabilize:

```text
VectorEncoder
TimeSeriesEncoder
ImageEncoder
TokenEncoder
SensorEncoder
```

The encoder must be independent of the connectome.

Required interface:

```python
encoder(x)
```

with declared:

```text
input shape
output shape
dtype
device
```

Add:

- VideoEncoder
- ObservationEncoder
- EventEncoder
- Custom encoder protocol documentation

Do not embed datasets or tokenizers in AxonWeave.

----------

# Phase 9 — Time-Series Computing

This should become the first major end-to-end application.

Support:

```text
sequence → encoder → recurrent connectome → readout
```

Input:

```text
[B, T, F]
```

Output:

```text
[B, O]
```

or:

```text
[B, T, O]
```

Support:

- time-series example
- recurrent state
- BPTT
- sequence-to-one API
- sequence-to-sequence API
- forecasting API
- anomaly detection example
- multivariate forecasting benchmark

Benchmark against:

```text
MLP
RNN
GRU
LSTM
```

Do not present the comparison as a ranking.

Report:

```text
loss
parameter count
runtime
memory
training steps
```

----------

# Phase 10 — Next-Token / Sequence Modeling

The connectome must be usable as a recurrent sequence substrate.

Target:

```text
token
 ↓
TokenEncoder
 ↓
connectome state transition
 ↓
TokenReadout
 ↓
logits
```

Implement:

- token sequence batching
- autoregressive stepping
- stateful inference
- teacher forcing
- truncated BPTT
- token prediction example
- small benchmark dataset
- perplexity metric

Do not implement a tokenizer ecosystem inside AxonWeave.

Users may supply:

```text
BPE
SentencePiece
WordPiece
character tokens
custom tokens
```

----------

# Phase 11 — Vision and Temporal Vision

Use the existing `ImageEncoder` as the starting point.

Implement:

- image classification example
- temporal image sequence
- video encoder interface
- frame-by-frame recurrent inference
- sequence classification

Architecture:

```text
frame_t
 ↓
ImageEncoder
 ↓
connectome state
 ↓
readout
```

For video:

```text
frame_1 → state_1
frame_2 → state_2
...
frame_T → state_T
```

----------

# Phase 12 — Environment / Agent Runtime

The existing `Agent` abstraction should be stabilized.

Target:

```text
environment
 ↓
observation
 ↓
encoder
 ↓
connectome
 ↓
decoder
 ↓
action
 ↓
environment
```

Support:

```text
reset()
step()
run()
```

without requiring Gymnasium as a hard dependency.

Provide optional Gymnasium integration.

----------

# Phase 13 — Reinforcement Learning

Integrate:

```text
reward
+
plasticity
```

without embedding a specific RL framework.

Support conceptual modes:

### Readout-only RL

```text
frozen brain
trainable action head
```

### Gradient-based RL

```text
trainable model
policy gradient / actor-critic externally
```

### Plastic connectome

```text
STDP
+
reward modulation
```

### Hybrid

```text
gradient
+
plasticity
```

The learning rule must remain explicit.

----------

# Phase 14 — Game / Robotics Compatibility

Do not put Doom, Mario, Minecraft, or MuJoCo code into the core package.

Instead provide stable integration interfaces.

Examples should demonstrate:

```text
game observation
 ↓
ObservationEncoder
 ↓
BrainModel
 ↓
ActionDecoder
 ↓
environment
```

Create one small reference environment.

Potential:

```text
CartPole
```

or a tiny custom environment.

The purpose is to establish the architecture for external projects.

----------

# Phase 15 — Subnetwork and Region Computing

The existing neuron-selection system should become a central research feature.

Support:

```python
visual = brain.neurons.by_region(...)
motor = brain.neurons.by_region(...)
```

and:

```python
BrainModel(
    brain=brain,
    selection=visual,
    ...
)
```

Support:

- neuron IDs
- masks
- type
- region
- intersection
- union
- exclusion
- named selection persistence
- selection serialization

----------

# Phase 16 — Ablation and Scientific Experiments

Add explicit scientific experiment operations.

Examples:

```text
remove selected neurons
silence selected neurons
freeze selected edges
scale selected edges
randomize selected weights
block selected neurotransmitters
disable selected receptor classes
```

These must operate on a derived model configuration.

Never mutate the immutable source substrate.

Example:

```python
experiment = brain.experiment(
    ablation=...
)
```

----------

# Phase 17 — Memory-Budgeted Execution

The full MaleCNS state is large.

Implement:

```python
brain.memory_estimate(...)
runtime.memory_requirements(...)
```

and extend it to:

```text
state
weights
delays
receptors
plasticity
temporary buffers
```

Support memory-aware modes:

- full state
- selected-subnetwork state
- reduced precision where valid
- inference-only mode
- frozen-weight mode

The library must fail clearly when the requested configuration exceeds supported device memory.

Do not silently fall back to CPU.

----------

# Phase 18 — Sparse Runtime Performance

The existing persistent sparse propagation implementation must now be benchmarked at realistic scale.

Measure:

```text
one timestep
10 timesteps
100 timesteps
1000 timesteps
batch 1
batch 8
batch 32
selected subnetworks
trainable weights
plasticity
delays
```

Compare:

```text
NumPy
PyTorch CPU
PyTorch accelerator where available
TensorFlow CPU
TensorFlow accelerator where available
JAX
Rust/native
```

Track:

```text
latency
throughput
memory
peak RSS
allocation count
```

----------

# Phase 19 — Backend Completion

## NumPy/SciPy

- reference implementation
- runtime
- sequence semantics

## PyTorch

- layer
- stateful runtime
- BrainModel
- surrogate gradients
- BPTT
- accelerator CI

## TensorFlow/Keras

- layer
- [~] high-level BrainLayer
- temporal high-level verification
- accelerator CI

## JAX

- [~] layer
- [~] high-level adapter
- CI numerical verification
- stateful runtime
- device verification

----------

# Phase 20 — Device Capability Certification

Do not claim that every device is supported merely because the host framework supports it.

Test capabilities independently.

Required capability model:

```text
backend
device
operation
supported
```

Operations:

```text
sparse propagation
dense projection
dynamics
delay
receptor
plasticity
readout
BPTT
```

Potential device matrix:

```text
CPU
CUDA
MPS
XPU
TPU
```

Only mark a combination verified after CI execution.

----------

# Phase 21 — Mixed Precision

Define an explicit policy.

Support where validated:

```text
float64
float32
float16
bfloat16
```

Specify minimum precision for:

```text
dynamics
receptors
delays
plasticity
graph weights
```

Do not automatically reduce scientific simulation precision.

----------

# Phase 22 — Distributed Execution

This is a post-single-device feature.

Do not begin distributed partitioning until:

- temporal runtime stable
- benchmark suite established
- memory requirements understood
- device capability matrix established

Then implement:

```text
graph partitioning
cross-partition edges
state ownership
communication
delayed propagation
distributed checkpoints
```

Rust may provide graph partitioning primitives.

Do not implement a second tensor framework.

----------

# Phase 23 — API Reference

Replace manually maintained API descriptions with generated reference documentation.

Generate from:

```text
Python docstrings
type annotations
public exports
```

Every public object must document:

```text
purpose
parameters
returns
raises
shape
dtype
device
state behavior
scientific assumptions
example
```

----------

# Phase 24 — Documentation Platform Rebuild

The current documentation site should now be treated as a real product.

The current Playground has a serious frontend problem: it contains a large interactive implementation but its styling/layout system is incomplete, and the live `/playground` route currently does not resolve successfully through GitHub Pages retrieval.

This phase therefore becomes a complete frontend engineering track.

## Documentation Content & UX

- **Status Definitions:** Add a `STATUS.md` or legend defining *Stable*, *Experimental*, *Planned*, and *Deprecated*.
- **Content Consolidation:** Merge redundant installation guides (`index`, `getting-started`, `installation`) into a coherent structure.
- **Missing Content:** Add Changelog, Migration Guide, Benchmarks, and Glossary.
- **Stub Cleanup:** Flesh out or remove stub files (`examples-pytorch-composition.md`, `interoperability.md`, `contributing.md`).
- **Playground Docs:** Expand `playground.md` with LIF equations, graph model details, and accessibility text alternatives.

## Content Provenance & Timestamps

- **"Last Updated" Metadata:** Every documentation page must display a `Last Updated: YYYY-MM-DD` timestamp in the footer or header.
- **Git Integration:** Derive timestamps from the last Git commit modifying that specific `.md` file. Do not use build-time timestamps.
- **Changelog Linking:** If a page was updated as part of a specific release, link the timestamp to the corresponding entry in `CHANGELOG.md`. CHANGELOG.md should also exist in web documentation as changelog updates in order of latest changes reflecting on top.
- **Stale Content Warning:** If a page has not been updated in >6 months, display a subtle banner: *"This documentation may be outdated. Check the latest version."*

## Frontend Architecture

- Markdown rendering
- sidebar
- navigation
- search foundation (Pagefind/FlexSearch)
- theme foundation
- copyable code
- TOC
- legal pages
- SEO foundation

## Rebuild required

- Design-token system
- Modular CSS architecture
- Dedicated Playground stylesheet
- Documentation component system
- Responsive documentation shell
- Mobile navigation
- Accessible focus/keyboard states
- Error boundaries
- lazy-loaded Playground
- route architecture cleanup
- GitHub Pages deep-link handling (Fix 404 status on SPA routes)
- direct `/playground` loading
- browser refresh on nested routes

----------

# Phase 25 — Playground Reconstruction

The Playground is not merely a documentation page.

It is an interactive scientific workbench.

Target:

```text
┌─────────────────────────────────────────────────────────────┐
│ AxonWeave Playground                 Run  Pause  Step Reset │
├──────────────┬──────────────────────────────┬───────────────┤
│ Parameters   │                              │ Metrics       │
│              │     Neural Network            │               │
│ Network      │     Visualization             │ Time          │
│ Dynamics     │                              │ Spikes        │
│ Input        │                              │ Rate          │
│ Simulation   ├──────────────────────────────┤ Active        │
│              │ Raster / Voltage / Input      │               │
├──────────────┴──────────────────────────────┴───────────────┤
│ Equivalent AxonWeave Code                                  │
└─────────────────────────────────────────────────────────────┘
```

----------

# Phase 26 — Playground Architecture

Refactor the current monolithic Playground.

Target:

```text
docs-site/src/playground/
├── Playground.tsx
├── components/
│   ├── PlaygroundToolbar.tsx
│   ├── ParameterPanel.tsx
│   ├── SimulationControls.tsx
│   ├── NeuronMap.tsx
│   ├── SpikeRaster.tsx
│   ├── VoltageTrace.tsx
│   ├── InputWaveform.tsx
│   ├── MetricsPanel.tsx
│   ├── CodePanel.tsx
│   ├── NeuronInspector.tsx
│   └── ExplanationPanel.tsx
├── simulation/
│   ├── types.ts
│   ├── network.ts
│   ├── dynamics.ts
│   ├── simulation.ts
│   ├── inputs.ts
│   └── metrics.ts
├── rendering/
│   ├── canvas.ts
│   ├── neuron-map.ts
│   ├── raster.ts
│   └── traces.ts
└── state/
    ├── config.ts
    ├── simulation.ts
    └── url.ts
```

Do not retain an 800–1000 line Playground component.

----------

# Phase 27 — Playground CSS

Create dedicated styles.

Do not mix Playground layout rules with documentation article styles.

The Playground must have:

```text
desktop
tablet
mobile
dark
light
```

states.

Fix every React class that currently has no corresponding style.

CSS must be readable and maintainable.

Do not minify source CSS.

----------

# Phase 28 — Playground Interactivity

Required:

- Run
- Pause
- Step
- Reset
- presets
- exact numeric inputs
- sliders
- neuron hover
- neuron selection
- edge highlighting
- neuron inspector
- pan
- zoom
- fit graph
- raster interaction
- voltage trace selection
- fullscreen
- theme
- copy code
- share configuration

----------

# Phase 29 — Playground Scientific Integrity

The browser Playground must clearly state:

```text
This is a browser-based educational simulation.
It uses a synthetic/small graph.
It does not execute the full MaleCNS v1.0 substrate.
```

Do not imply that the browser is running the 166k-neuron connectome unless it actually is.

The generated Python code must correspond to real AxonWeave APIs.

Do not display fictional APIs.

----------

# Phase 30 — Playground State Model

Separate:

```text
PlaygroundConfig
SimulationState
PlaygroundUIState
```

Example:

```typescript
interface PlaygroundConfig {
  network: NetworkConfig;
  dynamics: DynamicsConfig;
  input: InputConfig;
  simulation: SimulationConfig;
  seed: number;
}
```

Simulation state:

```typescript
interface SimulationState {
  time: number;
  neurons: ...;
  spikes: ...;
  metrics: ...;
}
```

UI state:

```typescript
interface PlaygroundUIState {
  selectedNeuron: number | null;
  selectedNeurons: number[];
  fullscreen: boolean;
  activePanel: string;
}
```

----------

# Phase 31 — Shareable Playground Configuration

Support:

```text
/playground?...configuration...
```

or a compressed configuration payload.

The URL should reproduce configuration, not simulation history.

Add:

```text
Share
Copy configuration
Download JSON
```

----------

# Phase 32 — Documentation ↔ Playground Integration

Documentation concepts should link to meaningful Playground presets.

Examples:

```text
LIF
→ Try LIF

Synaptic propagation
→ Explore propagation

Delays
→ Explore delays

STDP
→ Explore plasticity

Temporal state
→ Explore recurrent dynamics
```

A documentation page should never link to a generic Playground when a relevant preset can be encoded.

----------

# Phase 33 — Interactive Scientific Documentation

Add interactive demonstrations only where they improve understanding.

Priority:

1. LIF
2. synaptic propagation
3. delays
4. recurrent state
5. STDP
6. encoders/readouts
7. connectome selection

Do not add decorative animations.

----------

# Phase 34 — Web Performance

- lazy-load Playground
- lazy-load heavy visualization code
- avoid React rerender per simulation timestep
- use refs for mutable high-frequency state
- use `requestAnimationFrame`
- throttle metrics
- use DPR-aware Canvas rendering
- keep simulation engine separate from React

The current Canvas/DPR approach can be retained, but it must be isolated from the component architecture.

----------

# Phase 35 — Accessibility

All interactive controls must support:

- keyboard operation
- visible focus
- ARIA labels
- semantic buttons
- keyboard navigation
- accessible dialogs
- accessible dropdowns

Canvas must never be the only source of scientific information.

Selected neuron information must be available in normal DOM.

----------

# Phase 36 — Web Testing

Add:

```text
Vitest
React Testing Library
Playwright
```

where appropriate.

Unit/component tests:

- simulation
- LIF
- seeded determinism
- configuration
- URL encoding
- code generation
- controls
- selection
- theme

E2E tests:

- homepage
- documentation route
- Playground
- Run
- Pause
- Step
- Reset
- preset
- theme
- search
- direct `/playground`
- browser refresh
- mobile viewport

----------

# Phase 37 — Visual Regression

Add screenshots for:

```text
homepage light
homepage dark
documentation light
documentation dark
playground light
playground dark
playground mobile
playground tablet
```

Run visual regression in CI.

This is mandatory because frontend visual correctness is now part of the product.

----------

# Phase 38 — GitHub Pages Deployment

Fix:

```text
/axonweave/
/axonweave/playground
```

direct navigation.

Verify:

```text
initial load
deep link
refresh
back
forward
404 fallback (must return 200 OK for SPA routes)
base URL
```

Do not mark hosted docs `[x]` until the deployed URLs have actually been checked.

----------

# Phase 39 — Documentation Versions

Do not show fictional version selectors.

Current documentation version must derive from the actual project version.

Implement:

- stable docs
- version metadata
- nightly/development docs if desired
- version-specific API links

## Versioned API References

- Generate API reference docs for *every* minor version (e.g., `/v0.2/api`, `/v1.0/api`).
- Do not overwrite old API docs when releasing new versions.
- Implement a "Version Switcher" component in the docs header that:
  - Detects the current page path.
  - Preserves the page context when switching versions (e.g., switching from `/v0.2/api/brain` to `/v1.0/api/brain`).
  - Shows a warning banner if viewing an outdated version: *"You are viewing docs for v0.2. [View latest v1.0]."*

## Deprecation Policy

- **Minor Releases (v0.x → v0.y):** May introduce new APIs but must not remove existing public APIs. Deprecated APIs must be marked with `@deprecated` and documented in the changelog.
- **Major Releases (v1.x → v2.0):** May remove deprecated APIs. Must provide a migration guide.

## Temporal Integrity

- **Version Freeze Dates:** Each versioned documentation set (e.g., `/v0.2/`) must display the **Release Date** of that version prominently.
- **API Validity Period:** In the API reference, specify the version range for which an API is valid (e.g., `Available since v0.1.0`, `Deprecated in v0.3.0`, `Removed in v1.0.0`).
- **Snapshot Immutability:** Once a versioned docs site is built, its timestamps and content must never change. Only new versions can be added.

----------

# Phase 40 — Scientific Reproducibility

Create:

```text
reproducibility/
├── fixtures/
├── configs/
├── scripts/
├── reports/
└── benchmarks/
```

Every major scientific example should have:

```text
configuration
seed
substrate fingerprint
model fingerprint
environment metadata
results
```

----------

# Phase 41 — Benchmark Report

Generate benchmark artifacts for:

```text
graph construction
substrate loading
single timestep
sequence execution
BPTT
plasticity
delay
memory
backend comparison
```

Include:

```text
hardware
software versions
dtype
device
batch size
sequence length
substrate
```

Never publish performance numbers without context.

----------

# Phase 42 — Biological Limitations Report

Create a formal document explaining:

```text
What MaleCNS provides
What AxonWeave adds
What AxonWeave assumes
What AxonWeave does not simulate
What remains unknown
```

Explicitly discuss:

- neurotransmitter prediction
- receptor assignment
- neuron dynamics
- synaptic delays
- plasticity
- neuromodulation
- missing biophysical parameters
- abstraction choices

----------

# Phase 43 — Interoperability

Complete:

- neuprint target
- navis target
- import/export examples
- body-ID round-trip tests
- neuron-selection interoperability
- graph conversion documentation

----------

# Phase 44 — Scientific Experiment Framework

Stabilize:

```python
brain.experiment(...)
brain.simulate(...)
brain.task(...)
brain.agent(...)
```

The facades must not become competing model APIs.

Their responsibilities should be:

```text
task()
    supervised task construction

agent()
    environment/closed-loop construction

simulate()
    low-level simulation

experiment()
    reproducible scientific experiment
```

----------

# Phase 45 — API Stability

Before v1.0 classify every public API:

```text
stable
experimental
deprecated
internal
```

Public imports must be explicit.

Maintain:

```python
__all__
```

for public modules.

## API Versioning Metadata

- Every public class/function must have a `__version_added__` and optional `__version_deprecated__` attribute.
- Use Python’s `warnings.warn()` with `DeprecationWarning` for any API marked as deprecated.
- Maintain a `DEPRECATIONS.md` file listing:
  - Removed APIs
  - Replacement APIs
  - Migration code snippets

## Semantic Versioning Enforcement

- **Patch (v1.0.1):** Bug fixes only. No API changes.
- **Minor (v1.1.0):** New features, backward-compatible.
- **Major (v2.0.0):** Breaking changes.

----------

# Phase 46 — Error System

Stabilize error codes:

```text
AXW001 substrate unavailable
AXW002 substrate mismatch/integrity
AXW003 schema error
AXW004 unsupported device
AXW005 biological-model configuration
AXW006 backend unavailable
AXW010 API/selection misuse
```

Every user-facing error must contain:

```text
what failed
why
how to fix it
```

----------

# Phase 47 — Security / Integrity

Substrate installation must:

- verify source metadata
- verify checksums
- validate schema
- validate graph
- validate fingerprint
- atomically activate verified substrate
- protect against partial installation
- protect against incompatible replacement

Downloaded data must never be executed as code.

----------

# Phase 48 — Release Engineering

Before v1.0:

- PyPI trusted publishing verified
- test release
- published wheel installation
- native extension verification
- substrate installation from clean environment
- documentation deployment
- examples run
- release checksum
- release provenance

----------

# Phase 49 — v1.0 Scientific Release Gate

v1.0 requires all of:

## Core

- stable substrate format
- stable temporal runtime
- stable BrainModel
- stable encoder protocol
- stable readout protocol
- stable state/checkpoint semantics

## Biology

- scientific validation fixtures
- documented assumptions
- limitations report
- reproducibility report

## Frameworks

- NumPy verified
- PyTorch verified
- TensorFlow verified
- JAX verified

## Native

- Rust/native equivalence
- wheel verification
- streaming builder
- benchmark report

## Web

- documentation deployment verified
- `/playground` direct navigation works (200 OK)
- responsive Playground
- interactive Playground
- E2E tests
- visual regression
- generated API reference

## Distribution

- PyPI release
- `.awb` substrate release
- reproducibility metadata
- versioned documentation

## API & Versioning

- Versioned documentation archive exists (v0.1, v0.2, ..., v1.0).
- API reference for v1.0 is distinct from v0.x.
- Deprecation warnings are functional and tested.
- Migration guide from v0.2 to v1.0 is complete.

## Content Integrity

- Every documentation page displays a Git-derived "Last Updated" date.
- Versioned docs display the official Release Date.
- Stale content warnings are functional for pages older than 6 months.
- API references include validity ranges (Added/Deprecated/Removed versions).

----------

# Phase 50 — Post-v1.0 Research Roadmap

Only after v1.0:

## Advanced biological modeling

- richer neuron models
- compartmental approximations
- heterogeneous synaptic models
- neuromodulatory networks
- biochemical state models

## Large-scale execution

- distributed connectome execution
- graph partitioning
- multi-device state
- WebGPU/WebAssembly browser runtime

## Advanced learning

- additional local plasticity rules
- meta-plasticity
- reward-modulated learning
- hybrid gradient/local learning
- evolutionary optimization

## Research tooling

- connectome visualization
- ablation studies
- region comparison
- activity replay
- experiment registry
- model comparison framework

----------

# Phase 51 — Legal & Licensing Clarity

AxonWeave sits at the intersection of open-source code and proprietary biological data.

## Licensing Strategy

- **Code License:** Adopt a permissive license (MIT or Apache 2.0) for the AxonWeave engine.
- **Data License:** Clearly define the license for `.awb` substrates (e.g., CC-BY-NC or institutional license from FlyWire/MaleCNS providers).
- **Docs License:** Adopt CC-BY for documentation and educational content.
- **Composite License Notice:** Create a `LICENSE.md` that explicitly distinguishes between code, data, and documentation rights.

## Compliance

- Ensure all third-party dependencies are compatible with the chosen license.
- Provide a "Legal" section in the documentation explaining what researchers can and cannot do with published models.

----------

# Phase 52 — Community Governance & Contribution

As a scientific platform, AxonWeave requires clear governance to manage contributions and biological accuracy.

## Governance Model

- **GOVERNANCE.md:** Define merge rights, RFC processes for biological changes, and conflict resolution.
- **Code of Conduct:** Establish a professional and inclusive environment for scientific collaboration.
- **Contribution Guidelines:** Expand `contributing.md` to include:
  - How to propose new biological models.
  - How to report scientific inaccuracies.
  - Style guides for code and documentation.

----------

# Phase 53 — Operational Resilience & Backup

Scientific reproducibility requires long-term availability beyond GitHub.

## Disaster Recovery

- **DISASTER_RECOVERY.md:** Plan for GitHub outages or PyPI bans.
- **Substrate Backups:** Mirror `.awb` files to a secondary location (e.g., IPFS, S3, or institutional archive).
- **Documentation Archives:** Ensure versioned docs are preserved even if the main site goes down.

----------

# Phase 54 — Academic & Community Infrastructure

Enable proper academic credit and local community growth.

## Citation Support

- **CITATION.cff:** Add a standard citation file for the repository.
- **"How to Cite" Section:** Provide BibTeX and APA formats in the documentation.

## Internationalization (i18n)

- **i18n Architecture:** Structure the docs site to support multiple languages (e.g., `/en/`, `/ne/`).
- **Nepali Localization:** Translate key scientific glossaries and introductory content into Nepali to foster local scientific engagement.

----------

# Final Architecture

The completed AxonWeave platform should converge on:

```text
                         AxonWeave
                             │
             ┌───────────────┴────────────────┐
             │                                │
      Biological Substrate              Task Architecture
             │                                │
       MaleCNS v1.0                     Encoder
             │                                │
      ConnectomeGraph                        │
             │                                │
             ▼                                ▼
       Connectome Runtime ◄──────────── Input Projection
             │
       ┌─────┼───────────────────────────────┐
       │     │        │        │             │
    Signals Receptors Delays Dynamics     Plasticity
       │     │        │        │             │
       └─────┴────────┴────────┴─────────────┘
                             │
                          State
                             │
                             ▼
                          Readout
                             │
                 ┌───────────┼────────────┐
                 │           │            │
             Prediction    Action      Sequence
                 │           │            │
                 ▼           ▼            ▼
              Dataset    Environment   Stream
```

The web platform should mirror this architecture:

```text
Documentation
      │
      ├── Concepts
      ├── API
      ├── Scientific Reference
      └── Examples
              │
              ▼
        Interactive Playground
              │
       ┌──────┼─────────┐
       │      │         │
   Configure Simulate Observe
       │      │         │
       └──────┼─────────┘
              ▼
       Equivalent Python
              │
              ▼
       Real AxonWeave Library
```

The fundamental product loop is:

```text
Learn
  ↓
Experiment
  ↓
Understand
  ↓
Copy configuration/code
  ↓
Run real AxonWeave
  ↓
Build a model
  ↓
Conduct a reproducible experiment
```

AxonWeave v1.0 when reached should therefore not be defined as merely “the MaleCNS connectome packaged as a Python library.”

It should be:

> A reproducible framework for constructing, training, simulating, and experimentally studying task-specific neural models built around a biological connectome substrate.

The biological substrate remains immutable and provenance-preserving. The computational interpretation is explicit. The temporal runtime provides the recurrent computational state. The encoder and readout define the task. The learning system defines how the model changes. The experiment system defines reproducibility. The web Playground demonstrates these concepts interactively without pretending that a browser toy simulation is the complete biological substrate.
