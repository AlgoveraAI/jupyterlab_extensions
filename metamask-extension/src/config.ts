// import { ConfigHelper } from "@oceanprotocol/lib";
// import Web3 from "web3";
// const defaultConfig = new ConfigHelper().getConfig("development");

// const urls = {
//   networkUrl: "http://localhost:8545",
//   aquarius: "http://localhost:5000",
//   providerUri: "http://localhost:8030",
// };

// const contracts = {
//   "DTFactory": "0x1e6d9207241DbDca82B0D9546490c97B24B1a9f6",
//   "BFactory": "0x98b6901cE7C9fc65dBeeC98598136593EB7b4c6C",
//   "FixedRateExchange": "0x91EB42b164664cB28a09B0cF9651b404Ee105afA",
//   "Metadata": "0x9C2a015129969c98E9A5BcBEb61A5F907FF5b629",
//   "Ocean": "0x2fC1fd21cb222Dc180Ef817dE4c426fd9230b5A5"
// };

// // const config = {
// //   networkUrl: "https://rinkeby.infura.io/v3/d163c48816434b0bbb3ac3925d6c6c80",
// //   metadataCacheUri: 'https://aquarius.oceanprotocol.com',
// //   providerUri: 'https://provider.rinkeby.oceanprotocol.com',
// //   web3Provider: new Web3("https://rinkeby.infura.io/v3/d163c48816434b0bbb3ac3925d6c6c80")
// // }

// const config = {
//   ...defaultConfig,
//   metadataCacheUri: urls.aquarius,
//   providerUri: urls.providerUri,
//   web3Provider: new Web3(urls.networkUrl),
// };

// export default  {config, contracts, urls};