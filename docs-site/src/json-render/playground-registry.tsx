import { defineRegistry } from "@json-render/react";
import { playgroundCatalog } from "./playground-catalog";
import React, { useEffect, useRef } from "react";
import * as Slider from "@radix-ui/react-slider";
import * as Select from "@radix-ui/react-select";
import {
  FiChevronDown,
  FiZap,
  FiLink,
  FiActivity,
  FiAlertTriangle,
  FiPlay,
  FiPause,
  FiRotateCw,
  FiCopy,
  FiCheck,
  FiShare2,
} from "react-icons/fi";
import Prism from "prismjs";
import "prismjs/components/prism-python";

export const { registry: playgroundRegistry } = defineRegistry(
  playgroundCatalog,
  {
    components: {
      PgTopBar: ({ props, emit }) => (
        <div className="pg-topbar">
          <div className="pg-topbar-left">
            <span className="pg-logo">
              <FiZap size={16} /> {props.logoText}
            </span>
          </div>
          <div className="pg-topbar-center">
            <div className="pg-presets-row">
              {props.presetKeys.map((key) => (
                <button
                  key={key}
                  className={`pg-preset ${props.activePreset === key ? "active" : ""}`}
                  title={props.presetLabels[key] ?? key}
                  data-action="selectPreset"
                  data-preset={key}
                >
                  {props.presetLabels[key] ?? key}
                </button>
              ))}
            </div>
          </div>
          <div className="pg-topbar-right">
            <button
              className="pg-reset-btn"
              title="Reset"
              data-action="reset"
            >
              <FiRotateCw size={14} />
            </button>
            <button
              className={`pg-run-btn ${props.running ? "running" : ""}`}
              data-action="runToggle"
            >
              {props.running ? (
                <>
                  <FiPause size={14} /> Pause
                </>
              ) : (
                <>
                  <FiPlay size={14} /> Run
                </>
              )}
            </button>
            <button
              className="pg-reset-btn"
              title="Copy shareable URL"
              data-action="shareURL"
            >
              {props.shared ? (
                <FiCheck size={14} style={{ color: "#3ca878" }} />
              ) : (
                <FiShare2 size={14} />
              )}
            </button>
          </div>
        </div>
      ),

      PgSlider: ({ props }) => {
        let display: string;
        switch (props.format) {
          case "fixed0":
            display = props.value.toFixed(0);
            break;
          case "fixed2":
            display = props.value.toFixed(2);
            break;
          case "hz":
            display = `${props.value} Hz`;
            break;
          case "ms":
            display = `${props.value.toFixed(0)}ms`;
            break;
          case "multiplier":
            display = `${props.value.toFixed(1)}x`;
            break;
          default:
            display = String(props.value);
        }

        return (
          <div className="pg-ctrl">
            <span className="pg-ctrl-name">{props.label}</span>
            <Slider.Root
              className="pg-slider"
              value={[props.value]}
              min={props.min}
              max={props.max}
              step={props.step}
              onValueChange={() => {}}
            >
              <Slider.Track className="pg-slider-track">
                <Slider.Range className="pg-slider-range" />
              </Slider.Track>
              <Slider.Thumb className="pg-slider-thumb" />
            </Slider.Root>
            <span className="pg-ctrl-val">{display}</span>
          </div>
        );
      },

      PgSelect: ({ props }) => (
        <div className="pg-ctrl">
          <span className="pg-ctrl-name">{props.label}</span>
          <Select.Root value={props.value}>
            <Select.Trigger className="pg-select-trigger">
              <Select.Value />
              <Select.Icon>
                <FiChevronDown size={12} />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content
                className="pg-select-content"
                position="popper"
                sideOffset={4}
              >
                <Select.Viewport className="pg-select-viewport">
                  {props.options.map((o) => (
                    <Select.Item
                      key={o.value}
                      value={o.value}
                      className="pg-select-item"
                    >
                      <Select.ItemText>{o.label}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      ),

      PgSection: ({ props, children }) => (
        <div className="pg-ctrl-group">
          <label className="pg-ctrl-label">{props.title}</label>
          {children}
        </div>
      ),

      PgStatsGrid: ({ props }) => (
        <div className="pg-stats-grid">
          {props.stats.map((s) => (
            <div className="pg-stat" key={s.label}>
              <span className="pg-stat-label">{s.label}</span>
              <span className="pg-stat-value">{s.value}</span>
            </div>
          ))}
        </div>
      ),

      PgNeuronInfo: ({ props }) => (
        <div
          className="pg-stats-grid"
          style={{
            marginTop: 8,
            borderTop: "1px solid var(--line)",
            paddingTop: 8,
          }}
        >
          <div className="pg-stat">
            <span className="pg-stat-label">Neuron</span>
            <span className="pg-stat-value">N{props.neuronId}</span>
          </div>
          <div className="pg-stat">
            <span className="pg-stat-label">Region</span>
            <span className="pg-stat-value">{props.region}</span>
          </div>
          <div className="pg-stat">
            <span className="pg-stat-label">V_m</span>
            <span className="pg-stat-value">{props.voltage}</span>
          </div>
          <div className="pg-stat">
            <span className="pg-stat-label">Threshold</span>
            <span className="pg-stat-value">{props.threshold}</span>
          </div>
        </div>
      ),

      PgCodePanel: ({ props }) => {
        const codeRef = useRef<HTMLElement>(null);
        useEffect(() => {
          if (codeRef.current) Prism.highlightElement(codeRef.current);
        }, [props.code]);

        return (
          <div className="pg-code-panel">
            <div className="pg-code-header">
              <span>AxonWeave Code</span>
              <div className="pg-code-actions">
                <span className="pg-lang-chip">{props.language}</span>
                <button
                  className="pg-copy-btn"
                  aria-label="Copy code"
                  data-action="copyCode"
                >
                  {props.copied ? (
                    <>
                      <FiCheck size={12} /> Copied
                    </>
                  ) : (
                    <>
                      <FiCopy size={12} /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="pg-code-body">
              <pre>
                <code
                  ref={codeRef}
                  className={`language-${props.language}`}
                >
                  {props.code}
                </code>
              </pre>
            </div>
          </div>
        );
      },

      PgExplainCard: ({ props }) => (
        <div className="pg-explain-card">
          {props.icon === "zap" && <FiZap size={18} />}
          {props.icon === "link" && <FiLink size={18} />}
          {props.icon === "activity" && <FiActivity size={18} />}
          {props.icon === "alert" && <FiAlertTriangle size={18} />}
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      ),

      PgAlert: ({ props }) => (
        <div className={`pg-alert pg-alert-${props.variant}`}>
          {props.variant === "demo" && (
            <FiAlertTriangle
              size={14}
              style={{ marginRight: 6, flexShrink: 0 }}
            />
          )}
          {props.message}
        </div>
      ),

      PgCanvasSlot: () => (
        <div
          className="pg-canvas-placeholder"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-md)",
            minHeight: 280,
            color: "var(--muted)",
            fontSize: 13,
          }}
        >
          Canvas visualization (rendered by React)
        </div>
      ),

      PgControlsPanel: ({ children }) => <>{children}</>,
    },
  }
);
