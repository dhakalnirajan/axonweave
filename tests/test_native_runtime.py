"""Native (Rust) core <-> NumPy reference equivalence suite.

Each test invokes the compiled ``axonweave._native`` kernel directly and
compares it against the matching ``native._numpy_*`` reference implementation
that backs the pure-python fallback path. This proves the two execution paths
produce the same public results (the central invariant of the rust-core
architecture).

These tests only run when the compiled extension is importable (CI builds the
wheel before running the suite); locally the module is skipped via
``pytestmark``.
"""
from __future__ import annotations

import base64
import hashlib

import numpy as np
import pytest
from scipy import sparse

from axonweave import native as N

pytestmark = pytest.mark.skipif(
    not N._HAS_NATIVE, reason="compiled _native core not available (build wheel first)"
)


def _csr(n=6, density=0.4, seed=3):
    rng = np.random.default_rng(seed)
    dense = (rng.random((n, n)) < density).astype(np.float32)
    np.fill_diagonal(dense, 0.0)
    m = sparse.csr_matrix(dense, dtype=np.float32)
    return m


def _canon(m: sparse.csr_matrix) -> sparse.csr_matrix:
    m = m.tocsr().astype(np.float32)
    m.sum_duplicates()
    return m.sorted_indices()


def _calls(*arrays):
    """Cast each array to the dtype the native kernels expect: float32 data,
    int64 indices/indptr (scipy CSR may hand back int32 on some platforms)."""
    return [
        np.ascontiguousarray(a, dtype=np.int64 if np.issubdtype(a.dtype, np.integer) else np.float32)
        for a in arrays
    ]


# ---------------------------------------------------------------------------
# Graph: CSR kernels
# ---------------------------------------------------------------------------
class TestGraph:
    def test_sparse_matmul(self):
        m = _csr()
        x = np.random.default_rng(4).random(m.shape[1]).astype(np.float32)
        data, idx, indptr = _calls(m.data, m.indices, m.indptr)
        got = N._NATIVE.sparse_matmul(data, idx, indptr, x, m.shape[0], m.shape[1])
        want = N._numpy_sparse_matmul(m, x)
        np.testing.assert_allclose(got, want, atol=1e-6)

    def test_sparse_matmul_transpose(self):
        m = _csr()
        x = np.random.default_rng(5).random(m.shape[0]).astype(np.float32)
        data, idx, indptr = _calls(m.data, m.indices, m.indptr)
        got = N._NATIVE.sparse_matmul_transpose(data, idx, indptr, x, m.shape[0], m.shape[1])
        want = N._numpy_sparse_matmul_transpose(m, x)
        np.testing.assert_allclose(got, want, atol=1e-6)

    def test_csr_matmul_2d(self):
        m = _csr(n=5)
        x = np.random.default_rng(6).random((3, m.shape[1])).astype(np.float32)
        data, idx, indptr = _calls(m.data, m.indices, m.indptr)
        got = N._NATIVE.csr_matmul_2d(data, idx, indptr, x, m.shape[0], m.shape[1])
        want = N._numpy_csr_matmul_2d(m, x)
        np.testing.assert_allclose(got.reshape(3, m.shape[0]), want, atol=1e-6)

    def test_csr_matmul_2d_transpose(self):
        m = _csr(n=5)
        x = np.random.default_rng(7).random((4, m.shape[0])).astype(np.float32)
        data, idx, indptr = _calls(m.data, m.indices, m.indptr)
        got = N._NATIVE.csr_matmul_2d_transpose(data, idx, indptr, x, m.shape[0], m.shape[1])
        want = N._numpy_csr_matmul_2d_transpose(m, x)
        np.testing.assert_allclose(got.reshape(4, m.shape[1]), want, atol=1e-6)

    def test_build_csr(self):
        rng = np.random.default_rng(8)
        rows = rng.integers(0, 5, size=24)
        cols = (rng.integers(0, 3, size=24))  # force duplicate (row, col) pairs
        w = rng.random(24).astype(np.float32)
        data, idx, indptr = N._NATIVE.build_csr(rows, cols, w, 5, 3)
        native_m = sparse.csr_matrix((data, idx, indptr), shape=(5, 3))
        want = N._numpy_build_csr(rows, cols, w, 5, 3)
        np.testing.assert_array_equal(native_m.toarray(), want.toarray())

    def test_csr_submatrix(self):
        m = _csr(n=6, density=0.5)
        rng = np.random.default_rng(9)
        row_sel = rng.choice(6, size=3, replace=False).astype(np.int64)
        col_sel = rng.choice(6, size=4, replace=False).astype(np.int64)
        data, idx, indptr = _calls(m.data, m.indices, m.indptr)
        out_data, out_idx, out_ptr = N._NATIVE.csr_submatrix(
            data, idx, indptr, row_sel, col_sel, m.shape[0], m.shape[1])
        got = sparse.csr_matrix((out_data, out_idx, out_ptr),
                                shape=(len(row_sel), len(col_sel)))
        want = N._numpy_csr_submatrix(m, row_sel, col_sel)
        np.testing.assert_array_equal(got.toarray(), want.toarray())

    def test_csr_fingerprint(self):
        m = _canon(_csr())
        body_ids = np.arange(m.shape[0], dtype=np.int64) * 10
        data, idx, indptr = _calls(m.data, m.indices, m.indptr)
        got = N._NATIVE.csr_fingerprint(data, idx, indptr, body_ids, m.shape[0], m.shape[1])
        want = N._numpy_csr_fingerprint(m, body_ids)
        assert got == want


