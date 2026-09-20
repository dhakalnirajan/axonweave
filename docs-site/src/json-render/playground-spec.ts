import type { Spec } from "@json-render/core";
import { PlaygroundState } from "../components/playground/types";
import { presets, presetKeys } from "../components/playground/presets";
import { generateEquivalenceCode } from "../components/playground/codegen";

let _id = 0;
function id(prefix: string) {
  return `${prefix}-${++_id}`;
}

export interface PlaygroundStats {
  tick: number;
  spikeCount: number;
  firingRate: number;
  activeNeurons: number;
  selectedNeuronId: number | null;
  selectedNeuron: {
    region: string;
    voltage: string;
    threshold: string;
  } | null;
}

export interface PlaygroundSpecResult {
  spec: Spec;
  controlsPanelId: string;
}

export function buildPlaygroundSpec(
  state: PlaygroundState,
  stats: PlaygroundStats,
  ui: { running: boolean; shared: boolean; copied: boolean; presetKey: string }
): PlaygroundSpecResult {
  _id = 0;

  const presetLabels: Record<string, string> = {};
  for (const pk of presetKeys) {
    presetLabels[pk] = presets[pk].label;
  }

  const code = generateEquivalenceCode(
    state.mode,
    state.freq,
    state.amplitude,
    state.nNeurons,
    state.tauM,
    state.density,
    state.seed
  );

  const elements: Spec["elements"] = {};

  // TopBar
  const topBarId = id("tb");
  elements[topBarId] = {
    type: "PgTopBar",
    props: {
      logoText: "AxonWeave Playground",
      presetKeys,
      presetLabels,
      activePreset: ui.presetKey,
      running: ui.running,
      shared: ui.shared,
    },
    children: [],
  };

  // Alert
  const alertId = id("al");
  elements[alertId] = {
    type: "PgAlert",
    props: {
      variant: "demo",
      message: `DEMO SUBSTRATE \u2014 Not MaleCNS v1.0. This uses ${state.nNeurons} random neurons for education.`,
    },
    children: [],
  };

  // Network section
  const n1 = id("sl");
  elements[n1] = {
    type: "PgSlider",
    props: { label: "Neurons", value: state.nNeurons, min: 8, max: 40, step: 1, format: null },
    children: [],
  };
  const n2 = id("sl");
  elements[n2] = {
    type: "PgSlider",
    props: { label: "Density", value: state.density, min: 0.05, max: 0.35, step: 0.01, format: "fixed2" },
    children: [],
  };
  const n3 = id("sl");
  elements[n3] = {
    type: "PgSlider",
    props: { label: "Seed", value: state.seed, min: 1, max: 100, step: 1, format: null },
    children: [],
  };
  const netSec = id("sec");
  elements[netSec] = {
    type: "PgSection",
    props: { title: "Network" },
    children: [n1, n2, n3],
  };

  // Dynamics section
  const d1 = id("sl");
  elements[d1] = {
    type: "PgSlider",
    props: { label: "tau_m", value: state.tauM * 1000, min: 5, max: 30, step: 1, format: "ms" },
    children: [],
  };
  const dynSec = id("sec");
  elements[dynSec] = {
    type: "PgSection",
    props: { title: "Dynamics" },
    children: [d1],
  };

  // Input section
  const i1 = id("sel");
  elements[i1] = {
    type: "PgSelect",
    props: {
      label: "Mode",
      value: state.mode,
      options: [
        { value: "sine", label: "Sine" },
        { value: "pulse", label: "Pulse" },
        { value: "burst", label: "Burst" },
        { value: "ramp", label: "Ramp" },
      ],
    },
    children: [],
  };
  const i2 = id("sl");
  elements[i2] = {
    type: "PgSlider",
    props: { label: "Freq", value: state.freq, min: 0.5, max: 10, step: 0.5, format: "hz" },
    children: [],
  };
  const i3 = id("sl");
  elements[i3] = {
    type: "PgSlider",
    props: { label: "Amplitude", value: state.amplitude, min: 0.1, max: 3, step: 0.1, format: "fixed1" },
    children: [],
  };
  const inpSec = id("sec");
  elements[inpSec] = {
    type: "PgSection",
    props: { title: "Input Signal" },
    children: [i1, i2, i3],
  };

  // Playback section
  const p1 = id("sl");
  elements[p1] = {
    type: "PgSlider",
    props: { label: "Speed", value: state.speed, min: 0.2, max: 4, step: 0.2, format: "multiplier" },
    children: [],
  };
  const playSec = id("sec");
  elements[playSec] = {
    type: "PgSection",
    props: { title: "Playback" },
    children: [p1],
  };

  // Controls panel wrapper
  const controlsPanelId = id("cpn");
  elements[controlsPanelId] = {
    type: "PgControlsPanel",
    props: {},
    children: [netSec, dynSec, inpSec, playSec],
  };

  // Stats
  const statsId = id("st");
  elements[statsId] = {
    type: "PgStatsGrid",
    props: {
      stats: [
        { label: "Time", value: `${(stats.tick / 1000).toFixed(2)}s` },
        { label: "Spikes", value: String(stats.spikeCount) },
        { label: "Rate", value: `${stats.firingRate} Hz` },
        { label: "Active", value: `${stats.activeNeurons}/${state.nNeurons}` },
      ],
    },
    children: [],
  };

  // Neuron info
  let neuronInfoId: string | null = null;
  if (stats.selectedNeuronId !== null && stats.selectedNeuron) {
    neuronInfoId = id("ni");
    elements[neuronInfoId] = {
      type: "PgNeuronInfo",
      props: {
        neuronId: stats.selectedNeuronId,
        region: stats.selectedNeuron.region,
        voltage: stats.selectedNeuron.voltage,
        threshold: stats.selectedNeuron.threshold,
      },
      children: [],
    };
  }

  // Code panel
  const codeId = id("cp");
  elements[codeId] = {
    type: "PgCodePanel",
    props: { code, language: "python", copied: ui.copied },
    children: [],
  };

  // Explain cards
  const ec1 = id("ec");
  elements[ec1] = {
    type: "PgExplainCard",
    props: { icon: "zap", title: "LIF Neuron", description: "Membrane integrates current, fires on threshold, resets. tau_m controls leak rate." },
    children: [],
  };
  const ec2 = id("ec");
  elements[ec2] = {
    type: "PgExplainCard",
    props: { icon: "link", title: "Synapses", description: "Spikes propagate via weighted synapses. Excitatory (blue) / inhibitory (red)." },
    children: [],
  };
  const ec3 = id("ec");
  elements[ec3] = {
    type: "PgExplainCard",
    props: { icon: "activity", title: "Regions", description: "Visual, Motor, Association, Sensory. Real MaleCNS uses cell-type annotations." },
    children: [],
  };
  const ec4 = id("ec");
  elements[ec4] = {
    type: "PgExplainCard",
    props: { icon: "alert", title: "Demo Only", description: `Real MaleCNS: 166,700 neurons. This uses ${state.nNeurons} random ones.` },
    children: [],
  };

  // Canvas slot
  const canvasId = id("cv");
  elements[canvasId] = {
    type: "PgCanvasSlot",
    props: {},
    children: [],
  };

  return {
    spec: { root: topBarId, elements },
    controlsPanelId,
  };
}
