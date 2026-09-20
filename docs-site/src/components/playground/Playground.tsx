/* Playground */
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useSimulation } from "./useSimulation";
import { Visualization } from "./Visualization";
import { Controls } from "./Controls";
import { StatsCode } from "./StatsCode";
import { PlaygroundState } from "./types";
import { presets } from "./presets";
import { generateEquivalenceCode } from "./codegen";
import { readStateFromURL, writeStateToURL, DEFAULT_STATE } from "./urlSync";

interface PlaygroundProps {
  dark: boolean;
}

export default function Playground({ dark }: PlaygroundProps) {
  const [running, setRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [presetKey, setPresetKey] = useState("default");
  const [selectedNeuron, setSelectedNeuron] = useState<number | null>(null);
  const [panZoom, setPanZoom] = useState({ scale: 1, x: 0, y: 0 });

  const [state, setState] = useState<PlaygroundState>(() => {
    const fromURL = readStateFromURL();
    return { ...DEFAULT_STATE, ...fromURL };
  });

  const [tick, setTick] = useState(0);
  const [spikeCount, setSpikeCount] = useState(0);
  const [firingRate, setFiringRate] = useState(0);
  const [activeNeurons, setActiveNeurons] = useState(0);

  const { net, spikes, traces, rebuild } = useSimulation({
    state,
    running,
    onStatsUpdate: (s) => {
      setTick(s.tick);
      setSpikeCount(s.spikeCount);
      setFiringRate(s.firingRate);
      setActiveNeurons(s.activeNeurons);
    },
  });

  useEffect(() => {
    writeStateToURL(state);
  }, [state]);

  const handleChange = useCallback(
    (key: keyof PlaygroundState, value: unknown) => {
      setState((prev) => ({ ...prev, [key]: value }));
      setRunning(false);
    },
    []
  );

  const applyPreset = useCallback((key: string) => {
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
  }, []);

  const handleReset = useCallback(() => {
    setRunning(false);
    rebuild();
  }, [rebuild]);

  const handleRunToggle = useCallback(() => {
    setRunning((r) => !r);
  }, []);

  const copyURL = useCallback(async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 1500);
  }, []);

  const selectedNeuronData = useMemo(() => {
    if (selectedNeuron === null || !net) return null;
    const n = net.neurons[selectedNeuron];
    if (!n) return null;
    const regionLabels: Record<string, string> = {
      visual: "Visual",
      motor: "Motor",
      association: "Association",
      sensory: "Sensory",
    };
    return {
      region: regionLabels[n.region] ?? n.region,
      voltage: n.v.toFixed(3),
      threshold: n.vThresh.toFixed(3),
    };
  }, [selectedNeuron, net, tick]);

  const code = useMemo(
    () =>
      generateEquivalenceCode(
        state.mode,
        state.freq,
        state.amplitude,
        state.nNeurons,
        state.tauM,
        state.density,
        state.seed
      ),
    [state.mode, state.freq, state.amplitude, state.nNeurons, state.tauM, state.density, state.seed]
  );

  const handleCopyCode = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [code]);

  return (
    <div className="pg">
      <div className="pg-topbar">
        <div className="pg-topbar-left">
          <span className="pg-logo">AxonWeave Playground</span>
        </div>
        <div className="pg-topbar-center">
          <div className="pg-presets-row">
            {Object.entries(presets).map(([key, p]) => (
              <button
                key={key}
                className={`pg-preset ${presetKey === key ? "active" : ""}`}
                title={p.desc}
                onClick={() => applyPreset(key)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
        <div className="pg-topbar-right">
          <button className="pg-reset-btn" onClick={handleReset} title="Reset">
            Reset
          </button>
          <button
            className={`pg-run-btn ${running ? "running" : ""}`}
            onClick={handleRunToggle}
          >
            {running ? "Pause" : "Run"}
          </button>
          <button className="pg-reset-btn" onClick={copyURL} title="Share">
            {shared ? "Copied!" : "Share"}
          </button>
        </div>
      </div>
      <div className="pg-alert-row">
        <div className="pg-alert pg-alert-demo">
          DEMO SUBSTRATE {"\u2014"} Not MaleCNS v1.0. This uses {state.nNeurons} random neurons for education.
        </div>
      </div>
      <div className="pg-body">
        <Controls state={state} onChange={handleChange} />
        <div className="pg-center">
          {net && (
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
          )}
        </div>
        <StatsCode
          tick={tick}
          spikeCount={spikeCount}
          firingRate={firingRate}
          activeNeurons={activeNeurons}
          nNeurons={state.nNeurons}
          selectedNeuron={selectedNeuron}
          neuron={net?.neurons[selectedNeuron ?? -1] ?? null}
          code={code}
          copied={copied}
          onCopy={handleCopyCode}
        />
      </div>
    </div>
  );
}
