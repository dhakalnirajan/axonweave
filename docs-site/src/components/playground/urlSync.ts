/* URL state sync for playground */

import { PlaygroundState } from './types';

const URL_PARAMS: { [K in keyof PlaygroundState]: string } = {
  nNeurons: 'n',
  density: 'd',
  seed: 's',
  mode: 'm',
  freq: 'f',
  amplitude: 'a',
  tauM: 't',
  speed: 'sp',
  running: 'run',
};

function encodeValue(key: keyof PlaygroundState, value: PlaygroundState[keyof PlaygroundState]): string {
  if (typeof value === 'number') {
    if (key === 'tauM') return (value * 1000).toFixed(0); // store as ms integer
    if (key === 'density') return value.toFixed(3);
    if (key === 'amplitude') return value.toFixed(1);
    if (key === 'freq') return value.toFixed(1);
    if (key === 'speed') return value.toFixed(1);
    return String(value);
  }
  if (typeof value === 'string') return value;
  if (typeof value === 'boolean') return value ? '1' : '0';
  return String(value);
}

function decodeValue(key: keyof PlaygroundState, value: string): PlaygroundState[keyof PlaygroundState] {
  if (key === 'mode') return value;
  if (key === 'running') return value === '1';
  if (key === 'tauM') return (parseInt(value, 10) / 1000) as PlaygroundState[keyof PlaygroundState]; // ms to seconds
  const num = parseFloat(value);
  return (isNaN(num) ? value : num) as PlaygroundState[keyof PlaygroundState];
}

export function readStateFromURL(): Partial<PlaygroundState> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const state: Record<string, unknown> = {};

  for (const key of Object.keys(URL_PARAMS) as (keyof PlaygroundState)[]) {
    const param = URL_PARAMS[key];
    const val = params.get(param);
    if (val !== null) {
      state[key] = decodeValue(key, val);
    }
  }
  return state as Partial<PlaygroundState>;
}

export const DEFAULT_STATE: PlaygroundState = {
  nNeurons: 24,
  density: 0.15,
  seed: 42,
  mode: "sine",
  freq: 3,
  amplitude: 1.0,
  tauM: 0.015,
  speed: 1.0,
  running: false,
};

export function writeStateToURL(state: PlaygroundState, replace = true): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams();
  let hasParams = false;

  for (const key of Object.keys(URL_PARAMS) as (keyof PlaygroundState)[]) {
    const param = URL_PARAMS[key];
    const val = state[key];
    const def = DEFAULT_STATE[key];
    if (val !== undefined && val !== null && val !== def) {
      params.set(param, encodeValue(key, val));
      hasParams = true;
    }
  }

  const url = hasParams ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
  if (replace) {
    window.history.replaceState({}, '', url);
  } else {
    window.history.pushState({}, '', url);
  }
}