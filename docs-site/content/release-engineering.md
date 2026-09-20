# Release Engineering

How AxonWeave is built, tested, and published: CI matrices, wheel building with the native core, and what stays out of source control.

## CI matrix

Every push and PR runs across a full platform/Python matrix. Separate jobs handle Rust/PyO3 compilation, pure-Python fallback testing, and platform wheel builds.

| OS | Python | Rust | Notes |
|---|---|---|---|
| Ubuntu 22.04 | 3.10, 3.11, 3.12, 3.13, 3.14 | stable, nightly | Full matrix. CUDA optional. |
| macOS 14 (ARM64) | 3.10, 3.11, 3.12, 3.13, 3.14 | stable | MPS backend tested where available. |
| Windows Server 2022 | 3.10, 3.11, 3.12, 3.13, 3.14 | stable | MSVC toolchain. |

:::DOC-NOTE
Python 3.14 support follows CPython pre-release availability. Wheels may be published after 3.14.0 final.
:::

Each CI job runs:

```bash
cargo test --manifest-path rust/Cargo.toml
pytest tests/ -x --tb=short
python -m axonweave verify  # native extension load check
```

## Wheel building with maturin

AxonWeave uses [maturin](https://github.com/PyO3/maturin) to build platform-specific wheels containing the compiled Rust/PyO3 native extension. The build is triggered by the `release` workflow on tagged commits.

### Build matrix

Maturin builds produce one wheel per (OS, Python version, architecture) tuple:

```text
axonweave-X.Y.Z-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
axonweave-X.Y.Z-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
axonweave-X.Y.Z-cp312-cp312-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
axonweave-X.Y.Z-cp313-cp313-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
axonweave-X.Y.Z-cp314-cp314-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
axonweave-X.Y.Z-cp310-cp310-macosx_14_0_arm64.whl
axonweave-X.Y.Z-cp311-cp311-macosx_14_0_arm64.whl
axonweave-X.Y.Z-cp312-cp312-macosx_14_0_arm64.whl
axonweave-X.Y.Z-cp313-cp313-macosx_14_0_arm64.whl
axonweave-X.Y.Z-cp314-cp314-macosx_14_0_arm64.whl
axonweave-X.Y.Z-cp310-cp310-win_amd64.whl
axonweave-X.Y.Z-cp311-cp311-win_amd64.whl
axonweave-X.Y.Z-cp312-cp312-win_amd64.whl
axonweave-X.Y.Z-cp313-cp313-win_amd64.whl
axonweave-X.Y.Z-cp314-cp314-win_amd64.whl
```

### Build invocation

```bash
maturin build --release --strip --manylinux auto --interpreter cpython --out dist/
```

Key flags:

- `--strip` — reduces binary size by stripping debug symbols.
- `--manylinux auto` — targets the broadest compatible manylinux platform tag on Linux.
- `--interpreter cpython` — only builds for CPython (no PyPy wheels).

### Source distribution (sdist)

The source distribution contains:

```text
python/axonweave/        # pure Python package
rust/                    # Rust source for the native extension
rust/Cargo.toml
pyproject.toml
README.md
LICENSE.md
```

The sdist does **not** require a Rust toolchain to install. When maturin detects no Rust compiler, it falls back to the pure-Python path. The fallback in `python/axonweave/native.py` (`_numpy_*` functions) provides identical public behavior.

```bash
# Install from sdist (no Rust required)
pip install axonweave-X.Y.Z.tar.gz
```

:::DOC-WARN
sdist installs use NumPy/SciPy fallback paths. Performance parity with compiled wheels is not guaranteed. Native-equivalence tests verify functional correctness, not speed.
:::

## Native extension verification

After each wheel build, CI verifies the native extension loads and produces correct results.

### Load check

```python
import axonweave
assert axonweave._native._HAS_NATIVE is True
```

### Equivalence tests

`tests/test_native_runtime.py` runs every `_numpy_*` reference against its Rust kernel counterpart:

```python
def test_edge_lut_map_native_equivalence():
    """Rust edge_lut_map matches _numpy_edge_lut_map."""
    from axonweave.native import edge_lut_map, _numpy_edge_lut_map
    # ... identical inputs → byte-identical outputs
```

:::DOC-NOTE
Public behavior must be identical with or without the compiled extension. The extension is a performance optimization, not a correctness gate.
:::

### Fingerprint verification

Two independently built `.awb` artifacts from the same official source release must produce identical graph fingerprints. CI verifies this after substrate provisioning.

```text
graph_fingerprint = sha256(
    body_id_array +
    edge_src_array +
    edge_dst_array +
    weight_array
)
```

## Substrate installation from clean environment

Substrate provisioning is a first-class operation. CI runs a clean-environment installation test:

```bash
# Create isolated environment
python -m venv /tmp/test-env
source /tmp/test-env/bin/activate

# Install AxonWeave
pip install axonweave

# Install substrate from official release
axonweave substrate install male-cns:v1.0

# Verify substrate integrity
axonweave substrate verify male-cns:v1.0
```

The verification step checks:

1. **Source metadata** — provenance URLs and checksums match the official release.
2. **Schema version** — substrate schema is supported by the installed AxonWeave version.
3. **Graph integrity** — CSR indices are consistent, no dangling body IDs.
4. **Fingerprint** — computed fingerprint matches the published fingerprint.

:::DOC-WARN
Never add raw upstream MaleCNS data to source control. Substrate artifacts are provisioned and cached separately.
:::

## Release checksum and provenance

Every release produces:

### Checksums

```text
axonweave-X.Y.Z.sha256
axonweave-X.Y.Z.sha512
```

Generated with:

```bash
sha256sum dist/* > dist/axonweave-X.Y.Z.sha256
sha512sum dist/* > dist/axonweave-X.Y.Z.sha512
```

### Provenance metadata

Each wheel encodes provenance in `pyproject.toml`:

```toml
[tool.maturin]
project-version = "X.Y.Z"
rust-version = "1.XX.0"
build-location = "github-actions"
source-url = "https://github.com/axonweave/axonweave"
```

### PyPI publishing

Publishing uses GitHub Actions with PyPI Trusted Publishing/OIDC. No long-lived PyPI API token belongs in repository secrets.

The trusted publisher configuration:

| Field | Value |
|---|---|
| Repository | `axonweave/axonweave` |
| Workflow | `release.yml` |
| Environment | `pypi` |

Before enabling production publishing, configure the PyPI trusted publisher to match the repository, workflow, and environment.

## Release flow

```text
┌─────────────────────────────────────────────────────────────────────┐
│                        Release Flow                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────┐                                                   │
│  │ Tag vX.Y.Z   │                                                   │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Quality Gates │  lint, typecheck, native equivalence tests       │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────────────────────────────────┐                       │
│  │ Platform Wheel Builds (maturin)          │                       │
│  │ Linux x86_64  × Python 3.10–3.14        │                       │
│  │ macOS ARM64   × Python 3.10–3.14        │                       │
│  │ Windows x86_64 × Python 3.10–3.14       │                       │
│  └──────┬───────────────────────────────────┘                       │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ sdist build  │  pure-Python fallback, no Rust required          │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Verification │  wheel install, native load, equiv tests         │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Checksums    │  sha256, sha512 per artifact                     │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ PyPI Publish │  Trusted Publishing / OIDC                       │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Substrate    │  .awb pack, verify, publish                      │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Docs Deploy  │  versioned docs from tag                         │
│  └──────┬───────┘                                                   │
│         ↓                                                           │
│  ┌──────────────┐                                                   │
│  │ Release Notes│  changelog, migration guide                      │
│  └──────────────┘                                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Pre-release checklist

Before tagging a release, verify all items:

### Core

- [ ] All `PLAN.md` items at `[x]` have corresponding tests.
- [ ] `CHECKLIST.md` matches `PLAN.md` status.
- [ ] No public API lacks docstrings, type annotations, or examples.
- [ ] `__all__` exports are correct for every public module.

### Native

- [ ] Every `_numpy_*` reference has a Rust kernel counterpart.
- [ ] `tests/test_native_runtime.py` passes with and without native extension.
- [ ] maturin build succeeds on all three platforms.
- [ ] sdist installs cleanly without a Rust toolchain.

### Substrate

- [ ] `.awb` format supports the current schema version.
- [ ] `axonweave substrate verify` passes on the published artifact.
- [ ] Graph fingerprint is deterministic across independent builds.
- [ ] Substrate installation from clean environment succeeds.

### Scientific

- [ ] Every biological model has documented equations, parameters, units, and sources.
- [ ] Neurotransmitter predictions are explicitly labeled as predictions, not ground truth.
- [ ] Limitations report is current and accurate.
- [ ] Reproducibility fixtures produce identical results.

### Frameworks

- [ ] NumPy/SciPy backend verified.
- [ ] PyTorch backend verified.
- [ ] TensorFlow/Keras backend verified.
- [ ] JAX backend verified.
- [ ] Device capability matrix is current.

### Documentation

- [ ] Versioned docs deploy correctly.
- [ ] `/playground` direct navigation returns 200 OK.
- [ ] API reference is generated and accurate.
- [ ] Changelog covers all changes since last release.
- [ ] Migration guide exists for breaking changes.

### Security

- [ ] No API keys, tokens, or credentials in source control.
- [ ] No raw MaleCNS data in source control.
- [ ] No generated build directories in source control.
- [ ] Substrate download URLs are verified.

### Release

- [ ] Tag matches `pyproject.toml` version.
- [ ] PyPI trusted publisher is configured.
- [ ] Checksums generated for all artifacts.
- [ ] Release notes are drafted and reviewed.

## Versioning policy

AxonWeave follows Semantic Versioning:

| Change type | Version bump | Example |
|---|---|---|
| Bug fix | Patch | 1.0.0 → 1.0.1 |
| New feature | Minor | 1.0.0 → 1.1.0 |
| Breaking API change | Major | 1.0.0 → 2.0.0 |
| Substrate schema change | Minor or Major | depends on migration path |
| Native kernel change | Patch | functional equivalence maintained |

:::DOC-WARN
A native kernel change that alters numerical output (even within floating-point tolerance) requires a minor or major version bump and updated reproducibility fixtures.
:::

## Rollback and yanking

If a release is found to have critical issues:

```bash
# Yank from PyPI (keeps the release visible, prevents new installs)
pip install axonweave==X.Y.Z  # fails after yank
```

Yanking does not delete the release. It prevents new installations while preserving existing installations. Always follow a yank with a patch release containing the fix.
