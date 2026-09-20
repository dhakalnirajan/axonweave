"""Tests for the ``axonweave`` CLI (substrate lifecycle + version)."""
from __future__ import annotations

import hashlib
import json
import zipfile
from pathlib import Path

import numpy as np
import pytest
from scipy import sparse

from axonweave import ConnectomeGraph
from axonweave.cli import main


def _fake_substrate(root: Path):
    target = root / "substrates" / "male-cns-v1.0"
    target.mkdir(parents=True, exist_ok=True)
    graph = ConnectomeGraph(sparse.eye(4, dtype=np.float32, format="csr"), np.arange(4) * 5)
    graph.save(target / "graph.npz")
    payload = b"conn-feather-payload"
    source = target / "source"
    source.mkdir()
    (source / "connectivity.feather").write_bytes(payload)
    meta = {
        "id": "male-cns:v1.0",
        "status": "installed",
        "version": "v1.0",
        "license": "CC-BY",
        "source": "https://example.invalid/",
        "graph": {"n_neurons": 4, "n_edges": 4},
        "files": {
            "connectivity": {
                "filename": "connectivity.feather",
                "size": len(payload),
                "sha256": hashlib.sha256(payload).hexdigest(),
            }
        },
    }
    (target / "manifest.json").write_text(json.dumps(meta), encoding="utf-8")
    return target


def test_version_prints_version(capsys):
    assert main(["version"]) == 0
    out = capsys.readouterr().out
    assert out.startswith("axonweave")
    assert "native core:" in out


def test_list_empty_cache(tmp_path, capsys):
    assert main(["substrate", "--root", str(tmp_path), "list"]) == 0
    assert "No substrates installed." in capsys.readouterr().out


def test_install_unsupported_name(tmp_path):
    with pytest.raises(SystemExit, match="AXW101"):
        main(["substrate", "--root", str(tmp_path), "install", "other:v2"])


def test_info_reports_details(tmp_path, capsys):
    _fake_substrate(tmp_path)
    assert main(["substrate", "--root", str(tmp_path), "info", "male-cns:v1.0"]) == 0
    out = capsys.readouterr().out
    assert "Substrate:   male-cns:v1.0" in out
    assert "Fingerprint:" in out
    assert "Neurons:" in out
    assert "Connections:" in out
    assert "connectivity.feather" in out


def test_list_reports_installed(tmp_path, capsys):
    _fake_substrate(tmp_path)
    assert main(["substrate", "--root", str(tmp_path), "list"]) == 0
    out = capsys.readouterr().out
    assert "male-cns:v1.0" in out
    assert "4" in out


def test_remove_deletes_cache_entry(tmp_path):
    target = _fake_substrate(tmp_path)
    assert main(["substrate", "--root", str(tmp_path), "remove", "male-cns:v1.0"]) == 0
    assert not target.exists()


def test_remove_missing_fails(tmp_path):
    with pytest.raises(SystemExit, match="AXW001"):
        main(["substrate", "--root", str(tmp_path), "remove", "male-cns:v1.0"])


def test_verify_passes(tmp_path, capsys):
    _fake_substrate(tmp_path)
    assert main(["substrate", "--root", str(tmp_path), "verify", "male-cns:v1.0"]) == 0
    out = capsys.readouterr().out
    assert "verified" in out
    assert "ok" in out


def test_verify_catches_corruption(tmp_path):
    target = _fake_substrate(tmp_path)
    (target / "source" / "connectivity.feather").write_bytes(b"tampered")
    with pytest.raises(SystemExit, match="AXW002"):
        main(["substrate", "--root", str(tmp_path), "verify", "male-cns:v1.0"])


def test_verify_unmatched_graph_counts_fail(tmp_path):
    target = _fake_substrate(tmp_path)
    meta_path = target / "manifest.json"
    meta = json.loads(meta_path.read_text(encoding="utf-8"))
    meta["graph"]["n_edges"] = 999
    meta_path.write_text(json.dumps(meta), encoding="utf-8")
    with pytest.raises(SystemExit, match="AXW002"):
        main(["substrate", "--root", str(tmp_path), "verify", "male-cns:v1.0"])


