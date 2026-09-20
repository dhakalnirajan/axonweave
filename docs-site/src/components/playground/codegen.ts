/* Equivalence code generator */

export function generateEquivalenceCode(
  mode: string,
  freq: number,
  amp: number,
  nNeurons: number,
  tauM: number,
  density: number,
  seed: number,
): string {
  return `# AxonWeave equivalent (NOT running here — demo only)
import axonweave
from axonweave.dynamics import LIF
from axonweave.runtime import ConnectomeRuntime

brain = axonweave.load("male-cns:v1.0")

# LIF dynamics — same parameters as the demo
dynamics = LIF(
    tau_membrane=${tauM.toFixed(3)},   # membrane time constant (s)
    v_threshold=-0.050,  # spike threshold (V)
    v_rest=-0.070,       # resting potential (V)
    dt=0.001,            # 1 ms timestep
)

# Runtime on the real substrate
runtime = ConnectomeRuntime(
    brain.graph,
    dynamics=dynamics,
    n_neurons=${nNeurons},   # demo topology
)

runtime.reset_state()

# Input: ${mode} wave, ${freq} Hz, amplitude ${amp.toFixed(2)}
# In the demo: neurons 0-${Math.min(3, nNeurons - 1)} receive input
# In real use: input maps to sensory neuron regions
for t in range(1000):
    x_t = generate_input(t * 0.001)  # shape: [batch, features]
    y_t = runtime.step(x_t)          # 1 ms step

# Access spike state
state = runtime.get_state()
spikes = state.neuron.spiked
print(f"Active neurons: {spikes.sum()}/${nNeurons}")

# Topology: ${nNeurons} neurons, density ${density.toFixed(2)}, seed ${seed}
# Real MaleCNS: 166,700 neurons, millions of synapses`;
}