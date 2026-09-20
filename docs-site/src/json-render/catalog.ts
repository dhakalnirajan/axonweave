import { defineCatalog } from "@json-render/core";
import { schema } from "@json-render/react/schema";
import { z } from "zod";

export const catalog = defineCatalog(schema, {
  components: {
    Callout: {
      props: z.object({
        variant: z.enum(["note", "warn", "tip", "constraint"]),
        title: z.string().nullable(),
        children: z.string().nullable(),
      }),
      description:
        "Accent-bar callout for notes, warnings, tips, and constraints.",
    },
    CodeBlock: {
      props: z.object({
        code: z.string(),
        language: z.string().nullable(),
        filename: z.string().nullable(),
      }),
      description: "Syntax-highlighted code block with copy button.",
    },
    ParamTable: {
      props: z.object({
        title: z.string().nullable(),
        params: z.array(
          z.object({
            name: z.string(),
            type: z.string(),
            description: z.string(),
            required: z.boolean().nullable(),
            default: z.string().nullable(),
          })
        ),
      }),
      description: "API parameter reference table.",
    },
    StatusBadge: {
      props: z.object({
        status: z.enum(["stable", "experimental", "planned", "deprecated"]),
        label: z.string().nullable(),
      }),
      description: "API stability status badge.",
    },
    Card: {
      props: z.object({
        title: z.string(),
        description: z.string().nullable(),
        href: z.string().nullable(),
      }),
      description: "Documentation card with title, description, and optional link.",
    },
    Heading: {
      props: z.object({
        level: z.enum(["h1", "h2", "h3"]),
        children: z.string(),
      }),
      description: "Section heading.",
    },
    Text: {
      props: z.object({
        children: z.string(),
      }),
      description: "Paragraph text.",
    },
    List: {
      props: z.object({
        items: z.array(z.string()),
        ordered: z.boolean().nullable(),
      }),
      description: "Bullet or numbered list.",
    },
    Link: {
      props: z.object({
        href: z.string(),
        label: z.string(),
      }),
      description: "Internal or external link.",
    },
    Divider: {
      props: z.object({}),
      description: "Horizontal rule separator.",
    },
    Equation: {
      props: z.object({
        tex: z.string(),
        label: z.string().nullable(),
      }),
      description: "LaTeX math equation rendered via MathJax.",
    },
    Alert: {
      props: z.object({
        variant: z.enum(["info", "warning", "error", "success"]),
        message: z.string(),
      }),
      description: "Inline alert banner.",
    },
  },
  actions: {},
});

export type AxonCatalog = typeof catalog;
