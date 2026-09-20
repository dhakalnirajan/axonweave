"""Tests for the versioned .awb substrate artifact format (PLAN.md Phase 1)."""
from __future__ import annotations

import json
import zipfile
from pathlib import Path

import numpy as np
import pytest
from scipy import sparse

from axonweave import ConnectomeGraph
from axonweave.core.brain import substrate_fingerprint
from axonweave.data.awb import (
    AWBManifest,
    SUPPORTED_SCHEMA_VERSION,
    inspect,
    install,
    pack,
    read_manifest,
    verify,
)
from axonweave.data.registry import SubstrateRegistry
from axonweave.errors import (
    ConfigurationWarning,
    DatasetIntegrityError,
    SchemaError,
    SubstrateNotInstalledError,
)


def _fake_cache(root: Path) -> Path:
    """Build a minimal installed-substrate cache directory."""
    target = root / "substrates" / "male-cns-v1.0"
    target.mkdir(parents=True, exist_ok=True)
    graph = ConnectomeGraph(
        sparse.eye(4, dtype=np.float32, format="csr"), np.arange(4, dtype=np.int64) * 5
    )
    graph.save(target / "graph.npz")
    (target / "annotations.json").write_text('{"by_type": {"kc": [0, 1]}}', encoding="utf-8")
    # Biological metadata attachments (derived copies from install).
    (target / "annotations.feather").write_bytes(b"ann-feather")
    (target / "neurotransmitters.feather").write_bytes(b"nt-feather")
    (target / "receptors.json").write_text('{"default": "ampa"}', encoding="utf-8")
    source = target / "source"
    source.mkdir(exist_ok=True)
    (source / "connectivity.feather").write_bytes(b"conn-payload")
    meta = {
        "id": "male-cns:v1.0",
        "status": "installed",
        "version": "v1.0",
        "license": "CC-BY",
        "source": "https://example.invalid/release",
        "graph": {"n_neurons": 4, "n_edges": 4},
        "files": {
            "connectivity": {"filename": "connectivity.feather", "sha256": None}
        },
    }
    (target / "manifest.json").write_text(json.dumps(meta), encoding="utf-8")
    return target


@pytest.fixture
def packed(tmp_path):
    cache = _fake_cache(tmp_path / "cache")
    out = tmp_path / "male-cns-v1.0.awb"
    manifest = pack("male-cns:v1.0", cache, out, builder_version="0.2.0")
    return out, manifest, cache


class TestPack:
    def test_creates_artifact_with_manifest_and_graph(self, packed):
        out, manifest, _ = packed
        assert out.exists()
        with zipfile.ZipFile(out) as zf:
            names = set(zf.namelist())
        assert {"manifest.json", "graph.npz", "annotations.json"} <= names
        assert "source/connectivity.feather" in names

    def test_manifest_records_provenance(self, packed):
        out, manifest, _ = packed
        assert manifest.substrate_id == "male-cns:v1.0"
        assert manifest.substrate_version == "v1.0"
        assert manifest.schema_version == SUPPORTED_SCHEMA_VERSION
        assert manifest.builder_version == "0.2.0"
        assert manifest.license == "CC-BY"
        assert manifest.n_neurons == 4
        assert manifest.n_edges == 4
        assert manifest.graph_fingerprint
        assert manifest.source_urls["source"] == "https://example.invalid/release"

    def test_manifest_fingerprint_matches_graph(self, packed):
        out, manifest, cache = packed
        graph = ConnectomeGraph.load(cache / "graph.npz")
        assert manifest.graph_fingerprint == substrate_fingerprint(graph)

    def test_manifest_attachments_recorded(self, packed):
        out, manifest, _ = packed
        assert "annotations.json" in manifest.attachments
        assert "source/connectivity.feather" in manifest.attachments
        for rec in manifest.attachments.values():
            assert rec["sha256"]

    def test_biological_metadata_packed(self, packed):
        out, manifest, _ = packed
        with zipfile.ZipFile(out) as zf:
            names = set(zf.namelist())
        assert {"annotations.feather", "neurotransmitters.feather", "receptors.json"} <= names
        for name in ("annotations.feather", "neurotransmitters.feather", "receptors.json"):
            assert name in manifest.attachments
            assert manifest.attachments[name]["size"] > 0

    def test_biological_metadata_tamper_detected(self, packed):
        out, _, _ = packed
        with zipfile.ZipFile(out) as zf:
            members = {i.filename: zf.read(i.filename) for i in zf.infolist()}
        members["neurotransmitters.feather"] = b"tampered"
        with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zf:
            for name, payload in members.items():
                zf.writestr(name, payload)
        with pytest.raises(DatasetIntegrityError, match="AXW002.*neurotransmitters"):
            verify(out)

    def test_packing_missing_substrate_raises_axw001(self, tmp_path):
        with pytest.raises(SubstrateNotInstalledError, match="AXW001"):
            pack("male-cns:v1.0", tmp_path / "nonexistent", tmp_path / "x.awb", "0.2.0")

    def test_two_independent_packs_identical_manifest(self, tmp_path):
        """Acceptance criterion: same installed substrate -> same fingerprint."""
        cache = _fake_cache(tmp_path / "cache1")
        cache2 = _fake_cache(tmp_path / "cache2")
        m1 = pack("male-cns:v1.0", cache, tmp_path / "a.awb", "0.2.0")
        m2 = pack("male-cns:v1.0", cache2, tmp_path / "b.awb", "0.2.0")
        d1, d2 = m1.to_dict(), m2.to_dict()
        # Both manifests record the same identity, fingerprint and provenance.
        assert d1["graph"] == d2["graph"]
        assert d1["substrate_id"] == d2["substrate_id"]
        assert d1["source_checksums"] == d2["source_checksums"]

    def test_pack_is_atomic_no_tmp_left(self, packed):
        out, _, _ = packed
        assert not out.with_suffix(out.suffix + ".tmp").exists()


