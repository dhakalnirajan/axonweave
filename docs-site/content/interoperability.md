# Interoperability

AxonWeave complements existing neuroscience tooling. External scientific tools remain authoritative for operations they already perform well. AxonWeave is the model/substrate layer, not a replacement for every neuroscience data-analysis package.

## neuPrint integration

[neuPrint](https://neuprint.janelia.org/) provides programmatic access to connectome data via `neuprint-python`. AxonWeave does not replace neuPrint. It provides a computational substrate layer on top of connectome queries.

### Query neurons from neuPrint

```python
from neuprint import Client, fetch_neurons
import axonweave

c = Client("neuprint.janelia.org", dataset="male")

neurons = fetch_neurons(c, body_ids=[123456, 789012])
body_ids = neurons["bodyId"].values.tolist()

brain = axonweave.load("male-cns:v1.0")
selection = brain.neurons.by_body_id(body_ids)

missing = set(body_ids) - set(selection.body_ids)
if missing:
    print(f"Warning: {len(missing)} neurons not in substrate: {missing}")
```

### Cross-reference connectivity

```python
from neuprint import fetch_adjacency
import numpy as np

adj = fetch_adjacency(c, body_ids=[123456, 789012, 345678])
sub_adj = brain.graph.adjacency_matrix(selection=selection)

neuprint_edges = set(zip(adj["pre"], adj["post"]))
axonweave_edges = set(zip(*np.where(sub_adj.toarray() > 0)))

only_neuprint = neuprint_edges - axonweave_edges
only_axonweave = axonweave_edges - neuprint_edges
if only_neuprint:
    print(f"Edges in neuPrint but not AxonWeave: {len(only_neuprint)}")
if only_axonweave:
    print(f"Edges in AxonWeave but not neuPrint: {len(only_axonweave)}")
```

:::DOC-WARN
neuPrint and AxonWeave may differ due to substrate processing, filtering, or version mismatches. Discrepancies are not necessarily errors. Document the source of each difference.
:::

### Reconcile identifiers

```python
from neuprint import fetch_meta

meta = fetch_meta(c, body_ids=[123456])

for _, row in meta.iterrows():
    body_id = row["bodyId"]
    instance = row.get("instance", "unknown")
    neuron_type = row.get("type", "unknown")

    if brain.graph.has_body_id(body_id):
        print(f"Body {body_id}: {instance} ({neuron_type})")
    else:
        print(f"Body {body_id} not in substrate")
```

## navis integration

[navis](https://navis-python.readthedocs.io/) provides morphology, skeleton, mesh, and visualization tools. AxonWeave graph state connects to morphology metadata through body IDs.

### Load morphology data

```python
import navis
import axonweave

neurons = navis.read_swc("path/to/neurons.swc")
brain = axonweave.load("male-cns:v1.0")

body_ids = neurons.body_id.values
selection = brain.neurons.by_body_id(body_ids.tolist())

valid_ids = selection.body_ids
navis_subset = neurons[neurons.body_id.isin(valid_ids)]

print(f"Loaded {len(navis_subset)} neurons from substrate")
```

### Combine graph and morphology

```python
import navis
import axonweave

brain = axonweave.load("male-cns:v1.0")

visual = brain.neurons.by_region("optic_lobes")
visual_graph = brain.graph.subgraph(visual)
adj = visual_graph.adjacency_matrix()

neurons = navis.read_swc("optic_lobes.swc")
valid_neurons = neurons[neurons.body_id.isin(visual.body_ids)]

morpho_distances = navis.distal_to_proximal(valid_neurons)
```

### Visualization handoff

```python
import navis
import axonweave

brain = axonweave.load("male-cns:v1.0")

motor = brain.neurons.by_region("motor_cortex")
adj = brain.graph.adjacency_matrix(selection=motor)

neurons = navis.read_swc("motor_cortex.swc")
valid = neurons[neurons.body_id.isin(motor.body_ids)]

navis.plot3d(valid)
```

## Body-ID round-trip tests

Body IDs must survive export and re-import without corruption. Round-trip tests verify this invariant.

### Export and re-import

```python
import axonweave
import numpy as np

brain = axonweave.load("male-cns:v1.0")

original_ids = brain.graph.body_ids.copy()

brain.export_body_ids("body_ids.npy")
reimported = np.load("body_ids.npy")

assert np.array_equal(original_ids, reimported)
assert brain.graph.body_ids.dtype == reimported.dtype
```

### Cross-format round-trip

```python
import axonweave
import pandas as pd

brain = axonweave.load("male-cns:v1.0")

# Export as DataFrame
df = brain.graph.to_dataframe()
assert "body_id" in df.columns

# Re-import from DataFrame
graph2 = axonweave.ConnectomeGraph.from_dataframe(df)

assert np.array_equal(graph2.body_ids, brain.graph.body_ids)
assert graph2.num_neurons == brain.graph.num_neurons
```

### JSON serialization round-trip

```python
import axonweave
import json

brain = axonweave.load("male-cns:v1.0")

exported = brain.graph.to_json()
data = json.loads(exported)

graph2 = axonweave.ConnectomeGraph.from_json(json.dumps(data))

assert np.array_equal(graph2.body_ids, brain.graph.body_ids)
```

:::DOC-NOTE
Body IDs are integers. They must not lose precision during serialization. JSON integers above 2^53 may lose precision in JavaScript. AxonWeave uses Python-native JSON handling to avoid this.
:::

## Neuron selection interoperability

Neuron selections must work consistently across all backends and survive serialization.

### Selection round-trip

```python
import axonweave

brain = axonweave.load("male-cns:v1.0")

# Create selection
visual = brain.neurons.by_region("optic_lobes")
motor = brain.neurons.by_region("motor_cortex")

# Combine selections
combined = visual | motor  # union
intersected = visual & motor  # intersection (likely empty)
excluded = brain.neurons.all() - motor  # exclusion

# Serialize selection
serialized = combined.to_dict()

# Re-import
from axonweave.selection import NeuronSelection
restored = NeuronSelection.from_dict(serialized)

assert set(restored.body_ids) == set(combined.body_ids)
```

### Selection with runtime

```python
import axonweave
from axonweave.torch import BrainModel

brain = axonweave.load("male-cns:v1.0")

visual = brain.neurons.by_region("optic_lobes")

model = BrainModel(
    brain=brain,
    selection=visual,
    dynamics=axonweave.dynamics.LIF(),
    readout=axonweave.readouts.ClassificationReadout(
        source=visual,
        num_classes=10,
    ),
)

# Model operates only on selected neurons
output = model(torch.randn(1, visual.num_neurons))
assert output.shape == (1, 10)
```

## Graph conversion documentation

AxonWeave graphs convert to common sparse formats for use with external tools.

### Convert to scipy sparse

```python
import axonweave
import scipy.sparse

brain = axonweave.load("male-cns:v1.0")

adj = brain.graph.adjacency_matrix()

assert isinstance(adj, scipy.sparse.csr_matrix)
print(f"Shape: {adj.shape}, nnz: {adj.nnz}")
```

### Convert to networkx

```python
import axonweave
import networkx as nx

brain = axonweave.load("male-cns:v1.0")

G = brain.graph.to_networkx()

assert isinstance(G, nx.DiGraph)
print(f"Nodes: {G.number_of_nodes()}, Edges: {G.number_of_edges()}")
```

### Convert to adjacency list

```python
import axonweave

brain = axonweave.load("male-cns:v1.0")

adj_list = brain.graph.to_adjacency_list()

# adj_list is a dict: {body_id: [target_body_ids]}
for source, targets in list(adj_list.items())[:5]:
    print(f"{source} -> {len(targets)} targets")
```

### Convert to edge list

```python
import axonweave

brain = axonweave.load("male-cns:v1.0")

edges = brain.graph.to_edge_list()

# edges is a list of (source, target, weight) tuples
print(f"Total edges: {len(edges)}")
print(f"Sample: {edges[:3]}")
```

## Import/export examples

### Export substrate metadata

```python
import axonweave
import json

brain = axonweave.load("male-cns:v1.0")

metadata = {
    "substrate_id": brain.substrate_id,
    "substrate_version": brain.substrate_version,
    "neuron_count": brain.graph.num_neurons,
    "edge_count": brain.graph.num_edges,
    "fingerprint": brain.graph.fingerprint,
    "regions": brain.neurons.regions(),
}

with open("substrate_metadata.json", "w") as f:
    json.dump(metadata, f, indent=2)
```

### Import external connectivity

```python
import axonweave
import numpy as np
import scipy.sparse

brain = axonweave.load("male-cns:v1.0")

# Load external adjacency matrix
external_adj = scipy.sparse.load_npz("external_connectivity.npz")

# Verify compatibility
assert external_adj.shape[0] == external_adj.shape[1]
assert external_adj.shape[0] == brain.graph.num_neurons

# Create weighted subgraph
subgraph = brain.graph.subgraph(
    brain.neurons.by_region("optic_lobes")
)

# Merge external weights (additive)
combined = subgraph.adjacency_matrix() + external_adj
```

### Export for simulation tools

```python
import axonweave
import numpy as np

brain = axonweave.load("male-cns:v1.0")

# Export connectivity in common format
adj = brain.graph.adjacency_matrix().toarray()

np.savetxt(
    "connectivity_matrix.csv",
    adj,
    delimiter=",",
    fmt="%d",
)

# Export neuron positions (if available)
positions = brain.neurons.positions()
np.savetxt(
    "neuron_positions.csv",
    positions,
    delimiter=",",
    header="x,y,z",
)
```

## Principle

Keep external scientific tools authoritative for the operations they already perform well. AxonWeave is the model/substrate layer, not a replacement for every neuroscience data-analysis package.