# ---------------------------------------------------------------------------
# Dynamics
# ---------------------------------------------------------------------------
class TestDynamics:
    def _lif_args(self):
        rng = np.random.default_rng(10)
        n = 64
        v = (rng.random(n) * 30 - 70).astype(np.float32)
        refrac = (rng.integers(0, 5, n) * 1.0).astype(np.float32)
        current = (rng.random(n) * 40 - 10).astype(np.float32)
        return v, refrac, current

    def test_lif_step(self):
        v, r, c = self._lif_args()
        got = N._NATIVE.lif_step(v, r, c, 10.0, 20.0, -65.0, -55.0, -65.0, 2.0, 0.5)
        want = N._numpy_lif_step(v, r, c, 10.0, 20.0, -65.0, -55.0, -65.0, 2.0, 0.5)
        for g, w in zip(got, want):
            np.testing.assert_allclose(g, w, atol=1e-6)

    def test_adaptive_lif_step(self):
        v, r, c = self._lif_args()
        th = np.full_like(v, -55.0)
        got = N._NATIVE.adaptive_lif_step(
            v, r, th, c, 10.0, 20.0, -65.0, -55.0, -65.0, 2.0, 500.0, 1.0, 0.5)
        want = N._numpy_adaptive_lif_step(
            v, r, th, c, 10.0, 20.0, -65.0, -55.0, -65.0, 2.0, 500.0, 1.0, 0.5)
        for g, w in zip(got, want):
            np.testing.assert_allclose(g, w, atol=1e-6)

    def test_rate_step(self):
        x = np.array([0.0, 1.0, -2.0, 3.5], dtype=np.float32)
        got = N._NATIVE.rate_step(x, 2.0, -1.0)
        want = N._numpy_rate_step(x, 2.0, -1.0)
        np.testing.assert_allclose(got, want, atol=1e-6)


