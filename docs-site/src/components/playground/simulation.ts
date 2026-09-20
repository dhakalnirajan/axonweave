/* Playground simulation engine */

import { mulberry32 } from './rng';
import { Neuron, Synapse, Spike, Network, Region, REGIONS, REGION_COLORS } from './types';

export { mulberry32 } from './rng';
export type { Neuron, Synapse, Spike, Network, Region } from './types';
export { REGIONS, REGION_COLORS, REGION_LABELS } from './types';

export function generateNetwork(n: number, density: number, seed: number): Network {
  const rng = mulberry32(seed);
  const neurons: Neuron[] = [];
  const angleStep = (2 * Math.PI) / n;
  const cx = 0.5, cy = 0.5, r = 0.38;

  for (let i = 0; i < n; i++) {
    const region = REGIONS[Math.floor(rng() * REGIONS.length)];
    neurons.push({
      id: i,
      x: cx + r * Math.cos(angleStep * i - Math.PI / 2) + (rng() - 0.5) * 0.06,
      y: cy + r * Math.sin(angleStep * i - Math.PI / 2) + (rng() - 0.5) * 0.06,
      v: -0.070,
      vRest: -0.070,
      vThresh: -0.050 + (rng() - 0.5) * 0.004,
      tauM: 0.010 + rng() * 0.010,
      refrac: 0,
      region,
      lastSpikeTick: -9999,
    });
  }

  const synapses: Synapse[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (rng() < density) {
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