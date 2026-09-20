import React from "react";
import { Renderer, StateProvider, ActionProvider } from "@json-render/react";
import { registry } from "./registry";
import type { Spec } from "@json-render/core";

interface JsonDocProps {
  spec: Spec;
  initialState?: Record<string, unknown>;
}

export function JsonDoc({ spec, initialState }: JsonDocProps) {
  return (
    <StateProvider initialState={initialState ?? {}}>
      <ActionProvider handlers={{}}>
        <Renderer spec={spec} registry={registry} />
      </ActionProvider>
    </StateProvider>
  );
}
