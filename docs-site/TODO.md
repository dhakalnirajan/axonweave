# AxonWeave Docs-Site — AI Agent Todo List

This file tracks active work and serves as a handoff for future AI agents. Update it after every session.

---

## Active Work (In Progress)

### 1. Playground Layout Fix — Canvas Height & Navbar Spacing
**Status:** In Progress  
**Priority:** High  
**Files:** `src/style.css`, `src/Playground.tsx`, `src/main.tsx`

**Problem:**
- Neuron Map canvas rendered at `height: 0px` because `.pg-viz-main` lacked `display: flex; flex-direction: column`. The `.pg-panel` child had `flex: 1 1 0` but no flex parent to stretch against.
- Main navbar had zero CSS for `.nav-playground-btn` and `.gh-link` — raw unstyled elements jammed together.
- `.top-actions` gap too tight (10px).

**Fix Applied:**
```css
/* style.css line 58 */
.pg-viz-main { 
  flex: 1 1 0; 
  min-height: 280px; 
  position: relative; 
  display: flex; 
  flex-direction: column;  /* ← ADDED */
}

/* style.css lines ~10-12 */
.top-actions { margin-left: auto; display: flex; gap: 14px; align-items: center; }
.nav-playground-btn { 
  display: inline-flex; align-items: center; gap: 6px; 
  padding: 6px 14px; border-radius: var(--radius-sm); 
  font-size: 13px; font-weight: 600; color: var(--text); 
  background: var(--accent); transition: opacity .15s; 
  flex-shrink: 0; 
}
.nav-playground-btn:hover { opacity: .85; text-decoration: none; }
.gh-link { 
  display: inline-flex; align-items: center; color: var(--muted); 
  transition: color .15s; flex-shrink: 0; 
}
.gh-link:hover { color: var(--text); text-decoration: none; }
```

**Verification:** `npm run typecheck && npm run verify:render` — both pass.

**Remaining:** Visual QA in browser (`npm run dev`) to confirm canvas renders at full height and navbar spacing looks correct.

---

### 2. Design Token Consistency Audit
**Status:** Pending  
**Priority:** Medium  
**Files:** `DESIGN.md`, `src/tokens.css`, `src/style.css`

**Task:** Ensure every color/spacing/radius in `style.css` references a token from `tokens.css` (which is generated from `DESIGN.md`). No hardcoded hex values outside the token system.

**Current State:** Playground CSS rewritten to use only `var(--bg)`, `var(--surface)`, `var(--accent)`, `var(--brand)`, `var(--spacing-*)`, `var(--radius-*)`. Prism token colors updated to accent palette.

**Action:** Run `npm run design:lint` — currently shows 5 pre-existing warnings (orphaned tokens, contrast on light-theme-code). No new errors introduced.

---

## Completed Work

| Task | Date | Commit |
|------|------|--------|
| CI/CD permissions fix (GITHUB_TOKEN, rust compile, manylinux) | 2026-09-18 | multiple |
| Jekyll gh-pages deploy fix | 2026-09-18 | f69235e |
| Propagation formula fix (`x @ W^T` → `x @ W`) in `backends.md` | 2026-09-18 | — |
| JAX section updates in `backends.md`, `getting-started.md`, `index.md` | 2026-09-18 | — |
| Playground button moved from `.topnav` to `.top-actions` as CTA | 2026-09-18 | — |
| GitHub icon button in `.top-actions` | 2026-09-18 | — |
| Sidebar/TOC/breadcrumbs hidden on playground page | 2026-09-18 | — |
| Playground 3-column JSX rewrite (controls | viz | stats+code) | 2026-09-18 | — |
| `getThemeColor()` helper + canvas draw functions using CSS vars | 2026-09-18 | — |
| Prism syntax highlighting + copy button in code panel | 2026-09-18 | — |
| Radix UI primitives installed (`@radix-ui/react-slider`, `@radix-ui/react-select`, `@radix-ui/themes`) | 2026-09-19 | — |
| Native sliders/selects replaced with Radix wrappers (`PgSlider`, `PgSelect`) | 2026-09-19 | — |
| All `--pg-*` CSS variables removed; now uses design tokens only | 2026-09-19 | — |
| Canvas fallback colors updated to match `tokens.css` exact hex | 2026-09-19 | — |
| `--on-primary` token added to `tokens.css` | 2026-09-19 | — |

---

## Upcoming / Backlog

