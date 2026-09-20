# Rust Core

AxonWeave low-level compute lives in Rust. One compiled extension (`axonweave._native`, from `rust/`) exposes all performance-critical kernels through PyO3. Python remains the public API; Rust is the compute substrate underneath.

## Overview

Every computationally meaningful primitive routes through a single dispatch layer (`python/axonweave/native.py`) that either calls the compiled Rust extension or an identical NumPy/SciPy fallback. Public results are identical either way; equivalence is proven in CI.

The Rust core is **not**:
- A second runtime or API surface
- A brain simulation
- Required for correctness — the pure-Python path is first-class

It **is**:
- A performance accelerator for hot inner loops
- Built only in CI (`rust.yml`), not on developer machines
- Scientifically transparent — it never changes modeling behavior

:::DOC-WARN
The Rust extension accelerates compute only. It never introduces new biological claims, changes numerical semantics, or makes the connectome a complete biophysical brain simulation. Scientific model rules remain governed by the [Scientific Reference](scientific-reference.md).
:::

## Architecture

```text
user model
    ↓
framework adapter (tensor/device semantics owned by PyTorch/TensorFlow/NumPy)
    ↓
native.py  — single dispatch layer
    ├── _HAS_NATIVE:  -> axonweave._native (compiled PyO3 extension, rust/)
    └── !_HAS_NATIVE: -> native._numpy_* (SciPy/NumPy reference)
    ↓
sparse substrate cache (CSR graph, body IDs)
```

### Module map

`rust/src/lib.rs` registers the `_native` PyO3 module. Each Rust submodule registers its own pyfunctions:

| Rust module | Kernels / classes | NumPy reference |
|---|---|---|
| `graph.rs` | `sparse_matmul`, `sparse_matmul_transpose`, `csr_matmul_2d`, `csr_matmul_2d_transpose`, `build_csr`, `csr_submatrix`, `csr_fingerprint` | `_numpy_sparse_matmul`, `_numpy_sparse_matmul_transpose`, `_numpy_csr_matmul_2d`, `_numpy_csr_matmul_2d_transpose`, `_numpy_build_csr`, `_numpy_csr_submatrix`, `_numpy_csr_fingerprint` |
| `dynamics.rs` | `lif_step`, `adaptive_lif_step`, `rate_step` | `_numpy_lif_step`, `_numpy_adaptive_lif_step`, `_numpy_rate_step` |
| `surrogate.rs` | `surrogate_forward`, `surrogate_backward`, `surrogate_lif_step`, `surrogate_adaptive_lif_step` | `_numpy_surrogate_forward`, `_numpy_surrogate_backward`, `_numpy_surrogate_lif_step`, `_numpy_surrogate_adaptive_lif_step` |
| `learning.rs` | `stdp_update` | `_numpy_stdp_update` |
| `signals.rs` | `vesicle_release_step`, `nt_currents` | `_numpy_vesicle_release_step`, `_numpy_nt_currents` |
| `receptors.rs` | `receptor_step` | `_numpy_receptor_step` |
| `delays.rs` | `DelayRing` (pyclass), `delay_ticks_from_ms`, `apply_delays` | `NumpyDelayBuffer`, `_numpy_delay_ticks`, `_numpy_apply_delayed_propagation` |
| `encoders.rs` | `dense_matmul`, `row_absmax_normalize`, `embed_lookup` | `_numpy_dense_matmul`, `_numpy_row_absmax_normalize`, `_numpy_embed_lookup` |
| `decoders.rs` | `decode_argmax`, `decode_clip` | `_numpy_decode_argmax`, `_numpy_decode_clip` |
| `readout.rs` | `readout_logits` | `_numpy_readout_logits` |
| `provisioning.rs` | `sha256_file`, `md5_base64_file` | Python `hashlib` fallbacks |

