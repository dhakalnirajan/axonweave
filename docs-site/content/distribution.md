# Substrate Distribution

The Python wheel and the biological substrate are separate artifacts.

## Online

```bash
pip install axonweave
axonweave substrate install male-cns:v1.0
```

## Memory-bounded install

The default install assembles the graph in memory. On constrained machines, use the disk-backed builder, which streams edge batches to scratch files and never holds the full edge list in RAM:

```bash
axonweave substrate install male-cns:v1.0 --disk-backed
```

or programmatically:

```python
from axonweave.data import DiskBackedGraphBuilder

with DiskBackedGraphBuilder("connectivity.feather", "graph.npz", batch_size=100_000) as b:
    graph = b.build()
```

Both paths produce an identical graph and an identical content fingerprint, recorded in the substrate manifest and re-verified every time the substrate is loaded.

## Integrity

Each install records a SHA-256 content fingerprint of the built graph (canonical CSR payload + body IDs) in the manifest. `axonweave substrate verify` and every `SubstrateRegistry.load()` re-derive this fingerprint from the stored artifact and refuse a mismatched graph with `AXW002`, so a corrupted or swapped `graph.npz` cannot be silently activated.

## Cache

The default cache is under the platform's user cache directory and can be redirected with `AXONWEAVE_HOME`.

## Offline deployment: the `.awb` substrate artifact

An `.awb` file is a versioned AxonWeave substrate artifact: a ZIP archive
containing a `manifest.json`, the sparse CSR graph (`graph.npz`), biological
metadata attachments (selection tables `annotations.json`, neuron metadata
`annotations.feather`, `neurotransmitters.feather`, `receptors.json`,
`stats.feather` — each included when present) and optional retained upstream
source files under `source/`. It packs a substrate that is already installed
in the local cache — it never embeds the multi-gigabyte raw upstream archive
unless those files were retained during install.

### Pack

```bash
axonweave substrate pack male-cns:v1.0 --output male-cns-v1.0.awb
```

The manifest records the substrate ID and version, source release URL,
source checksums, graph fingerprint, neuron/edge counts, schema version and
the AxonWeave builder version. Two independently packed artifacts from the
same installed substrate produce identical graph fingerprints.

### Inspect

```bash
axonweave substrate inspect ./male-cns-v1.0.awb
```

Prints manifest metadata (identity, schema, fingerprint, size, provenance)
without loading the graph.

### Verify

```bash
axonweave substrate verify ./male-cns-v1.0.awb
```

Checks the schema version, the graph content fingerprint against the
manifest, graph size consistency, and sha256 of every recorded attachment
(biological metadata included). Any mismatch raises `AXW002`; an unsupported
or unknown schema raises `AXW003`.

### Install from a file

```bash
axonweave substrate install-file ./male-cns-v1.0.awb
```

The artifact is verified fully before activation: it is extracted into a
staging directory, validated, then atomically moved into the cache. A
corrupted or tampered artifact never replaces an existing installation.
Biological metadata files are restored alongside the graph and wired into
the loaded `BiologicalBrain` (`brain.annotations`, `brain.neurotransmitters`,
`brain.receptors`). After installation the substrate loads normally:

```python
import axonweave
brain = axonweave.load("male-cns:v1.0")
brain.neurotransmitters  # restored from the .awb artifact
```

### Schema versioning and migration

The manifest carries a `schema_version`. AxonWeave refuses (with `AXW003`)
to read artifacts whose schema is newer than supported, unknown, or has no
migration path — it never silently reinterprets a substrate.

Older schemas with registered migrations upgrade automatically: the chain of
applied migrations is recorded in the loaded manifest (`migrations_applied`)
and announced with an `AXW007` `ConfigurationWarning` at read time. Migrations
are transformations of the manifest itself (field renames, layout moves); the
`migrations_applied` field lists each step, e.g. `["0.9->1.0"]`.
Re-pack the artifact after a migration to update it in place.

To register a new migration (library developers):

```python
from axonweave.data.awb import register_migration

@register_migration("1.0", "1.1")
def _migrate(manifest: dict) -> dict:
    manifest["new_field"] = manifest.pop("old_field", None)
    return manifest
```

### Error handling

| Code | Meaning |
|------|---------|
| `AXW001` | Substrate not installed / cache entry incomplete when packing |
| `AXW002` | Integrity failure: fingerprint, size, attachment hash, or unsafe archive member |
| `AXW003` | Schema error: not an `.awb` artifact, newer/unknown schema, or no migration path |
| `AXW007` | Warning: a schema migration was applied to the manifest (explicit, non-silent) |

## Why not bundle it in PyPI?

The upstream release includes files ranging from tens of megabytes to multi-gigabyte synapse resources. A normal Python wheel should contain software, not force every installation to transfer the entire biological archive.