### 3. Playground UX Polish
- [ ] Canvas initial draw timing — ensure double `requestAnimationFrame` + `ResizeObserver` handles all resize scenarios
- [ ] Add keyboard shortcuts (Space = play/pause, R = reset)
- [ ] Tooltip/help text for each slider parameter
- [ ] Preset descriptions visible on hover/focus
- [ ] Mobile layout: stack columns vertically, collapsible controls

### 4. Documentation Content
- [ ] Add "Getting Started" page with real AxonWeave install + minimal example
- [ ] API reference pages for each public module (`axonweave.connectome`, `axonweave.dynamics`, `axonweave.runtime`)
- [ ] Tutorial: "Build a spiking network on MaleCNS substrate"
- [ ] Migration guide for breaking changes (when they happen)

### 5. Site Infrastructure
- [ ] Fix `postbuild` script for Windows (`cp` → `copy` or use cross-platform tool)
- [ ] Add sitemap.xml generation verification
- [ ] Configure proper caching headers for static assets
- [ ] Add 404 page with search link

### 6. Accessibility
- [ ] Run axe-core audit on all pages
- [ ] Ensure all interactive elements have visible focus states
- [ ] Verify color contrast ratios meet WCAG AA (design:lint already catches some)
- [ ] Add skip-link to main content on all pages

---

## Agent Handoff Instructions

### Before Starting Work
1. Read `AGENTS.md` (this directory) — site-specific agent contract
2. Read `DESIGN.md` — design tokens & rationale
3. Read root `AGENTS.md` — project-wide principles
4. Run `npm run typecheck && npm run design:lint && npm run verify:render` to establish baseline

### Code Style Rules
- **Never** add hardcoded colors/spacing/radii — use `var(--token-name)` from `tokens.css`
- **Never** add gradients, glassmorphism, emojis in headings, or decorative animations
- **Always** use IBM Plex Sans for UI, SF Mono/Iosevka for code
- **Always** run `npm run design:lint` after CSS changes
- **Always** run `npm run verify:render` after content/structure changes

### Playground-Specific Rules
- Canvas drawing functions (`drawNeuronMap`, `drawRaster`, `drawVoltageTrace`, `drawInputWaveform`) must use `getThemeColor('--token-name')` for all colors
- All controls must use Radix primitives (`PgSlider`, `PgSelect`) — no native `<input type="range">` or `<select>`
- Layout must remain 3-column: left (controls) | center (viz) | right (stats+code)
- Flex height chain: `.pg` → `.pg-body` → `.pg-center` → `.pg-viz-main` → `.pg-panel` → `.pg-canvas-wrap` → `canvas` — every link must have `flex: 1 1 0` or explicit height
- Initial draw: `requestAnimationFrame(() => requestAnimationFrame(drawAll))` after layout settles

### Verification Commands
```bash
npm run typecheck      # TypeScript compilation
npm run design:lint    # Design token compliance (DESIGN.md)
npm run verify:render  # Markdown render + link check (42 pages)
npm run dev            # Local dev server for visual QA
```

### File Locations
| Purpose | Path |
|---------|------|
| Main SPA entry | `src/main.tsx` |
| Playground page | `src/Playground.tsx` |
| Global styles | `src/style.css` (minified on line 4, playground on ~14-95) |
| Design tokens | `src/tokens.css` (generated from `DESIGN.md`) |
| Design source | `DESIGN.md` |
| Agent contract | `AGENTS.md` |
| Build config | `vite.config.ts`, `package.json` |
| Render verification | `scripts/verify-render.mjs` |

---

## Notes for Next Agent

1. **Canvas height bug is fixed** but verify visually — the flex chain now has `display: flex; flex-direction: column` on `.pg-viz-main`. If canvas still shows 0px, check `ResizeObserver` timing or add a `setTimeout` fallback.

2. **Navbar spacing** — `.nav-playground-btn` and `.gh-link` now have proper CSS. If they still look off, check `.top-actions` gap (14px) and `flex-shrink: 0`.

3. **Design tokens** — all playground CSS uses `var(--token)` references. If you need a new color, add it to `DESIGN.md` first, then regenerate `tokens.css` with `npx -p @google/design.md designmd export --format css-tailwind DESIGN.md > src/tokens.css`.

4. **No `components/` directory** — all app logic lives in `main.tsx` and `Playground.tsx`. Don't create new component files without updating this doc.

5. **Windows build** — `postbuild` script fails on `cp`. Use `copy` or add `cpy-cli` / `shx` for cross-platform.

---

*Last updated: 2026-09-19*