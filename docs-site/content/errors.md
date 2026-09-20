# Errors & Diagnostics

Every AxonWeave error code, what triggers it, and how to handle it programmatically — with stable `AXW###` codes designed for catching, not just reading.

## Design principles

AxonWeave errors follow three rules:

1. **Every error carries a stable `AXWnnn` code** — you can match on the code, not the prose. Message wording may improve between releases; codes never change meaning.
2. **Messages are actionable.** They state what failed, what was expected, and what to do next — including the exact command to run when one exists.
3. **No silent fallbacks.** A missing substrate, a wrong device, or an incompatible checkpoint raises immediately. Nothing degrades quietly and shifts debugging to your results.

## The error hierarchy

All library errors derive from one base class, so a single `except` catches everything AxonWeave raises:

```python
AxonWeaveError                     # AXW000 — base class
├── SubstrateNotInstalledError     # AXW001
├── DatasetIntegrityError          # AXW002
├── SchemaError                    # AXW003
├── UnsupportedDeviceError         # AXW004
├── BiologicalAssumptionError      # AXW005
└── BackendUnavailableError        # AXW006
```

Warnings follow the same code convention (`AxonWeaveWarning` base, `AXW007`+
slots): `ConfigurationWarning` (AXW007) announces non-fatal configuration
issues such as `.awb` schema migrations; `AnnotationBuildWarning` (AXW008)
is raised during substrate installs when selection tables cannot be built.

Some API-misuse paths (wrong dimensions, unknown option names) raise `ValueError` with an `AXW010`-prefixed message rather than a dedicated class — see the code table below.

## Error code reference

| Code | Exception class | Raised when | Typical fix |
|---|---|---|---|
| `AXW000` | `AxonWeaveError` | Base class; also generic library misuse | Read the message; match on subclass |
| `AXW001` | `SubstrateNotInstalledError` | `load()` for a substrate not in the local cache, or packing a substrate with no installed cache entry | `axonweave substrate install male-cns:v1.0` |
| `AXW002` | `DatasetIntegrityError` | Manifest identity mismatch, checksum failure, checkpoint fingerprint mismatch, or corrupted/unsafe `.awb` artifact (graph payload, attachment hash, size) | Reinstall the substrate; re-pack or discard the corrupted `.awb`; never load checkpoints against a different graph |
| `AXW003` | `SchemaError` | A source data file lacks expected columns; an `.awb` artifact is not in the expected format, uses a newer/unknown `schema_version`, or has no migration path | Check the file schema; upgrade AxonWeave to read newer `.awb` schemas |
| `AXW004` | `UnsupportedDeviceError` | The host framework rejected a device request | Verify CUDA/MPS availability in the framework itself; try `device=None` (framework default) |
| `AXW005` | `BiologicalAssumptionError` | A dynamics override for an unannotated neuron type was requested | Register the override, or use the default dynamics |
| `AXW006` | `BackendUnavailableError` | An optional framework (torch, TF) is not installed | `pip install "axonweave[torch]"` |
| `AXW007` | `ConfigurationWarning` | A non-fatal configuration issue — e.g. an `.awb` schema migration was applied to the manifest at read time | Acknowledge the migration; re-pack the artifact to update it in place |
| `AXW008` | `AnnotationBuildWarning` | Selection-table construction failed during substrate install | Install will complete; by_type()/by_region() will raise AXW010 at query time |
| `AXW010` | `ValueError` (prefixed) | API misuse: bad dimensions, unknown IDs/rules/options, missing interface wiring | Read the message; it states the expected and received values |
| `AXW101` | CLI `SystemExit` | Unknown substrate name on the command line | Use `male-cns:v1.0` |

## Reading an AxonWeave traceback

A typical failure produces a normal Python traceback whose **last line** carries the code and the actionable part:

```text
axonweave.errors.SubstrateNotInstalledError: AXW001: substrate 'male-cns:v1.0' is not installed.
Run `axonweave substrate install male-cns:v1.0`.
```

The pattern is always: **code → what failed → expected vs. received → next action**. For example:

```text
AXW010: expected last dimension 4, got 166700
```

This tells you the model runs on a 4-neuron selection but received a full-brain-sized tensor — the fix is to size your data to the selection (or drop the selection).

```text
AXW010: unknown dynamics 'hodgkin_huxley'; known: ['adaptive_lif', 'lif', 'rate']
```

Unknown-option errors **list the valid values**, so the message itself is the documentation.

## Try/except patterns

### Catch everything from the library

```python
import axonweave
from axonweave.errors import AxonWeaveError

try:
    brain = axonweave.load("male-cns:v1.0")
except AxonWeaveError as e:
    print(f"AxonWeave error [{getattr(e, 'code', 'AXW010')}]: {e}")
    raise SystemExit(1) from e
```