class TestReadManifest:
    def test_read_manifest_round_trip(self, packed):
        out, manifest, _ = packed
        loaded = read_manifest(out)
        assert loaded.to_dict() == manifest.to_dict()

    def test_rejects_non_awb_zip(self, tmp_path):
        archive = tmp_path / "not-awb.zip"
        with zipfile.ZipFile(archive, "w") as zf:
            zf.writestr("readme.txt", b"hi")
        with pytest.raises(SchemaError, match="AXW003"):
            read_manifest(archive)

    def test_rejects_wrong_format_field(self, tmp_path):
        archive = tmp_path / "wrong.awb"
        with zipfile.ZipFile(archive, "w") as zf:
            zf.writestr("manifest.json", json.dumps({"format": "something-else"}))
        with pytest.raises(SchemaError, match="AXW003"):
            read_manifest(archive)

    def test_rejects_future_schema_version(self, tmp_path):
        archive = tmp_path / "future.awb"
        manifest = AWBManifest(substrate_id="x:v1", substrate_version="v1")
        d = manifest.to_dict()
        d["schema_version"] = "999.0"
        with zipfile.ZipFile(archive, "w") as zf:
            zf.writestr("manifest.json", json.dumps(d))
        with pytest.raises(SchemaError, match="AXW003.*999.0"):
            read_manifest(archive)

    def test_rejects_missing_file(self, tmp_path):
        with pytest.raises(DatasetIntegrityError, match="AXW002"):
            read_manifest(tmp_path / "nope.awb")


