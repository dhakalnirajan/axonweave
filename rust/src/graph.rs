use numpy::{PyArray1, PyArray2, PyArrayMethods};
use pyo3::prelude::*;
use sha2::{Digest, Sha256};

#[pyfunction]
pub fn sparse_matmul<'py>(
    py: Python<'py>,
    data: Bound<'py, PyArray1<f32>>,
    indices: Bound<'py, PyArray1<i64>>,
    indptr: Bound<'py, PyArray1<i64>>,
    x: Bound<'py, PyArray1<f32>>,
    n_rows: usize,
    _n_cols: usize,
) -> PyResult<Bound<'py, PyArray1<f32>>> {
    let data_ro = data.readonly();
    let indices_ro = indices.readonly();
    let indptr_ro = indptr.readonly();
    let x_ro = x.readonly();

    let d = data_ro.as_slice()?;
    let idx = indices_ro.as_slice()?;
    let ip = indptr_ro.as_slice()?;
    let xv = x_ro.as_slice()?;

    let out = py.allow_threads(|| {
        let mut result = vec![0.0f32; n_rows];
        for i in 0..n_rows {
            let acc = (ip[i] as usize..ip[i + 1] as usize)
                .map(|j| d[j] * xv[idx[j] as usize])
                .sum::<f32>();
            result[i] = acc;
        }
        result
    });

    Ok(PyArray1::from_vec_bound(py, out))
}

#[pyfunction]
pub fn sparse_matmul_transpose<'py>(
    py: Python<'py>,
    data: Bound<'py, PyArray1<f32>>,
    indices: Bound<'py, PyArray1<i64>>,
    indptr: Bound<'py, PyArray1<i64>>,
    x: Bound<'py, PyArray1<f32>>,
    n_rows: usize,
    n_cols: usize,
) -> PyResult<Bound<'py, PyArray1<f32>>> {
    let data_ro = data.readonly();
    let indices_ro = indices.readonly();
    let indptr_ro = indptr.readonly();
    let x_ro = x.readonly();

    let d = data_ro.as_slice()?;
    let idx = indices_ro.as_slice()?;
    let ip = indptr_ro.as_slice()?;
    let xv = x_ro.as_slice()?;

    let out = py.allow_threads(|| {
        let mut result = vec![0.0f32; n_cols];
        for i in 0..n_rows {
            let xi = xv[i];
            for j in ip[i] as usize..ip[i + 1] as usize {
                result[idx[j] as usize] += d[j] * xi;
            }
        }
        result
    });

    Ok(PyArray1::from_vec_bound(py, out))
}

#[pyfunction]
pub fn csr_matmul_2d<'py>(
    py: Python<'py>,
    data: Bound<'py, PyArray1<f32>>,
    indices: Bound<'py, PyArray1<i64>>,
    indptr: Bound<'py, PyArray1<i64>>,
    x: Bound<'py, PyArray2<f32>>,
    n_rows: usize,
    _n_cols: usize,
) -> PyResult<Bound<'py, PyArray1<f32>>> {
    let data_ro = data.readonly();
    let indices_ro = indices.readonly();
    let indptr_ro = indptr.readonly();
    let x_ro = x.readonly();

    let d = data_ro.as_slice()?;
    let idx = indices_ro.as_slice()?;
    let ip = indptr_ro.as_slice()?;
    let xview = x_ro.as_array();

    let batch = xview.shape()[0];

    let out = py.allow_threads(|| {
        let mut result = vec![0.0f32; batch * n_rows];
        for b in 0..batch {
            for i in 0..n_rows {
                let mut acc = 0.0f32;
                for j in ip[i] as usize..ip[i + 1] as usize {
                    acc += d[j] * xview[[b, idx[j] as usize]];
                }
                result[b * n_rows + i] = acc;
            }
        }
        result
    });

    Ok(PyArray1::from_vec_bound(py, out))
}

#[pyfunction]
pub fn csr_matmul_2d_transpose<'py>(
    py: Python<'py>,
    data: Bound<'py, PyArray1<f32>>,
    indices: Bound<'py, PyArray1<i64>>,
    indptr: Bound<'py, PyArray1<i64>>,
    x: Bound<'py, PyArray2<f32>>,
    n_rows: usize,
    n_cols: usize,
) -> PyResult<Bound<'py, PyArray1<f32>>> {
    let data_ro = data.readonly();
    let indices_ro = indices.readonly();
    let indptr_ro = indptr.readonly();
    let x_ro = x.readonly();

    let d = data_ro.as_slice()?;
    let idx = indices_ro.as_slice()?;
    let ip = indptr_ro.as_slice()?;
    let xview = x_ro.as_array();

    let batch = xview.shape()[0];

    let out = py.allow_threads(|| {
        let mut result = vec![0.0f32; batch * n_cols];
        for b in 0..batch {
            for i in 0..n_rows {
                let xi = xview[[b, i]];
                for j in ip[i] as usize..ip[i + 1] as usize {
                    result[b * n_cols + idx[j] as usize] += d[j] * xi;
                }
            }
        }
        result
    });

    Ok(PyArray1::from_vec_bound(py, out))
}

