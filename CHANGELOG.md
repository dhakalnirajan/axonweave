# Changelog

## Unreleased

### Added — Phase 1: versioned `.awb` substrate artifact format

- New `python/axonweave/data/awb.py`: versioned `.awb` substrate artifacts with a
  manifest recording substrate ID/version, source release and checksums, graph
  fingerprint, neuron/edge counts, schema version and builder version.
- CLI: `axonweave substrate pack` (versioned artifact), `substrate install-file`,
  `substrate inspect`, and `substrate verify` accepting either an installed
  substrate name or an `.awb` path. The legacy zip `unpack` command was removed.
- Biological metadata attachments (`annotations.feather`, `neurotransmitters.feather`,
  `receptors.json`, `stats.feather`) are packed when present, sha256-verified,
  restored on install and wired into `BiologicalBrain`.
- Verify-before-activate installation: staged extraction, zip-slip guards,
  atomic cache replacement; a corrupted artifact never replaces an installation.
- Schema migration machinery: `SCHEMA_MIGRATIONS` registry and
  `register_migration(from, to)` decorator. Old schemas with a migration path
  upgrade automatically; the applied chain is recorded in the manifest
  (`migrations_applied`) and announced with an `AXW007` warning. Newer, unknown,
  or path-less schemas are refused with `AXW003` — never silently reinterpreted.
- Acceptance criterion (unit-tested): two independently packed `.awb` artifacts
  from the same installed substrate produce identical graph fingerprints.

### Changed

- `substrate pack` output now records schema and fingerprint in stdout.
- Docs: `distribution.md` fully documents the `.awb` format, lifecycle, schema
  versioning and error codes; `errors.md` adds AXW007/AXW008 and `.awb` semantics.

## 0.1.0 — Documentation and release engineering foundation

- Expanded project governance and AI-agent specifications.
- Added browser-rendered documentation application.
- Added SVG brand assets.
- Added legal/SEO/accessibility/performance scaffolding.
- Expanded CI/CD for Python 3.10–3.14, OS matrices, Rust/PyO3 and PyPI publishing.
- Expanded packaging extras and backend capability documentation.
