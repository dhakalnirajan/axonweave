# CLI Examples: Substrate Workflow

End-to-end command-line examples for distributing a substrate with the `.awb` artifact format. See [Substrates](distribution.md) for the format itself and [Errors & Diagnostics](errors.md) for the failure codes.

## Pack an installed substrate

Requires the substrate to already be installed in the local cache.

```bash
axonweave substrate pack male-cns:v1.0 --output male-cns-v1.0.awb
```

Exit code 0 with `AXW001` if the cache entry is missing or incomplete.

## Inspect without loading

Print manifest metadata — identity, schema version, fingerprint, counts, provenance — without touching the graph:

```bash
axonweave substrate inspect ./male-cns-v1.0.awb
```

## Verify integrity

Checks the schema version, graph fingerprint, size consistency, and sha256 of every attachment:

```bash
axonweave substrate verify ./male-cns-v1.0.awb
```

Any mismatch fails with `AXW002`; an unsupported schema fails with `AXW003`.

## Install from a file (offline machine)

The artifact is fully verified before activation — extracted to a staging directory, validated, then atomically moved into the cache:

```bash
axonweave substrate install-file ./male-cns-v1.0.awb
axonweave substrate verify male-cns:v1.0   # verify the installed cache entry
```

A corrupted or tampered artifact never replaces an existing installation.

## Verify an installed substrate

`verify` accepts both installed substrate names and `.awb` file paths:

```bash
axonweave substrate verify male-cns:v1.0
```

## Reload and use biological metadata

After installation, biological metadata is restored alongside the graph and wired into the loaded `BiologicalBrain`:

```python
import axonweave

brain = axonweave.load("male-cns:v1.0")
brain.annotations          # selection tables, restored from the .awb
brain.neurotransmitters    # upstream neurotransmitter predictions
brain.receptors            # receptor composition metadata
```

## Typical offline hand-off

On a machine with network access:

```bash
axonweave substrate install male-cns:v1.0
axonweave substrate pack male-cns:v1.0 --output male-cns-v1.0.awb
axonweave substrate verify ./male-cns-v1.0.awb
```

Copy the artifact to the target machine (USB, artifact registry, air-gapped transfer), then:

```bash
axonweave substrate verify ./male-cns-v1.0.awb
axonweave substrate install-file ./male-cns-v1.0.awb
python -c "import axonweave; axonweave.load('male-cns:v1.0')"
```

:::DOC-TIP
Re-pack after a schema migration warning (`AXW007`) to update the artifact in place — migrated manifests are announced, never silently reinterpreted.
:::
