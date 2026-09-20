/* Playground Stats + Code — right panel */

import React, { useEffect, useRef } from 'react';
import { FiZap, FiLink, FiActivity, FiAlertTriangle, FiCopy, FiCheck, FiInfo } from 'react-icons/fi';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import { Neuron } from './types';

interface StatsCodeProps {
  tick: number;
  spikeCount: number;
  firingRate: number;
  activeNeurons: number;
  nNeurons: number;
  code: string;
  onCopy: () => void;
  copied: boolean;
  selectedNeuron: number | null;
  neuron: Neuron | null;
}

export function StatsCode({
  tick, spikeCount, firingRate, activeNeurons, nNeurons, code,
  onCopy, copied, selectedNeuron, neuron
}: StatsCodeProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) Prism.highlightElement(codeRef.current);
  }, [code]);

  return (
    <div className="pg-right">
      <div className="pg-stats-grid">
        <div className="pg-stat"><span className="pg-stat-label">Time</span><span className="pg-stat-value">{(tick / 1000).toFixed(2)}s</span></div>
        <div className="pg-stat"><span className="pg-stat-label">Spikes</span><span className="pg-stat-value">{spikeCount}</span></div>
        <div className="pg-stat"><span className="pg-stat-label">Rate</span><span className="pg-stat-value">{firingRate} Hz</span></div>
        <div className="pg-stat"><span className="pg-stat-label">Active</span><span className="pg-stat-value">{activeNeurons}/{nNeurons}</span></div>
      </div>

      {selectedNeuron !== null && neuron && (
        <div className="pg-stats-grid" style={{marginTop: 8, borderTop: '1px solid var(--line)', paddingTop: 8}}>
          <div className="pg-stat"><span className="pg-stat-label">Neuron</span><span className="pg-stat-value">N{selectedNeuron}</span></div>
          <div className="pg-stat"><span className="pg-stat-label">Region</span><span className="pg-stat-value">{neuron.region}</span></div>
          <div className="pg-stat"><span className="pg-stat-label">V_m</span><span className="pg-stat-value">{(neuron.v * 1000).toFixed(1)}mV</span></div>
          <div className="pg-stat"><span className="pg-stat-label">Threshold</span><span className="pg-stat-value">{(neuron.vThresh * 1000).toFixed(1)}mV</span></div>
        </div>
      )}

      <div className="pg-code-panel">
        <div className="pg-code-header">
          <span>AxonWeave Code</span>
          <div className="pg-code-actions">
            <span className="pg-lang-chip">python</span>
            <button className="pg-copy-btn" onClick={onCopy} aria-label="Copy code">
              {copied ? <><FiCheck size={12}/> Copied</> : <><FiCopy size={12}/> Copy</>}
            </button>
          </div>
        </div>
        <div className="pg-code-body">
          <pre><code ref={codeRef} className="language-python">{code}</code></pre>
        </div>
      </div>
      <div className="pg-explain">
        <h3>How this works</h3>
        <div className="pg-explain-grid">
          <div className="pg-explain-card"><FiZap size={18}/><h4>LIF Neuron</h4><p>Membrane integrates current, fires on threshold, resets. tau_m controls leak rate.</p></div>
          <div className="pg-explain-card"><FiLink size={18}/><h4>Synapses</h4><p>Spikes propagate via weighted synapses. Excitatory (blue) / inhibitory (red).</p></div>
          <div className="pg-explain-card"><FiActivity size={18}/><h4>Regions</h4><p>Visual, Motor, Association, Sensory. Real MaleCNS uses cell-type annotations.</p></div>
          <div className="pg-explain-card"><FiAlertTriangle size={18}/><h4>Demo Only</h4><p>Real MaleCNS: 166,700 neurons. This uses {nNeurons} random ones.</p></div>
        </div>
      </div>
    </div>
  );
}