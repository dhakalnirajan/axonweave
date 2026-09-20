/* Playground types — extracted from Playground.tsx */

export interface Neuron {
  id: number;
  x: number;
  y: number;
  v: number;
  vRest: number;
  vThresh: number;
  tauM: number;
  refrac: number;
  region: Region;
  lastSpikeTick: number;
}

export interface Synapse {
  pre: number;
  post: number;
  weight: number;
  lastActiveTick: number;
}

export interface Spike {
  neuron: number;
  time: number;
}

export type Region = 'visual' | 'motor' | 'association' | 'sensory';

export const REGIONS: Region[] = ['visual', 'motor', 'association', 'sensory'];

export const REGION_COLORS: Record<Region, string> = {
  visual: '#4d8fd6',
  motor: '#ee4c2c',
  association: '#8dc4d8',
  sensory: '#3ca878',
};

export const REGION_LABELS: Record<Region, string> = {
  visual: 'Visual',
  motor: 'Motor',
  association: 'Association',
  sensory: 'Sensory',
};

export interface Network {
  neurons: Neuron[];
  synapses: Synapse[];
}

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

export interface PlaygroundState {
  nNeurons: number;
  density: number;
  seed: number;
  mode: string;
  freq: number;
  amplitude: number;
  tauM: number;
  speed: number;
  running: boolean;
}