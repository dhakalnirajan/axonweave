import { defineCatalog } from "@json-render/core";
import { schema } from "@json-render/react/schema";
import { z } from "zod";

export const playgroundCatalog = defineCatalog(schema, {
  components: {
    PgTopBar: {
      props: z.object({
        logoText: z.string(),
        presetKeys: z.array(z.string()),
        presetLabels: z.record(z.string(), z.string()),
        activePreset: z.string(),
        running: z.boolean(),
        shared: z.boolean(),
      }),
      description: "Playground toolbar with logo, presets, run/pause, share.",
    },
    PgSlider: {
      props: z.object({
        label: z.string(),
        value: z.number(),
        min: z.number(),
        max: z.number(),
        step: z.number(),
        format: z.string().nullable(),
      }),
      description: "Numeric slider with label and value display.",
    },
    PgSelect: {
      props: z.object({
        label: z.string(),
        value: z.string(),
        options: z.array(z.object({ value: z.string(), label: z.string() })),
      }),
      description: "Dropdown select with label.",
    },
    PgSection: {
      props: z.object({
        title: z.string(),
      }),
      description: "Parameter group section header.",
      slots: ["default"],
    },
    PgStatsGrid: {
      props: z.object({
        stats: z.array(
          z.object({
            label: z.string(),
            value: z.string(),
          })
        ),
      }),
      description: "Grid of statistic values (time, spikes, rate, active).",
    },
    PgNeuronInfo: {
      props: z.object({
        neuronId: z.number(),
        region: z.string(),
        voltage: z.string(),
        threshold: z.string(),
      }),
      description: "Selected neuron detail panel.",
    },
    PgCodePanel: {
      props: z.object({
        code: z.string(),
        language: z.string(),
        copied: z.boolean(),
      }),
      description: "Syntax-highlighted code panel with copy button.",
    },
    PgExplainCard: {
      props: z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
      description: "Explanation card in the how-this-works section.",
    },
    PgAlert: {
      props: z.object({
        variant: z.enum(["demo", "warning", "info"]),
        message: z.string(),
      }),
      description: "Alert banner for demo substrate notice.",
    },
    PgCanvasSlot: {
      props: z.object({}),
      description: "Placeholder for the Canvas visualization (rendered by React, not json-render).",
    },
    PgControlsPanel: {
      props: z.object({}),
      description: "Wrapper for left panel controls (sections of sliders/selects).",
      slots: ["default"],
    },
  },
  actions: {},
});

export type PlaygroundCatalog = typeof playgroundCatalog;
