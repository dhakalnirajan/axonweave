/* Playground simulation hook — extracted from Playground.tsx */

import { useRef, useCallback, useEffect, useState } from 'react';
import { generateNetwork, simulateStep, generateInput, Network, Neuron, Synapse, Spike } from './simulation';
import { PlaygroundState } from './types';

interface UseSimulationProps {
  state: PlaygroundState;
  running: boolean;
  onStatsUpdate: (stats: { tick: number; spikeCount: number; firingRate: number; activeNeurons: number }) => void;
}

export function useSimulation({ state, running, onStatsUpdate }: UseSimulationProps) {
  const { nNeurons, density, seed, mode, freq, amplitude, speed, tauM } = state;

  // Mutable simulation state (refs for performance)
  const netRef = useRef<Network>(generateNetwork(nNeurons, density, seed));
  const spikesRef = useRef<Spike[]>([]);
  const tickRef = useRef(0);
  const tracesRef = useRef<number[][]>([]);
  const animRef = useRef<number>(0);
  const lastFrameRef = useRef(0);
  const rateWindowRef = useRef<number[]>([]);
  const totalSpikeRef = useRef(0);

  // Rebuild network
  const rebuild = useCallback(() => {
    const net = generateNetwork(nNeurons, density, seed);
    netRef.current = net;
    spikesRef.current = [];
    tickRef.current = 0;
    tracesRef.current = net.neurons.map(n => [n.v]);
    rateWindowRef.current = [];
    totalSpikeRef.current = 0;
    onStatsUpdate({ tick: 0, spikeCount: 0, firingRate: 0, activeNeurons: 0 });
  }, [nNeurons, density, seed, onStatsUpdate]);

  useEffect(rebuild, [rebuild]);

  // Simulation + render loop
  useEffect(() => {
    if (!running) {
      cancelAnimationFrame(animRef.current);
      return;
    }

    const loop = (ts: number) => {
      if (ts - lastFrameRef.current > 16) {
        const stepsPerFrame = Math.max(1, Math.round(speed * 4));
        let newSpikesAll: Spike[] = [];

        for (let i = 0; i < stepsPerFrame; i++) {
          const t = tickRef.current;
          const net = netRef.current;
          const input = generateInput(t / 1000, net.neurons.length, mode, freq, amplitude);
          const newSpikes = simulateStep(net.neurons, net.synapses, input, 0.001, t);
          newSpikesAll.push(...newSpikes);
          spikesRef.current.push(...newSpikes);
          tickRef.current += 1;

          // Record traces
          for (let j = 0; j < Math.min(5, net.neurons.length); j++) {
            tracesRef.current[j] = tracesRef.current[j] || [];
            tracesRef.current[j].push(net.neurons[j].v);
            if (tracesRef.current[j].length > 400) tracesRef.current[j].shift();
          }
        }

        totalSpikeRef.current += newSpikesAll.length;

        // Firing rate (spikes/sec over last 200ms window)
        rateWindowRef.current.push(newSpikesAll.length);
        if (rateWindowRef.current.length > 200) rateWindowRef.current.shift();
        const totalInWindow = rateWindowRef.current.reduce((a, b) => a + b, 0);

        // Active neurons (spiked in last 200ms)
        const activeSet = new Set<number>();
        const ct = tickRef.current;
        for (const s of spikesRef.current) {
          if (ct - s.time < 200) activeSet.add(s.neuron);
        }

        // Update React state (batched)
        onStatsUpdate({
          tick: tickRef.current,
          spikeCount: totalSpikeRef.current,
          firingRate: Math.round(totalInWindow * 5),
          activeNeurons: activeSet.size,
        });

        // Prune old spikes (keep last 2000 for raster)
        if (spikesRef.current.length > 2000) {
          spikesRef.current.splice(0, spikesRef.current.length - 2000);
        }

        lastFrameRef.current = ts;
      }
      animRef.current = requestAnimationFrame(loop);
    };

    lastFrameRef.current = 0;
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [running, mode, freq, amplitude, speed, onStatsUpdate]);

  return {
    net: netRef.current,
    spikes: spikesRef.current,
    tick: tickRef.current,
    traces: tracesRef.current,
    rebuild,
  };
}