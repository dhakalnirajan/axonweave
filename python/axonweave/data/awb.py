"""Versioned ``.awb`` substrate artifact format (PLAN.md Phase 1).

An ``.awb`` file is a ZIP archive with a fixed internal layout:

    manifest.json          -- AWBManifest, written first, always present
    graph.npz              -- sparse CSR graph + body IDs (ConnectomeGraph.save)
    annotations.json       -- optional selection tables (may be absent)
    source/<filename>      -- optional upstream source files retained for provenance

The manifest is a versioned JSON document. Reading an artifact whose
``schema_version`` is newer than the supported version raises ``AXW003``
instead of silently reinterpreting it (Phase 1: "never silently reinterpret
an old substrate"; supported older schemas may declare a migration).

Acceptance criterion (Phase 1): two independently packed ``.awb`` artifacts
from the same installed substrate produce byte-identical manifests (modulo
the packing timestamp) and identical graph fingerprints.
"""
from __future__ import annotations

import json
import warnings
import zipfile
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable

from ..core.graph import ConnectomeGraph
from ..core.brain import substrate_fingerprint
from ..errors import (
    SchemaError,
    DatasetIntegrityError,
    SubstrateNotInstalledError,
    ConfigurationWarning,
)

AWB_FORMAT = "axonweave-substrate"
#: Highest ``.awb`` manifest schema this AxonWeave version can read.
SUPPORTED_SCHEMA_VERSION = "1.0"

# --------------------------------------------------------------------------
# Schema migration registry
# --------------------------------------------------------------------------
# Each entry maps (from_version, to_version) -> function transforming the raw
# manifest dict in place-of-value. Migrations form a chain: an artifact at
# schema 0.9 is migrated 0.9 -> 1.0, and a future 1.1 would add 1.0 -> 1.1
# (with SUPPORTED_SCHEMA_VERSION bumped and the chain extended).
#
# Rule (PLAN.md Phase 1): an old substrate is never silently reinterpreted.
# Every applied migration is recorded in the loaded manifest's
# ``migrations_applied`` list and announced with a ConfigurationWarning.
# A schema with no migration path raises AXW003.
SCHEMA_MIGRATIONS: dict[tuple[str, str], Callable[[dict], dict]] = {}

def register_migration(from_version: str, to_version: str):
    """Register a manifest migration ``from_version`` -> ``to_version``."""
    def decorator(fn: Callable[[dict], dict]):
        SCHEMA_MIGRATIONS[(from_version, to_version)] = fn
        return fn
    return decorator

@register_migration("0.9", "1.0")
def _migrate_0_9_to_1_0(manifest: dict) -> dict:
    """Pre-release 0.9 layout: identity fields at top level and the graph
    fingerprint/counts stored flat instead of under a ``graph`` object."""
    if "graph" not in manifest:
        manifest["graph"] = {
            "fingerprint": manifest.pop("graph_fingerprint", ""),
            "n_neurons": int(manifest.pop("n_neurons", 0)),
            "n_edges": int(manifest.pop("n_edges", 0)),
        }
    manifest.setdefault("substrate_version", manifest.pop("version", ""))
    return manifest

def _migration_chain(from_version: str) -> list[str]:
    """Return the versions reachable from ``from_version`` (inclusive)."""
    chain, v = [from_version], from_version
    while True:
        step = next((b for a, b in SCHEMA_MIGRATIONS if a == v), None)
        if step is None:
            return chain
        v = step
        chain.append(v)

def _migrate_to_supported(manifest_dict: dict) -> dict:
    """Migrate a raw manifest dict to SUPPORTED_SCHEMA_VERSION.

    Raises AXW003 when the version is unknown, newer than supported, or has
    no migration path. Applied migrations are recorded in the returned dict
    and announced with a ConfigurationWarning (never silent).
    """
    version = manifest_dict.get("schema_version", "1.0")
    known_older = {a for a, _ in SCHEMA_MIGRATIONS} | {SUPPORTED_SCHEMA_VERSION}
    if version not in known_older:
        raise SchemaError(
            f"AXW003: unsupported .awb schema version {version!r}; "
            f"this AxonWeave release supports {SUPPORTED_SCHEMA_VERSION!r} "
            f"(older schemas with migrations: {sorted(a for a, _ in SCHEMA_MIGRATIONS)}). "
            f"Upgrade AxonWeave to read this artifact."
        )
    history: list[str] = []
    while version != SUPPORTED_SCHEMA_VERSION:
        step = (version, SUPPORTED_SCHEMA_VERSION) if (version, SUPPORTED_SCHEMA_VERSION) in SCHEMA_MIGRATIONS \
            else next(((a, b) for a, b in SCHEMA_MIGRATIONS if a == version), None)
        if step is None or step[0] != version:
            raise SchemaError(
                f"AXW003: no migration path for .awb schema {version!r} -> "
                f"{SUPPORTED_SCHEMA_VERSION!r}."
            )
        fn = SCHEMA_MIGRATIONS[step]
        manifest_dict = fn(manifest_dict)
        version = manifest_dict["schema_version"] = step[1]
        history.append(f"{step[0]}->{step[1]}")
    if history:
        manifest_dict["migrations_applied"] = history
        warnings.warn(
            f"AXW007: .awb artifact at schema {history[0].split('->')[0]!r} was "
            f"migrated through {', '.join(history)}; the interpretation changed "
            f"explicitly, re-pack the artifact to update it in place.",
            ConfigurationWarning,
            stacklevel=2,
        )
    return manifest_dict