Cargo dependencies (`rust/Cargo.toml`): `pyo3 0.22`, `numpy 0.22`, `sha2 0.10`, `md-5 0.10`, `base64 0.22`. Rust edition 2021, minimum Rust version 1.80.

### The dispatch contract

`native.py` is the single dispatch layer. Every public dispatcher:

1. Coerces inputs to canonical dtypes — float32 data, int64 indices/indptr, per-domain dtypes for signals (float64) — and flattens to 1-D where the kernel expects flat arrays.
2. Calls `_NATIVE.<fn>` when `_HAS_NATIVE` is true, otherwise calls `native._numpy_*`.
3. Reshapes flat kernel output back to public shape (e.g. `(batch, n_rows)` for `csr_matmul_2d`) and returns NumPy arrays or scalars. `native.py` never returns framework tensors.

Kernel signatures that consume CSR always receive raw `data`/`indices`/`indptr` arrays plus explicit `n_rows`/`n_cols`, never a SciPy matrix object. Public `native` functions take the matrix and decompose it; the reference implementations use it directly.

## Available Kernels

### Dynamics

**`lif_step`** — Leaky Integrate-and-Fire with absolute refractory period.

```rust
fn lif_step(
    v, refrac_until, current: PyArray1<f32>,
    t, tau, v_rest, v_threshold, v_reset, refractory, dt: f32,
) -> (spikes, v_new, refrac_new): (PyArray1<f32>, PyArray1<f32>, PyArray1<f32>)
```

Update rule: `dv = (-(v - v_rest) + current) * dt / tau`. Spike when `v >= v_threshold` and refractory expired. Reset to `v_reset` on spike.

**`adaptive_lif_step`** — LIF + threshold adaptation.

```rust
fn adaptive_lif_step(
    v, refrac_until, threshold, current: PyArray1<f32>,
    t, tau, v_rest, v_threshold, v_reset, refractory, tau_adapt, delta_threshold, dt: f32,
) -> (spikes, v_new, threshold_new, refrac_new): (PyArray1<f32>, PyArray1<f32>, PyArray1<f32>, PyArray1<f32>)
```

Threshold relaxes toward `v_rest` between spikes and jumps by `delta_threshold` on spike.

**`rate_step`** — Instantaneous firing rate.

```rust
fn rate_step(current: PyArray1<f32>, gain, baseline: f32) -> PyArray1<f32>
```

Output: `baseline + gain * current`.

### Sparse matrix operations

**`sparse_matmul`** — `W @ x` for 1-D `x`, CSR format. Row accumulation of column-activity.

**`sparse_matmul_transpose`** — `x @ W` (transpose propagation). Row-activity propagates to columns.

**`csr_matmul_2d`** — Batched `W @ x^T` for 2-D `x` with shape `(batch, n_cols)`. Returns `(batch, n_rows)`.

**`csr_matmul_2d_transpose`** — Batched `x @ W` for 2-D `x` with shape `(batch, n_rows)`. Returns `(batch, n_cols)`.

**`build_csr`** — COO-to-CSR reduction. Sorts by (row, col), sums duplicate entries.

**`csr_submatrix`** — Extract submatrix by row/column index arrays. Returns new CSR with remapped indices.

**`csr_fingerprint`** — Deterministic SHA-256 over shape, body IDs, indptr, indices, and data. Used for substrate integrity verification.

### Surrogate gradients

**`surrogate_forward`** — Hard threshold: `v >= threshold ? 1 : 0`.

**`surrogate_backward`** — Gradient of surrogate function. Accepts `kind` in `0..3`:

| kind | name | formula |
|---|---|---|
| `0` | sigmoid | `k * sigmoid(x*k) * (1 - sigmoid(x*k))`, `x = clip(v - threshold, -20, 20)` |
| `1` | atan | `k / (1 + (pi*k*x)^2)` |
| `2` | piecewise | `k` if `|x| <= 1/k`, else `0` |
| `3` | STE | `1` if `|x| <= width`, else `0` |

