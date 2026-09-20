# Glossary

Definitions of terms used across the AxonWeave documentation, with emphasis on substrate distribution.

## Substrate and distribution

**Substrate** — A versioned biological connectome artifact (e.g. `male-cns:v1.0`) comprising the sparse CSR graph, provenance, and optional biological metadata. Loaded via `axonweave.load("male-cns:v1.0")`.

**Substrate cache** — The on-disk directory where installed substrates live, under the platform user cache directory by default and redirectable with `AXONWEAVE_HOME`.

**`.awb` artifact** — The versioned AxonWeave substrate file format: a ZIP archive containing `manifest.json`, `graph.npz`, biological metadata attachments, and optional retained upstream source files. Used for offline distribution. See [Substrates](distribution.md).

**Manifest** — The `manifest.json` inside an `.awb` artifact. Records substrate identity, source provenance, graph fingerprint, counts, schema version, and per-attachment sha256 hashes.

**Graph fingerprint** — A canonical, deterministic digest of the connectivity graph alone. Two independently packed artifacts of the same installed substrate always produce the same fingerprint.

**Attachment** — Any file recorded in the manifest alongside the graph (e.g. `annotations.feather`, `neurotransmitters.feather`, `receptors.json`, `stats.feather`). Each attachment is integrity-checked by sha256 during `verify`.

**Schema version** — The `.awb` manifest format version (`schema_version`), independent of the substrate version and the AxonWeave package version.

**Migration** — A registered, explicit transformation that upgrades a manifest from one schema version to the next. Applied migrations are recorded in `migrations_applied` and announced with an `AXW007` warning; unsupported or unknown schemas are refused with `AXW003`.

## Error codes (distribution)

**`AXW001`** — Substrate not installed or cache entry incomplete (e.g. when packing).

**`AXW002`** — Integrity failure: fingerprint mismatch, size inconsistency, tampered attachment, or unsafe archive member.

**`AXW003`** — Format/schema error: not an `.awb` artifact, newer or unknown schema version, or no migration path.

**`AXW007`** — Configuration warning: a schema migration was applied to the manifest (never silent).
