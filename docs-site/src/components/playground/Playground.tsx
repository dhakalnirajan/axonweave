/* Playground main component — composes all sub-components */

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { FiZap, FiLink, FiActivity, FiAlertTriangle, FiPlay, FiPause, FiRotateCw, FiCopy, FiCheck, FiChevronDown, FiShare2 } from 'react-icons/fi';
import { useSimulation } from './useSimulation';
import { TopBar } from './TopBar';
import { Controls } from './Controls';
import { Visualization } from './Visualization';
import { StatsCode } from './StatsCode';
import { generateEquivalenceCode } from './codegen';
import { presets, Preset } from './presets';
import { PlaygroundState } from './types';
import { readStateFromURL, writeStateToURL } from './urlSync';

interface PlaygroundProps { dark: boolean; }

export default function Playground({ dark }: PlaygroundProps) {
  // Local UI state (not simulation state)
  const [running, setRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [preset, setPreset] = useState('default');
  const [presetKey, setPresetKey] = useState('default');
  const [selectedNeuron, setSelectedNeuron] = useState<number | null>(null);
  const [panZoom, setPanZoom] = useState({ scale: 1, x: 0, y: 0 });

  // Initialize state from URL
  const [state, setState] = useState<PlaygroundState>(() => {
    const defaults: PlaygroundState = {
      nNeurons: 24,
      density: 0.15,
      seed: 42,
      mode: 'sine',
      freq: 3,
      amplitude: 1.0,
      tauM: 0.015,
      speed: 1.0,
      running: false,
    };
    const fromURL = readStateFromURL();
    return { ...defaults, ...fromURL };
  });

  // Derived stats from simulation
  const [tick, setTick] = useState(0);
  const [spikeCount, setSpikeCount] = useState(0);
  const [firingRate, setFiringRate] = useState(0);
  const [activeNeurons, setActiveNeurons] = useState(0);

  // Simulation hook
  const { net, spikes, traces, rebuild } = useSimulation({
    state,
    running,
    onStatsUpdate: ({ tick, spikeCount, firingRate, activeNeurons }) => {
      setTick(tick);
      setSpikeCount(spikeCount);
      setFiringRate(firingRate);
      setActiveNeurons(activeNeurons);
    },
  });

  // Sync state to URL
  useEffect(() => {
    writeStateToURL(state);
  }, [state]);

  // Handle state changes
  const handleChange = useCallback((key: keyof PlaygroundState, value: unknown) => {
    setState(prev => ({ ...prev, [key]: value }));
    setRunning(false);
  }, []);

  // Apply preset
  const applyPreset = (key: string) => {
    const p = presets[key];
    if (!p) return;
    setPresetKey(key);
    setRunning(false);
    setState({
      nNeurons: p.n,
      density: p.d,
      seed: p.s,
      mode: p.m,
      freq: p.f,
      amplitude: p.a,
      tauM: p.t / 1000,
      speed: 1.0,
      running: false,
    });
  };

  const handleReset = useCallback(() => {
    setRunning(false);
    rebuild();
  }, [rebuild]);

  const handleRunToggle = useCallback(() => {
    setRunning(r => !r);
  }, []);

  const copyURL = useCallback(async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 1500);
  }, []);

  // Generate equivalence code
  const code = useMemo(
    () => generateEquivalenceCode(state.mode, state.freq, state.amplitude, state.nNeurons, state.tauM, state.density, state.seed),
    [state.mode, state.freq, state.amplitude, state.nNeurons, state.tauM, state.density, state.seed],
  );

  const copyCode = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [code]);

  return (
    <div className="pg">
      <TopBar
        state={state}
        running={running}
        preset={presetKey}
        onPresetChange={applyPreset}
        onRunToggle={handleRunToggle}
        onReset={handleReset}
        onCopyURL={copyURL}
        shared={shared}
      />
      <div className="pg-body">
        <Controls state={state} onChange={handleChange} />
        <Visualization
          neurons={net.neurons}
          synapses={net.synapses}
          spikes={spikes}
          tick={tick}
          nNeurons={state.nNeurons}
          traces={traces}
          mode={state.mode}
          freq={state.freq}
          amplitude={state.amplitude}
          dark={dark}
          selectedNeuron={selectedNeuron}
          onSelectNeuron={setSelectedNeuron}
          panZoom={panZoom}
          onPanZoom={setPanZoom}
        />
        <StatsCode
          tick={tick}
          spikeCount={spikeCount}
          firingRate={firingRate}
          activeNeurons={activeNeurons}
          nNeurons={state.nNeurons}
          code={code}
          onCopy={copyCode}
          copied={copied}
          selectedNeuron={selectedNeuron}
          neuron={selectedNeuron !== null ? net.neurons[selectedNeuron] : null}
        />
      </div>
    </div>
  );
}