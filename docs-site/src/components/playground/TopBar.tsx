/* Playground TopBar — presets, run/reset */

import React from 'react';
import { FiZap, FiRotateCw, FiPlay, FiPause, FiShare2, FiCheck } from 'react-icons/fi';
import { presets, presetKeys } from './presets';
import { PlaygroundState } from './types';

interface TopBarProps {
  state: PlaygroundState;
  running: boolean;
  preset: string;
  onPresetChange: (key: string) => void;
  onRunToggle: () => void;
  onReset: () => void;
  onCopyURL: () => void;
  shared: boolean;
}

export function TopBar({ state, running, preset, onPresetChange, onRunToggle, onReset, onCopyURL, shared }: TopBarProps) {
  return (
    <div className="pg-topbar">
      <div className="pg-topbar-left">
        <span className="pg-logo"><FiZap size={16}/> AxonWeave Playground</span>
      </div>
      <div className="pg-topbar-center">
        <div className="pg-presets-row">
          {presetKeys.map(key => {
            const p = presets[key];
            return (
              <button key={key}
                className={`pg-preset ${preset === key ? 'active' : ''}`}
                onClick={() => onPresetChange(key)}
                title={p.desc}>
                {p.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="pg-topbar-right">
        <button className="pg-reset-btn" onClick={onReset} title="Reset"><FiRotateCw size={14}/></button>
        <button className={`pg-run-btn ${running ? 'running' : ''}`} onClick={onRunToggle}>
          {running ? <><FiPause size={14}/> Pause</> : <><FiPlay size={14}/> Run</>}
        </button>
        <button className="pg-reset-btn" onClick={onCopyURL} title="Copy shareable URL">
          {shared ? <FiCheck size={14} style={{color: '#3ca878'}}/> : <FiShare2 size={14}/>}
        </button>
      </div>
    </div>
  );
}