"""CryptoPunks Data Set"""
import os
import pickle
import numpy as np
from ocean_lib.ocean.ocean import Ocean
from ocean_lib.config import Config
from ocean_lib.web3_internal.wallet import Wallet
from ocean_lib.web3_internal.constants import ZERO_ADDRESS
from ocean_lib.common.agreements.service_types import ServiceTypes
from ocean_lib.web3_internal.currency import pretty_ether_and_wei
from ocean_lib.models.btoken import BToken #BToken is ERC20
from ocean_lib.web3_internal.currency import to_wei
from ocean_lib.example_config import ExampleConfig
# config = Config('config.ini')
# config = ExampleConfig.get_config()
d = {
    'network' : 'https://rinkeby.infura.io/v3/d163c48816434b0bbb3ac3925d6c6c80',
    'BLOCK_CONFIRMATIONS': 0,
   'metadataCacheUri' : 'https://aquarius.oceanprotocol.com',
   'providerUri' : 'https://provider.rinkeby.oceanprotocol.com',
   'PROVIDER_ADDRESS': '0x00bd138abd70e2f00903268f3db08f2d25677c9e',
   'downloads.path': 'consume-downloads',
}



ocean = Ocean(d)
OCEAN_token = BToken(ocean.web3, ocean.OCEAN_address)
_DATA_URL = "https://drive.google.com/file/d/1d01VQ1plsB8ZIO5VF0LKV2MxdNQjvoCW/view?usp=sharing"
_DESCRIPTION = """\
CryptoPunks is a non-fungible token (NFT) collection on the Ethereum blockchain. The dataset contains 10,000 CryptoPunk images, most of humans but also of three special types: Zombie (88), Ape (24) and Alien (9). They are provided with both clear backgrounds and teal backgrounds. 
"""
TEST_KEY = '0x5d75837394b078ce97bc289fa8d75e21000573520bfa7784a9d28ccaae602bf8'
# did = "did:op:d21196A9AC0A0Aa9df1ef6f30a440584Fe1C5E7b"
# data_token_address = '0xd21196A9AC0A0Aa9df1ef6f30a440584Fe1C5E7b'
# asset = ocean.assets.resolve(did)
# pool_address = "0x2d35D25C5BF1005B310284d00Ad05b9F35ea827B"
class CryptoPunks():
    """CryptoPunks Data Set"""
    def __init__(self, private_key=None) -> None:
        self.private_key = private_key
    # BUY DATASET
    def _buy_and_download(self, did, pool_address):
        assert self.private_key is not None, "Private Key error, initialize app again"
        # Get wallet, asset, datatoken_address
        wallet = Wallet(ocean.web3, private_key=self.private_key, transaction_timeout=20, block_confirmations=0)
        asset = ocean.assets.resolve(did)
        data_token_address = f'0x{did[7:]}'

        print('executing transaction')
        #my wallet
        print(f"wallet.address = '{wallet.address}'")
        print(f"wallet ocean = {OCEAN_token.balanceOf(wallet.address)}")
        print(f"wallet eth = {ocean.web3.eth.get_balance(wallet.address)}")
        #Verify that Bob has ETH
        assert ocean.web3.eth.get_balance(wallet.address) > 0, "need ganache ETH"
        #Verify that Bob has OCEAN
        assert OCEAN_token.balanceOf(wallet.address) > 0, "need ganache OCEAN"
        # print(f"I have {pretty_ether_and_wei(data_token.balanceOf(wallet.address), data_token.symbol())}.")
        # assert data_token.balanceOf(wallet.address) >= to_wei(1), "Bob didn't get 1.0 datatokens"
        #Bob points to the service object
        fee_receiver = ZERO_ADDRESS # could also be market address
        #Bob buys 1.0 datatokens - the amount needed to consume the dataset.
        data_token = ocean.get_data_token(data_token_address)
        ocean.pool.buy_data_tokens(
            pool_address,
            amount=to_wei(1), # buy 1.0 datatoken
            max_OCEAN_amount=to_wei(10), # pay up to 10.0 OCEAN
            from_wallet=wallet
        )
        print(f"I have {pretty_ether_and_wei(data_token.balanceOf(wallet.address), data_token.symbol())}.")
        assert data_token.balanceOf(wallet.address) >= to_wei(1), "I didn't get 1.0 datatokens"
        service = asset.get_service(ServiceTypes.ASSET_ACCESS)
        #Bob sends his datatoken to the service
        quote = ocean.assets.order(asset.did, wallet.address, service_index=service.index)
        order_tx_id = ocean.assets.pay_for_service(
                    ocean.web3,
                    quote.amount,
                    quote.data_token_address,
                    asset.did,
                    service.index,
                    fee_receiver,
                    wallet,
                    service.get_c2d_address()
        )
        print(f"order_tx_id = '{order_tx_id}'")
        #Bob downloads. If the connection breaks, Bob can request again by showing order_tx_id.
        file_path = ocean.assets.download(
                    asset.did,
                    service.index,
                    wallet,
                    order_tx_id,
                    destination='./'
        )
        print(f"file_path = '{file_path}'")
        return file_path
