/* Unit tests for playground simulation engine */

import { generateNetwork, simulateStep, generateInput, mulberry32 } from '../src/components/playground/simulation';
import { Neuron, Synapse, Spike } from '../src/components/playground/types';

describe('mulberry32 RNG', () => {
  test('produces deterministic sequence', () => {
    const rng = mulberry32(42);
    const a = rng();
    const b = rng();
    const c = rng();

    const rng2 = mulberry32(42);
    expect(rng2()).toBe(a);
    expect(rng2()).toBe(b);
    expect(rng2()).toBe(c);
  });

  test('different seeds produce different sequences', () => {
    const rng1 = mulberry32(1);
    const rng2 = mulberry32(2);
    expect(rng1()).not.toBe(rng2());
  });
});

describe('generateNetwork', () => {
  test('creates correct number of neurons', () => {
    const { neurons } = generateNetwork(24, 0.15, 42);
    expect(neurons.length).toBe(24);
  });

  test('neurons have valid properties', () => {
    const { neurons } = generateNetwork(10, 0.2, 1);
    for (const n of neurons) {
      expect(n.id).toBeGreaterThanOrEqual(0);
      expect(n.x).toBeGreaterThan(0);
      expect(n.x).toBeLessThan(1);
      expect(n.y).toBeGreaterThan(0);
      expect(n.y).toBeLessThan(1);
      expect(n.v).toBe(-0.07);
      expect(n.vRest).toBe(-0.07);
      expect(n.vThresh).toBeLessThan(-0.04);
      expect(n.vThresh).toBeGreaterThan(-0.06);
      expect(n.tauM).toBeGreaterThan(0.01);
      expect(n.tauM).toBeLessThan(0.02);
      expect(['visual', 'motor', 'association', 'sensory']).toContain(n.region);
    }
  });

  test('creates synapses with correct structure', () => {
    const { synapses } = generateNetwork(10, 1.0, 1); // full connectivity
    expect(synapses.length).toBe(90); // 10 * 9 (no self-connections)
    for (const s of synapses) {
      expect(s.pre).toBeGreaterThanOrEqual(0);
      expect(s.pre).toBeLessThan(10);
      expect(s.post).toBeGreaterThanOrEqual(0);
      expect(s.post).toBeLessThan(10);
      expect(s.pre).not.toBe(s.post);
      expect(s.weight).not.toBe(0);
      expect(s.lastActiveTick).toBe(-9999);
    }
  });

  test('density affects synapse count', () => {
    const { synapses: sparse } = generateNetwork(20, 0.1, 1);
    const { synapses: dense } = generateNetwork(20, 0.5, 1);
    expect(dense.length).toBeGreaterThan(sparse.length);
  });

  test('deterministic with same seed', () => {
    const a = generateNetwork(16, 0.2, 99);
    const b = generateNetwork(16, 0.2, 99);
    expect(a.neurons.length).toBe(b.neurons.length);
    expect(a.synapses.length).toBe(b.synapses.length);
    for (let i = 0; i < a.neurons.length; i++) {
      expect(a.neurons[i].x).toBe(b.neurons[i].x);
      expect(a.neurons[i].y).toBe(b.neurons[i].y);
    }
  });
});

