/* Playground presets */

export interface Preset {
  n: number;
  d: number;
  s: number;
  m: string;
  f: number;
  a: number;
  t: number;
  label: string;
  desc: string;
}

export const presets: Record<string, Preset> = {
  default: { n: 24, d: 0.15, s: 42, m: 'sine', f: 3, a: 1.0, t: 15, label: 'Default', desc: 'Balanced network with sine input' },
  sparse: { n: 16, d: 0.08, s: 7, m: 'pulse', f: 2, a: 1.5, t: 20, label: 'Sparse Pulse', desc: 'Low density, pulse-driven, slow dynamics' },
  dense_burst: { n: 32, d: 0.25, s: 99, m: 'burst', f: 5, a: 2.0, t: 10, label: 'Dense Burst', desc: 'High connectivity, fast bursting input' },
  minimal: { n: 8, d: 0.2, s: 1, m: 'sine', f: 1, a: 0.8, t: 15, label: 'Minimal', desc: 'Tiny network, easy to observe individual neurons' },
  cortical: { n: 36, d: 0.18, s: 55, m: 'ramp', f: 4, a: 1.2, t: 12, label: 'Cortical-like', desc: 'Larger network with ramping input' },
};

export const presetKeys = Object.keys(presets);