# ---------------------------------------------------------------------------
# Surrogate gradients
# ---------------------------------------------------------------------------
class TestSurrogates:
    @pytest.mark.parametrize("kind", [0, 1, 2, 3])
    def test_surrogate_forward_backward(self, kind):
        rng = np.random.default_rng(11)
        v = (rng.random(50) * 30 - 75).astype(np.float32)
        got_f = N._NATIVE.surrogate_forward(v, -55.0)
        want_f = N._numpy_surrogate_forward(v, -55.0)
        np.testing.assert_allclose(got_f, want_f, atol=1e-7)
        got_b = N._NATIVE.surrogate_backward(v, -55.0, kind, 25.0, 1.0)
        want_b = N._numpy_surrogate_backward(v, -55.0, kind, 25.0, 1.0)
        np.testing.assert_allclose(got_b, want_b, atol=1e-6)

    @pytest.mark.parametrize("kind", [0, 1, 2, 3])
    def test_surrogate_lif_step(self, kind):
        rng = np.random.default_rng(12)
        n = 48
        v = (rng.random(n) * 30 - 70).astype(np.float32)
        r = (rng.integers(0, 4, n) * 1.0).astype(np.float32)
        c = (rng.random(n) * 60 - 20).astype(np.float32)
        got = N._NATIVE.surrogate_lif_step(
            v, r, c, 5.0, 20.0, -65.0, -55.0, -65.0, 2.0, 0.5, kind, 25.0, 1.0)
        want = N._numpy_surrogate_lif_step(
            v, r, c, 5.0, 20.0, -65.0, -55.0, -65.0, 2.0, 0.5, kind, 25.0, 1.0)
        for g, w in zip(got, want):
            np.testing.assert_allclose(g, w, atol=1e-6)

    @pytest.mark.parametrize("kind", [0, 1, 2, 3])
    def test_surrogate_adaptive_lif_step(self, kind):
        rng = np.random.default_rng(13)
        n = 48
        v = (rng.random(n) * 30 - 70).astype(np.float32)
        r = (rng.integers(0, 4, n) * 1.0).astype(np.float32)
        c = (rng.random(n) * 60 - 20).astype(np.float32)
        th = np.full_like(v, -55.0)
        got = N._NATIVE.surrogate_adaptive_lif_step(
            v, r, th, c, 5.0, 20.0, -65.0, -55.0, -65.0, 2.0, 500.0, 1.0, 0.5,
            kind, 25.0, 1.0)
        want = N._numpy_surrogate_adaptive_lif_step(
            v, r, th, c, 5.0, 20.0, -65.0, -55.0, -65.0, 2.0, 500.0, 1.0, 0.5,
            kind, 25.0, 1.0)
        for g, w in zip(got, want):
            np.testing.assert_allclose(g, w, atol=1e-6)


# ---------------------------------------------------------------------------
# Learning
# ---------------------------------------------------------------------------
class TestLearning:
    def test_stdp_update(self):
        m = _canon(_csr(n=8, density=0.5))
        rng = np.random.default_rng(14)
        pre_t = rng.random(m.shape[1]).astype(np.float32)
        post_t = rng.random(m.shape[0]).astype(np.float32)
        pre_a = rng.random(m.shape[1]).astype(np.float32)
        post_a = rng.random(m.shape[0]).astype(np.float32)
        data, idx, indptr = _calls(m.data, m.indices, m.indptr)
        got = N._NATIVE.stdp_update(
            data, idx, indptr, pre_t, post_t, pre_a, post_a,
            0.01, 0.05, 20.0, 20.0, 0.5, 1.0, 0.0, 1.0)
        want = N._numpy_stdp_update(
            m, pre_t, post_t, pre_a, post_a, 0.01, 0.05, 20.0, 20.0, 0.5, 1.0, 0.0, 1.0)
        for g, w in zip(got, want):
            np.testing.assert_allclose(g, w, atol=1e-6)


