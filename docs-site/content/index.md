# AxonWeave Documentation

:::DOC-NOTE
AxonWeave provides a computational interface for connectome-derived neural substrates. The current primary substrate is the Drosophila Male CNS v1.0 connectome.
:::

## What is AxonWeave?

AxonWeave is a Python library and computational framework for using connectome-derived neural substrates inside machine-learning, simulation, and agent systems.

It separates three things that are often conflated:

```text
Biological data          (the MaleCNS connectome: source facts)
        ↓
Connectome substrate     (AxonWeave: sparse graph + identity + provenance)
        ↓
Neural dynamics          (AxonWeave: configurable models — LIF, rate, ...)
        ↓
Learning / plasticity    (AxonWeave: backprop modes, STDP, dopamine-modulated)
        ↓
Encoder                  (AxonWeave: images, tokens, sensors → neural currents)
        ↓
Biological neural substrate
        ↓
Readout / decoder        (AxonWeave: actions, tokens, classifications)
        ↓
Task / environment       (you: the computational problem)
```

The connectome provides structure. AxonWeave adds configurable computational models. You supply the task or environment.

## What can I build?

| Category | Status |
|---|---|
| Connectome simulation | Stable |
| Sparse connectome layer inside PyTorch/Keras models | Stable |
| Image classification on a frozen substrate | Experimental |
| Next-token prediction as a task interface | Experimental |
| Interactive agents (environment loop with reward) | Experimental |
| Game control (Doom/Mario-style encoders/decoders) | Planned |
| Robotics/sensorimotor interfaces | Planned |
| Audio encoding | Planned |

## How it works

```text
Input
  ↓
Encoder          — maps application data (pixels, tokens, sensors) to neural currents
  ↓
AxonWeave brain  — sparse connectome substrate
  ↓
Dynamics         — LIF / adaptive LIF / rate; how state evolves over time
  ↓
Readout/decoder  — maps neural activity back to predictions or actions
  ↓
Output / action
```

Each component is independently configurable and replaceable. The brain is **stateful and recurrent**: it runs one timestep per call, carries state between calls, and supports sequence execution with deterministic replay — see [Temporal Runtime](runtime.md). Also see [Framework API](framework.md), [Neuron Dynamics](dynamics.md), [Encoders & Decoders](encoders.md), and [Experiments](experiment.md).

## Install

```bash
pip install axonweave
axonweave substrate install male-cns:v1.0
```

```python
import axonweave

brain = axonweave.load("male-cns:v1.0")
```

The Python package and the biological substrate are separate artifacts. `pip install` never downloads biological data. See [Installation](installation.md) and [Substrate Distribution](distribution.md).

## First example

```python
import axonweave
from axonweave.numpy import ConnectomeLayer

brain = axonweave.load("male-cns:v1.0")
print(brain.n_neurons)                      # substrate size

layer = ConnectomeLayer(brain.graph)        # sparse propagation (NumPy reference)
import numpy as np
activity = layer(np.zeros((1, brain.n_neurons), dtype=np.float32))
```

## Capabilities

| Capability | Status | Documentation |
|---|---|---|
| Substrate provisioning | Stable | [Distribution](distribution.md) |
| Sparse connectome graph | Stable | [Architecture](architecture.md) |
| PyTorch / Keras / NumPy layers | Stable | [Backends](backends.md) |
| Neuron dynamics (LIF, adaptive LIF, rate) | Experimental | [Dynamics](dynamics.md) |
| Encoders / decoders | Experimental | [Encoders](encoders.md) |
| Readout heads (classification/regression/token/action) | Experimental | [Readouts](readouts.md) |
| Plasticity (STDP, dopamine-modulated) | Experimental | [Learning](learning.md) |
| Rust compute core (compiled extension vs NumPy fallback) | Experimental | [Rust Core](rust-core.md) |
| Supervised task API (`brain.task`) | Experimental | [Framework API](framework.md) |
| Agent/environment API (`brain.agent`) | Experimental | [Experiments](experiment.md) |
| Checkpoints (substrate identity metadata) | Experimental | [Experiments](experiment.md) |
| Visualization | Planned | — |
| Interoperability (neuPrint, navis) | Optional | [Interoperability](interoperability.md) |

## Scientific scope

AxonWeave does not claim to reproduce the living fly nervous system. The upstream MaleCNS release provides structural connectivity, neuron identities and aggregate neurotransmitter predictions. It does not specify receptor dynamics, membrane behavior, delays or plasticity.

AxonWeave keeps these categories separate:

- **Source facts** — connectivity, body IDs, neurotransmitter predictions, preserved with provenance.
- **Model assumptions** — dynamics, signaling rules, receptor models, delays, plasticity. Always explicit and configurable.
- **Trained parameters** — anything learned from your task. Never presented as biology.

See [Scientific Reference](scientific-reference.md).

## Frameworks

| Framework | Install | Status |
|---|---|---|
| NumPy/SciPy | included | Reference implementation |
| PyTorch | `pip install "axonweave[torch]"` | Stable layer; experimental high-level API |
| TensorFlow/Keras | `pip install "axonweave[tensorflow]"` | Stable layer |
| JAX | `pip install "axonweave[jax]"` | Experimental (adapter + 22 tests written; CI verification pending) |

See [Backends](backends.md).

## Learning modes

| Mode | What trains | Status |
|---|---|---|
| Frozen connectome | encoders/readouts only | Experimental |
| Trainable synaptic weights (topology preserved) | existing edges | Experimental |
| Trainable neuron parameters | τ, thresholds, gain | Experimental |
| Local plasticity (STDP, three-factor) | synapses, locally | Experimental |
| Hybrid | backprop + plasticity | Experimental |

See [Learning & Plasticity](learning.md).

## Current status

- Core substrate loading: **Stable**
- Sparse connectome layer: **Stable**
- Neural dynamics: **Experimental**
- High-level task API: **Experimental**
- Agent API: **Experimental**
- Plasticity: **Experimental**

## Who should use it

- **ML researchers** who want a biologically structured recurrent substrate as a composable layer.
- **Computational neuroscientists** who want a reproducible, versioned connectome substrate with explicit model assumptions.
- **Agent/game developers** exploring connectome-based control experiments.
- **Contributors** building the framework further — see [Contributing](contributing.md).

## Where to go next

1. [Getting Started](getting-started.md) — install, provision, load.
2. [Core Concepts](core-concepts.md) — the mental model.
3. [Framework API](framework.md) — tasks, blocks, training modes.
4. [API Reference](api-reference.md) — full API.