describe('simulateStep', () => {
  test('neurons spike when threshold reached', () => {
    const neurons: Neuron[] = [{
      id: 0, x: 0.5, y: 0.5, v: -0.051, vRest: -0.07, vThresh: -0.05,
      tauM: 0.01, refrac: 0, region: 'visual', lastSpikeTick: -9999
    }];
    const synapses: Synapse[] = [];
    const input = [100]; // strong current

    const spikes = simulateStep(neurons, synapses, input, 0.001, 0);
    expect(spikes.length).toBe(1);
    expect(spikes[0].neuron).toBe(0);
    expect(neurons[0].v).toBe(-0.07); // reset to rest
    expect(neurons[0].refrac).toBe(0.003);
  });

  test('neurons in refractory period do not spike', () => {
    const neurons: Neuron[] = [{
      id: 0, x: 0.5, y: 0.5, v: -0.04, vRest: -0.07, vThresh: -0.05,
      tauM: 0.01, refrac: 0.002, region: 'visual', lastSpikeTick: 0
    }];
    const synapses: Synapse[] = [];
    const input = [100];

    const spikes = simulateStep(neurons, synapses, input, 0.001, 1);
    expect(spikes.length).toBe(0);
    expect(neurons[0].refrac).toBeCloseTo(0.001, 3);
  });

  test('spikes propagate through synapses', () => {
    const neurons: Neuron[] = [
      { id: 0, x: 0.3, y: 0.5, v: -0.051, vRest: -0.07, vThresh: -0.05, tauM: 0.01, refrac: 0, region: 'visual', lastSpikeTick: -9999 },
      { id: 1, x: 0.7, y: 0.5, v: -0.07, vRest: -0.07, vThresh: -0.05, tauM: 0.01, refrac: 0, region: 'motor', lastSpikeTick: -9999 }
    ];
    const synapses: Synapse[] = [{ pre: 0, post: 1, weight: 0.01, lastActiveTick: -9999 }];
    const input = [100, 0];

    const spikes = simulateStep(neurons, synapses, input, 0.001, 0);
    expect(spikes.length).toBe(1);
    expect(spikes[0].neuron).toBe(0);
    expect(neurons[1].v).toBeGreaterThan(-0.07); // received excitatory input
  });

  test('inhibitory synapses decrease voltage', () => {
    const neurons: Neuron[] = [
      { id: 0, x: 0.3, y: 0.5, v: -0.051, vRest: -0.07, vThresh: -0.05, tauM: 0.01, refrac: 0, region: 'visual', lastSpikeTick: -9999 },
      { id: 1, x: 0.7, y: 0.5, v: -0.06, vRest: -0.07, vThresh: -0.05, tauM: 0.01, refrac: 0, region: 'motor', lastActiveTick: -9999 }
    ];
    const synapses: Synapse[] = [{ pre: 0, post: 1, weight: -0.005, lastActiveTick: -9999 }];
    const input = [100, 0];

    simulateStep(neurons, synapses, input, 0.001, 0);
    expect(neurons[1].v).toBeLessThan(-0.06); // received inhibitory input
  });
});

describe('generateInput', () => {
  test('sine mode produces oscillating values', () => {
    const input = generateInput(0, 4, 'sine', 2, 1.0);
    expect(input.length).toBe(4);
    expect(input[0]).toBe(0); // sin(0) = 0
  });

  test('pulse mode produces burst at phase start', () => {
    const input = generateInput(0, 4, 'pulse', 1, 1.0); // t=0, phase=0
    expect(input[0]).toBe(0.015);
    const input2 = generateInput(0.5, 4, 'pulse', 1, 1.0); // t=0.5, phase=0.5
    expect(input2[0]).toBe(0);
  });

  test('burst mode produces two bursts per period', () => {
    const input1 = generateInput(0, 4, 'burst', 2, 1.0);
    const input2 = generateInput(0.125, 4, 'burst', 2, 1.0); // phase ~0.25
    expect(input1[0]).toBe(0.018);
    expect(input2[0]).toBe(0.018);
  });

  test('ramp mode produces increasing values', () => {
    const input1 = generateInput(0, 4, 'ramp', 1, 1.0);
    const input2 = generateInput(0.5, 4, 'ramp', 1, 1.0);
    const input3 = generateInput(1.0, 4, 'ramp', 1, 1.0);
    expect(input2[0]).toBeGreaterThan(input1[0]);
    expect(input3[0]).toBeGreaterThan(input2[0]);
  });

  test('amplitude scales output', () => {
    const input1 = generateInput(0.25, 4, 'sine', 1, 0.5);
    const input2 = generateInput(0.25, 4, 'sine', 1, 2.0);
    expect(Math.abs(input2[0])).toBeCloseTo(Math.abs(input1[0]) * 4, 2);
  });
});