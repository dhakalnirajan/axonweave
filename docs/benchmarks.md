# Benchmarks

Performance characteristics of AxonWeave's graph-construction and runtime paths, how to reproduce them, and how to read the results honestly. Numbers here are indicative, not guarantees — always re-benchmark on your own hardware.

## Reproducing

The graph-construction benchmark suite lives at `benchmarks/bench_graph_build.py`. It benchmarks the three graph-build paths available today and reports wall time, peak RSS, and content fingerprint equality:

1. **`in-memory`** — `axonweave.data.builder.build_graph` (batches held in RAM).
2. **`disk-backed`** — `axonweave.data.streaming_builder.DiskBackedGraphBuilder` (Python streaming; O(batch) RAM).
3. **`native kernels`** — same disk-backed build, reporting whether the compiled `axonweave._native` CSR reduction is active (the Rust streaming builder is the Phase 2 roadmap item).

```bash
python benchmarks/bench_graph_build.py                        # default sizes
python benchmarks/bench_graph_build.py --n-neurons 5000 --density 0.001
python benchmarks/bench_graph_build.py --jsonl --label nightly
```

Passing `--jsonl` appends a machine-readable line (timestamp, label, sizes, timings, peak RSS, fingerprint equality) to `benchmarks/results.jsonl` so reports can accumulate history. Each result records the environment (Python/NumPy/Arrow versions, platform, whether the native extension was active) — a benchmark without its environment is not reproducible.

## What is measured, honestly

| Metric | Meaning | Caveat |
|---|---|---|
| Wall time | End-to-end build time including I/O | Dominated by disk speed for streaming runs |
| Peak RSS | Peak resident memory via `tracemalloc` | Excludes allocator overhead outside Python |
| Fingerprint equality | Whether all paths produced the same graph | A correctness gate — a fast wrong answer is a failure |

The fingerprint gate is deliberate: every build path must produce an identical graph fingerprint before timing is even reported. Performance numbers from runs that fail the fingerprint check are discarded.

## Known scale points

- **MaleCNS v1.0 retained graph**: ~166,700 neurons, ~25.6 million directed edges. The in-memory builder requires proportional RAM; the disk-backed builder bounds memory at O(batch).
- **Native CSR kernels**: when the compiled extension is present, CSR matmul and fingerprint kernels are used transparently. Public results are identical with or without the extension (the central native-core invariant), so benchmarks separate the two configurations via the `native active` flag rather than assuming it.

## Runtime step benchmarks (planned)

Per-`step` and `forward_sequence` throughput benchmarks over the [Temporal Runtime](runtime.md) are part of Phase 18 (Sparse Runtime Performance) and are not yet implemented. No numbers are published here until a benchmark harness exists for them.

## Rules for contributing benchmark results

1. Run on idle hardware; note CPU model, core count, and RAM.
2. Report the AxonWeave version, substrate version, and whether `_HAS_NATIVE` was true.
3. Never average away the fingerprint-equality gate.
4. Append via `--jsonl` rather than editing historical lines.

:::DOC-NOTE
Benchmark results are engineering facts, not scientific claims. Nothing on this page speaks to biological fidelity — see [Scientific Limitations](limitations.md).
:::
