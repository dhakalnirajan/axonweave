/* Playground Visualization — center panel */

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Neuron, Synapse, Spike } from './types';
import { drawNeuronMap, drawRaster, drawVoltageTrace, drawInputWaveform, getCanvasLogicalSize, getThemeColor } from './drawing';
import { generateInput } from './simulation';

interface VisualizationProps {
  neurons: Neuron[];
  synapses: Synapse[];
  spikes: Spike[];
  tick: number;
  nNeurons: number;
  traces: number[][];
  mode: string;
  freq: number;
  amplitude: number;
  dark: boolean;
  selectedNeuron?: number | null;
  onSelectNeuron?: (id: number | null) => void;
  onPanZoom?: (transform: { scale: number; x: number; y: number }) => void;
  panZoom?: { scale: number; x: number; y: number };
}

const DEFAULT_TRANSFORM = { scale: 1, x: 0, y: 0 };

function transformPoint(
  x: number, y: number,
  transform: { scale: number; x: number; y: number },
  canvas: HTMLCanvasElement,
  pad: number,
): { x: number; y: number } {
  const { w: W, h: H } = getCanvasLogicalSize(canvas);
  const sx = (v: number) => pad + v * (W - 2 * pad);
  const sy = (v: number) => pad + v * (H - 2 * pad);
  return {
    x: (sx(x) - transform.x) / transform.scale,
    y: (sy(y) - transform.y) / transform.scale,
  };
}

function getNeuronAtPoint(
  clientX: number, clientY: number,
  neurons: Neuron[],
  transform: { scale: number; x: number; y: number },
  canvas: HTMLCanvasElement,
  pad: number,
): number | null {
  const rect = canvas.getBoundingClientRect();
  const x = (clientX - rect.left) / (window.devicePixelRatio || 1);
  const y = (clientY - rect.top) / (window.devicePixelRatio || 1);
  const { w: W, h: H } = getCanvasLogicalSize(canvas);
  const sx = (v: number) => pad + v * (W - 2 * pad);
  const sy = (v: number) => pad + v * (H - 2 * pad);

  // Check in reverse order so topmost neurons are hit first
  for (let i = neurons.length - 1; i >= 0; i--) {
    const n = neurons[i];
    const nx = (sx(n.x) - transform.x) * transform.scale + transform.x;
    const ny = (sy(n.y) - transform.y) * transform.scale + transform.y;
    const r = 7 * transform.scale; // spiked radius as max
    const dx = x - nx;
    const dy = y - ny;
    if (dx * dx + dy * dy <= r * r) return n.id;
  }
  return null;
}