**`surrogate_lif_step`** — Combined forward LIF + surrogate backward in one call.

**`surrogate_adaptive_lif_step`** — Same as above for adaptive LIF.

### Learning

**`stdp_update`** — Pairwise trace-based STDP. Updates CSR edge data in-place. Supports optional reward modulation, weight clamping (`w_min`, `w_max`).

### Signals and receptors

**`vesicle_release_step`** — Vesicle pool dynamics with stochastic release. Returns (concentration, pool, per-synapse current, total current).

**`nt_currents`** — `sign * weights * pre_activity`. Simple current computation.

**`receptor_step`** — Conductance-based receptor dynamics. Accepts `kind` in `0..3`:

| kind | name | driving current |
|---|---|---|
| `0` | AMPA | `g * V_rev` |
| `1` | GABA | `g * V_rev` |
| `2` | NMDA | `g * Mg_block * V_rev` (voltage-dependent Mg block) |
| `3` | dopamine | `g * gain * sign` (modulatory, no reversal potential) |

Conductance decays as `g' = g + (pre - g) * dt / tau` for all kinds.

### Delays

**`DelayRing`** (Rust pyclass) / **`NumpyDelayBuffer`** — Per-neuron circular buffer for axonal conduction delays.

- `reset()` — zero buffers and write positions
- `step(pre, pre_idx, post_idx, delay_ticks, weights)` — write + read
- `read(pre_idx, post_idx, delay_ticks, weights)` — read without writing
- `write_pos` — per-neuron write counters

**`delay_ticks_from_ms`** — Convert ms to integer ticks: `clip(round(d / dt), 0, n_slots - 1)`.

**`apply_delays`** — Stateless single-shot delayed propagation.

### Encoders, decoders, readout

**`dense_matmul`** — Flat-buffer dense matmul `(m,k) @ (k,n) -> (m,n)`.

**`row_absmax_normalize`** — Row-wise max-abs normalization with epsilon floor.

**`embed_lookup`** — Index into flat embedding table by token IDs.

**`decode_argmax`** — `argmax` over first `n_actions` columns per batch.

**`decode_clip`** — `clip` over first `n_actions` columns per batch.

**`readout_logits`** — `activity @ weight + bias` for readout layers.

### Provisioning

**`sha256_file`** — Chunked (8 MiB) SHA-256 hash of a file. Python `hashlib` fallback.

**`md5_base64_file`** — MD5 + base64 encoding of a file. Used for substrate manifest verification.

## NumPy/SciPy Fallback

```python
try:
    from . import _native as _NATIVE
    _HAS_NATIVE = True
except ImportError:
    _NATIVE = None
    _HAS_NATIVE = False
```

The extension is optional. Built only in CI, source installs run pure-Python. Both paths are first-class:

- `_numpy_*` functions implement reference semantics unconditionally — the single numeric source of truth.
- Public behavior is identical with or without the extension.
- `tests/test_native_runtime.py` proves equivalence (skipped when `_HAS_NATIVE` is false, run against built wheel in CI).

:::DOC-NOTE
A `_numpy_*` reference must stay in sync with its Rust kernel. Every new primitive adds both the Rust kernel and the NumPy reference in the same PR.
:::

## Building from Source

### Prerequisites

- **Rust toolchain**: `rustup` (rustc >= 1.80, cargo)
- **Python**: >= 3.10 with `maturin` (`pip install maturin`)
- **System**: C compiler (MSVC on Windows, Xcode CLI tools on macOS, gcc/clang on Linux)

### Build

```bash
cd rust/
maturin develop --release        # build + install into current venv
maturin build --release          # build wheel only
cargo test                       # run Rust unit tests
```

Or from the repo root:

```bash
pip install maturin
maturin develop -m rust/Cargo.toml --release
```

### Verify

```python
import axonweave._native as native
print(native.__version__)        # e.g. "0.2.0"
print(native._HAS_NATIVE)        # should be True after build
```

