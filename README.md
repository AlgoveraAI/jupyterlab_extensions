# Metamask JupyterLab Extensions

This is a development repository adding Web3 extensions to JupyterLab.

## Setup
```
# create a new conda environment

conda create -n metajupyter --override-channels --strict-channel-priority -c conda-forge -c nodefaults jupyterlab=3 cookiecutter nodejs jupyter-packaging git

# install the extension

pip install -ve .

# create a link from jupyterlab to the source directory

jupyter labextension develop --overwrite .

# build the extension

jlpm run build

# run jupyterlab

jupyter lab
```
