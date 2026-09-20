# Selection & Sub-Network Examples

How to restrict computation to a biologically meaningful subset of the substrate: selecting neurons by ID, mask, or annotation, then running a `ConnectomeLayer` or a full PyTorch model on the sub-network.

```text
Full substrate (166,700 neurons)
        |
        v  brain.graph.neurons.by_type(...)
Selected sub-network (N neurons)
        |
        v  ConnectomeLayer(..., selection=sel)
Sparse propagation over retained synapses only
```

## Selecting neurons

Three selection entry points, all preserving the order you request:

```python
import axonweave

brain = axonweave.load("male-cns:v1.0")
sel_all = brain.graph.neurons.all()

# By body ID (order preserved exactly as given)
sel = brain.graph.neurons.ids([720575940632062920, 720575940610549233])

# By boolean mask over graph order
import numpy as np
mask = np.zeros(brain.n_neurons, dtype=bool)
mask[brain.graph.body_ids < 720575940600000000] = True
sel = brain.graph.neurons.by_mask(mask)

# By annotation (requires annotations built at substrate install time)
sel = brain.graph.neurons.by_type("kenyon_cell")
sel = brain.graph.neurons.by_region("L")
```

Unknown body IDs raise `AXW010` rather than being silently dropped; `by_type`/`by_region` errors list up to 20 known annotation values so you can discover the vocabulary.

:::DOC-NOTE
A selection is lightweight: it stores indices into the existing graph, never a copy of the connectome. `sel.weights()` materializes the sub-matrix on demand.
:::

## Inspecting a selection

```python
sel = brain.graph.neurons.by_type("kenyon_cell")

len(sel)             # number of neurons
sel.body_ids_list    # body IDs in request order
sel.mask()           # boolean mask over the full substrate
sub = sel.weights()  # sparse (N, N) sub-matrix
```

## Region-based selection

Select neurons by anatomical region. The MaleCNS substrate uses region labels from the upstream annotation columns:

```python
# Left hemisphere
sel_left = brain.graph.neurons.by_region("L")

# Right hemisphere
sel_right = brain.graph.neurons.by_region("R")

# Combine: union of two regions
import numpy as np
mask_left = sel_left.mask()
mask_right = sel_right.mask()
mask_combined = mask_left | mask_right
sel_both = brain.graph.neurons.by_mask(mask_combined)

print(f"Left: {len(sel_left)}, Right: {len(sel_right)}, Combined: {len(sel_both)}")
```

### Region + type filter

Combine region and cell type to select a specific population:

```python
# Kenyon cells in the left hemisphere
sel_kc_left = brain.graph.neurons.by_type("kenyon_cell")

# Further filter by region using mask intersection
region_mask = sel_left.mask()
type_mask = sel_kc_left.mask()
combined_mask = region_mask & type_mask
sel_kc_left_final = brain.graph.neurons.by_mask(combined_mask)

print(f"Kenyon cells in left hemisphere: {len(sel_kc_left_final)}")
```

### Counting neurons per region

Discover which regions exist and how many neurons each contains:

```python
# Trigger error on unknown region to see available values
try:
    brain.graph.neurons.by_region("unknown_region_xyz")
except Exception as e:
    print(e)
    # Lists up to 20 known region values
```

## Synapse weight filtering

Select sub-networks based on connection strength:

```python
sel = brain.graph.neurons.all()
sub = sel.weights()  # sparse matrix

# Filter: keep only edges with weight >= threshold
from scipy.sparse import csr_matrix
threshold = 5.0

# Mask edges below threshold
filtered = sub.copy()
filtered.data[filtered.data < threshold] = 0
filtered.eliminate_zeros()

print(f"Original edges: {sub.nnz}")
print(f"Edges with weight >= {threshold}: {filtered.nnz}")
```

### Strongest connections analysis

```python
import numpy as np

sub = sel.weights()
data = sub.data

# Percentile-based filtering
p90 = np.percentile(data, 90)
p99 = np.percentile(data, 99)

strong = sub.copy()
strong.data[strong.data < p90] = 0
strong.eliminate_zeros()

very_strong = sub.copy()
very_strong.data[very_strong.data < p99] = 0
very_strong.eliminate_zeros()

print(f"Top 10% edges: {strong.nnz} (weight >= {p90:.1f})")
print(f"Top 1% edges: {very_strong.nnz} (weight >= {p99:.1f})")
```

### Weight distribution per selection

```python
sel = brain.graph.neurons.by_type("kenyon_cell")
sub = sel.weights()

# Summary statistics
print(f"Edges: {sub.nnz}")
print(f"Mean weight: {sub.data.mean():.2f}")
print(f"Std weight: {sub.data.std():.2f}")
print(f"Max weight: {sub.data.max():.0f}")
```

## Combining selection criteria

Build complex selections by composing masks:

```python
# Start with all neurons
sel_all = brain.graph.neurons.all()
base_mask = sel_all.mask()

# Filter 1: body ID range
id_mask = brain.graph.body_ids > 720575940600000000

# Filter 2: region
region_mask = brain.graph.neurons.by_region("L").mask()

# Filter 3: high-connectivity neurons (degree > median)
sub = sel_all.weights()
degree = np.array(sub.sum(axis=1)).ravel()
median_degree = np.median(degree)
high_degree_mask = degree > median_degree

# Combine all filters (intersection)
combined = id_mask & region_mask & high_degree_mask
sel_final = brain.graph.neurons.by_mask(combined)

print(f"Filtered neurons: {len(sel_final)}")
```

### Union of multiple cell types

```python
sel_a = brain.graph.neurons.by_type("kenyon_cell")
sel_b = brain.graph.neurons.by_type("output_neuron")

mask_a = sel_a.mask()
mask_b = sel_b.mask()
mask_union = mask_a | mask_b

sel_union = brain.graph.neurons.by_mask(mask_union)
print(f"Kenyon + output neurons: {len(sel_union)}")
```

