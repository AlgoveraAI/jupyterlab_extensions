# 📚 Algovera Library

The Algovera Library currently comprises of a Jupyter Lab extension for using MetaMask within Jupyter Lab to interact with the [Ocean market](https://market.oceanprotocol.com/), and store on decentralized storage with decentralized access control (lit protocol for decentralized access control, Estuary/Filecoin for decentralized storage)

## Algovera

Algovera is a community of individuals working to facilitate and accelerate the development of decentralised AI products and research.

Website | Notion | Discord | Calendar | Twitter | YouTube

## 🏗 Setup

To start using the extension, simply run these three commands in your terminal::

```
conda create -n algolab -c conda-forge jupyterlab

conda activate algolab

pip install algovera

jupyter lab

```

## 🚧 Contributing to the Library

There are currently two ways to contribute to the Algovera Library: adding more functionality to the python package or improving the jupyter lab extension.

First, clone the repository by running

```
git clone https://github.com/AlgoveraAI/jupyterlab_extensions.git

cd jupyterlab_extensions/
```

To start contributing, follow the commands below to set up a development environment.

```
conda create -n algolab-dev -c conda-forge jupyterlab ipylab jupyter-packaging nodejs ipytree bqplot ipywidgets numpy

conda activate algolab-dev

python -m pip install -e ".[dev]"

jupyter labextension develop . --overwrite

jlpm

jlpm run build
```

After any changes, run `jlpm run build` to see them in Jupyter Lab. Note that you might need to run `jlpm` or `python -m pip install -e ".[dev]"` depending on whether you add new dependencies to the project.
