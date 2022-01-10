# Metamask JupyterLab Extensions

This is a development repository adding Web3 extensions to JupyterLab.

## Setup
```
# create a new conda environment

conda create -n metajupyter --override-channels --strict-channel-priority -c conda-forge -c nodefaults jupyterlab=3 cookiecutter nodejs jupyter-packaging git

# go in the extension directory
cd metamask-extension/

# install the extension

pip install -ve .

# create a link from jupyterlab to the source directory

jupyter labextension develop --overwrite .

# build the extension

jlpm run build

# run jupyterlab

jupyter lab
```

Note: If you get an error at any point of the installation process, try running `jupyter labextension install .` in the metamask-extension/ directory.