:::DOC-WARN
The extension is built only in CI (`rust.yml`). Developer machines may not have a Rust toolchain. The pure-Python path is authoritative for day-to-day work. CI is authoritative for the compiled path.
:::

## Platform Support

| Platform | Status | Notes |
|---|---|---|
| **Linux** (x86_64) | Supported | Primary CI target. Wheels built with manylinux. |
| **macOS** (ARM64, x86_64) | Supported | CI builds for both architectures. MPS backend compatible. |
| **Windows** (x86_64) | Supported | CI builds with MSVC. PyPI wheels available. |
| **Linux** (aarch64) | Experimental | May require manual maturin build. |

The pure-Python fallback works on any platform with NumPy/SciPy. The compiled extension adds performance but is not required.

:::DOC-NOTE
Platform-specific quirks: Windows may need Visual Studio Build Tools. macOS may need `xcode-select --install`. All platforms share the same `axonweave._native` Python API.
:::

## Performance

The Rust kernel eliminates Python interpreter overhead in tight loops — the same numeric result, fewer cycles. Benefit scales with array size and simulation duration.

### Where Rust helps most

| Kernel | Bottleneck | Rust benefit |
|---|---|---|
| `sparse_matmul` / `csr_matmul_2d` | Inner dot-product loop over CSR edges | ~5-15x on 100k+ neurons |
| `lif_step` / `adaptive_lif_step` | Per-neuron membrane update | ~3-8x depending on batch |
| `build_csr` | Sort + dedup of COO edges | ~2-5x on large graphs |
| `csr_fingerprint` | SHA-256 over CSR arrays | ~2-3x vs hashlib |
| `surrogate_lif_step` | Combined LIF + gradient computation | ~4-10x on long sequences |

### When it doesn't matter

- Small arrays (< 1k elements): Python overhead dominates, Rust benefit negligible.
- I/O-bound work (substrate loading, disk-backed builds): NumPy/SciPy already efficient.
- Single-step calls: GIL release in PyO3 helps only with sustained loops.

### Benchmarking

Run the benchmark suite:

```bash
python benchmarks/bench_graph_build.py          # wall time, RSS, fingerprints
python benchmarks/bench_graph_build.py --jsonl   # append to results.jsonl
```

The benchmark hard-fails if in-memory and disk-backed paths produce different fingerprints — a correctness tripwire, not just a performance report.

### Equivalence guarantee

`tests/test_native_runtime.py` calls `_NATIVE.<fn>` directly against `native._numpy_*` for every kernel. CI runs this both with and without the compiled extension. Numerical results must match to within float32 tolerance; any divergence is a test failure.

## API Reference

All functions below are in `axonweave.native`. They accept NumPy arrays and return NumPy arrays. Framework adapters (PyTorch, Keras) sit above this layer and handle tensor/device conversion.

### `native.lif_step`

```python
from axonweave.native import lif_step

spikes, v_new, refrac_new = lif_step(
    v, refrac_until, current,      # np.ndarray (float32, 1-D)
    t, tau, v_rest, v_threshold,   # float
    v_reset, refractory, dt,       # float
)
```

Single-compartment LIF update. Returns spike mask, updated membrane, updated refractory clock.

### `native.adaptive_lif_step`

```python
from axonweave.native import adaptive_lif_step

spikes, v_new, threshold_new, refrac_new = adaptive_lif_step(
    v, refrac_until, threshold, current,   # np.ndarray (float32, 1-D)
    t, tau, v_rest, v_threshold,           # float
    v_reset, refractory, tau_adapt,        # float
    delta_threshold, dt,                   # float
)
```

Adaptive threshold LIF. Threshold relaxes toward `v_rest` with time constant `tau_adapt` and jumps by `delta_threshold` on spike.

### `native.rate_step`

```python
from axonweave.native import rate_step

rate = rate_step(current, gain, baseline)
# current: np.ndarray (float32, 1-D)
# gain, baseline: float
# returns: np.ndarray (float32, 1-D)
```