class TestSchemaMigration:
    """Migration machinery: old schemas upgrade cleanly, never silently."""

    @staticmethod
    def _write_awb(path: Path, manifest_dict: dict, graph_bytes: bytes | None = None) -> Path:
        with zipfile.ZipFile(path, "w") as zf:
            zf.writestr("manifest.json", json.dumps(manifest_dict))
            if graph_bytes is not None:
                zf.writestr("graph.npz", graph_bytes)
        return path

    def _legacy_manifest(self) -> dict:
        # Schema 0.9 layout: flat graph fields, 'version' instead of
        # 'substrate_version', no 'format' niceties beyond the required one.
        return {
            "format": "axonweave-substrate",
            "schema_version": "0.9",
            "substrate_id": "male-cns:v1.0",
            "version": "v1.0",
            "graph_fingerprint": "deadbeef",
            "n_neurons": 4,
            "n_edges": 4,
        }

    def test_legacy_schema_migrates_to_supported(self, tmp_path):
        from axonweave.data.awb import read_manifest, SUPPORTED_SCHEMA_VERSION

        archive = self._write_awb(tmp_path / "legacy.awb", self._legacy_manifest())
        with pytest.warns(ConfigurationWarning, match="AXW007"):
            manifest = read_manifest(archive)
        assert manifest.schema_version == SUPPORTED_SCHEMA_VERSION
        assert manifest.substrate_version == "v1.0"
        assert manifest.graph_fingerprint == "deadbeef"
        assert manifest.n_neurons == 4
        assert manifest.migrations_applied == ["0.9->1.0"]

    def test_migrated_manifest_serializes_migration_history(self, tmp_path):
        from axonweave.data.awb import read_manifest

        archive = self._write_awb(tmp_path / "legacy.awb", self._legacy_manifest())
        with pytest.warns(ConfigurationWarning):
            manifest = read_manifest(archive)
        assert manifest.to_dict()["migrations_applied"] == ["0.9->1.0"]

    def test_unknown_schema_rejected_axw003(self, tmp_path):
        from axonweave.data.awb import read_manifest

        d = self._legacy_manifest()
        d["schema_version"] = "0.5"  # no migration path registered
        archive = self._write_awb(tmp_path / "old.awb", d)
        with pytest.raises(SchemaError, match="AXW003.*0.5"):
            read_manifest(archive)

    def test_newer_schema_rejected_axw003(self, tmp_path):
        from axonweave.data.awb import read_manifest

        d = self._legacy_manifest()
        d["schema_version"] = "2.0"
        archive = self._write_awb(tmp_path / "new.awb", d)
        with pytest.raises(SchemaError, match="AXW003"):
            read_manifest(archive)

    def test_registered_migration_persists_across_reads(self, tmp_path):
        from axonweave.data.awb import read_manifest, register_migration, SUPPORTED_SCHEMA_VERSION

        register_migration("0.8", "0.9")

        def _m08(m):
            m.setdefault("license", "CC-BY")
            return m

        from axonweave.data.awb import SCHEMA_MIGRATIONS
        SCHEMA_MIGRATIONS[("0.8", "0.9")] = _m08
        try:
            d = self._legacy_manifest()
            d["schema_version"] = "0.8"
            archive = self._write_awb(tmp_path / "v08.awb", d)
            with pytest.warns(ConfigurationWarning, match="0.8->0.9"):
                manifest = read_manifest(archive)
            assert manifest.schema_version == SUPPORTED_SCHEMA_VERSION
            assert manifest.migrations_applied == ["0.8->0.9", "0.9->1.0"]
        finally:
            del SCHEMA_MIGRATIONS[("0.8", "0.9")]

    def test_current_schema_no_warning(self, packed):
        out, _, _ = packed
        import warnings as _w
        from axonweave.data.awb import read_manifest

        with _w.catch_warnings():
            _w.simplefilter("error", ConfigurationWarning)
            manifest = read_manifest(out)  # must not warn
        assert manifest.migrations_applied == []


    def test_verify_applies_migrations(self, tmp_path):
        from axonweave.data.awb import verify

        archive = self._write_awb(tmp_path / "legacy.awb", self._legacy_manifest())
        # Graph payload missing -> verify fails after manifest migration,
        # proving the migration ran before integrity checks.
        with pytest.warns(ConfigurationWarning):
            with pytest.raises(DatasetIntegrityError, match="AXW002.*graph"):
                verify(archive)


class TestVerify:
    def test_verify_passes(self, packed):
        out, manifest, _ = packed
        assert verify(out).to_dict() == manifest.to_dict()

    def test_verify_detects_graph_tamper(self, packed):
        out, _, _ = packed
        # Rewrite the graph member with different content.
        with zipfile.ZipFile(out) as zf:
            members = {i.filename: zf.read(i.filename) for i in zf.infolist()}
        graph = ConnectomeGraph(
            sparse.eye(5, dtype=np.float32, format="csr"), np.arange(5, dtype=np.int64) * 5
        )
        buf = out.parent / "_g.npz"
        graph.save(buf)
        members["graph.npz"] = buf.read_bytes()
        buf.unlink()
        with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zf:
            for name, payload in members.items():
                zf.writestr(name, payload)
        with pytest.raises(DatasetIntegrityError, match="AXW002"):
            verify(out)

    def test_verify_detects_attachment_tamper(self, packed):
        out, _, _ = packed
        with zipfile.ZipFile(out) as zf:
            members = {i.filename: zf.read(i.filename) for i in zf.infolist()}
        members["annotations.json"] = b'{"tampered": true}'
        with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zf:
            for name, payload in members.items():
                zf.writestr(name, payload)
        with pytest.raises(DatasetIntegrityError, match="AXW002"):
            verify(out)

    def test_verify_detects_missing_graph_member(self, tmp_path):
        archive = tmp_path / "nograph.awb"
        m = AWBManifest(substrate_id="x:v1", substrate_version="v1")
        with zipfile.ZipFile(archive, "w") as zf:
            zf.writestr("manifest.json", json.dumps(m.to_dict()))
        with pytest.raises(DatasetIntegrityError, match="AXW002.*graph"):
            verify(archive)

    def test_inspect_returns_manifest_dict(self, packed):
        out, manifest, _ = packed
        assert inspect(out) == manifest.to_dict()


