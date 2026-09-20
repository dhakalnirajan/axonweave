/* Drawing functions — all use logical (CSS) dimensions */

import { Neuron, Synapse, Spike, Network, Region, REGIONS, REGION_COLORS, REGION_LABELS } from './types';
import { getCanvasLogicalSize, getThemeColor, resizeCanvas } from './canvas';

export { getCanvasLogicalSize, getThemeColor, resizeCanvas };

export interface Transform {
  scale: number;
  x: number;
  y: number;
}

export function drawNeuronMap(
  canvas: HTMLCanvasElement,
  neurons: Neuron[],
  synapses: Synapse[],
  currentTick: number,
  dark: boolean,
  transform: Transform = { scale: 1, x: 0, y: 0 },
  selectedNeuron: number | null = null,
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const { w: W, h: H } = getCanvasLogicalSize(canvas);
  const bg = getThemeColor('--bg') || (dark ? '#10151b' : '#f6f7f8');
  const textColor = getThemeColor('--muted') || (dark ? '#aeb8c2' : '#55616b');

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  const pad = 24;
  const sx = (v: number) => pad + v * (W - 2 * pad);
  const sy = (v: number) => pad + v * (H - 2 * pad);

  // Apply transform
  ctx.save();
  ctx.translate(transform.x, transform.y);
  ctx.scale(transform.scale, transform.scale);

  // Draw synapses — glow if recently active
  for (const syn of synapses) {
    const pre = neurons[syn.pre];
    const post = neurons[syn.post];
    const age = currentTick - syn.lastActiveTick;
    const isActive = age >= 0 && age < 60;
    const isExcit = syn.weight > 0;

    ctx.beginPath();
    ctx.moveTo(sx(pre.x), sy(pre.y));
    ctx.lineTo(sx(post.x), sy(post.y));

    if (isActive) {
      const alpha = 0.2 + 0.6 * (1 - age / 60);
      ctx.strokeStyle = isExcit
        ? `rgba(77,143,214,${alpha})`
        : `rgba(238,76,44,${alpha})`;
      ctx.lineWidth = 1.5 + (1 - age / 60) * 1.5;
    } else {
      ctx.strokeStyle = (getThemeColor('--line') || (dark ? '#2a343e' : '#d9dfe4')) + '40';
      ctx.lineWidth = 0.5;
    }
    ctx.stroke();
  }

  // Draw neurons
  for (const n of neurons) {
    const x = sx(n.x), y = sy(n.y);
    const spikeAge = currentTick - n.lastSpikeTick;
    const spiked = spikeAge >= 0 && spikeAge < 80;
    const vNorm = Math.max(0, Math.min(1, (n.v - n.vRest) / (n.vThresh - n.vRest)));
    const baseColor = REGION_COLORS[n.region] || '#8dc4d8';
    const isSelected = selectedNeuron === n.id;

    // Spike glow (fading)
    if (spiked) {
      const glowAlpha = 0.35 * (1 - spikeAge / 80);
      const glowR = 12 + spikeAge * 0.05;
      ctx.beginPath();
      ctx.arc(x, y, glowR, 0, Math.PI * 2);
      ctx.fillStyle = baseColor;
      ctx.globalAlpha = glowAlpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // Neuron body
    const r = spiked ? 7 : 5.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = spiked ? baseColor : (getThemeColor('--surface-2') || (dark ? '#1b242d' : '#eef1f3'));
    ctx.fill();
    ctx.strokeStyle = isSelected ? '#fff' : baseColor;
    ctx.lineWidth = isSelected ? 3 : (spiked ? 2.5 : 1);
    ctx.stroke();

    // Selection ring
    if (isSelected) {
      ctx.beginPath();
      ctx.arc(x, y, r + 4, 0, Math.PI * 2);
      ctx.strokeStyle = '#8dc4d8';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Membrane potential bar
    const barW = 3, barH = 18;
    const barX = x + r + 4, barY = y - barH / 2;
    // Track background
    ctx.fillStyle = getThemeColor('--surface') || (dark ? '#151c23' : '#ffffff');
    ctx.fillRect(barX, barY, barW, barH);
    // Fill based on voltage
    const fillH = Math.max(1, barH * vNorm);
    const fillColor = vNorm > 0.85 ? '#ee4c2c' : vNorm > 0.5 ? '#e8a13c' : baseColor;
    ctx.fillStyle = fillColor;
    ctx.fillRect(barX, barY + barH - fillH, barW, fillH);
    // Border
    ctx.strokeStyle = getThemeColor('--line') || (dark ? '#2a343e' : '#d9dfe4');
    ctx.lineWidth = 0.5;
    ctx.strokeRect(barX, barY, barW, barH);

    // Neuron ID (every 4th neuron)
    if (n.id % 4 === 0) {
      ctx.fillStyle = textColor;
      ctx.font = '9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`N${n.id}`, x, y - r - 4);
    }
  }

  // Legend
  ctx.font = '11px IBM Plex Sans, sans-serif';
  ctx.textAlign = 'left';
  const legendY = H - 10;
  let legendX = 10;
  for (const region of REGIONS) {
    ctx.fillStyle = REGION_COLORS[region];
    ctx.beginPath();
    ctx.arc(legendX + 5, legendY - 3, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = textColor;
    const label = REGION_LABELS[region];
    ctx.fillText(label, legendX + 14, legendY);
    legendX += ctx.measureText(label).width + 24;
  }

  // Layer labels at top
  ctx.font = '10px IBM Plex Sans, sans-serif';
  ctx.fillStyle = textColor;
  ctx.globalAlpha = 0.6;
  ctx.textAlign = 'center';
  ctx.fillText('INPUT', sx(0.15), 14);
  ctx.fillText('PROCESSING', sx(0.5), 14);
  ctx.fillText('OUTPUT', sx(0.85), 14);
  ctx.globalAlpha = 1;

  // Vertical dashed layer separators
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = textColor;
  ctx.globalAlpha = 0.15;
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(sx(0.32), pad); ctx.lineTo(sx(0.32), H - pad); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(sx(0.68), pad); ctx.lineTo(sx(0.68), H - pad); ctx.stroke();
  ctx.setLineDash([]);
  ctx.globalAlpha = 1;

  ctx.restore();
}

export function drawRaster(
  canvas: HTMLCanvasElement,
  spikes: Spike[],
  currentTick: number,
  nNeurons: number,
  dark: boolean,
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const { w: W, h: H } = getCanvasLogicalSize(canvas);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = getThemeColor('--bg') || (dark ? '#10151b' : '#f6f7f8');
  ctx.fillRect(0, 0, W, H);

  // Grid
  ctx.strokeStyle = (getThemeColor('--line') || (dark ? '#2a343e' : '#d9dfe4')) + '55';
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= 4; i++) {
    const y = (H / 4) * i;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  // Time axis labels
  const rtColor = getThemeColor('--muted') || (dark ? '#aeb8c2' : '#55616b');
  ctx.fillStyle = rtColor;
  ctx.font = '9px monospace';
  ctx.textAlign = 'center';
  const windowMs = 600;
  for (let i = 0; i <= 4; i++) {
    const ms = Math.round((currentTick - windowMs) + (windowMs / 4) * i);
    ctx.fillText(`${(ms / 1000).toFixed(1)}s`, (W / 4) * i, H - 3);
  }

  // Draw spikes
  const startTick = Math.max(0, currentTick - windowMs);
  for (const s of spikes) {
    if (s.time < startTick) continue;
    const x = ((s.time - startTick) / windowMs) * W;
    const y = (s.neuron / Math.max(1, nNeurons - 1)) * (H - 16) + 4;
    const region = REGIONS[s.neuron % REGIONS.length];
    const age = (currentTick - s.time) / windowMs;
    ctx.fillStyle = REGION_COLORS[region];
    ctx.globalAlpha = Math.max(0.25, 1 - age);
    ctx.fillRect(x, y - 1.5, 2.5, 3);
    ctx.globalAlpha = 1;
  }

  // Y-axis labels
  ctx.fillStyle = rtColor;
  ctx.font = '9px monospace';
  ctx.textAlign = 'left';
  ctx.fillText(`N${nNeurons - 1}`, 2, 14);
  ctx.fillText('N0', 2, H - 16);
}

export function drawVoltageTrace(
  canvas: HTMLCanvasElement,
  traces: number[][],
  dark: boolean,
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const { w: W, h: H } = getCanvasLogicalSize(canvas);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = getThemeColor('--bg') || (dark ? '#10151b' : '#f6f7f8');
  ctx.fillRect(0, 0, W, H);

  // Grid
  ctx.strokeStyle = (getThemeColor('--line') || (dark ? '#2a343e' : '#d9dfe4')) + '55';
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= 4; i++) {
    const y = (H / 4) * i;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  const vMin = -0.075, vMax = -0.035;
  const traceLen = 250;
  const colors = ['#4d8fd6', '#ee4c2c', '#8dc4d8', '#3ca878', '#c792ea'];

  for (let t = 0; t < Math.min(5, traces.length); t++) {
    const trace = traces[t];
    if (!trace || trace.length === 0) continue;
    ctx.beginPath();
    ctx.strokeStyle = colors[t];
    ctx.lineWidth = 1.3;
    ctx.globalAlpha = 0.9;
    const len = Math.min(traceLen, trace.length);
    const start = trace.length - len;
    for (let i = 0; i < len; i++) {
      const x = (i / (traceLen - 1)) * W;
      const v = trace[start + i];
      const y = H - 8 - ((v - vMin) / (vMax - vMin)) * (H - 16);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  // Labels
  const vtColor = getThemeColor('--muted') || (dark ? '#aeb8c2' : '#55616b');
  ctx.fillStyle = vtColor;
  ctx.font = '9px monospace';
  ctx.textAlign = 'right';
  ctx.fillText('-35mV', W - 4, 14);
  ctx.fillText('-75mV', W - 4, H - 6);

  // Threshold line
  const threshY = H - 8 - ((-0.050 - vMin) / (vMax - vMin)) * (H - 16);
  ctx.setLineDash([4, 3]);
  ctx.strokeStyle = '#ee4c2c';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, threshY); ctx.lineTo(W, threshY); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#ee4c2c';
  ctx.textAlign = 'left';
  ctx.fillText('threshold', 4, threshY - 4);
}

export function drawInputWaveform(
  canvas: HTMLCanvasElement,
  mode: string,
  freq: number,
  amp: number,
  currentT: number,
  dark: boolean,
  generateInput: (t: number, n: number, mode: string, freq: number, amp: number) => number[],
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const { w: W, h: H } = getCanvasLogicalSize(canvas);
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = getThemeColor('--bg') || (dark ? '#10151b' : '#f6f7f8');
  ctx.fillRect(0, 0, W, H);

  // Grid
  ctx.strokeStyle = (getThemeColor('--line') || (dark ? '#2a343e' : '#d9dfe4')) + '50';
  ctx.lineWidth = 0.5;
  const midY = H / 2;
  ctx.beginPath(); ctx.moveTo(0, midY); ctx.lineTo(W, midY); ctx.stroke();

  // Draw waveform
  const windowSec = 1.0 / freq * 3; // show 3 periods
  const tStart = Math.max(0, currentT - windowSec);
  ctx.beginPath();
  ctx.strokeStyle = '#8dc4d8';
  ctx.lineWidth = 1.5;
  const nPts = 200;
  for (let i = 0; i < nPts; i++) {
    const t = tStart + (i / nPts) * windowSec;
    const input = generateInput(t, 1, mode, freq, amp);
    const val = input[0] || 0;
    const x = (i / nPts) * W;
    // Map val to canvas: 0 = midY, positive = up
    const maxVal = 0.04;
    const y = midY - (val / maxVal) * (H / 2 - 8);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Labels
  const iwColor = getThemeColor('--muted') || (dark ? '#aeb8c2' : '#55616b');
  ctx.fillStyle = iwColor;
  ctx.font = '9px monospace';
  ctx.textAlign = 'left';
  ctx.fillText(mode.toUpperCase(), 4, 14);
  ctx.fillText(`${freq}Hz`, 4, 26);
}