# Tutorial: Leaky Integrate-and-Fire Neurons

How LIF neurons work, how to configure them in AxonWeave, and how to interpret membrane potential traces.

## Biological model

A LIF neuron accumulates input current into a membrane potential `V`. Between spikes, `V` decays exponentially toward a resting value. When `V` crosses a threshold, the neuron fires a spike and resets.

The continuous equation:

$$\tau_m \frac{dV}{dt} = -(V - V_{rest}) + R \cdot I(t)$$

Where:
- `tau_m` — membrane time constant (how fast `V` decays toward rest)
- `V_rest` — resting potential (mV)
- `R` — membrane resistance (folded into `tau` scaling in the discrete model)
- `I(t)` — total input current from synaptic connections

Discrete-time rule at each step:

```
dV = (-(V - V_rest) + I) * dt / tau_m
V  = V + dV
if V >= V_threshold:
    emit spike
    V = V_reset
    enter refractory period
```

:::DOC-NOTE
AxonWeave's LIF implementation uses `tau` (ms), `v_rest` (mV), `v_threshold` (mV), `v_reset` (mV) and `refractory` (ms) directly. These are modeling parameters you choose — not values extracted from the connectome dataset.
:::

## Quick start

```python
import axonweave
from axonweave.dynamics import LIF
from axonweave.runtime import ConnectomeRuntime

brain = axonweave.load("male-cns:v1.0")

dynamics = LIF(
    tau=20.0,           # membrane time constant (ms)
    v_rest=-65.0,       # resting potential (mV)
    v_threshold=-50.0,  # spike threshold (mV)
    v_reset=-70.0,      # reset after spike (mV)
    refractory=2.0,     # absolute refractory period (ms)
    dt=1.0,             # integration step (ms)
)

runtime = ConnectomeRuntime(brain.graph, dynamics=dynamics)
runtime.reset_state()
```

## Running the simulation

Feed input currents step by step. State persists between calls:

```python
import numpy as np

n_neurons = brain.n_neurons
runtime.reset_state()

# Simulate 500 steps with constant input to a random subset
rng = np.random.default_rng(42)
input_current = np.zeros(n_neurons, dtype=np.float32)
input_current[rng.choice(n_neurons, size=1000, replace=False)] = 5.0

spikes_log = []
voltage_log = []

for step in range(500):
    spikes = runtime.step(input_current)
    spikes_log.append(spikes.copy())
    voltage_log.append(runtime.get_state().neuron.variables["v"].copy())

spikes_log = np.stack(spikes_log)    # (T, n_neurons)
voltage_log = np.stack(voltage_log)  # (T, n_neurons)
```

## Visualizing membrane potential

```python
import matplotlib.pyplot as plt

# Pick a neuron that spiked at least once
neuron_idx = np.argmax(spikes_log.sum(axis=0))
v_trace = voltage_log[:, neuron_idx]

fig, ax = plt.subplots(figsize=(10, 4))
ax.plot(v_trace, linewidth=0.8)
ax.axhline(dynamics.v_threshold, color="red", linestyle="--", label="threshold")
ax.axhline(dynamics.v_rest, color="gray", linestyle=":", label="rest")
ax.set_xlabel("Time step")
ax.set_ylabel("Membrane potential (mV)")
ax.set_title(f"Neuron {brain.graph.body_ids[neuron_idx]}")
ax.legend()
plt.tight_layout()
plt.show()
```

## Parameter tuning guide

### tau (membrane time constant)

| tau value | Effect |
|-----------|--------|
| Low (5 ms) | Fast decay, brief integration window, high-frequency spiking |
| Medium (20 ms) | Balanced integration, good default for most experiments |
| High (50 ms) | Slow decay, longer memory of past inputs, smoother firing |

Low `tau` → neuron acts like coincidence detector. High `tau` → neuron acts like temporal integrator.

### v_threshold (spike threshold)

Lower threshold (closer to `v_rest`) → lower firing rate, easier to trigger spikes. Higher threshold → harder to fire, higher selectivity.

### v_reset (reset potential)

If `v_reset` is well below `v_rest`, post-spike hyperpolarization creates a stronger refractory effect. If close to `v_rest`, recovery is faster.

### refractory period

During the refractory period the neuron ignores input. Longer refractory → lower maximum firing rate, more temporal regularity.

:::DOC-TIP
Start with defaults (`tau=20, v_rest=-65, v_threshold=-50, v_reset=-70, refractory=2`). Tune one parameter at a time and observe firing rate changes.
:::

## Using with ConnectomeLayer (PyTorch)

```python
import torch
from axonweave.torch import ConnectomeLayer
from axonweave.dynamics import LIF

layer = ConnectomeLayer(brain.graph, trainable_edges=True)

x = torch.randn(4, brain.n_neurons)  # batch=4, random input
y = layer(x)                          # shape (4, n_neurons)
```

For full temporal simulation with state:

```python
from axonweave.torch import BrainModel
from axonweave.encoders import VectorEncoder
from axonweave.readout import RegressionReadout

model = BrainModel(
    brain=brain,
    encoder=VectorEncoder(input_dim=8, output_dim=256),
    dynamics=LIF(),
    readout=RegressionReadout(n_source=256, n_outputs=1),
)

model.reset_state()
for x_t in stream:
    prediction = model.step(x_t)
```

## AdaptiveLIF variant

Adaptive LIF adds an activity-dependent threshold that increases after each spike, producing spike-frequency adaptation:

```python
from axonweave.dynamics import AdaptiveLIF

dynamics = AdaptiveLIF(
    tau=20.0,
    tau_adapt=200.0,       # adaptation time constant (ms)
    delta_threshold=0.5,   # threshold increase per spike (mV)
)

runtime = ConnectomeRuntime(brain.graph, dynamics=dynamics)
```

Use AdaptiveLIF when you want neurons to reduce firing rate under sustained input (mimicking adaptation observed in real cortical neurons).

## Common pitfalls

### Pitfall 1: Forgetting to reset state

```python
runtime.reset_state()  # must call before each new episode
for x_t in stream:
    runtime.step(x_t)
# Next episode — state carries over if you don't reset
runtime.reset_state()  # ← easy to forget
```

### Pitfall 2: Input scaling mismatch

The `tau` value sets the integration timescale. If your input currents are in a different unit scale than expected by `dt / tau`, firing rates will be wildly off. Check that `dt` and `tau` are in the same units (ms by default).

### Pitfall 3: Dense input to full connectome

Feeding a `(1, 166700)` vector means 166,700 neurons receive input every step. Most experiments should use a [selection](examples-selection.md) to focus on a relevant sub-network.

### Pitfall 4: Monitoring state

```python
# Wrong — state is deep-copied, must capture explicitly
state = runtime.get_state()
v = state.neuron.variables["v"]

# Correct — access current voltage
state = runtime.get_state()
current_v = state.neuron.variables["v"]  # this is a snapshot, not live
```

:::DOC-WARN
Membrane potential values are modeling quantities, not measurements from the biological MaleCNS. Interpret firing patterns as behavior of your chosen model on the biological graph topology — not as predictions about real fly neurons.
:::

## Related

- [Neuron Dynamics](dynamics.md) — all dynamics models and configuration.
- [Temporal Runtime](runtime.md) — state management, sequences, BPTT.
- [Working with Connectomes](tutorial-connectome.md) — loading and exploring the substrate.