Instantaneous firing rate: `baseline + gain * current`.

### `native.sparse_matmul`

```python
from axonweave.native import sparse_matmul

result = sparse_matmul(csr, x)
# csr: scipy.sparse.csr_matrix
# x: np.ndarray (float32, 1-D, length n_cols)
# returns: np.ndarray (float32, 1-D, length n_rows)
```

CSR matrix-vector multiply: `result[i] = sum_j(W[i,j] * x[j])`.

### `native.sparse_matmul_transpose`

```python
from axonweave.native import sparse_matmul_transpose

result = sparse_matmul_transpose(csr, x)
# csr: scipy.sparse.csr_matrix
# x: np.ndarray (float32, 1-D, length n_rows)
# returns: np.ndarray (float32, 1-D, length n_cols)
```

Transpose multiply: `result[j] = sum_i(x[i] * W[i,j])`.

### `native.csr_matmul_2d`

```python
from axonweave.native import csr_matmul_2d

result = csr_matmul_2d(csr, x)
# csr: scipy.sparse.csr_matrix
# x: np.ndarray (float32, 2-D, shape (batch, n_cols))
# returns: np.ndarray (float32, 2-D, shape (batch, n_rows))
```

Batched CSR multiply for multi-sample inference.

### `native.build_csr_from_coo`

```python
from axonweave.native import build_csr_from_coo

csr = build_csr_from_coo(rows, cols, weights, shape)
# rows, cols: np.ndarray (int64)
# weights: np.ndarray (float32)
# shape: (n_rows, n_cols)
# returns: scipy.sparse.csr_matrix
```

COO-to-CSR reduction. Sums duplicate (row, col) entries.

### `native.csr_submatrix`

```python
from axonweave.native import csr_submatrix

sub = csr_submatrix(csr, row_sel, col_sel)
# csr: scipy.sparse.csr_matrix
# row_sel, col_sel: np.ndarray (int64)
# returns: scipy.sparse.csr_matrix (shape = (len(row_sel), len(col_sel)))
```

Extract submatrix by index selection. Used for NeuronSelection sub-networks.

### `native.csr_fingerprint`

```python
from axonweave.native import csr_fingerprint

hex_digest = csr_fingerprint(csr, body_ids)
# csr: scipy.sparse.csr_matrix
# body_ids: np.ndarray (int64, length n_neurons)
# returns: str (64-char hex SHA-256)
```

Deterministic fingerprint for substrate integrity checks.

### `native.graph_bfs`

There is no `graph_bfs` kernel in the Rust core. Graph traversal is handled at the Python level using CSR row slicing (`csr_submatrix`) and scipy sparse operations. BFS-style exploration uses the `ConnectomeGraph` API instead:

```python
neighbors = brain.graph.neighbors(body_id)  # outgoing neighbor body IDs
```

:::DOC-NOTE
`graph_bfs` was proposed but not implemented as a Rust kernel — BFS semantics vary by use case and are better expressed in Python with existing CSR primitives.
:::

### `native.mulberry32_rng`

There is no `mulberry32_rng` kernel in the current Rust core. Random number generation is handled by NumPy's RNG or framework-specific generators. The Rust core focuses on deterministic compute kernels where reproducibility is managed at the Python level.

:::DOC-NOTE
If a deterministic Rust RNG is needed in the future, it would follow the standard contract: Rust kernel + `_numpy_*` reference + dispatcher + equivalence test.
:::

### `native.surrogate_forward`

```python
from axonweave.native import surrogate_forward

spikes = surrogate_forward(v, threshold)
# v, threshold: np.ndarray (float32, 1-D) or float
# returns: np.ndarray (float32, 1-D) — 1.0 where v >= threshold, 0.0 otherwise
```

### `native.surrogate_backward`