### Handle specific failures differently

```python
from axonweave.errors import (
    SubstrateNotInstalledError, DatasetIntegrityError, BackendUnavailableError,
)

try:
    brain = axonweave.load("male-cns:v1.0")
except SubstrateNotInstalledError:
    brain = install_and_load()          # your provisioning step
except DatasetIntegrityError as e:
    # Corrupt or mismatched data — do NOT retry blindly.
    raise SystemExit(f"Data integrity failure, reinstall the substrate:\n{e}")
except BackendUnavailableError as e:
    raise SystemExit(f"Missing optional dependency:\n{e}")
```

### Match on the code string

When you only have the message (e.g. logs from a job):

```python
try:
    ...
except Exception as e:
    code = str(e).split(":", 1)[0]        # "AXW002"
    if code == "AXW002":
        ...
```

### Guarding experimental blocks in agents

```python
from axonweave.errors import AxonWeaveError

agent = brain.agent(dynamics="lif", learning="stdp",
                    input=SensorEncoder(4, brain.n_neurons),
                    output=ActionDecoder(brain.n_neurons, 2))
try:
    result = agent.run(env, episodes=10)
except AxonWeaveError as e:
    if "AXW010" in str(e) and "no encoder" in str(e):
        agent.sense(my_encoder)           # recoverable: wire and retry
        result = agent.run(env, episodes=10)
    else:
        raise
```

:::DOC-NOTE
`raise ... from e` preserves the original traceback when you re-raise. AxonWeave itself uses `from e` internally so the underlying cause (e.g. the exact `ImportError` for a missing backend) stays visible.
:::

## Output hints: what the library prints vs. raises

The CLI **prints** success output and **exits non-zero** on failure — it never raises into your shell:

```bash
$ axonweave substrate install male-cns:v1.0
Installed male-cns:v1.0: 166700 neurons, 25600000 graph edges

$ axonweave substrate install unknown:v9
AXW101: unsupported substrate 'unknown:v9'; available: male-cns:v1.0
# exit code 1
```

In Python, `load()` returns a `BiologicalBrain` on success and raises on failure; there is no `None` return and no warning-only mode. `brain.info().summary()` and `brain.capabilities()` exist so you can verify *what* you loaded before running anything — the cheapest debugging step available:

```python
brain = axonweave.load("male-cns:v1.0")
print(brain.info().summary())
# Substrate:   male-cns:v1.0
# Fingerprint: 3f9c1a2b7d4e5f60...
# Neurons:     166,700
# ...
```

## Code syntax errors and IDE hinting

### Type hints are shipped

The package is fully type-annotated, so IDEs (VS Code + Pylance, PyCharm) flag mistakes before runtime:

```python
from axonweave.numpy import ConnectomeLayer

layer = ConnectomeLayer(brain.graph)
layer(42)                 # IDE: expected ndarray-like, got int
```

### The most common runtime "syntax" errors are dimension errors

Every propagation API validates the last dimension and reports expected vs. received:

```python
# AXW010: expected last dimension 166700, got 784
```

When you see this on a first forward pass, the projection in front of the connectome layer has the wrong output size — the layer never silently resizes.

### Validator-style quick checks

```python
brain = axonweave.load("male-cns:v1.0")
assert brain.n_neurons == brain.graph.weights.shape[0]
sel = brain.graph.neurons.ids(my_ids)   # raises AXW010 immediately on unknown IDs
```

Failing fast at selection time is deliberate: a bad body ID is an error now, not a silent empty result later.

### mypy / ruff for contributors

The repository passes `ruff check` and typechecks with mypy in CI (non-blocking). Run locally:

```bash
python -m ruff check python tests
python -m mypy python/axonweave
```

## Error-message anatomy (for contributors)

When adding new errors, follow the house style:

1. Start with the code: `AXW010: ...`
2. State what was expected and what arrived: `expected last dimension 4, got 8`
3. For unknown-option errors, enumerate valid values: `known: ['lif', 'rate']`
4. For missing prerequisites, include the command: `Run \`axonweave substrate install male-cns:v1.0\``
5. Raise the most specific subclass available; only dimension/usage errors use bare `ValueError` with the `AXW010` prefix.

## Related

- [Troubleshooting](troubleshooting.md) — problem → cause → solution for common failures.
- [Checkpoints](checkpoints.md) — the AXW002 fingerprint-mismatch semantics.
- [Device Support](devices.md) — AXW004 and framework-delegated execution.
- [Substrates & .awb artifacts](distribution.md) — AXW001/002/003 in the substrate lifecycle, including schema migrations (AXW007).
- [API Reference](api-reference.md) — the classes these errors protect.
