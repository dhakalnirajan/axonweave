import type { Spec } from "@json-render/core";

export const gettingStartedSpec: Spec = {
  root: "heading-1",
  elements: {
    "heading-1": {
      type: "Heading",
      props: { level: "h1", children: "Getting Started" },
      children: ["text-intro", "heading-install", "code-install", "callout-note", "heading-next", "list-next"],
    },
    "text-intro": {
      type: "Text",
      props: { children: "AxonWeave exposes the MaleCNS v1.0 connectome as a reusable sparse biological neural substrate." },
      children: [],
    },
    "heading-install": {
      type: "Heading",
      props: { level: "h2", children: "Installation" },
      children: [],
    },
    "code-install": {
      type: "CodeBlock",
      props: { code: "pip install axonweave", language: "bash", filename: null },
      children: [],
    },
    "callout-note": {
      type: "Callout",
      props: {
        variant: "note",
        title: "Backend requirement",
        children: "AxonWeave requires NumPy. Install with PyTorch support: pip install axonweave[torch]",
      },
      children: [],
    },
    "heading-next": {
      type: "Heading",
      props: { level: "h2", children: "Next steps" },
      children: [],
    },
    "list-next": {
      type: "List",
      props: {
        items: [
          "Read the Core Concepts guide",
          "Explore the API Reference",
          "Try the interactive Playground",
        ],
        ordered: false,
      },
      children: [],
    },
  },
};

export const apiReferenceSpec: Spec = {
  root: "heading-api",
  elements: {
    "heading-api": {
      type: "Heading",
      props: { level: "h1", children: "API Reference" },
      children: ["badge-stable", "text-api", "heading-params", "table-params", "callout-warn", "divider-1", "heading-equation", "eq-lif"],
    },
    "badge-stable": {
      type: "StatusBadge",
      props: { status: "stable", label: null },
      children: [],
    },
    "text-api": {
      type: "Text",
      props: { children: "Core API for loading substrates and constructing models." },
      children: [],
    },
    "heading-params": {
      type: "Heading",
      props: { level: "h2", children: "ConnectomeLayer" },
      children: [],
    },
    "table-params": {
      type: "ParamTable",
      props: {
        title: null,
        params: [
          { name: "graph", type: "ConnectomeGraph", description: "Biological substrate graph.", required: true, default: null },
          { name: "dynamics", type: "DynamicsPolicy", description: "Neuron dynamics configuration.", required: true, default: null },
          { name: "selection", type: "NeuronSelection | null", description: "Subset of neurons to simulate.", required: false, default: "null" },
        ],
      },
      children: [],
    },
    "callout-warn": {
      type: "Callout",
      props: {
        variant: "warn",
        title: "Scientific honesty",
        children: "Never silently turn a predicted neurotransmitter into an excitatory/inhibitory truth.",
      },
      children: [],
    },
    "divider-1": {
      type: "Divider",
      props: {},
      children: [],
    },
    "heading-equation": {
      type: "Heading",
      props: { level: "h2", children: "LIF Dynamics" },
      children: [],
    },
    "eq-lif": {
      type: "Equation",
      props: { tex: "\\tau_m \\frac{dV}{dt} = -(V - V_{rest}) + R_m I", label: "lif" },
      children: [],
    },
  },
};

export const playgroundSpec: Spec = {
  root: "heading-pg",
  elements: {
    "heading-pg": {
      type: "Heading",
      props: { level: "h1", children: "Playground" },
      children: ["alert-demo", "text-pg", "card-lif", "card-rate", "card-stdp"],
    },
    "alert-demo": {
      type: "Alert",
      props: {
        variant: "warning",
        message: "DEMO SUBSTRATE — Not MaleCNS v1.0. This uses a synthetic small graph for education.",
      },
      children: [],
    },
    "text-pg": {
      type: "Text",
      props: { children: "Explore AxonWeave concepts interactively. Choose a preset to start." },
      children: [],
    },
    "card-lif": {
      type: "Card",
      props: {
        title: "LIF Neurons",
        description: "Leaky integrate-and-fire dynamics with configurable thresholds.",
        href: "/playground?preset=lif",
      },
      children: [],
    },
    "card-rate": {
      type: "Card",
      props: {
        title: "Rate Model",
        description: "Continuous rate-based neuron approximation.",
        href: "/playground?preset=rate",
      },
      children: [],
    },
    "card-stdp": {
      type: "Card",
      props: {
        title: "STDP Plasticity",
        description: "Spike-timing-dependent plasticity with reward modulation.",
        href: "/playground?preset=stdp",
      },
      children: [],
    },
  },
};
