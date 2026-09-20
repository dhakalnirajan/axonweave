/* Playground Controls — left panel */

import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import * as Select from '@radix-ui/react-select';
import { FiChevronDown } from 'react-icons/fi';
import { PlaygroundState } from './types';

interface PgSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
}

export function PgSlider({ label, value, min, max, step, onChange, format }: PgSliderProps) {
  return (
    <div className="pg-ctrl">
      <span className="pg-ctrl-name">{label}</span>
      <Slider.Root className="pg-slider" value={[value]} min={min} max={max} step={step}
        onValueChange={([v]) => onChange(v)}>
        <Slider.Track className="pg-slider-track">
          <Slider.Range className="pg-slider-range" />
        </Slider.Track>
        <Slider.Thumb className="pg-slider-thumb" />
      </Slider.Root>
      <span className="pg-ctrl-val">{format ? format(value) : value}</span>
    </div>
  );
}

interface PgSelectProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}

export function PgSelect({ label, value, options, onChange }: PgSelectProps) {
  return (
    <div className="pg-ctrl">
      <span className="pg-ctrl-name">{label}</span>
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger className="pg-select-trigger">
          <Select.Value />
          <Select.Icon><FiChevronDown size={12} /></Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="pg-select-content" position="popper" sideOffset={4}>
            <Select.Viewport className="pg-select-viewport">
              {options.map(o => (
                <Select.Item key={o.value} value={o.value} className="pg-select-item">
                  <Select.ItemText>{o.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

interface ControlsProps {
  state: PlaygroundState;
  onChange: (key: keyof PlaygroundState, value: unknown) => void;
}

export function Controls({ state, onChange }: ControlsProps) {
  return (
    <div className="pg-left">
      <div className="pg-col-header">Parameters</div>
      <div className="pg-ctrl-group">
        <label className="pg-ctrl-label">Network</label>
        <PgSlider label="Neurons" value={state.nNeurons} min={8} max={40} step={1}
          onChange={v => onChange('nNeurons', v)} />
        <PgSlider label="Density" value={state.density} min={0.05} max={0.35} step={0.01}
          onChange={v => onChange('density', v)} format={v => v.toFixed(2)} />
        <PgSlider label="Seed" value={state.seed} min={1} max={100} step={1}
          onChange={v => onChange('seed', v)} />
      </div>
      <div className="pg-ctrl-group">
        <label className="pg-ctrl-label">Dynamics</label>
        <PgSlider label="tau_m" value={state.tauM * 1000} min={5} max={30} step={1}
          onChange={v => onChange('tauM', v / 1000)} format={v => `${v.toFixed(0)}ms`} />
      </div>
      <div className="pg-ctrl-group">
        <label className="pg-ctrl-label">Input Signal</label>
        <PgSelect label="Mode" value={state.mode} onChange={v => onChange('mode', v)} options={[
          { value: 'sine', label: 'Sine' },
          { value: 'pulse', label: 'Pulse' },
          { value: 'burst', label: 'Burst' },
          { value: 'ramp', label: 'Ramp' },
        ]} />
        <PgSlider label="Freq" value={state.freq} min={0.5} max={10} step={0.5}
          onChange={v => onChange('freq', v)} format={v => `${v} Hz`} />
        <PgSlider label="Amplitude" value={state.amplitude} min={0.1} max={3} step={0.1}
          onChange={v => onChange('amplitude', v)} format={v => v.toFixed(1)} />
      </div>
      <div className="pg-ctrl-group">
        <label className="pg-ctrl-label">Playback</label>
        <PgSlider label="Speed" value={state.speed} min={0.2} max={4} step={0.2}
          onChange={v => onChange('speed', v)} format={v => `${v.toFixed(1)}x`} />
      </div>
    </div>
  );
}