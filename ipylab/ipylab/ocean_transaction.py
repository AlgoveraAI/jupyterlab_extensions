"""CryptoPunks Data Set"""
import os
import pickle
import datasets
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
config = Config('config.ini')
# config = ExampleConfig.get_config()
ocean = Ocean(config)
OCEAN_token = BToken(ocean.web3, ocean.OCEAN_address)
_DATA_URL = "https://drive.google.com/file/d/1d01VQ1plsB8ZIO5VF0LKV2MxdNQjvoCW/view?usp=sharing"
_DESCRIPTION = """\
CryptoPunks is a non-fungible token (NFT) collection on the Ethereum blockchain. The dataset contains 10,000 CryptoPunk images, most of humans but also of three special types: Zombie (88), Ape (24) and Alien (9). They are provided with both clear backgrounds and teal backgrounds. 
"""
TEST_KEY = '0x5d75837394b078ce97bc289fa8d75e21000573520bfa7784a9d28ccaae602bf8'
wallet = Wallet(ocean.web3, private_key=TEST_KEY, transaction_timeout=20, block_confirmations=config.block_confirmations)
did = "did:op:d21196A9AC0A0Aa9df1ef6f30a440584Fe1C5E7b"
data_token_address = '0xd21196A9AC0A0Aa9df1ef6f30a440584Fe1C5E7b'
asset = ocean.assets.resolve(did)
pool_address = "0x2d35D25C5BF1005B310284d00Ad05b9F35ea827B"
class CryptoPunks(datasets.GeneratorBasedBuilder):
    """CryptoPunks Data Set"""
    BUILDER_CONFIGS = [
        datasets.BuilderConfig(
            name="plain_images",
            version=datasets.Version("1.0.0", ""),
            description="Plain image import of CryptoPunks Dataset",
        )
    ]
    def _info(self):
        return datasets.DatasetInfo(
            description=_DESCRIPTION,
            features=datasets.Features(
                {
                    "image": datasets.Value("string"),
                }
            ),
            # supervised_keys=("img"),
            homepage="https://market.oceanprotocol.com/asset/did:op:Bc6B4f3367a0c81883957142330C86F155c44973",
        )    
    def _split_generators(self, dl_manager):
        # archive = dl_manager.download_and_extract(_DATA_URL)
        archive = self._buy_and_download()
        return [
            datasets.SplitGenerator(
                name=datasets.Split.TRAIN, gen_kwargs={"files": dl_manager.iter_archive(archive), "split": "train"}
            ),
        ]
    def _generate_examples(self, files, split):
        """This function returns the examples in the raw (text) form."""
        if split == "train":
            batches = ["data_batch_1", "data_batch_2", "data_batch_3", "data_batch_4", "data_batch_5"]
        if split == "test":
            batches = ["test_batch"]
        batches = [f"cifar-10-batches-py/{filename}" for filename in batches]
        for path, fo in files:
            if path in batches:
                dict = pickle.load(fo, encoding="bytes")
                labels = dict[b"labels"]
                images = dict[b"data"]
                for idx, _ in enumerate(images):
                    img_reshaped = np.transpose(np.reshape(images[idx], (3, 32, 32)), (1, 2, 0))
                    yield f"{path}_{idx}", {
                        "img": img_reshaped,
                        "label": labels[idx],
                    }
    # ONLY FOR SAMPLE DATA
    def _download_sample(self):
        sample_link = asset.metadata['additionalInformation']['links'][0]['url']
        ID = Path(sample_link).parts[4]
        download_dir = Path('data')
        dataset_name = "punks-sample"
        download_path = str(download_dir / (dataset_name + '.tgz'))
        if not download_dir.exists():
            download_dir.mkdir(parents=True)
        # !gdown --id {ID} -O {download_path }
        # !tar -xvzf {download_path} -C {str(download_dir)}
        sample_dir = download_dir / dataset_name
        clear_dir, teal_dir = sorted(list(sample_dir.glob('*')))
        return clear_dir, teal_dir
    # BUY DATASET
    def _buy_and_download(self):
        print('executing transaction')
        #my wallet
        print(f"wallet.address = '{wallet.address}'")
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
            max_OCEAN_amount=to_wei(100), # pay up to 10.0 OCEAN
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
