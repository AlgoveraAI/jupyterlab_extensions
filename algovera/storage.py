import js2py
import streamlit as st

class Storage():
    def __init__(self, private_key=None) -> None:
        self.private_key = private_key
    def estuary_store():
        file = st.file_uploader("Choose file", accept_multiple_files=False)
        estuary = 