from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import sys
from pathlib import Path

from . import __version__
from .data.installer import install_male_cns
from .data.manifest import MALE_CNS
from .data.registry import SubstrateRegistry
from .errors import AxonWeaveError


def _sha256(path: Path, chunk_size: int = 8 * 1024 * 1024) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        while chunk := f.read(chunk_size):
            h.update(chunk)
    return h.hexdigest()


def _do_install(args):
    if args.name != MALE_CNS["id"]:
        raise SystemExit(f"AXW101: unsupported substrate {args.name!r}; available: male-cns:v1.0")
    brain = install_male_cns(
        args.root, args.include_synapses, args.include_stats, args.disk_backed,
    )
    print(f"Installed {args.name}: {brain.n_neurons} neurons, {brain.graph.n_edges} graph edges")
    return 0


def _do_list(args):
    registry = SubstrateRegistry(args.root)
    base = registry.root / "substrates"
    if not base.exists():
        print("No substrates installed.")
        return 0
    entries = []
    for entry in sorted(base.iterdir()):
        manifest_file = entry / "manifest.json"
        if not entry.is_dir() or not manifest_file.exists():
            continue
        meta = json.loads(manifest_file.read_text(encoding="utf-8"))
        graph = meta.get("graph") or {}
        n_neurons = graph.get("n_neurons")
        n_edges = graph.get("n_edges")
        label = meta.get("id", entry.name)
        entries.append((
            label,
            f"{n_neurons:,}" if n_neurons is not None else "-",
            f"{n_edges:,}" if n_edges is not None else "-",
            meta.get("status", "?"),
        ))
    if not entries:
        print("No substrates installed.")
        return 0
    print(f"Installed substrates (cache: {registry.root}):")
    for label, n, e, status in entries:
        print(f"  {label:<28} {n:>12} neurons  {e:>12} edges  ({status})")
    return 0


def _do_info(args):
    registry = SubstrateRegistry(args.root)
    brain = registry.load(args.name)
    print(brain.info().summary())
    manifest_file = registry.path(args.name) / "manifest.json"
    files = []
    if manifest_file.exists():
        meta = json.loads(manifest_file.read_text(encoding="utf-8"))
        for key, rec in (meta.get("files") or {}).items():
            size = rec.get("size")
            files.append((rec.get("filename", key), f"{size:,} B" if size is not None else "-"))
    print("Files:")
    for filename, size_s in files:
        print(f"  {filename:<48} {size_s:>14}")
    return 0


def _do_remove(args):
    registry = SubstrateRegistry(args.root)
    target = registry.path(args.name)
    if not (target / "manifest.json").exists():
        raise SystemExit(f"AXW001: substrate {args.name!r} is not installed.")
    shutil.rmtree(target)
    print(f"Removed {args.name} from {target}")
    return 0


def _do_verify(args):
    registry = SubstrateRegistry(args.root)
    if args.name.endswith(".awb"):
        from .data.awb import verify as awb_verify

        manifest = awb_verify(Path(args.name).expanduser())
        print(f"Artifact {args.name} verified: {manifest.substrate_id} "
              f"({manifest.n_neurons:,} neurons, {manifest.n_edges:,} edges)")
        return 0
    brain = registry.load(args.name)
    target = registry.path(args.name)
    manifest_file = target / "manifest.json"
    meta = json.loads(manifest_file.read_text(encoding="utf-8"))
    failures = []
    records = meta.get("files") or {}
    for key, rec in records.items():
        filename = rec.get("filename")
        path = target / "source" / filename if (target / "source" / filename).exists() else target / filename
        if not path.exists():
            failures.append(f"{key}: missing {filename}")
            print(f"  {key:<22} missing")
            continue
        digest = _sha256(path)
        expected = rec.get("sha256")
        ok = expected is None or digest == expected
        if not ok:
            failures.append(f"{key}: sha256 mismatch")
        print(f"  {key:<22} {digest[:16]}... {'ok' if ok else 'MISMATCH'}")
    graph = meta.get("graph") or {}
    if graph.get("n_neurons") != brain.graph.n_neurons:
        failures.append("graph: neuron count mismatch")
    if graph.get("n_edges") != brain.graph.n_edges:
        failures.append("graph: edge count mismatch")
    recorded_fp = graph.get("fingerprint")
    if recorded_fp:
        from axonweave.core.brain import substrate_fingerprint
        if substrate_fingerprint(brain.graph) != recorded_fp:
            failures.append("graph: content fingerprint mismatch")
    if failures:
        raise SystemExit("AXW002: verification failed\n  " + "\n  ".join(failures))
    print(f"Substrate {args.name} verified: {len(records)} files ok")
    return 0