def test_pack_install_file_round_trip(tmp_path, capsys):
    target = _fake_substrate(tmp_path)
    archive = tmp_path / "bundle.awb"
    assert main(["substrate", "--root", str(tmp_path), "pack", "male-cns:v1.0",
                 "--output", str(archive)]) == 0
    assert archive.exists()
    assert "Packed" in capsys.readouterr().out
    assert main(["substrate", "--root", str(tmp_path), "remove", "male-cns:v1.0"]) == 0
    assert main(["substrate", "--root", str(tmp_path), "install-file", str(archive)]) == 0
    out = capsys.readouterr().out
    assert "Installed male-cns:v1.0" in out
    assert target.exists()
    assert (target / "graph.npz").exists()
    assert main(["substrate", "--root", str(tmp_path), "verify", "male-cns:v1.0"]) == 0


def test_inspect_awb_reports_manifest(tmp_path, capsys):
    _fake_substrate(tmp_path)
    archive = tmp_path / "bundle.awb"
    assert main(["substrate", "--root", str(tmp_path), "pack", "male-cns:v1.0",
                 "--output", str(archive)]) == 0
    capsys.readouterr()
    assert main(["substrate", "--root", str(tmp_path), "inspect", str(archive)]) == 0
    out = capsys.readouterr().out
    assert "male-cns:v1.0" in out
    assert "awb/1.0" in out
    assert "Fingerprint:" in out


def test_verify_awb_artifact_path(tmp_path, capsys):
    _fake_substrate(tmp_path)
    archive = tmp_path / "bundle.awb"
    assert main(["substrate", "--root", str(tmp_path), "pack", "male-cns:v1.0",
                 "--output", str(archive)]) == 0
    capsys.readouterr()
    assert main(["substrate", "--root", str(tmp_path), "verify", str(archive)]) == 0
    out = capsys.readouterr().out
    assert "verified" in out
    assert "male-cns:v1.0" in out


def test_verify_awb_tampered_artifact_fails(tmp_path):
    _fake_substrate(tmp_path)
    archive = tmp_path / "bundle.awb"
    assert main(["substrate", "--root", str(tmp_path), "pack", "male-cns:v1.0",
                 "--output", str(archive)]) == 0
    with zipfile.ZipFile(archive) as zf:
        members = {i.filename: zf.read(i.filename) for i in zf.infolist()}
    members["graph.npz"] = b"garbage"
    with zipfile.ZipFile(archive, "w") as zf:
        for name, payload in members.items():
            zf.writestr(name, payload)
    # CLI returns exit code 1 for AxonWeaveError (not SystemExit).
    assert main(["substrate", "--root", str(tmp_path), "verify", str(archive)]) == 1


def test_pack_default_output_name(tmp_path, monkeypatch):
    _fake_substrate(tmp_path)
    monkeypatch.chdir(tmp_path)
    assert main(["substrate", "--root", str(tmp_path), "pack", "male-cns:v1.0"]) == 0
    assert (tmp_path / "male-cns-v1.0.awb").exists()


def test_pack_missing_substrate_fails(tmp_path):
    with pytest.raises(SystemExit, match="AXW001"):
        main(["substrate", "--root", str(tmp_path), "pack", "male-cns:v1.0",
              "--output", str(tmp_path / "x.awb")])


def test_install_file_rejects_zip_slip(tmp_path):
    archive = tmp_path / "evil.awb"
    with zipfile.ZipFile(archive, "w") as zf:
        zf.writestr("manifest.json", json.dumps({
            "format": "axonweave-substrate", "schema_version": "1.0",
            "substrate_id": "male-cns:v1.0", "substrate_version": "v1.0",
            "graph": {},
        }))
        zf.writestr("../evil.txt", b"pwned")
    assert main(["substrate", "--root", str(tmp_path), "install-file", str(archive)]) == 1
    assert not (tmp_path.parent / "evil.txt").exists()


def test_install_file_rejects_non_bundle(tmp_path):
    archive = tmp_path / "not-a-bundle.awb"
    with zipfile.ZipFile(archive, "w") as zf:
        zf.writestr("readme.txt", b"hi")
    assert main(["substrate", "--root", str(tmp_path), "install-file", str(archive)]) == 1