#[pyfunction]
pub fn build_csr<'py>(
    py: Python<'py>,
    rows: Bound<'py, PyArray1<i64>>,
    cols: Bound<'py, PyArray1<i64>>,
    weights: Bound<'py, PyArray1<f32>>,
    n_rows: usize,
    n_cols: usize,
) -> PyResult<(Bound<'py, PyArray1<f32>>, Bound<'py, PyArray1<i64>>, Bound<'py, PyArray1<i64>>)> {
    let rows_ro = rows.readonly();
    let cols_ro = cols.readonly();
    let weights_ro = weights.readonly();

    let r = rows_ro.as_slice()?;
    let c = cols_ro.as_slice()?;
    let w = weights_ro.as_slice()?;

    let n_edges = r.len();

    let result = py.allow_threads(|| {
        let mut order: Vec<usize> = (0..n_edges).collect();
        order.sort_by(|&a, &b| r[a].cmp(&r[b]).then(c[a].cmp(&c[b])));

        let mut data = Vec::with_capacity(n_edges);
        let mut col_idx = Vec::with_capacity(n_edges);
        let mut iptr = vec![0i64; n_rows + 1];

        let mut i = 0;
        while i < n_edges {
            let row = r[order[i]] as usize;
            let col = c[order[i]];
            let mut sum = w[order[i]];
            let mut j = i + 1;
            while j < n_edges && r[order[j]] as usize == row && c[order[j]] == col {
                sum += w[order[j]];
                j += 1;
            }
            data.push(sum);
            col_idx.push(col);
            iptr[row + 1] += 1;
            i = j;
        }

        for i in 0..n_rows {
            iptr[i + 1] += iptr[i];
        }

        (data, col_idx, iptr)
    });

    Ok((
        PyArray1::from_vec_bound(py, result.0),
        PyArray1::from_vec_bound(py, result.1),
        PyArray1::from_vec_bound(py, result.2),
    ))
}

#[pyfunction]
pub fn csr_submatrix<'py>(
    py: Python<'py>,
    data: Bound<'py, PyArray1<f32>>,
    indices: Bound<'py, PyArray1<i64>>,
    indptr: Bound<'py, PyArray1<i64>>,
    row_sel: Bound<'py, PyArray1<i64>>,
    col_sel: Bound<'py, PyArray1<i64>>,
    n_rows: usize,
    n_cols: usize,
) -> PyResult<(Bound<'py, PyArray1<f32>>, Bound<'py, PyArray1<i64>>, Bound<'py, PyArray1<i64>>)> {
    let data_ro = data.readonly();
    let indices_ro = indices.readonly();
    let indptr_ro = indptr.readonly();
    let rows_ro = row_sel.readonly();
    let cols_ro = col_sel.readonly();

    let d = data_ro.as_slice()?;
    let idx = indices_ro.as_slice()?;
    let ip = indptr_ro.as_slice()?;
    let rsel = rows_ro.as_slice()?;
    let csel = cols_ro.as_slice()?;

    let n_sel_rows = rsel.len();
    let _n_sel_cols = csel.len();

    let result = py.allow_threads(|| {
        let mut row_map = vec![usize::MAX; n_rows];
        let mut col_map = vec![usize::MAX; n_cols];
        for (sr, &g) in rsel.iter().enumerate() {
            row_map[g as usize] = sr;
        }
        for (sc, &g) in csel.iter().enumerate() {
            col_map[g as usize] = sc;
        }

        let mut out_data = Vec::new();
        let mut out_idx = Vec::new();
        let mut out_ptr = vec![0i64; n_sel_rows + 1];

        for sr in 0..n_sel_rows {
            let gr = rsel[sr] as usize;
            for j in ip[gr] as usize..ip[gr + 1] as usize {
                let gc = idx[j] as usize;
                let sc = col_map[gc];
                if sc != usize::MAX {
                    out_data.push(d[j]);
                    out_idx.push(sc as i64);
                    out_ptr[sr + 1] += 1;
                }
            }
        }

        for i in 0..n_sel_rows {
            out_ptr[i + 1] += out_ptr[i];
        }

        (out_data, out_idx, out_ptr)
    });

    Ok((
        PyArray1::from_vec_bound(py, result.0),
        PyArray1::from_vec_bound(py, result.1),
        PyArray1::from_vec_bound(py, result.2),
    ))
}

#[pyfunction]
pub fn csr_fingerprint(
    data: Bound<'_, PyArray1<f32>>,
    indices: Bound<'_, PyArray1<i64>>,
    indptr: Bound<'_, PyArray1<i64>>,
    body_ids: Bound<'_, PyArray1<i64>>,
    n_rows: usize,
    n_cols: usize,
) -> PyResult<String> {
    let data_ro = data.readonly();
    let indices_ro = indices.readonly();
    let indptr_ro = indptr.readonly();
    let body_ids_ro = body_ids.readonly();

    let d = data_ro.as_slice()?;
    let idx = indices_ro.as_slice()?;
    let ip = indptr_ro.as_slice()?;
    let ids = body_ids_ro.as_slice()?;

    let mut h = Sha256::new();
    h.update((n_rows as i64).to_le_bytes());
    h.update((n_cols as i64).to_le_bytes());
    for &id in ids {
        h.update(id.to_le_bytes());
    }
    for &v in ip {
        h.update(v.to_le_bytes());
    }
    for &v in idx {
        h.update(v.to_le_bytes());
    }
    for &v in d {
        h.update(v.to_le_bytes());
    }

    let digest = h.finalize();
    let hex: String = digest.iter().map(|b| format!("{:02x}", b)).collect();
    Ok(hex)
}

pub fn register(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(sparse_matmul, m)?)?;
    m.add_function(wrap_pyfunction!(sparse_matmul_transpose, m)?)?;
    m.add_function(wrap_pyfunction!(csr_matmul_2d, m)?)?;
    m.add_function(wrap_pyfunction!(csr_matmul_2d_transpose, m)?)?;
    m.add_function(wrap_pyfunction!(build_csr, m)?)?;
    m.add_function(wrap_pyfunction!(csr_submatrix, m)?)?;
    m.add_function(wrap_pyfunction!(csr_fingerprint, m)?)?;
    Ok(())
}