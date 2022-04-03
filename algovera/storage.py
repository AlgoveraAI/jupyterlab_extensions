import js2py
import streamlit as st

class Storage():
    def __init__(self) -> None:
        self.file = 0
        self.store = """
        function store(api_key, data) {
            fetch('https://api.estuary.tech/content/add', {
                method: "POST",
                headers: {
                    Authorization: 'Bearer api_key',
                },
                body: data
                })
        }
        """
    def estuary_select(self):
        self.file = st.file_uploader("Choose file", accept_multiple_files=False)
    
    def estuary_test(self):
        print(self.file)
    
    def estuary_upload(self, api_key):
        self.store(api_key, self.file)