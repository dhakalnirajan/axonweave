# Contributing to AxonWeave

How to propose changes, report issues, and participate in AxonWeave development.

## Before contributing

Read, in order:

1. `AGENTS.md` — agent contract, non-negotiable principles.
2. `PLAN.md` — current development status and priorities.
3. `ARCHITECTURE.md` — system model and layering.
4. `CODE_TOKENS.md` — cross-cutting library identifiers.
5. `docs-site/AGENTS.md` and `docs-site/DESIGN.md` — for documentation frontend work.

Every public API change should include tests and documentation. Scientific behavior changes must identify their source or state that they are user-configurable assumptions.

Do not commit raw MaleCNS data or generated build artifacts.

## Development setup

### Prerequisites

```text
Python 3.10+
Rust toolchain (stable) — required for native extension development
Git
```

### Clone and install

```bash
git clone https://github.com/axonweave/axonweave.git
cd axonweave
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# .venv\Scripts\activate   # Windows

# Install in development mode with all extras
pip install -e ".[dev,test,docs]"
```

### Install with native extension

```bash
# Requires Rust toolchain (rustup, cargo)
pip install maturin
maturin develop --release
```

### Verify installation

```bash
# Run the test suite
pytest tests/ -x --tb=short

# Check native extension loads
python -c "import axonweave; print(axonweave._native._HAS_NATIVE)"

# Run linting
ruff check python/
ruff format --check python/
```

### Pure-Python fallback

If you do not have a Rust toolchain, AxonWeave still works via NumPy/SciPy fallbacks in `python/axonweave/native.py`. All `_numpy_*` functions provide identical public behavior to the compiled kernels.

```bash
# Install without Rust — pure Python path
pip install -e .
```

:::DOC-NOTE
The pure-Python path is fully functional but may be slower for large-scale operations. Native equivalence tests verify functional correctness, not speed.
:::

## Code of conduct

All participants must follow the [Code of Conduct](/code-of-conduct). This applies to issues, pull requests, discussions, and any public interaction.

## How to propose new biological models

Biological model proposals require explicit documentation and review. Follow this process:

### 1. Open an RFC issue

Use the **Biological Model RFC** issue template. Include:

```text
Title: [RFC] Add [model name] receptor model

## Summary
Brief description of the biological model.

## Biological basis
- Source paper(s) with DOI
- Experimental evidence
- Species and preparation

## Equations
- Mathematical formulation
- Parameter definitions with units
- Parameter sources (fitted vs. assumed)

## Assumptions
- What this model assumes
- What this model does NOT simulate
- Comparison to existing receptor models

## Implementation plan
- New files/modules
- Backward compatibility
- Test strategy
```

### 2. Review criteria

Every biological model proposal is evaluated on:

| Criterion | Requirement |
|---|---|
| Source provenance | Published peer-reviewed paper with DOI |
| Parameter transparency | Every parameter must have a documented source |
| Assumption clarity | Assumptions must be explicitly listed |
| Scope honesty | Must not claim to simulate what it does not |
| Fallback behavior | Must not break existing models |

### 3. Merge requirements

- [ ] RFC approved by at least one maintainer with domain expertise.
- [ ] Source papers cited with DOI.
- [ ] Equations documented with units.
- [ ] Parameters separated into fitted vs. assumed.
- [ ] Tests cover numerical behavior.
- [ ] Documentation includes limitations.

:::DOC-WARN
Never silently turn a predicted neurotransmitter into an excitatory/inhibitory truth. A source observation, a fitted parameter, and a modeling assumption must have separate representations.
:::

## How to report scientific inaccuracies

Use the **Scientific Inaccuracy Report** issue template:

```text
Title: [SCIENCE] Inaccuracy in [module/behavior]

## What is wrong
Describe the inaccuracy.

## Correct behavior
What the correct behavior should be, with references.

## Evidence
- Source papers
- Data
- Expected numerical values

## Impact
- Which users/models are affected
- Severity (correctness vs. approximation)
```

Scientific inaccuracies are treated as bugs and triaged accordingly. Correctness issues in biological models receive priority.

## Style guides

### Python code style

Follow existing conventions. Key rules:

```python
# Type annotations required on all public functions
def propagate_sparse(
    adjacency: np.ndarray,
    signals: np.ndarray,
    weights: np.ndarray,
) -> np.ndarray:
    ...

# Docstrings: Google style, every public function
def compute_stdp_update(
    pre_spikes: np.ndarray,
    post_spikes: np.ndarray,
    w: np.ndarray,
    *,
    a_plus: float = 0.01,
    a_minus: float = 0.012,
) -> np.ndarray:
    """Compute STDP weight update.

    Args:
        pre_spikes: Binary pre-synaptic spike train [N].
        post_spikes: Binary post-synaptic spike train [N].
        w: Current weights [N].
        a_plus: LTP amplitude.
        a_minus: LTD amplitude.

    Returns:
        Weight delta [N].

    Raises:
        AXW010: If input shapes are incompatible.
    """
```

Style enforcement:

```bash
ruff check python/
ruff format python/
```

### Documentation style

