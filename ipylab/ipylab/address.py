from eth_account import Account
import secrets

def get_pk():
    priv = secrets.token_hex(32)
    private_key = "0x" + priv
    return private_key