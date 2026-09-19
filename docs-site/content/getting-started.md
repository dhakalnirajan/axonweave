# Getting Started

From a clean environment to a working substrate: install the package, provision the MaleCNS connectome, load a brain and wire it into PyTorch or Keras.

## Requirements

Python 3.10–3.14 is targeted. The core path requires NumPy, SciPy, PyArrow and the substrate cache dependencies. Framework integrations are optional extras.

## Install

```bash
pip install axonweave
```

PyTorch:

```bash
pip install "axonweave[torch]"
```

TensorFlow/Keras:

```bash
pip install "axonweave[tensorflow]"
```

All currently supported optional integrations:

```bash
pip install "axonweave[all]"
```

## Provision the biological substrate

```bash
axonweave substrate install male-cns:v1.0
```

The command owns download, validation, sparse graph construction and local activation. You do not need to manually download Feather files.

:::DOC-WARN
The full source release is multi-gigabyte. Provisioning is intentionally separate from `pip install` so installing Python dependencies does not unexpectedly download biological data.
:::

## Load

```python
import axonweave

brain = axonweave.load("male-cns:v1.0")
print(brain.n_neurons)
```

## PyTorch

Static (single-timestep) propagation through a layer:

```python
import torch
from axonweave.torch import ConnectomeLayer

layer = ConnectomeLayer(
    brain.graph,
    trainable_edges=True,
    learnable_gain=True,
)

x = torch.randn(2, brain.n_neurons)
y = layer(x)
```

Or the high-level stateful model (encoder -> runtime -> readout):

```python
from axonweave.torch import BrainModel
from axonweave.encoders import VectorEncoder
from axonweave.dynamics import LIF
from axonweave.readout import RegressionReadout

model = BrainModel(
    brain=brain,
    encoder=VectorEncoder(input_dim=8, output_dim=256),
    dynamics=LIF(),
    readout=RegressionReadout(n_source=256, n_outputs=1),
)
model.reset_state()
for x_t in stream:
    prediction = model.step(x_t)     # state persists between steps
```

See [Temporal Runtime](runtime.md) for sequences, state capture and BPTT.

## Keras

```python
from axonweave.keras import ConnectomeLayer

layer = ConnectomeLayer(
    brain.graph,
    trainable_edges=True,
    learnable_gain=True,
)
```

## JAX

```bash
pip install "axonweave[jax]"
```

```python
import jax.numpy as jnp
from axonweave.jax import ConnectomeLayer

layer = ConnectomeLayer(
    brain.graph,
    trainable_edges=True,
    learnable_gain=True,
)

x = jnp.zeros((1, brain.n_neurons), dtype=jnp.float32)
y = layer(x)
```

:::DOC-NOTE
The JAX adapter is experimental. The layer, brain model and block APIs are written and tested against the NumPy reference, but CI verification across JAX versions is pending. See [Backends](backends.md) for details.
:::

## Constraints

A full-connectome state is large. Production applications should deliberately select input projection, internal state, readout and batching strategies. Do not assume a full dense tensor of all neurons is cheap simply because the graph itself is sparse.