class TestInstall:
    def test_install_round_trip_loads(self, packed, tmp_path):
        out, manifest, _ = packed
        registry = SubstrateRegistry(tmp_path / "home")
        substrate_id = install(out, registry)
        assert substrate_id == "male-cns:v1.0"
        brain = registry.load(substrate_id)
        assert brain.n_neurons == 4
        assert brain.graph.selection_tables == {"by_type": {"kc": [0, 1]}}

    def test_installed_manifest_carries_fingerprint(self, packed, tmp_path):
        out, manifest, _ = packed
        registry = SubstrateRegistry(tmp_path / "home")
        install(out, registry)
        meta = json.loads(
            (registry.path("male-cns:v1.0") / "manifest.json").read_text(encoding="utf-8")
        )
        assert meta["graph"]["fingerprint"] == manifest.graph_fingerprint
        assert meta["status"] == "installed"

    def test_install_restores_biological_metadata(self, packed, tmp_path):
        out, _, _ = packed
        registry = SubstrateRegistry(tmp_path / "home")
        install(out, registry)
        target = registry.path("male-cns:v1.0")
        assert (target / "annotations.feather").read_bytes() == b"ann-feather"
        assert (target / "neurotransmitters.feather").read_bytes() == b"nt-feather"
        assert json.loads((target / "receptors.json").read_text(encoding="utf-8")) == {
            "default": "ampa"
        }
        # Registry manifest records which metadata attachments were restored.
        meta = json.loads((target / "manifest.json").read_text(encoding="utf-8"))
        assert set(meta["attachments"]) == {
            "annotations.feather", "neurotransmitters.feather", "receptors.json"
        }
        # BiologicalBrain wires the restored files in.
        brain = registry.load("male-cns:v1.0")
        assert brain.neurotransmitters is not None
        assert brain.annotations is not None
        assert brain.receptors is not None

    def test_install_rejects_tampered_artifact(self, packed, tmp_path):
        out, _, _ = packed
        with zipfile.ZipFile(out) as zf:
            members = {i.filename: zf.read(i.filename) for i in zf.infolist()}
        members["graph.npz"] = b"garbage"
        with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zf:
            for name, payload in members.items():
                zf.writestr(name, payload)
        registry = SubstrateRegistry(tmp_path / "home")
        with pytest.raises(DatasetIntegrityError):
            install(out, registry)
        # Nothing was activated.
        assert not registry.path("male-cns:v1.0").exists()

    def test_install_replaces_existing_entry(self, packed, tmp_path):
        out, _, _ = packed
        registry = SubstrateRegistry(tmp_path / "home")
        install(out, registry)
        install(out, registry)  # reinstall must not fail or duplicate
        brain = registry.load("male-cns:v1.0")
        assert brain.n_neurons == 4

    def test_install_rejects_zip_slip(self, packed, tmp_path):
        out, _, _ = packed
        with zipfile.ZipFile(out) as zf:
            members = {i.filename: zf.read(i.filename) for i in zf.infolist()}
        members["../evil.txt"] = b"pwned"
        evil = tmp_path / "evil.awb"
        with zipfile.ZipFile(evil, "w", zipfile.ZIP_DEFLATED) as zf:
            for name, payload in members.items():
                zf.writestr(name, payload)
        registry = SubstrateRegistry(tmp_path / "home")
        with pytest.raises(DatasetIntegrityError, match="AXW002"):
            install(evil, registry)
        assert not (tmp_path / "evil.txt").exists()
