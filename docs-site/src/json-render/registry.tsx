import { defineRegistry } from "@json-render/react";
import { catalog } from "./catalog";
import React from "react";

export const { registry } = defineRegistry(catalog, {
  components: {
    Callout: ({ props }) => {
      const variantClass = `callout-${props.variant}`;
      return (
        <div className={`callout ${variantClass}`}>
          {props.title && <strong className="callout-title">{props.title}</strong>}
          {props.children && <p className="callout-body">{props.children}</p>}
        </div>
      );
    },

    CodeBlock: ({ props }) => {
      const lang = props.language ?? "text";
      return (
        <div className="code-block">
          {props.filename && (
            <div className="code-block-header">
              <span className="code-block-filename">{props.filename}</span>
              <span className="code-block-lang">{lang}</span>
            </div>
          )}
          <pre>
            <code className={`language-${lang}`}>{props.code}</code>
          </pre>
        </div>
      );
    },

    ParamTable: ({ props }) => {
      return (
        <div className="param-table">
          {props.title && <h4 className="param-table-title">{props.title}</h4>}
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {props.params.map((p) => (
                <tr key={p.name}>
                  <td>
                    <code>{p.name}</code>
                    {p.required && <span className="param-required"> *</span>}
                    {p.default !== null && (
                      <span className="param-default"> = {p.default}</span>
                    )}
                  </td>
                  <td>
                    <code className="param-type">{p.type}</code>
                  </td>
                  <td>{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },

    StatusBadge: ({ props }) => {
      const label = props.label ?? props.status;
      return (
        <span className={`status-badge status-${props.status}`}>
          {label}
        </span>
      );
    },

    Card: ({ props }) => {
      const inner = (
        <>
          <h3 className="card-title">{props.title}</h3>
          {props.description && (
            <p className="card-description">{props.description}</p>
          )}
        </>
      );
      if (props.href) {
        return (
          <a href={props.href} className="doc-card">
            {inner}
          </a>
        );
      }
      return <div className="doc-card">{inner}</div>;
    },

    Heading: ({ props }) => {
      if (props.level === "h1") return <h1>{props.children}</h1>;
      if (props.level === "h2") return <h2>{props.children}</h2>;
      return <h3>{props.children}</h3>;
    },

    Text: ({ props }) => <p>{props.children}</p>,

    List: ({ props }) => {
      const Tag = props.ordered ? "ol" : "ul";
      return (
        <Tag>
          {props.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </Tag>
      );
    },

    Link: ({ props }) => (
      <a href={props.href}>{props.label}</a>
    ),

    Divider: () => <hr />,

    Equation: ({ props }) => (
      <div className="equation">
        <span className="equation-tex">{props.tex}</span>
        {props.label && <span className="equation-label">({props.label})</span>}
      </div>
    ),

    Alert: ({ props }) => (
      <div className={`alert alert-${props.variant}`}>
        {props.message}
      </div>
    ),
  },
});