def _do_pack(args):
    registry = SubstrateRegistry(args.root)
    target = registry.path(args.name)
    if not (target / "manifest.json").exists():
        raise SystemExit(f"AXW001: substrate {args.name!r} is not installed.")
    output = Path(args.output).expanduser() if args.output else Path(args.name.replace(":", "-") + ".awb")
    from .data.awb import pack as awb_pack

    manifest = awb_pack(args.name, target, output, __version__)
    size = f"{output.stat().st_size:,} B"
    print(f"Packed {args.name} -> {output} ({size})")
    print(f"  schema: {manifest.schema_version}  fingerprint: {manifest.graph_fingerprint[:16]}...")
    return 0


def _do_install_awb(args):
    """Install a substrate from a local .awb artifact file."""
    from .data.awb import install as awb_install

    registry = SubstrateRegistry(args.root)
    substrate_id = awb_install(Path(args.path).expanduser(), registry)
    print(f"Installed {substrate_id} from {args.path}")
    return 0


def _do_inspect(args):
    """Display manifest metadata of a .awb artifact."""
    from .data.awb import inspect as awb_inspect

    meta = awb_inspect(Path(args.path).expanduser())
    graph = meta.get("graph") or {}
    print(f"Substrate:    {meta.get('substrate_id')}")
    print(f"Version:      {meta.get('substrate_version')}")
    print(f"Schema:       awb/{meta.get('schema_version')}")
    print(f"Fingerprint:  {graph.get('fingerprint', '')[:32]}...")
    print(f"Neurons:      {graph.get('n_neurons', 0):,}")
    print(f"Edges:        {graph.get('n_edges', 0):,}")
    print(f"Builder:      axonweave {meta.get('builder_version')}")
    if meta.get("license"):
        print(f"License:      {meta['license']}")
    if meta.get("source_release"):
        print(f"Source:       {meta['source_release']}")
    return 0


def _do_version(args):
    from . import native_version

    print(f"axonweave {__version__} (native core: {native_version()})")
    return 0


def main(argv=None):
    p = argparse.ArgumentParser(prog="axonweave")
    sub = p.add_subparsers(dest="cmd", required=True)
    substrate = sub.add_parser("substrate", help="manage biological substrates")
    substrate.add_argument("--root", default=None, help="override the AxonWeave cache root")
    ss = substrate.add_subparsers(dest="action", required=True)
    install = ss.add_parser("install", help="install a versioned substrate")
    install.add_argument("name")
    install.add_argument("--include-stats", action="store_true")
    install.add_argument("--include-synapses", action="store_true")
    install.add_argument(
        "--disk-backed", action="store_true",
        help="stream-build the graph with bounded RAM instead of in-memory assembly",
    )
    ss.add_parser("list", help="list installed substrates")
    info = ss.add_parser("info", help="show substrate details")
    info.add_argument("name")
    remove = ss.add_parser("remove", help="remove a substrate from the cache")
    remove.add_argument("name")
    verify = ss.add_parser("verify", help="verify substrate integrity (name or .awb path)")
    verify.add_argument("name")
    pack = ss.add_parser("pack", help="pack a substrate into a versioned .awb archive")
    pack.add_argument("name")
    pack.add_argument("--output", default=None, help="output .awb path (default: <name>.awb)")
    install_awb = ss.add_parser(
        "install-file", help="install a substrate from a local .awb artifact"
    )
    install_awb.add_argument("path")
    inspect_awb = ss.add_parser("inspect", help="display .awb artifact manifest metadata")
    inspect_awb.add_argument("path")
    sub.add_parser("version", help="print version info")
    args = p.parse_args(argv)

    handlers = {
        "install": _do_install,
        "list": _do_list,
        "info": _do_info,
        "remove": _do_remove,
        "verify": _do_verify,
        "pack": _do_pack,
        "install-file": _do_install_awb,
        "inspect": _do_inspect,
    }
    try:
        if args.cmd == "version":
            return _do_version(args)
        return handlers[args.action](args)
    except AxonWeaveError as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1