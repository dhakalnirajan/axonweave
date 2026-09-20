# Tutorial: Working with Connectomes

What a connectome is, how to load the MaleCNS substrate, and how to explore and select neurons from the graph.

## What is a connectome?

A connectome is a wiring diagram: which neurons connect to which, and with what strength. The MaleCNS v1.0 connectome maps ~166,700 neurons and ~25.6 million directed synaptic connections in the *Drosophila melanogaster* male central nervous system.

The graph is stored as a sparse CSR matrix — never densified. Dense storage would need ~100 GB; the sparse representation uses only the nonzero edges.

## Loading the substrate

```python
import axonweave

brain = axonweave.load("male-cns:v1.0")
print(brain.n_neurons)  # 166700
```

:::DOC-WARN
`load()` reads from local cache only. If not installed, run:
```bash
axonweave substrate install male-cns:v1.0
```
:::

## Graph structure

### Neurons as nodes

Each neuron has a stable **body ID** — the biological identifier from the upstream dataset. AxonWeave never renumbers them:

```python
graph = brain.graph

graph.n_neurons          # 166700
graph.body_ids[:5]       # first 5 body IDs (int64 array)
graph.body_ids.dtype     # int64
```

### Synapses as edges

Directed connections `pre → post` with weights derived from upstream synaptic counts:

```python
graph.n_edges            # ~25600000 (CSR nonzeros)
graph.weights            # scipy.sparse.csr_matrix
graph.weights.shape      # (166700, 166700)
graph.weights.nnz        # number of actual edges
```

### Body ID ↔ matrix index

Body IDs are stable; matrix indices are internal. Convert between them:

```python
body_id = 720575940632062920
idx = graph.index(body_id)  # body ID → matrix index (int)
# KeyError if body_id not in substrate
```

## Exploring the graph

### Size and density

```python
n = graph.n_neurons
e = graph.n_edges
density = e / (n * (n - 1))
print(f"Neurons: {n}, Edges: {e}, Density: {density:.6f}")
# Neurons: 166700, Edges: 25600000, Density: 0.000921
```

The graph is extremely sparse — each neuron connects to ~153 others on average out of 166,699 possible targets.

### Neighbors of a neuron

```python
body_id = graph.body_ids[0]
targets, weights = graph.neighbors(body_id)
print(f"Neuron {body_id} connects to {len(targets)} targets")
# e.g. Neuron 720575940628417433 connects to 231 targets
```

### Weight statistics

```python
import numpy as np

data = graph.weights.data
print(f"Min weight: {data.min()}")
print(f"Max weight: {data.max()}")
print(f"Mean weight: {data.mean():.2f}")
print(f"Median weight: {np.median(data):.2f}")
```

### Region and type annotations

If annotations were built at substrate install time:

```python
sel = brain.graph.neurons.by_region("L")     # left hemisphere
sel = brain.graph.neurons.by_type("kenyon_cell")  # by cell type

len(sel)  # number of matching neurons
```

Discover available values by triggering an error on an unknown name — the error lists up to 20 known values.

## Selecting neurons

Three selection methods, all preserving order:

```python
# By body ID (exact biological identifiers)
sel = brain.graph.neurons.ids([
    720575940632062920,
    720575940610549233,
])

# By boolean mask over graph order
import numpy as np
mask = np.zeros(brain.n_neurons, dtype=bool)
mask[graph.body_ids < 720575940600000000] = True
sel = brain.graph.neurons.by_mask(mask)

# All neurons
sel = brain.graph.neurons.all()
```

:::DOC-WARN
Unknown body IDs raise `AXW010` — the library never silently drops an ID.
:::

### Inspecting a selection

```python
sel = brain.graph.neurons.by_type("kenyon_cell")

len(sel)             # neuron count in selection
sel.body_ids_list    # body IDs in request order
sel.mask()           # boolean mask: True for selected neurons
sub = sel.weights()  # sparse (N, N) sub-matrix
```

:::DOC-NOTE
A selection is lightweight: it stores indices into the existing graph, never a copy of the connectome. `sel.weights()` materializes the sub-matrix on demand.
:::

## Sparse connectivity patterns

The connectome is not uniformly sparse — some regions are densely interconnected, others are sparse. Inspect connectivity structure per region:

```python
# Sub-matrix for a selection
sel = brain.graph.neurons.by_region("L")
sub = sel.weights()  # sparse matrix of shape (len(sel), len(sel))

# Degree distribution within the selection
import numpy as np
out_degree = np.array(sub.sum(axis=1)).ravel()  # total outgoing weight
in_degree = np.array(sub.sum(axis=0)).ravel()   # total incoming weight
```

## Using selections with layers

Selections plug directly into any backend's connectome layer:

```python
from axonweave.numpy import ConnectomeLayer

sel = brain.graph.neurons.by_type("kenyon_cell")
layer = ConnectomeLayer(brain.graph, selection=sel)

x = np.ones((2, len(sel)), dtype=np.float32)
y = layer(x)  # shape (2, len(sel))
```

PyTorch:

```python
import torch
layer = brain.torch_layer(trainable_edges=True, selection=sel)
x = torch.randn(8, len(sel))
y = layer(x)
```

## Provenance and substrate identity

Every substrate load validates identity:

```python
info = brain.info()

info.substrate_id     # "male-cns:v1.0"
info.fingerprint      # SHA-256 graph identity hash
info.n_neurons        # 166700
info.n_edges          # ~25600000
info.has_annotations  # True/False
info.native_backend   # "0.2.0" or "python-fallback"

print(info.summary())
```

The fingerprint ensures a trained model cannot be restored against an incompatible connectome. Checkpoints store the fingerprint; mismatch raises an error at load time.

```python
brain.fingerprint  # same 64-char hash as info.fingerprint
```

:::DOC-TIP
Record `brain.fingerprint` in experiment metadata. This guarantees reproducibility — same fingerprint means identical graph topology.
:::

## Saving and loading selections

Selections reference the graph by index — they round-trip through body IDs:

```python
# Capture body IDs from a selection
sel = brain.graph.neurons.by_region("L")
ids = sel.body_ids_list

# Recreate the same selection later
sel2 = brain.graph.neurons.ids(ids)
assert len(sel) == len(sel2)
```

For persistent sub-graphs, save the weight matrix:

```python
from scipy.sparse import save_npz, load_npz

sub = sel.weights()
save_npz("region_L_subgraph.npz", sub)
loaded = load_npz("region_L_subgraph.npz")
```

## Related

- [Biological Brain](brain.md) — selection API reference.
- [Connectome](connectome.md) — graph representation details.
- [Selection & Sub-Network Examples](examples-selection.md) — practical selection patterns.
- [Neuron Dynamics](dynamics.md) — running dynamics on selected sub-networks.
