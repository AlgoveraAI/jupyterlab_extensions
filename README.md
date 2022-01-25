# Algovera JupyterLab Extension

This is a development repository adding Web3 extensions to JupyterLab.

## Setup

```
conda create -n algolab -c conda-forge jupyterlab ipylab jupyter-packaging nodejs ipytree bqplot ipywidgets numpy

conda activate algolab

python -m pip install -e ".[dev]"

jupyter labextension develop . --overwrite

jlpm

jlpm run build

jupyter lab
```

Note: If you get an error at any point of the installation process, try running `jupyter labextension install .` in the metamask-extension/ directory.

To enable the ipylab extension, run the following:

```
# In the main directory (note, make sure you have ocean-lib and datasets installed)

pip install -r requirements.txt

# go to ipylab directory

cd ipylab/

# install dependencies

pip install -ve .

# install extension

jupyter labextension develop --overwrite .

# make sure you have all extensions ready by running

jupyter labextension list

# you should see something like this

ipylab v0.5.2 enabled OK
@jupyterlab-examples/main-menu v0.1.0 enabled OK
@jupyter-widgets/jupyterlab-manager v3.0.1 enabled OK (python, jupyterlab_widgets)

# if you don't have ipylab installed, `run jupyter labextension develop --overwrite .` again. Sometimes, the first time you run the command it will install jupyterlab-manager instead

# now you can run jupyterlab again and use the new extension

jupyter lab

```
