use numpy::{PyArray1, PyArrayMethods};
use pyo3::prelude::*;

#[pyclass]
pub struct DelayRing {
    n_slots: usize,
    n_neurons: usize,
    buffers: Vec<f32>,
    write_pos: Vec<i64>,
}

#[pymethods]
impl DelayRing {
    #[new]
    fn new(n_slots: usize, n_neurons: usize) -> Self {
        DelayRing {
            n_slots: n_slots.max(1),
            n_neurons,
            buffers: vec![0.0f32; n_slots.max(1) * n_neurons],
            write_pos: vec![0i64; n_neurons],
        }
    }

    fn reset(&mut self) {
        self.buffers.fill(0.0);
        self.write_pos.fill(0);
    }

    fn n_slots(&self) -> usize {
        self.n_slots
    }

    fn n_neurons(&self) -> usize {
        self.n_neurons
    }

    #[getter]
    fn write_pos<'py>(&self, py: Python<'py>) -> Bound<'py, PyArray1<i64>> {
        PyArray1::from_vec_bound(py, self.write_pos.clone())
    }

    #[pyo3(signature = (pre, pre_idx, post_idx, delay_ticks, weights))]
    fn step<'py>(
        &mut self,
        py: Python<'py>,
        pre: Bound<'py, PyArray1<f32>>,
        pre_idx: Bound<'py, PyArray1<i64>>,
        post_idx: Bound<'py, PyArray1<i64>>,
        delay_ticks: Bound<'py, PyArray1<i64>>,
        weights: Bound<'py, PyArray1<f32>>,
    ) -> PyResult<Bound<'py, PyArray1<f32>>> {
        let pre_ro = pre.readonly();
        let prei_ro = pre_idx.readonly();
        let posti_ro = post_idx.readonly();
        let ticks_ro = delay_ticks.readonly();
        let w_ro = weights.readonly();

        let pre_v = pre_ro.as_slice()?;
        let prei = prei_ro.as_slice()?;
        let posti = posti_ro.as_slice()?;
        let ticks = ticks_ro.as_slice()?;
        let w = w_ro.as_slice()?;
        let n = self.n_neurons;

        let slot = (self.write_pos[0] % self.n_slots as i64) as usize;
        for i in 0..n {
            self.buffers[slot * n + i] = pre_v[i];
        }
        for p in self.write_pos.iter_mut() {
            *p += 1;
        }
        let wpos = self.write_pos[0];

        let out = py.allow_threads(|| {
            let mut result = vec![0.0f32; n];
            for k in 0..prei.len() {
                let rt = wpos - ticks[k] - 1;
                if rt >= 0 {
                    let rs = (rt % self.n_slots as i64) as usize;
                    result[posti[k] as usize] += self.buffers[rs * n + prei[k] as usize] * w[k];
                }
            }
            result
        });

        Ok(PyArray1::from_vec_bound(py, out))
    }

    #[pyo3(signature = (pre_idx, post_idx, delay_ticks, weights))]
    fn read<'py>(
        &self,
        py: Python<'py>,
        pre_idx: Bound<'py, PyArray1<i64>>,
        post_idx: Bound<'py, PyArray1<i64>>,
        delay_ticks: Bound<'py, PyArray1<i64>>,
        weights: Bound<'py, PyArray1<f32>>,
    ) -> PyResult<Bound<'py, PyArray1<f32>>> {
        let prei_ro = pre_idx.readonly();
        let posti_ro = post_idx.readonly();
        let ticks_ro = delay_ticks.readonly();
        let w_ro = weights.readonly();

        let prei = prei_ro.as_slice()?;
        let posti = posti_ro.as_slice()?;
        let ticks = ticks_ro.as_slice()?;
        let w = w_ro.as_slice()?;
        let n = self.n_neurons;
        let wpos = self.write_pos[0];

        let out = py.allow_threads(|| {
            let mut result = vec![0.0f32; n];
            for k in 0..prei.len() {
                let rt = wpos - ticks[k] - 1;
                if rt >= 0 {
                    let rs = (rt % self.n_slots as i64) as usize;
                    result[posti[k] as usize] += self.buffers[rs * n + prei[k] as usize] * w[k];
                }
            }
            result
        });

        Ok(PyArray1::from_vec_bound(py, out))
    }
}

#[pyfunction]
pub fn delay_ticks_from_ms<'py>(
    py: Python<'py>,
    delays_ms: Bound<'py, PyArray1<f32>>,
    dt: f32,
    max_delay_ms: f32,
) -> PyResult<Bound<'py, PyArray1<i64>>> {
    let d_ro = delays_ms.readonly();
    let d = d_ro.as_slice()?;
    let n_slots = (max_delay_ms / dt).ceil() as i64 + 1;

    let out = py.allow_threads(|| {
        let mut result = vec![0i64; d.len()];
        for (k, &v) in d.iter().enumerate() {
            // NumPy's np.round uses banker's rounding (ties to even); match it
            // so the native kernel stays the exact numeric twin of the
            // _numpy_* reference (AGENTS.md native-core rule).
            let r = (v / dt).round_ties_even() as i64;
            let t = r.max(0);
            result[k] = t.min(n_slots - 1);
        }
        result
    });

    Ok(PyArray1::from_vec_bound(py, out))
}

#[pyfunction]
pub fn apply_delays<'py>(
    py: Python<'py>,
    data: Bound<'py, PyArray1<f32>>,
    indices: Bound<'py, PyArray1<i64>>,
    indptr: Bound<'py, PyArray1<i64>>,
    pre_activity: Bound<'py, PyArray1<f32>>,
    delays: Bound<'py, PyArray1<f32>>,
    max_delay: f32,
    dt: f32,
    n_rows: usize,
    n_cols: usize,
) -> PyResult<Bound<'py, PyArray1<f32>>> {
    let data_ro = data.readonly();
    let indices_ro = indices.readonly();
    let indptr_ro = indptr.readonly();
    let pre_ro = pre_activity.readonly();
    let delays_ro = delays.readonly();

    let d = data_ro.as_slice()?;
    let idx = indices_ro.as_slice()?;
    let ip = indptr_ro.as_slice()?;
    let pre = pre_ro.as_slice()?;
    let del = delays_ro.as_slice()?;

    let n_slots = (max_delay / dt).ceil() as usize + 1;
    let n_edges = d.len();

    let out = py.allow_threads(|| {
        let mut ring = vec![vec![0.0f32; n_rows]; n_slots];
        ring[0].copy_from_slice(pre);

        let mut delay_ticks = vec![0usize; n_edges];
        for (k, &delay_ms) in del.iter().enumerate() {
            delay_ticks[k] = ((delay_ms / dt).round() as usize).min(n_slots - 1);
        }

        let write_pos = 1usize;
        let mut result = vec![0.0f32; n_cols];

        for i in 0..n_rows {
            let start = ip[i] as usize;
            let end = ip[i + 1] as usize;
            for j in start..end {
                let ticks = delay_ticks[j];
                let read_tick = write_pos as i64 - ticks as i64 - 1;
                if read_tick >= 0 {
                    let read_slot = read_tick as usize % n_slots;
                    result[idx[j] as usize] += d[j] * ring[read_slot][i];
                }
            }
        }

        result
    });

    Ok(PyArray1::from_vec_bound(py, out))
}

pub fn register(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_class::<DelayRing>()?;
    m.add_function(wrap_pyfunction!(delay_ticks_from_ms, m)?)?;
    m.add_function(wrap_pyfunction!(apply_delays, m)?)?;
    Ok(())
}