# ---------------------------------------------------------------------------
# Synapses / receptors
# ---------------------------------------------------------------------------
class TestSynapses:
    def test_vesicle_release_step(self):
        rng = np.random.default_rng(15)
        n = 32
        vp = rng.random(n)
        conc = rng.random(n) * 0.5
        pre = rng.random(n)
        rel = rng.random(n) * 0.3
        dec = (0.5 + rng.random(n) * 0.4)
        sto = rng.random(n)
        sign = rng.choice([-1.0, 1.0], n)
        w = rng.random(n) * 10
        got = N._NATIVE.vesicle_release_step(vp, conc, pre, rel, dec, sto, sign, w)
        want = N._numpy_vesicle_release_step(vp, conc, pre, rel, dec, sto, sign, w)
        for g, w in zip(got, want):
            np.testing.assert_allclose(g, w, atol=1e-12, rtol=1e-12)

    def test_nt_currents(self):
        rng = np.random.default_rng(16)
        n = 16
        sign = rng.choice([-1.0, 1.0], n).astype(np.float64)
        w = (rng.random(n) * 5).astype(np.float64)
        pre = rng.random(n)
        got = N._NATIVE.nt_currents(sign, w, pre)
        want = N._numpy_nt_currents(sign, w, pre)
        np.testing.assert_allclose(got, want, atol=1e-12, rtol=1e-12)

    @pytest.mark.parametrize("kind", [0, 1, 2, 3])
    def test_receptor_step(self, kind):
        rng = np.random.default_rng(17 + kind)
        n = 24
        g = rng.random(n).astype(np.float32)
        pre = rng.random(n).astype(np.float32)
        vol = (rng.random(n) * 20 - 75).astype(np.float32)
        got = N._NATIVE.receptor_step(
            g, pre, vol, 0.5, kind, 50.0, 0.0, 1.0, 0.8, 1.1e-05, 62.0, -60.0)
        want = N._numpy_receptor_step(
            g, pre, vol, kind, 50.0, 0.0, 1.0, 0.8, 1.1e-05, 62.0, -60.0, 0.5)
        for gg, ww in zip(got, want):
            np.testing.assert_allclose(gg, ww, atol=1e-6)


# ---------------------------------------------------------------------------
# Delays (ring engine equivalence)
# ---------------------------------------------------------------------------
class TestDelays:
    def test_delay_ticks_from_ms(self):
        d = np.array([0.0, 5.0, 12.5, 1.2, 31.0], dtype=np.float32)
        got = N._NATIVE.delay_ticks_from_ms(d, 1.0, 20.0)
        n_slots = int(np.ceil(20.0 / 1.0)) + 1
        want = N._numpy_delay_ticks(d, 1.0, 20.0, n_slots)
        np.testing.assert_array_equal(got, want)

    def _ring_drive(self, ring, steps=6):
        rng = np.random.default_rng(18)
        n = 5
        pre_idx = rng.integers(0, n, size=12)
        post_idx = rng.integers(0, n, size=12)
        ticks = rng.integers(0, 4, size=12)
        w = rng.random(12).astype(np.float32)
        outs = []
        for _ in range(steps):
            pre = rng.random(n).astype(np.float32)
            outs.append(ring.step(pre, pre_idx, post_idx, ticks, w))
        return outs, pre_idx, post_idx, ticks, w

    def test_delay_ring_native_vs_numpy(self):
        native_ring = N._NATIVE.DelayRing(4, 5)
        numpy_ring = N.NumpyDelayBuffer(4, 5)
        for _ in range(2):
            outs_n, pre_idx, post_idx, ticks, w = self._ring_drive(native_ring)
            outs_p, *_ = self._ring_drive(numpy_ring)
            for gn, wp in zip(outs_n, outs_p):
                np.testing.assert_allclose(gn, wp, atol=1e-6)
        np.testing.assert_array_equal(native_ring.write_pos, np.asarray(numpy_ring.write_pos))

    def test_apply_delays(self):
        m = _csr(n=6, density=0.4)
        rng = np.random.default_rng(19)
        pre = rng.random(m.shape[0]).astype(np.float32)
        delays = rng.uniform(0, 15, m.nnz).astype(np.float32)
        max_delay, dt = 20.0, 1.0
        data, idx, indptr = _calls(m.data, m.indices, m.indptr)
        got = N._NATIVE.apply_delays(
            data, idx, indptr, pre, delays, max_delay, dt, m.shape[0], m.shape[1])
        n_slots = int(np.ceil(max_delay / dt)) + 1
        coo = m.tocoo()
        delay_ticks = N._numpy_delay_ticks(delays, dt, max_delay, n_slots).astype(np.int64)
        want = N._numpy_apply_delayed_propagation(
            coo.row, coo.col, coo.data, pre, delay_ticks, n_slots, m.shape[0], m.shape[1])
        np.testing.assert_allclose(got, want, atol=1e-6)


