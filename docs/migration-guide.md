# Migration Guide

How to move between AxonWeave versions without losing scientific provenance. This page covers substrate artifact (`.awb`) schema migrations and library API changes.

## How versioning works

AxonWeave keeps three independent version numbers:

| Version | Where it lives | What it changes |
|---|---|---|
| **Package version** | `axonweave.__version__` (e.g. `0.2.0`) | Library API and behavior |
| **Substrate version** | Substrate ID (e.g. `male-cns:v1.0`) | Upstream biological data release |
| **`.awb` schema version** | `schema_version` inside the manifest | Artifact file format only |

A substrate version change is a scientific fact and never comes from AxonWeave. Schema changes are format changes and never reinterpret the underlying graph. The graph fingerprint is unaffected by schema version.

## Substrate artifact (`.awb`) schema migrations

### Reading old artifacts

When AxonWeave reads an `.awb` artifact whose `schema_version` is older than the current one, it applies the registered migration chain automatically:

- The applied steps are recorded in the loaded manifest under `migrations_applied` (e.g. `["0.9->1.0"]`).
- Each migration announces itself with an `AXW007` `ConfigurationWarning` — the change is explicit, never silent.
- The graph fingerprint is computed after migration and must still match the manifest; integrity is never weakened by a migration.

Recommended follow-up after seeing `AXW007`: re-pack the artifact in place.

```bash
axonweave substrate verify ./male-cns-v1.0.awb   # read triggers the migration + warning
axonweave substrate pack male-cns:v1.0 --output male-cns-v1.0.awb
```

### What is refused (never migrated)

| Situation | Error |
|---|---|
| Artifact `schema_version` newer than the installed AxonWeave supports | `AXW003` |
| Unknown schema version | `AXW003` |
| No migration path registered between two versions | `AXW003` |
| File is not an `.awb` artifact | `AXW003` |

Upgrade AxonWeave before installing an artifact created by a newer library version.

### Registering a migration (maintainers)

Migrations are plain manifest-to-manifest functions keyed by `(from, to)`:

```python
from axonweave.data.awb import register_migration

@register_migration("1.0", "1.1")
def _migrate(manifest: dict) -> dict:
    manifest["new_field"] = manifest.pop("old_field", None)
    return manifest
```

Rules for new migrations:

1. A migration transforms only the manifest (field renames, layout moves) — never graph payload or biological attachments.
2. Chain steps must be registered so any older version can walk to `SUPPORTED_SCHEMA_VERSION`.
3. Add a test that a legacy manifest migrates, the warning fires, and `migrations_applied` is recorded.
4. Document the change on this page.

## API changes

### 0.1.x → 0.2.0 (Temporal Runtime Alpha)

- **CLI**: `axonweave substrate unpack` was removed. `pack` now writes versioned `.awb` artifacts. Use `install-file` to install from an artifact, `inspect` for metadata, and `verify` (which now also accepts `.awb` paths) for integrity checks.
- **Data module**: `pack_substrate`/`unpack_substrate` zip helpers remain only as deprecated backward-compat exports; prefer `axonweave.data.awb`.
- **Substrate pack contents**: `.awb` artifacts now include biological metadata attachments (`annotations.feather`, `neurotransmitters.feather`, `receptors.json`, `stats.feather`) when present, each sha256-recorded in the manifest.

### Principles for future API changes

1. No breaking API change ships without a migration note on this page.
2. Scientific assumptions require explicit configuration — a change that flips an implicit default (e.g. making a predicted neurotransmitter automatically excitatory) is treated as breaking.
3. Provenance fields in manifests and metadata are additive-only where possible; removals get a schema bump and a migration entry.

## Reproducibility across migrations

Two independently built artifacts of the same installed substrate always produce identical graph fingerprints, regardless of manifest schema version. When reproducing a published experiment:

1. Record the substrate ID and version, not just the artifact filename.
2. Record the graph fingerprint — it survives both artifact re-packing and schema migrations.
3. Record `axonweave.__version__` and the applied `migrations_applied` list from the loaded manifest.