```python
from axonweave.native import surrogate_backward

grad = surrogate_backward(v, threshold, kind, k, width)
# v: np.ndarray (float32, 1-D)
# threshold, k, width: float
# kind: int (0=sigmoid, 1=atan, 2=piecewise, 3=STE)
# returns: np.ndarray (float32, 1-D)
```

Surrogate gradient for backpropagation through spikes.

### `native.surrogate_lif_step`

```python
from axonweave.native import surrogate_lif_step

spikes, v_new, refrac_new, gradient = surrogate_lif_step(
    v, refrac_until, current,
    t, tau, v_rest, v_threshold, v_reset, refractory, dt,
    kind, k, width,
)
```

Combined LIF forward + surrogate backward in one call. Returns spike mask, updated state, and gradient for BPTT.

### `native.stdp_update`

```python
from axonweave.native import stdp_update

data_new, pre_trace_new, post_trace_new = stdp_update(
    csr, pre_trace, post_trace, pre_activity, post_activity,
    a_plus, a_minus, tau_pre, tau_post, dt,
    reward=None, w_min=None, w_max=None,
)
```

Pairwise trace-based STDP. Updates CSR edge weights. `reward` scales weight changes for three-factor learning.

### `native.receptor_step`

```python
from axonweave.native import receptor_step

current, g_new = receptor_step(
    g, pre_activity, kind, decay_time_constant,
    reverse_potential, gain, sign,
    mg_concentration, mg_slope, mg_offset,
    voltage=None, dt=1.0,
)
```

Conductance-based receptor update. `kind`: 0=AMPA, 1=GABA, 2=NMDA, 3=dopamine.

### `native.delay_ticks_from_ms`

```python
from axonweave.native import delay_ticks_from_ms

ticks = delay_ticks_from_ms(delays_ms, dt, max_delay_ms)
# delays_ms: np.ndarray (float32)
# returns: np.ndarray (int64)
```

Converts millisecond delays to integer tick indices.

### `native.dense_matmul`

```python
from axonweave.native import dense_matmul

result = dense_matmul(a, b)
# a: np.ndarray (float32, shape (m, k))
# b: np.ndarray (float32, shape (k, n))
# returns: np.ndarray (float32, shape (m, n))
```

Dense matrix multiplication for encoder/readout layers.

### `native.readout_logits`

```python
from axonweave.native import readout_logits

logits = readout_logits(activity, weight, bias)
# activity: np.ndarray (float32, shape (batch, n_source))
# weight: np.ndarray (float32, shape (n_source, n_out))
# bias: np.ndarray (float32, shape (n_out,))
# returns: np.ndarray (float32, shape (batch, n_out))
```

Readout projection: `activity @ weight + bias`.

## Adding a New Primitive

1. Write the Rust kernel in `rust/src/*.rs`. Register the pyfunction in the module's `register` function.
2. Add `_numpy_*` reference in `python/axonweave/native.py` — the single numeric source of truth.
3. Add public dispatcher in `native.py` following the dtype/1-D/reshape contract.
4. Add equivalence test in `tests/test_native_runtime.py` calling `_NATIVE.<fn>` against `native._numpy_*`.
5. CI is authoritative for compiled-path verification; do not claim local verification of the extension.

## CI Verification

`.github/workflows/rust.yml`:
- **Rust job**: `cargo test` + maturin build across OSes.
- **native-equivalence job**: builds wheel, installs it, runs `tests/test_native_runtime.py` against compiled extension, then runs full suite against the wheel.

Locally, the extension is never compiled — CI is authoritative for the compiled path.

## Limitations

- Extension is optional by design, built only in CI.
- Rust kernels return flat arrays/scalars; shape and dtype correctness sits in Python wrappers.
- The Rust core is a compute substrate, not a brain simulation.

## Related

- [Architecture](architecture.md) — system layout and the Rust boundary.
- [Backends](backends.md) — how `native.py` sits under the NumPy and framework adapters.
- [Release Engineering](release-engineering.md) — CI wheel building with the extension included.