- Concrete nouns, explicit prerequisites, exact commands.
- No generic buzzwords, no marketing language.
- Every claim must be verifiable or explicitly labeled as assumption.
- Use `:::DOC-NOTE`, `:::DOC-WARN`, `:::DOC-TIP` callouts.
- Code blocks use language-specific fences (`python`, `rust`, `bash`, `text`).
- Use exact module paths (`axonweave.dynamics`, `axonweave.runtime`).

### Rust code style

Follow `rustfmt` defaults. No custom configuration.

```bash
cargo fmt --manifest-path rust/Cargo.toml
cargo clippy --manifest-path rust/Cargo.toml
```

## PR process

### 1. Fork and branch

```bash
git checkout -b fix/short-description
# or
git checkout -b feat/short-description
# or
git checkout -b science/model-name
```

Branch naming:

| Prefix | Use |
|---|---|
| `fix/` | Bug fixes |
| `feat/` | New features |
| `science/` | Biological model changes |
| `docs/` | Documentation only |
| `refactor/` | Code restructuring |
| `ci/` | CI/CD changes |

### 2. Implement with tests

Every change requires:

- [ ] Tests covering the changed behavior.
- [ ] Documentation updates if public API changed.
- [ ] `CHECKLIST.md` update if scope changed.

### 3. Run checks locally

```bash
# Lint and format
ruff check python/
ruff format --check python/

# Type check
mypy python/axonweave/

# Tests
pytest tests/ -x --tb=short

# Native equivalence (if Rust changes)
cargo test --manifest-path rust/Cargo.toml
pytest tests/test_native_runtime.py -x
```

### 4. Submit PR

Include in PR description:

- What changed and why.
- Link to related issue.
- Test results.
- Any scientific references for biological changes.

### 5. Review expectations

Reviewers check:

| Area | What to look for |
|---|---|
| Correctness | Logic, edge cases, numerical stability |
| Scientific accuracy | Source provenance, assumption transparency |
| API stability | No breaking changes without migration notes |
| Tests | Coverage of changed behavior |
| Documentation | Updated if public API changed |
| Style | Consistent with existing code |

:::DOC-NOTE
Reviewers may request changes. Respond to feedback within a reasonable timeframe. Stale PRs (>30 days without activity) may be closed.
:::

## RFC process for biological changes

Significant biological model changes require an RFC before implementation.

### When RFC is required

- New receptor model
- New neuron dynamics model
- New plasticity rule
- Changes to existing biological model behavior
- Changes to neurotransmitter interpretation

### When RFC is NOT required

- Bug fixes that restore documented behavior
- Performance optimizations that preserve numerical output
- Documentation updates
- Test additions
- Refactoring without behavior change

### RFC lifecycle

```text
RFC Issue opened
  ↓
Discussion period (minimum 7 days)
  ↓
Maintainer review
  ↓
Approved / Revised / Rejected
  ↓
Implementation (if approved)
  ↓
PR review against RFC
  ↓
Merge
```

### RFC template

```markdown
# RFC: [Title]

## Status
Draft / Under Review / Approved / Rejected

## Summary
One-paragraph description.

## Motivation
Why this change is needed.

## Biological basis
Source papers, experimental evidence, parameter sources.

## Mathematical formulation
Equations, parameters, units.

## Design
How this integrates with AxonWeave.

## Assumptions and limitations
What this does and does not simulate.

## Alternatives considered
Other approaches and why they were rejected.

## Migration
How existing users are affected.
```

## Merge rights and governance

### Maintainer roles

| Role | Responsibilities |
|---|---|
| **Maintainer** | Merge PRs, review biological RFCs, manage releases |
| **Domain Expert** | Review biological model changes for scientific accuracy |
| **Contributor** | Submit PRs, participate in discussions |

### Merge rules

- All PRs require at least one maintainer approval.
- Biological model changes require domain expert approval.
- CI must pass before merge.
- No force-push to `main`.
- No direct commits to `main`.

### Conflict resolution

1. Author and reviewer discuss in PR.
2. If unresolved, a second maintainer arbitrates.
3. If still unresolved, the project lead decides.
4. All decisions are documented in the PR.

### Branch protection

```text
main branch:
  - Require PR reviews (minimum 1)
  - Require CI pass
  - No force-push
  - No direct commits
  - Require signed commits
```

### Release process

1. Maintainer creates release branch from `main`.
2. Version bump in `pyproject.toml`.
3. `CHECKLIST.md` and `PLAN.md` updated.
4. Release PR reviewed and merged.
5. Tag created on merged commit.
6. CI builds and publishes wheels.

## Issue templates

### Bug report

```text
Title: [BUG] Description

## Environment
- Python version:
- AxonWeave version:
- OS:
- Backend (NumPy/PyTorch/etc.):

## Steps to reproduce
1. ...
2. ...

## Expected behavior
What should happen.

## Actual behavior
What actually happens. Include error messages exact.

## Minimal reproducible example
```python
# code here
```
```

### Feature request

```text
Title: [FEAT] Description

## Use case
Why this feature is needed.

## Proposed behavior
What the feature should do.

## Alternatives considered
Other approaches.
```

### Scientific issue

```text
Title: [SCIENCE] Description

## What is wrong
Describe the inaccuracy.

## Source
Papers, data, references.

## Correct behavior
What the correct behavior should be.
```

## Recognition

Contributors are recognized in:

- `CONTRIBUTORS.md` (root of repository).
- Release notes for significant contributions.
- Academic citations for scientific contributions.
