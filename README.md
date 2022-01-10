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
