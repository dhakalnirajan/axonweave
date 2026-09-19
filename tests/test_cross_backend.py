"""Cross-backend numerical equivalence tests (PLAN.md Phase 3 item)."""
import numpy as np
import pytest

from tests.conftest import make_graph


@pytest.fixture
def graph():
    return make_graph(n=10, seed=21)


def test_numpy_equals_dense(graph):
    from axonweave.numpy import ConnectomeLayer as NumpyLayer

    x = np.random.default_rng(5).random((3, graph.n_neurons)).astype(np.float32)
    y = NumpyLayer(graph)(x)
    np.testing.assert_allclose(y, x @ graph.weights.toarray(), rtol=1e-5, atol=1e-6)


def test_torch_equals_numpy(graph):
    torch = pytest.importorskip("torch")
    from axonweave.numpy import ConnectomeLayer as NumpyLayer
    from axonweave.torch import ConnectomeLayer as TorchLayer

    x = np.random.default_rng(6).random((3, graph.n_neurons)).astype(np.float32)
    y_np = NumpyLayer(graph)(x)
    y_torch = TorchLayer(graph)(torch.tensor(x)).detach().numpy()
    np.testing.assert_allclose(y_np, y_torch, rtol=1e-4, atol=1e-5)


def test_keras_equals_numpy(graph):
    pytest.importorskip("tensorflow")
    from axonweave.keras import ConnectomeLayer as KerasLayer
    from axonweave.numpy import ConnectomeLayer as NumpyLayer

    x = np.random.default_rng(7).random((3, graph.n_neurons)).astype(np.float32)
    y_np = NumpyLayer(graph)(x)
    layer = KerasLayer(graph)
    layer.build((None, graph.n_neurons))
    y_keras = layer(x).numpy()
    np.testing.assert_allclose(y_np, y_keras, rtol=1e-4, atol=1e-5)


def test_jax_equals_numpy(graph):
    jax = pytest.importorskip("jax")
    jax.config.update("jax_platforms", "cpu")
    from axonweave.jax import ConnectomeLayer as JaxLayer
    from axonweave.numpy import ConnectomeLayer as NumpyLayer

    x = np.random.default_rng(8).random((3, graph.n_neurons)).astype(np.float32)
    y_np = NumpyLayer(graph)(x)
    y_jax = np.asarray(JaxLayer(graph)(x))
    np.testing.assert_allclose(y_np, y_jax, rtol=1e-4, atol=1e-5)