## Working with body IDs

Body IDs are the stable biological identifiers. They persist across substrate versions and are the basis for checkpoint compatibility.

### Lookup body ID → index

```python
body_id = 720575940632062920
idx = graph.index(body_id)  # → matrix index
print(f"Body ID {body_id} is at matrix index {idx}")
```

### Batch body ID lookup

```python
body_ids = [720575940632062920, 720575940610549233, 720575940628417433]
sel = brain.graph.neurons.ids(body_ids)

# Verify all resolved
print(f"Requested: {len(body_ids)}, Resolved: {len(sel)}")
print(f"Body IDs: {sel.body_ids_list}")
```

### Body ID filtering by pattern

```python
# Select neurons with body IDs in a specific range
import numpy as np
all_ids = brain.graph.body_ids

# e.g. first 1000 neurons by graph order
sel = brain.graph.neurons.by_mask(
    np.arange(brain.n_neurons) < 1000
)

print(f"First 1000 body IDs: {sel.body_ids_list[:5]}...")
```

:::DOC-WARN
Unknown body IDs raise `AXW010`. The library never silently drops an ID — you always know if a lookup failed.
:::

## Sub-network layer (NumPy reference)

The layer operates on the selected neuron space — input and output dimensions equal `len(sel)`:

```python
from axonweave.numpy import ConnectomeLayer

sel = brain.graph.neurons.ids([10, 20, 30, 40])
layer = ConnectomeLayer(brain.graph, selection=sel)

x = np.ones((2, 4), dtype=np.float32)
y = layer(x)          # shape (2, 4): propagation over retained synapses only
```

Equivalent to building the sub-graph by hand:

```python
from axonweave.numpy import ConnectomeLayer

manual = ConnectomeLayer(type("G", (), {"weights": sel.weights()})())
np.testing.assert_allclose(layer(x), manual(x), rtol=1e-6)
```

## Sub-network layer (PyTorch, trainable)

Trainable edges cover only the synapses retained in the selection — parameters outside the sub-network do not exist:

```python
import torch

sel = brain.graph.neurons.by_type("kenyon_cell")
layer = brain.torch_layer(trainable_edges=True, learnable_gain=True, selection=sel)

x = torch.randn(8, len(sel))
y = layer(x)
y.sum().backward()    # gradients flow to selected edges + gain only
```

The layer records which neurons it computed over:

```python
layer.selection_body_ids   # ndarray of body IDs, saved with checkpoints/metadata
```

## Sub-network inside a PyTorch model

Wrap the selected block with arbitrary native layers; dimensions line up at the selection boundary:

```python
import torch.nn as nn

sel = brain.graph.neurons.by_type("kenyon_cell")
n = len(sel)

model = nn.Sequential(
    nn.Linear(128, n),          # project onto the sub-network
    brain.torch_layer(selection=sel),
    nn.LayerNorm(n),
    nn.Linear(n, 4),            # read out from the sub-network
)
```

## Training a sub-network readout

Freeze the connectome and train only the interface around a selected population:

```python
sel = brain.graph.neurons.by_region("L")
n = len(sel)

model = nn.Sequential(
    nn.Linear(784, n),
    brain.torch_layer(selection=sel),          # frozen edges (default)
    nn.Linear(n, 10),
)

optimizer = torch.optim.Adam(
    [p for p in model.parameters() if p.requires_grad]
)
```

This is learning mode 1 (frozen connectome) from [Training](training.md), applied to a biologically motivated subset.

## Export and conversion

### Save sub-graph as sparse matrix

```python
from scipy.sparse import save_npz

sel = brain.graph.neurons.by_region("L")
sub = sel.weights()
save_npz("region_L_connectome.npz", sub)
```

### Convert to NetworkX for visualization

```python
import networkx as nx

sel = brain.graph.neurons.by_type("kenyon_cell")
sub = sel.weights()

# Convert sparse matrix to NetworkX graph
G = nx.from_scipy_sparse_array(sub, create_using=nx.DiGraph)

print(f"Nodes: {G.number_of_nodes()}, Edges: {G.number_of_edges()}")
```

:::DOC-WARN
NetworkX conversion materializes the sub-graph in memory. For large selections, keep the selection small or use sparse operations directly.
:::

### Convert to adjacency list

```python
sel = brain.graph.neurons.by_type("kenyon_cell")
sub = sel.weights()

# CSR → COO for easy iteration
coo = sub.tocoo()
for i, j, w in zip(coo.row, coo.col, coo.data):
    src = sel.body_ids_list[i]
    dst = sel.body_ids_list[j]
    print(f"{src} -> {dst} (weight={w})")
```

### Export body ID mapping

```python
import json

sel = brain.graph.neurons.by_type("kenyon_cell")
mapping = {
    "body_ids": sel.body_ids_list,
    "n_neurons": len(sel),
    "substrate": brain.substrate_id,
    "fingerprint": brain.fingerprint,
}

with open("selection_metadata.json", "w") as f:
    json.dump(mapping, f, indent=2)
```

## What selections do NOT do

:::DOC-WARN
A selection restricts the **computational** sub-network. It does not claim the excluded neurons are biologically silent — in the fly brain, upstream neurons still influence the selected population. Selection is a modeling choice, not a biological statement about isolation.
:::

## Related

- [Biological Brain](brain.md) — selection API reference and introspection.
- [Working with Connectomes](tutorial-connectome.md) — loading and exploring the substrate.
- [PyTorch Composition](examples-pytorch-composition.md) — full-brain layer composition.
- [Training](training.md) — the five learning modes.