export function Visualization({
  neurons, synapses, spikes, tick, nNeurons, traces,
  mode, freq, amplitude, dark,
  selectedNeuron, onSelectNeuron, onPanZoom, panZoom = DEFAULT_TRANSFORM
}: VisualizationProps) {
  const mapCanvasRef = useRef<HTMLCanvasElement>(null);
  const rasterCanvasRef = useRef<HTMLCanvasElement>(null);
  const voltageCanvasRef = useRef<HTMLCanvasElement>(null);
  const inputCanvasRef = useRef<HTMLCanvasElement>(null);
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef({ x: 0, y: 0, transform: { scale: 1, x: 0, y: 0 } });
  const didPanRef = useRef(false);
  const DRAG_THRESHOLD = 3;

  const drawAll = useCallback(() => {
    if (mapCanvasRef.current) drawNeuronMap(mapCanvasRef.current, neurons, synapses, tick, dark, transform, selectedNeuron);
    if (rasterCanvasRef.current) drawRaster(rasterCanvasRef.current, spikes, tick, nNeurons, dark);
    if (voltageCanvasRef.current) drawVoltageTrace(voltageCanvasRef.current, traces, dark);
    if (inputCanvasRef.current) drawInputWaveform(inputCanvasRef.current, mode, freq, amplitude, tick / 1000, dark, generateInput);
  }, [neurons, synapses, spikes, tick, nNeurons, traces, mode, freq, amplitude, dark, transform, selectedNeuron]);

  useEffect(() => { drawAll(); }, [drawAll]);

  // Sync transform from props (avoid loop: only update if different)
  useEffect(() => {
    if (panZoom && (panZoom.scale !== transform.scale || panZoom.x !== transform.x || panZoom.y !== transform.y)) {
      setTransform(panZoom);
    }
  }, [panZoom]);

  // Resize handling
  useEffect(() => {
    const canvases = [mapCanvasRef.current, rasterCanvasRef.current, voltageCanvasRef.current, inputCanvasRef.current].filter(Boolean) as HTMLCanvasElement[];
    const resize = () => { canvases.forEach(c => { if (c) { c.width = c.parentElement?.clientWidth || 300; c.height = c.parentElement?.clientHeight || 200; } }); drawAll(); };
    const ro = new ResizeObserver(resize);
    canvases.forEach(c => { if (c?.parentElement) ro.observe(c.parentElement); });
    return () => ro.disconnect();
  }, [drawAll]);

  // Mouse interaction — left-click drag pans, left-click tap selects neuron
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.button === 0) {
      e.preventDefault();
      didPanRef.current = false;
      setIsPanning(true);
      panStartRef.current = { x: e.clientX, y: e.clientY, transform };
    } else if (e.button === 1) {
      e.preventDefault();
      didPanRef.current = true;
      setIsPanning(true);
      panStartRef.current = { x: e.clientX, y: e.clientY, transform };
    }
  }, [transform]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isPanning) return;
    const dx = e.clientX - panStartRef.current.x;
    const dy = e.clientY - panStartRef.current.y;
    if (!didPanRef.current && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
      didPanRef.current = true;
    }
    if (!didPanRef.current) return;
    const newTransform = {
      ...panStartRef.current.transform,
      x: panStartRef.current.transform.x + dx,
      y: panStartRef.current.transform.y + dy,
    };
    setTransform(newTransform);
    if (onPanZoom) onPanZoom(newTransform);
  }, [isPanning, onPanZoom]);

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  // Native wheel listener with { passive: false } to allow preventDefault
  useEffect(() => {
    const canvas = mapCanvasRef.current;
    if (!canvas) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.min(5, Math.max(0.5, transform.scale * zoomFactor));
      const newTransform = {
        scale: newScale,
        x: mouseX - (mouseX - transform.x) * (newScale / transform.scale),
        y: mouseY - (mouseY - transform.y) * (newScale / transform.scale),
      };
      setTransform(newTransform);
      if (onPanZoom) onPanZoom(newTransform);
    };
    canvas.addEventListener('wheel', onWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', onWheel);
  }, [transform, onPanZoom]);

  const handleDoubleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = mapCanvasRef.current;
    if (!canvas) return;
    const neuronId = getNeuronAtPoint(e.clientX, e.clientY, neurons, transform, canvas, 24);
    if (onSelectNeuron) onSelectNeuron(neuronId);
  }, [neurons, transform, onSelectNeuron]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (didPanRef.current) return; // Don't select if we dragged
    const canvas = mapCanvasRef.current;
    if (!canvas) return;
    const neuronId = getNeuronAtPoint(e.clientX, e.clientY, neurons, transform, canvas, 24);
    if (onSelectNeuron) onSelectNeuron(neuronId);
  }, [neurons, transform, onSelectNeuron]);

  const canvasStyle = { width: '100%', height: '100%', display: 'block' as const, cursor: isPanning ? 'grabbing' : 'grab' };

  return (
    <div className="pg-center">
      <div className="pg-viz-main">
        <div className="pg-panel">
          <div className="pg-panel-title">Neuron Map</div>
          <div className="pg-canvas-wrap">
            <canvas
              ref={mapCanvasRef}
              style={canvasStyle}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onDoubleClick={handleDoubleClick}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div className="pg-viz-row">
        <div className="pg-panel"><div className="pg-panel-title">Spike Raster</div><div className="pg-canvas-wrap"><canvas ref={rasterCanvasRef} style={canvasStyle} /></div></div>
        <div className="pg-panel"><div className="pg-panel-title">Membrane Traces</div><div className="pg-canvas-wrap"><canvas ref={voltageCanvasRef} style={canvasStyle} /></div></div>
        <div className="pg-panel"><div className="pg-panel-title">Input Waveform</div><div className="pg-canvas-wrap"><canvas ref={inputCanvasRef} style={canvasStyle} /></div></div>
      </div>
    </div>
  );
}