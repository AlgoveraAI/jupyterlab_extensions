"""CryptoPunks Data Set"""
import os
import pickle
import numpy as np
from ocean_lib.ocean.ocean import Ocean
from ocean_lib.config import Config
from ocean_lib.web3_internal.wallet import Wallet
from ocean_lib.web3_internal.constants import ZERO_ADDRESS
from ocean_lib.common.agreements.service_types import ServiceTypes
from ocean_lib.services.service import Service
from ocean_lib.data_provider.data_service_provider import DataServiceProvider
from ocean_lib.web3_internal.currency import pretty_ether_and_wei
from ocean_lib.models.compute_input import ComputeInput
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
class OceanMarket():
    """Ocean Market integration"""
    def __init__(self, private_key=None) -> None:
        self.private_key = private_key
        self.wallet = None

    def check_wallet(self) -> None:
        self.wallet = Wallet(ocean.web3, private_key=self.private_key, transaction_timeout=20, block_confirmations=0)
        print(f"Environment Wallet Address = '{self.wallet.address}'")
        print(f"Wallet OCEAN = {pretty_ether_and_wei(OCEAN_token.balanceOf(self.wallet.address))}")
        print(f"Wallet ETH = {pretty_ether_and_wei(ocean.web3.eth.get_balance(self.wallet.address))}")

    def check_dt_wallet(self, did, pool_address):
        self.wallet = Wallet(ocean.web3, private_key=self.private_key, transaction_timeout=20, block_confirmations=0)
        assert self.wallet is not None, "Wallet error, initialize app again"
        data_token_address = f'0x{did[7:]}'
        data_token = ocean.get_data_token(data_token_address)
        print(f"I have {pretty_ether_and_wei(data_token.balanceOf(self.wallet.address), data_token.symbol())}.")

    def buy_dt(self, did, pool_address):
        self.wallet = Wallet(ocean.web3, private_key=self.private_key, transaction_timeout=20, block_confirmations=0)
        assert self.wallet is not None, "Wallet error, initialize app again"
        # Get asset, datatoken_address
        asset = ocean.assets.resolve(did)
        data_token_address = f'0x{did[7:]}'

        print('Executing Transaction')
        #my wallet
        print(f"Environment Wallet Address = '{self.wallet.address}'")
        print(f"Wallet OCEAN = {pretty_ether_and_wei(OCEAN_token.balanceOf(self.wallet.address))}")
        print(f"Wallet ETH = {pretty_ether_and_wei(ocean.web3.eth.get_balance(self.wallet.address))}")
        #Verify that Bob has ETH
        assert ocean.web3.eth.get_balance(self.wallet.address) > 0, "need test ETH"
        #Verify that Bob has OCEAN
        assert OCEAN_token.balanceOf(self.wallet.address) > 0, "need test OCEAN"
        # print(f"I have {pretty_ether_and_wei(data_token.balanceOf(wallet.address), data_token.symbol())}.")
        # assert data_token.balanceOf(wallet.address) >= to_wei(1), "Bob didn't get 1.0 datatokens"
        #Bob points to the service object
        fee_receiver = ZERO_ADDRESS # could also be market address
        #Bob buys 1.0 datatokens - the amount needed to consume the dataset.
        data_token = ocean.get_data_token(data_token_address)
        print('Buying Data Token')
        ocean.pool.buy_data_tokens(
            pool_address,
            amount=to_wei(1), # buy 1.0 datatoken
            max_OCEAN_amount=to_wei(10), # pay up to 10.0 OCEAN
            from_wallet=self.wallet
        )
        print(f"I have {pretty_ether_and_wei(data_token.balanceOf(self.wallet.address), data_token.symbol())}.")

    def buy_at(self, did, pool_address):
        self.wallet = Wallet(ocean.web3, private_key=self.private_key, transaction_timeout=20, block_confirmations=0)
        assert self.wallet is not None, "Wallet error, initialize app again"
        # Get asset, datatoken_address
        data_token_address = f'0x{did[7:]}'

        print('Executing Transaction')
        #my wallet
        print(f"Environment Wallet Address = '{self.wallet.address}'")
        print(f"wallet ocean = {pretty_ether_and_wei(OCEAN_token.balanceOf(self.wallet.address))}")
        print(f"wallet eth = {pretty_ether_and_wei(ocean.web3.eth.get_balance(self.wallet.address))}")
        #Verify that Bob has ETH
        assert ocean.web3.eth.get_balance(self.wallet.address) > 0, "need test ETH"
        #Verify that Bob has OCEAN
        assert OCEAN_token.balanceOf(self.wallet.address) > 0, "need test OCEAN"
        # print(f"I have {pretty_ether_and_wei(data_token.balanceOf(wallet.address), data_token.symbol())}.")
        # assert data_token.balanceOf(wallet.address) >= to_wei(1), "Bob didn't get 1.0 datatokens"
        #Bob points to the service object
        fee_receiver = ZERO_ADDRESS # could also be market address
        #Bob buys 1.0 datatokens - the amount needed to consume the dataset.
        data_token = ocean.get_data_token(data_token_address)
        print('Buying Algorithm Token')
        ocean.pool.buy_data_tokens(
            pool_address,
            amount=to_wei(1), # buy 1.0 datatoken
            max_OCEAN_amount=to_wei(10), # pay up to 10.0 OCEAN
            from_wallet=self.wallet
        )
        print(f"I have {pretty_ether_and_wei(data_token.balanceOf(self.wallet.address), data_token.symbol())}.")

    # BUY DATASET
    def buy_and_download(self, did, pool_address):
        self.wallet = Wallet(ocean.web3, private_key=self.private_key, transaction_timeout=20, block_confirmations=0)
        assert self.wallet is not None, "Wallet error, initialize app again"
        # Get asset, datatoken_address
        asset = ocean.assets.resolve(did)
        data_token_address = f'0x{did[7:]}'

        print('executing transaction')
        #my wallet
        print(f"wallet.address = '{self.wallet.address}'")
        print(f"wallet ocean = {pretty_ether_and_wei(OCEAN_token.balanceOf(self.wallet.address))}")
        print(f"wallet eth = {pretty_ether_and_wei(ocean.web3.eth.get_balance(self.wallet.address))}")
        #Verify that Bob has ETH
        assert ocean.web3.eth.get_balance(self.wallet.address) > 0, "need ganache ETH"
        #Verify that Bob has OCEAN
        assert OCEAN_token.balanceOf(self.wallet.address) > 0, "need ganache OCEAN"
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
            from_wallet=self.wallet
        )
        print(f"I have {pretty_ether_and_wei(data_token.balanceOf(self.wallet.address), data_token.symbol())}.")
        assert data_token.balanceOf(self.wallet.address) >= to_wei(1), "I didn't get 1.0 datatokens"
        service = asset.get_service(ServiceTypes.ASSET_ACCESS)
        #Bob sends his datatoken to the service
        quote = ocean.assets.order(asset.did, self.wallet.address, service_index=service.index)
        order_tx_id = ocean.assets.pay_for_service(
                    ocean.web3,
                    quote.amount,
                    quote.data_token_address,
                    asset.did,
                    service.index,
                    fee_receiver,
                    self.wallet,
                    service.get_c2d_address()
        )
        print(f"order_tx_id = '{order_tx_id}'")
        #Bob downloads. If the connection breaks, Bob can request again by showing order_tx_id.
        file_path = ocean.assets.download(
                    asset.did,
                    service.index,
                    self.wallet,
                    order_tx_id,
                    destination='./'
        )
        print(f"file_path = '{file_path}'")
        return file_path

    def c2d(self, dataset_did, dt_pool, algorithm_did, at_pool):
        self.wallet = Wallet(ocean.web3, private_key=self.private_key, transaction_timeout=20, block_confirmations=0)
        DATA_DDO = ocean.assets.resolve(dataset_did)  # make sure we operate on the updated and indexed metadata_cache_uri versions
        ALG_DDO = ocean.assets.resolve(algorithm_did)

        # Check if the wallet has DTs and ATs, if not: buy them
        ALG_address = f'0x{algorithm_did[7:]}'
        algo_token = ocean.get_data_token(ALG_address)
        data_token_address = f'0x{dataset_did[7:]}'
        data_token = ocean.get_data_token(data_token_address)

        if data_token.balanceOf(self.wallet.address) < to_wei(1):
            print('Not enough datatokens in wallet, buying...')
            self.buy_dt(dataset_did, dt_pool)

        if algo_token.balanceOf(self.wallet.address) < to_wei(1):
            print('Not enough algorithm tokens in wallet, buying...')
            self.buy_at(algorithm_did, at_pool)

        assert data_token.balanceOf(self.wallet.address) > 0, 'Not enough datatokens'
        assert algo_token.balanceOf(self.wallet.address) > 0, 'Not enough algorithm tokens'

        compute_service = DATA_DDO.get_service('compute')
        algo_service = ALG_DDO.get_service('access')

        # order & pay for dataset
        print('Buying datatoken compute service...')
        dataset_order_requirements = ocean.assets.order(
            dataset_did, self.wallet.address, service_type=compute_service.type
        )
        DATA_order_tx_id = ocean.assets.pay_for_service(
            ocean.web3,
            dataset_order_requirements.amount,
            dataset_order_requirements.data_token_address,
            dataset_did,
            compute_service.index,
            ZERO_ADDRESS,
            self.wallet,
            dataset_order_requirements.computeAddress,
        )
        print(f'Paid for compute service on dataset, tx_id: {DATA_order_tx_id}')

        # order & pay for algo
        print('Buying algorithm compute service...')
        algo_order_requirements = ocean.assets.order(
            algorithm_did, self.wallet.address, service_type=algo_service.type
        )
        ALG_order_tx_id = ocean.assets.pay_for_service(
                ocean.web3,
                algo_order_requirements.amount,
                algo_order_requirements.data_token_address,
                algorithm_did,
                algo_service.index,
                ZERO_ADDRESS,
                self.wallet,
                algo_order_requirements.computeAddress,
        )
        print(f'Paid for compute service with algorithm, tx_id: {ALG_order_tx_id}')

        compute_inputs = [ComputeInput(dataset_did, DATA_order_tx_id, compute_service.index)]
        job_id = ocean.compute.start(
            compute_inputs,
            self.wallet,
            algorithm_did=algorithm_did,
            algorithm_tx_id=ALG_order_tx_id,
            algorithm_data_token=ALG_address
        )
        print(f"Started compute job with id: {job_id}")

        print('This might take a while...')
        while ocean.compute.status(dataset_did, job_id, self.wallet)['statusText'] != 'Job finished':
            print(ocean.compute.status(dataset_did, job_id, self.wallet)['statusText'])
            pass
        result = ocean.compute.result_file(dataset_did, job_id, 0, self.wallet)
        print('Done! C2D successful.')

        return result

    def algo_publish(self, algo_url=None):
        """
        Algorithm publishing

        Requirements:

        - Model script on GitHub
        - wallet private key as environment variable
        - dataset we want to train on specified
        - model metadata (name, date, compute, etc.)
        """
        provider_url = DataServiceProvider.get_url(ocean.config)
        assert algo_url is not None, "Algorithm URL not specified, try again"
        self.wallet = Wallet(ocean.web3, private_key=self.private_key, transaction_timeout=20, block_confirmations=0)
        assert self.wallet is not None, "Wallet error, initialize app again"


        # Publish ALG datatoken
        ALG_datatoken = ocean.create_data_token('ALG1', 'ALG1', self.wallet, blob=ocean.config.metadata_cache_uri)
        ALG_datatoken.mint(self.wallet.address, to_wei(100), self.wallet)
        print(f"ALG_datatoken.address = '{ALG_datatoken.address}'")

        # Specify metadata and service attributes for algorithm script.
        ALG_metadata = {
            "main": {
                "type": "algorithm",
                "algorithm": {
                    "language": "python",
                    "format": "docker-image",
                    "version": "1.0.0", # project-specific
                    "container": {
                    "entrypoint": "python $ALGO",
                    "image": "oceanprotocol/algo_dockers",
                    "tag": "ari", # project-specific
                    },
                },
                "files": [
            {
                "url": algo_url, # not sure whether this works yet
                "index": 0,
                "contentType": "text/text",
            },
            ],
            "name": "test", "author": "test", "license": "MIT", 
            "dateCreated": "2022", # project-specific
            }
        }
        ALG_service_attributes = {
                "main": {
                    "name": "ALG_dataAssetAccessServiceAgreement",
                    "creator": self.wallet.address,
                    "timeout": 3600 * 24,
                    "datePublished": "2020-01-28T10:55:11Z",
                    "cost": 1.0, # <don't change, this is obsolete>
                }
            }

        # Calc ALG service access descriptor. We use the same service provider as DATA
        ALG_access_service = Service(
            service_endpoint=provider_url,
            service_type=ServiceTypes.CLOUD_COMPUTE,
            attributes=ALG_service_attributes
        )

        # Publish metadata and service info on-chain
        ALG_ddo = ocean.assets.create(
        metadata=ALG_metadata, # {"main" : {"type" : "algorithm", ..}, ..}
        publisher_wallet=self.wallet,
        services=[ALG_access_service],
        data_token_address=ALG_datatoken.address)

        return ALG_ddo, ALG_datatoken
