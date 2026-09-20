/* Playground simulation engine */

import { mulberry32 } from './rng';
import { Neuron, Synapse, Spike, Network, Region, REGIONS, REGION_COLORS } from './types';

export { mulberry32 } from './rng';
export type { Neuron, Synapse, Spike, Network, Region } from './types';
export { REGIONS, REGION_COLORS, REGION_LABELS } from './types';

export function generateNetwork(n: number, density: number, seed: number): Network {
  const rng = mulberry32(seed);
  const neurons: Neuron[] = [];
  const cx = 0.5, cy = 0.5;

  // Layer proportions: 25% input, 50% processing, 25% output
  const nInput = Math.max(1, Math.round(n * 0.25));
  const nOutput = Math.max(1, Math.round(n * 0.25));
  const nProcessing = n - nInput - nOutput;

  // Column x positions
  const xInput = 0.15;
  const xProcessing = 0.5;
  const xOutput = 0.85;

  let id = 0;

  // Input layer — left column, evenly spaced vertically
  for (let i = 0; i < nInput; i++) {
    const y = 0.12 + (0.76 * i) / Math.max(1, nInput - 1);
    const region = REGIONS[Math.floor(rng() * REGIONS.length)];
    neurons.push({
      id: id++,
      x: xInput + (rng() - 0.5) * 0.04,
      y: y + (rng() - 0.5) * 0.03,
      v: -0.070,
      vRest: -0.070,
      vThresh: -0.050 + (rng() - 0.5) * 0.004,
      tauM: 0.010 + rng() * 0.010,
      refrac: 0,
      region,
      lastSpikeTick: -9999,
    });
  }

  // Processing layer — middle column, scattered
  for (let i = 0; i < nProcessing; i++) {
    const y = 0.08 + (0.84 * i) / Math.max(1, nProcessing - 1);
    const region = REGIONS[Math.floor(rng() * REGIONS.length)];
    neurons.push({
      id: id++,
      x: xProcessing + (rng() - 0.5) * 0.14,
      y: y + (rng() - 0.5) * 0.04,
      v: -0.070,
      vRest: -0.070,
      vThresh: -0.050 + (rng() - 0.5) * 0.004,
      tauM: 0.010 + rng() * 0.010,
      refrac: 0,
      region,
      lastSpikeTick: -9999,
    });
  }

  // Output layer — right column, evenly spaced vertically
  for (let i = 0; i < nOutput; i++) {
    const y = 0.12 + (0.76 * i) / Math.max(1, nOutput - 1);
    const region = REGIONS[Math.floor(rng() * REGIONS.length)];
    neurons.push({
      id: id++,
      x: xOutput + (rng() - 0.5) * 0.04,
      y: y + (rng() - 0.5) * 0.03,
      v: -0.070,
      vRest: -0.070,
      vThresh: -0.050 + (rng() - 0.5) * 0.004,
      tauM: 0.010 + rng() * 0.010,
      refrac: 0,
      region,
      lastSpikeTick: -9999,
    });
  }

  // Synapses: feedforward-biased connectivity
  const synapses: Synapse[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const isInput = i < nInput;
      const isProcessing = i >= nInput && i < nInput + nProcessing;
      const isOutput = i >= nInput + nProcessing;
      const jIsProcessing = j >= nInput && j < nInput + nProcessing;
      const jIsOutput = j >= nInput + nProcessing;

      // Prefer feedforward: input→processing, processing→output
      let connectProb = density * 0.3;
      if (isInput && jIsProcessing) connectProb = density * 1.2;
      else if (isProcessing && jIsOutput) connectProb = density * 1.2;
      else if (isProcessing && jIsProcessing) connectProb = density * 0.5;
      else if (isOutput && jIsProcessing) connectProb = density * 0.3;

      if (rng() < connectProb) {
        const isExcit = rng() > 0.2;
        synapses.push({
          pre: i,
          post: j,
          weight: (rng() * 0.008 + 0.001) * (isExcit ? 1 : -0.5),
          lastActiveTick: -9999,
        });
      }
    }
  }
  return { neurons, synapses };
}

export function simulateStep(
  neurons: Neuron[],
  synapses: Synapse[],
  inputCurrent: number[],
  dt: number,
  tick: number,
): Spike[] {
  const newSpikes: Spike[] = [];

  for (const n of neurons) {
    if (n.refrac > 0) {
      n.refrac -= dt;
      continue;
    }
    const I = inputCurrent[n.id] || 0;
    const dv = (-(n.v - n.vRest) / n.tauM + I * 1000) * dt;
    n.v += dv;
    n.v = Math.min(n.v, 0.030);

    if (n.v >= n.vThresh) {
      newSpikes.push({ neuron: n.id, time: tick });
      n.v = n.vRest;
      n.refrac = 0.003;
      n.lastSpikeTick = tick;
    }
  }

  // Propagate spikes through synapses
  for (const sp of newSpikes) {
    const outSynapses = synapses.filter(s => s.pre === sp.neuron);
    for (const syn of outSynapses) {
      neurons[syn.post].v += syn.weight;
      syn.lastActiveTick = tick;
    }
  }

  return newSpikes;
}

export function generateInput(
  t: number,
  n: number,
  mode: string,
  freq: number,
  amp: number,
): number[] {
  const input = new Array(n).fill(0);
  const period = 1 / freq;
  const phase = (t % period) / period;
  const nInput = Math.min(4, n);

  switch (mode) {
    case 'sine':
      for (let i = 0; i < nInput; i++) {
        input[i] = amp * Math.sin(2 * Math.PI * freq * t + i * 0.7) * 0.012;
      }
      break;
    case 'pulse':
      if (phase < 0.15) {
        for (let i = 0; i < nInput; i++) {
          input[i] = amp * 0.015;
        }
      }
      break;
    case 'burst':
      if (phase < 0.05 || (phase > 0.2 && phase < 0.25)) {
        for (let i = 0; i < Math.min(3, n); i++) {
          input[i] = amp * 0.018;
        }
      }
      break;
    case 'ramp':
      for (let i = 0; i < nInput; i++) {
        input[i] = amp * phase * 0.015;
      }
      break;
  }
  return input;
}