# ---------------------------------------------------------------------------
# Encoders / decoders / readout
# ---------------------------------------------------------------------------
class TestDenseLayer:
    def test_dense_matmul(self):
        a = np.random.default_rng(20).random((3, 5)).astype(np.float32)
        b = np.random.default_rng(21).random((5, 4)).astype(np.float32)
        got = N._NATIVE.dense_matmul(a.ravel(), b.ravel(), 3, 5, 4).reshape(3, 4)
        want = N._numpy_dense_matmul(a.ravel(), b.ravel(), 3, 5, 4)
        np.testing.assert_allclose(got, want, atol=1e-5)

    def test_row_absmax_normalize(self):
        x = np.random.default_rng(22).random((2, 6)).astype(np.float32) * 2 - 1
        got = N._NATIVE.row_absmax_normalize(x.ravel(), 2, 6, 1e-8).reshape(2, 6)
        want = N._numpy_row_absmax_normalize(x.ravel(), 2, 6, 1e-8)
        np.testing.assert_allclose(got, want, atol=1e-6)

    def test_embed_lookup(self):
        emb = np.random.default_rng(23).random((7, 4)).astype(np.float32)
        ids = np.array([0, 3, 6, 3], dtype=np.int64)
        got = N._NATIVE.embed_lookup(ids, emb.ravel(), 7, 4).reshape(4, 4)
        want = N._numpy_embed_lookup(ids, emb, 7, 4)
        np.testing.assert_allclose(got, want, atol=1e-7)

    def test_decode_argmax(self):
        v = np.random.default_rng(24).random((5, 8)).astype(np.float32)
        got = N._NATIVE.decode_argmax(v.ravel(), 5, 8, 4)
        want = N._numpy_decode_argmax(v.ravel(), 5, 8, 4)
        np.testing.assert_array_equal(got, want)

    def test_decode_clip(self):
        v = (np.random.default_rng(25).random((5, 8)) * 4 - 2).astype(np.float32)
        got = N._NATIVE.decode_clip(v.ravel(), 5, 8, 4, -1.0, 1.0).reshape(5, 4)
        want = N._numpy_decode_clip(v.ravel(), 5, 8, 4, -1.0, 1.0)
        np.testing.assert_allclose(got, want, atol=1e-6)

    def test_readout_logits(self):
        a = np.random.default_rng(26).random((4, 6)).astype(np.float32)
        w = np.random.default_rng(27).random((6, 3)).astype(np.float32)
        b = np.random.default_rng(28).random(3).astype(np.float32)
        got = N._NATIVE.readout_logits(a.ravel(), w.ravel(), b.ravel(), 4, 6, 3).reshape(4, 3)
        want = N._numpy_readout_logits(a.ravel(), w.ravel(), b.ravel(), 4, 6, 3)
        np.testing.assert_allclose(got, want, atol=1e-5)


# ---------------------------------------------------------------------------
# Provisioning / file hashing
# ---------------------------------------------------------------------------
class TestFileHashing:
    def _tmpfile(self, tmp_path, size=1_000_000):
        p = tmp_path / "blob.bin"
        p.write_bytes(bytes(np.random.default_rng(29).integers(0, 256, size=size, dtype=np.uint8)))
        return p

    def test_sha256_file(self, tmp_path):
        p = self._tmpfile(tmp_path)
        got = N._NATIVE.sha256_file(str(p))
        want = hashlib.sha256(p.read_bytes()).hexdigest()
        assert got == want

    def test_md5_base64_file(self, tmp_path):
        p = self._tmpfile(tmp_path)
        got = N._NATIVE.md5_base64_file(str(p))
        want = base64.b64encode(hashlib.md5(p.read_bytes()).digest()).decode("ascii")
        assert got == want