@dataclass
class AWBManifest:
    """Manifest describing a packed substrate artifact."""

    substrate_id: str
    substrate_version: str
    schema_version: str = SUPPORTED_SCHEMA_VERSION
    format: str = AWB_FORMAT
    source_release: str = ""
    source_urls: dict = field(default_factory=dict)
    source_checksums: dict = field(default_factory=dict)
    graph_fingerprint: str = ""
    n_neurons: int = 0
    n_edges: int = 0
    builder_version: str = ""
    license: str = ""
    attachments: dict = field(default_factory=dict)  # name -> {filename, size, sha256}
    migrations_applied: list[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {
            "format": self.format,
            "schema_version": self.schema_version,
            "substrate_id": self.substrate_id,
            "substrate_version": self.substrate_version,
            "source_release": self.source_release,
            "source_urls": self.source_urls,
            "source_checksums": self.source_checksums,
            "graph": {
                "fingerprint": self.graph_fingerprint,
                "n_neurons": self.n_neurons,
                "n_edges": self.n_edges,
            },
            "builder_version": self.builder_version,
            "license": self.license,
            "attachments": self.attachments,
            **({"migrations_applied": self.migrations_applied} if self.migrations_applied else {}),
        }

    @classmethod
    def from_dict(cls, d: dict) -> "AWBManifest":
        fmt = d.get("format")
        if fmt != AWB_FORMAT:
            raise SchemaError(
                f"AXW003: not an AxonWeave substrate artifact; expected format "
                f"{AWB_FORMAT!r}, got {fmt!r}"
            )
        graph = d.get("graph") or {}
        return cls(
            substrate_id=d["substrate_id"],
            substrate_version=d.get("substrate_version", ""),
            schema_version=d.get("schema_version", "1.0"),
            source_release=d.get("source_release", ""),
            source_urls=d.get("source_urls") or {},
            source_checksums=d.get("source_checksums") or {},
            graph_fingerprint=graph.get("fingerprint", ""),
            n_neurons=int(graph.get("n_neurons", 0)),
            n_edges=int(graph.get("n_edges", 0)),
            builder_version=d.get("builder_version", ""),
            license=d.get("license", ""),
            attachments=d.get("attachments") or {},
            migrations_applied=list(d.get("migrations_applied") or []),
        )


# --------------------------------------------------------------------------
# Internal archive member names
# --------------------------------------------------------------------------
_MEMBER_MANIFEST = "manifest.json"
_MEMBER_GRAPH = "graph.npz"
_MEMBER_ANNOTATIONS = "annotations.json"
_MEMBER_SOURCE_PREFIX = "source/"
# Biological metadata attachments restored next to the graph on install.
# These are the derived (already-built) copies from the installed cache;
# raw upstream files stay under source/ and are not re-verified at load.
_BIO_METADATA_FILES = (
    "annotations.feather",
    "neurotransmitters.feather",
    "receptors.json",
    "stats.feather",
)


def _sha256(path: Path, chunk_size: int = 8 * 1024 * 1024) -> str:
    import hashlib

    h = hashlib.sha256()
    with path.open("rb") as f:
        while chunk := f.read(chunk_size):
            h.update(chunk)
    return h.hexdigest()


def build_manifest_from_cache(substrate_id: str, cache_dir: Path, builder_version: str) -> AWBManifest:
    """Build an :class:`AWBManifest` from an installed cache directory."""
    import json as _json

    installed = cache_dir / "manifest.json"
    if not installed.exists():
        raise SubstrateNotInstalledError(
            f"AXW001: substrate {substrate_id!r} is not installed in {cache_dir}; "
            f"run `axonweave substrate install {substrate_id}` first."
        )
    meta = _json.loads(installed.read_text(encoding="utf-8"))
    graph = ConnectomeGraph.load(cache_dir / "graph.npz")
    fp = substrate_fingerprint(graph)
    attachments: dict = {}
    for name in (_MEMBER_ANNOTATIONS, *_BIO_METADATA_FILES):
        p = cache_dir / name
        if p.exists():
            attachments[name] = {"filename": name, "size": p.stat().st_size, "sha256": _sha256(p)}
    source_dir = cache_dir / "source"
    if source_dir.exists():
        for p in sorted(source_dir.iterdir()):
            if p.is_file():
                attachments[f"source/{p.name}"] = {
                    "filename": p.name, "size": p.stat().st_size, "sha256": _sha256(p)
                }
    return AWBManifest(
        substrate_id=meta.get("id", substrate_id),
        substrate_version=meta.get("version", substrate_id.split(":")[-1]),
        source_release=meta.get("source", ""),
        source_urls={"source": meta.get("source", "")},
        source_checksums={
            k: rec.get("sha256") for k, rec in (meta.get("files") or {}).items() if rec.get("sha256")
        },
        graph_fingerprint=fp,
        n_neurons=graph.n_neurons,
        n_edges=graph.n_edges,
        builder_version=builder_version,
        license=meta.get("license", ""),
        attachments=attachments,
    )


def pack(substrate_id: str, cache_dir: Path, output: Path, builder_version: str) -> AWBManifest:
    """Pack an installed substrate into a versioned ``.awb`` artifact."""
    cache_dir = Path(cache_dir)
    manifest = build_manifest_from_cache(substrate_id, cache_dir, builder_version)
    graph_path = cache_dir / _MEMBER_GRAPH
    if not graph_path.exists():
        raise SubstrateNotInstalledError(
            f"AXW001: substrate {substrate_id!r} cache entry has no graph artifact."
        )
    output = Path(output)
    output.parent.mkdir(parents=True, exist_ok=True)
    tmp = output.with_suffix(output.suffix + ".tmp")
    with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.writestr(_MEMBER_MANIFEST, json.dumps(manifest.to_dict(), indent=2, sort_keys=True))
        zf.write(graph_path, _MEMBER_GRAPH)
        annotations = cache_dir / _MEMBER_ANNOTATIONS
        if annotations.exists():
            zf.write(annotations, _MEMBER_ANNOTATIONS)
        for name in _BIO_METADATA_FILES:
            p = cache_dir / name
            if p.exists():
                zf.write(p, name)
        source_dir = cache_dir / "source"
        if source_dir.exists():
            for p in sorted(source_dir.iterdir()):
                if p.is_file():
                    zf.write(p, _MEMBER_SOURCE_PREFIX + p.name)
    tmp.replace(output)
    return manifest


def read_manifest(archive: Path) -> AWBManifest:
    """Read and validate the manifest of an ``.awb`` artifact (AXW003 on error)."""
    archive = Path(archive)
    if not archive.exists():
        raise DatasetIntegrityError(f"AXW002: .awb artifact {archive} does not exist.")
    with zipfile.ZipFile(archive) as zf:
        names = set(zf.namelist())
        if _MEMBER_MANIFEST not in names:
            raise SchemaError(
                f"AXW003: {archive.name} is not an AxonWeave substrate artifact "
                f"(no manifest.json)."
            )
        raw = json.loads(zf.read(_MEMBER_MANIFEST).decode("utf-8"))
    raw = _migrate_to_supported(raw)  # AXW003 on unknown/newer/no-path schemas
    manifest = AWBManifest.from_dict(raw)
    if manifest.schema_version != SUPPORTED_SCHEMA_VERSION:
        raise SchemaError(
            f"AXW003: manifest migrated to schema {manifest.schema_version!r} but "
            f"supported version is {SUPPORTED_SCHEMA_VERSION!r}."
        )
    return manifest


def inspect(archive: Path) -> dict:
    """Return manifest metadata for display by ``substrate inspect``."""
    return read_manifest(archive).to_dict()


def verify(archive: Path) -> AWBManifest:
    """Verify artifact integrity: schema, graph fingerprint, attachment hashes."""
    manifest = read_manifest(archive)
    with zipfile.ZipFile(archive) as zf:
        names = set(zf.namelist())
        if _MEMBER_GRAPH not in names:
            raise DatasetIntegrityError(
                f"AXW002: artifact {archive.name} is missing its graph payload."
            )
        import tempfile

        with tempfile.TemporaryDirectory() as td:
            graph_path = Path(td) / _MEMBER_GRAPH
            graph_path.write_bytes(zf.read(_MEMBER_GRAPH))
            try:
                graph = ConnectomeGraph.load(graph_path)
            except Exception as exc:  # corrupt .npz payload -> integrity error, not raw OSError
                raise DatasetIntegrityError(
                    f"AXW002: graph payload in {archive.name} is unreadable or corrupted: {exc}"
                ) from exc
        observed = substrate_fingerprint(graph)
        if observed != manifest.graph_fingerprint:
            raise DatasetIntegrityError(
                f"AXW002: graph fingerprint mismatch in {archive.name}: "
                f"manifest={manifest.graph_fingerprint}, observed={observed}. "
                f"The artifact is corrupted or was built from a different graph."
            )
        if graph.n_neurons != manifest.n_neurons or graph.n_edges != manifest.n_edges:
            raise DatasetIntegrityError(
                f"AXW002: graph size mismatch in {archive.name}: manifest records "
                f"({manifest.n_neurons} neurons, {manifest.n_edges} edges), graph has "
                f"({graph.n_neurons}, {graph.n_edges})."
            )
        for name, rec in manifest.attachments.items():
            member = name if name.startswith(_MEMBER_SOURCE_PREFIX) else rec.get("filename", name)
            if member not in names:
                raise DatasetIntegrityError(
                    f"AXW002: attachment {member!r} recorded in the manifest is "
                    f"missing from {archive.name}."
                )
            import hashlib

            h = hashlib.sha256(zf.read(member)).hexdigest()
            if rec.get("sha256") and h != rec["sha256"]:
                raise DatasetIntegrityError(
                    f"AXW002: attachment {member!r} failed sha256 verification in "
                    f"{archive.name}."
                )
    return manifest


def _source_filename_for_key(manifest: AWBManifest, key: str) -> str:
    """Map a manifest checksum key (e.g. 'connectivity') to its retained
    source filename (e.g. 'connectivity.feather') when one exists."""
    for name, rec in manifest.attachments.items():
        if name.startswith(_MEMBER_SOURCE_PREFIX) and Path(rec.get("filename", "")).stem == key:
            return rec["filename"]
    return key


def install(archive: Path, registry) -> str:
    """Install an ``.awb`` artifact into the local substrate registry cache.

    Verifies the artifact fully before activating it (atomic-ish: extract to a
    staging directory, verify, then move into place). Returns the substrate id.
    """
    import shutil

    manifest = verify(archive)
    target = registry.path(manifest.substrate_id)
    staging = target.with_name(target.name + ".staging")
    if staging.exists():
        shutil.rmtree(staging)
    staging.mkdir(parents=True)
    try:
        with zipfile.ZipFile(archive) as zf:
            for member in zf.infolist():
                if member.is_dir():
                    continue
                rel = Path(member.filename.replace("\\", "/"))
                if rel.is_absolute() or ".." in rel.parts:
                    raise DatasetIntegrityError(
                        f"AXW002: unsafe archive member {member.filename!r}."
                    )
                dest = (staging / rel).resolve()
                if not dest.is_relative_to(staging.resolve()):
                    raise DatasetIntegrityError(
                        f"AXW002: unsafe archive member {member.filename!r}."
                    )
                dest.parent.mkdir(parents=True, exist_ok=True)
                with zf.open(member) as src, dest.open("wb") as out:
                    shutil.copyfileobj(src, out)
        # Rewrite the legacy cache manifest so SubstrateRegistry.load accepts it,
        # and record which biological metadata attachments were restored.
        restored_bio = [name for name in _BIO_METADATA_FILES if (staging / name).exists()]
        cache_manifest = {
            "id": manifest.substrate_id,
            "status": "installed",
            "version": manifest.substrate_version,
            "license": manifest.license,
            "source": manifest.source_release,
            "schema_version": manifest.schema_version,
            "graph": {
                "fingerprint": manifest.graph_fingerprint,
                "n_neurons": manifest.n_neurons,
                "n_edges": manifest.n_edges,
            },
            "attachments": restored_bio,
            "files": {
                key: {
                    "filename": _source_filename_for_key(manifest, key),
                    "sha256": value,
                }
                for key, value in manifest.source_checksums.items()
            },
        }
        (staging / "manifest.json").write_text(
            json.dumps(cache_manifest, indent=2, sort_keys=True), encoding="utf-8"
        )
        if target.exists():
            shutil.rmtree(target)
        staging.replace(target)
    finally:
        if staging.exists():
            shutil.rmtree(staging, ignore_errors=True)
    return manifest.substrate_id
