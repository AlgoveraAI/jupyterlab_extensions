// const { SHA256 } = require("crypto-js");
// const {
//   FixedRateExchange,
//   Nft,
//   NftFactory,
//   ProviderInstance,
// } = require("@oceanprotocol/lib");

// const Web3 = require("web3");
// const fs = require("fs");
// const homedir = require("os");

// // Ocean-lib functions

// /* eslint-disable no-unused-vars */
// export enum LogLevel {
//   None = -1,
//   Error = 0,
//   Warn = 1,
//   Log = 2,
//   Verbose = 3,
// }
// /* eslint-enable no-unused-vars */

// export class Logger {
//   constructor(private logLevel: LogLevel = LogLevel.Error) {}

//   public setLevel(logLevel: LogLevel): void {
//     this.logLevel = logLevel;
//   }

//   public bypass(...args: any[]): void {
//     this.dispatch("log", -Infinity as any, ...args);
//   }

//   public debug(...args: any[]): void {
//     this.dispatch("debug", LogLevel.Verbose, ...args);
//   }

//   public log(...args: any[]): void {
//     this.dispatch("log", LogLevel.Log, ...args);
//   }

//   public warn(...args: any[]): void {
//     this.dispatch("warn", LogLevel.Warn, ...args);
//   }

//   public error(...args: any[]): void {
//     this.dispatch("error", LogLevel.Error, ...args);
//   }

//   private dispatch(verb: string, level: LogLevel, ...args: any[]) {
//     if (this.logLevel >= level) {
//       // console[verb](...args)
//     }
//   }
// }

// const LoggerInstance = new Logger();

// const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
// function getHash(data: any): string {
//   try {
//     return SHA256(data).toString();
//   } catch (e: any) {
//     LoggerInstance.error("getHash error: ", e.message);
//   }
// }

// // export default async function publish() {
// //   console.log("NEW PUBLISH EXTENSION WORKING");
//   // let asset_url = prompt(
//   //   "Enter URL to raw asset.",
//   //   "https://raw.githubusercontent.com/oceanprotocol/testdatasets/main/shs_dataset_test.txt"
//   // );
// //   return asset_url;
// // }

// export default async function publish(
//   publisherAddress: string
// ) {
//   let asset_url = prompt(
//     "Enter URL to raw asset.",
//     "https://raw.githubusercontent.com/oceanprotocol/testdatasets/main/shs_dataset_test.txt"
//   );
//   // 0. SETUP
//   let config;
//   let providerUrl;
//   let publisherAccount;
//   let addresses;
//   let freNftAddress;
//   let freDatatokenAddress;
//   let freAddress;
//   let freId;

//   const FRE_NFT_NAME = "Datatoken 2";
//   const FRE_NFT_SYMBOL = "DT2";

//   const ASSET_URL = {
//     datatokenAddress: "0x0",
//     nftAddress: "0x0",
//     files: [
//       {
//         type: "url",
//         url: asset_url,
//         method: "GET",
//       },
//     ],
//   };

//   const DDO = {
//     "@context": ["https://w3id.org/did/v1"],
//     id: "",
//     version: "4.1.0",
//     chainId: 4,
//     nftAddress: "0x0",
//     metadata: {
//       created: "2021-12-20T14:35:20Z",
//       updated: "2021-12-20T14:35:20Z",
//       type: "dataset",
//       name: "dataset-name",
//       description: "Ocean protocol test dataset description",
//       author: "oceanprotocol-team",
//       license: "MIT",
//     },
//     services: [
//       {
//         id: "testFakeId",
//         type: "access",
//         files: "",
//         datatokenAddress: "0x0",
//         serviceEndpoint: "https://v4.provider.rinkeby.oceanprotocol.com",
//         timeout: 0,
//       },
//     ],
//   };

//   config = {
//     network: "rinkeby",
//     nodeUri: "https://rinkeby.infura.io/v3",
//     BLOCK_CONFIRMATIONS: 0,
//     metadataCacheUri: "https://v4.aquarius.oceanprotocol.com",
//     providerUri: "https://v4.provider.rinkeby.oceanprotocol.com",
//     "downloads.path": "consume-downloads",
//   };
//   providerUrl = config.providerUri;

//   console.log(`Aquarius URL: ${config.metadataCacheUri}`);
//   console.log(`Provider URL: ${providerUrl}`);

//   // 1. ACCOUNTS & CONTRACTS
//   const web3 = new Web3(process.env.NODE_URI || "http://127.0.0.1:8545"); // to configure for rinkeby, see https://github.com/oceanprotocol/ocean.js/blob/efa3839d10befdbc35e16e61c8e9bf310039970b/src/utils/ConfigHelper.ts
//   publisherAccount = publisherAddress;

//   console.log(`Publisher account address: ${publisherAccount}`);

//   const getAddresses = () => {
//     const data = JSON.parse(
//       // eslint-disable-next-line security/detect-non-literal-fs-filename
//       fs.readFileSync(
//         process.env.ADDRESS_FILE ||
//           `${homedir}/.ocean/ocean-contracts/artifacts/address.json`,
//         "utf8"
//       )
//     );
//     return data.development;
//   };
//   addresses = getAddresses();

//   addresses = {
//     chainId: 8996,
//     Ocean: "0x02175de5A7F168517688e3E93f55936C9c2C7A19",
//     MockDAI: "0xE9dC0B76ceCc3f402C6EA57d5191811B1660AF32",
//     MockUSDC: "0x33A456DE31bea3f3fa4F968A698D713191FfE969",
//     OPFCommunityFeeCollector: "0x55E873f9327Ee99a67975C8F2BEa04aD141B2807",
//     startBlock: 41,
//     poolTemplate: "0xc6eF91571a6d512985C885cb5EEB7aC8E6C47f4B",
//     Router: "0xE4f7c64C52085A6df2c7c2972466EEf3ba3aD081",
//     FixedPrice: "0x483a6fc289cAF5e4C67656b7ecfa4B11Fe35F21A",
//     Staking: "0xd7C2FE49b96c48073D0D5e9f1f360d1493E670a5",
//     ERC20Template: {
//       "1": "0x9CdA4a4449bCaf7e2eb20D2485540d9628167132",
//       "2": "0x563aC2D29279053D16F2602432Cba7896D45E125",
//     },
//     ERC721Template: { "1": "0xAF7b0BdB23EE4CD154fA65B0E124dfe682a31133" },
//     Dispenser: "0xF0579E51b07c740c6D4d1587EB5AA09F043a78D7",
//     ERC721Factory: "0x83cc685E9806296E1E0Ac275150297305A55D272",
//   };
//   console.log(addresses);

//   // 2. PUBLISH DATA NFT & DATATOKEN WITH FIXED RATE EXCHANGE
//   const factory = new NftFactory(addresses.ERC721Factory, web3);

//   const nftParams = {
//     name: FRE_NFT_NAME,
//     symbol: FRE_NFT_SYMBOL,
//     templateIndex: 1,
//     tokenURI: "",
//     transferable: true,
//     owner: publisherAccount,
//   };

//   const erc20Params = {
//     templateIndex: 1,
//     cap: "100000",
//     feeAmount: "0",
//     paymentCollector: ZERO_ADDRESS,
//     feeToken: ZERO_ADDRESS,
//     minter: publisherAccount,
//     mpFeeAddress: ZERO_ADDRESS,
//   };

//   const freParams = {
//     fixedRateAddress: addresses.FixedPrice,
//     baseTokenAddress: addresses.Ocean,
//     owner: publisherAccount,
//     marketFeeCollector: publisherAccount,
//     baseTokenDecimals: 18,
//     datatokenDecimals: 18,
//     fixedRate: "1",
//     marketFee: "0.001",
//     allowedConsumer: ZERO_ADDRESS,
//     withMint: false,
//   };
//   console.log(nftParams);
//   console.log(erc20Params);
//   console.log(freParams);

//   const tx = await factory.createNftErc20WithFixedRate(
//     publisherAccount,
//     nftParams,
//     erc20Params,
//     freParams
//   );

//   freNftAddress = tx.events.NFTCreated.returnValues[0];
//   freDatatokenAddress = tx.events.TokenCreated.returnValues[0];
//   freAddress = tx.events.NewFixedRate.returnValues.exchangeContract;
//   freId = tx.events.NewFixedRate.returnValues.exchangeId;

//   console.log(`Fixed rate exchange NFT address: ${freNftAddress}`);
//   console.log(`Fixed rate exchange Datatoken address: ${freDatatokenAddress}`);
//   console.log(`Fixed rate exchange address: ${freAddress}`);
//   console.log(`Fixed rate exchange Id: ${freId}`);

//   // 2.5 Set metadata in the fixed rate exchange NFT
//   const nft = new Nft(web3);

//   DDO.chainId = await web3.eth.getChainId();
//   DDO.id =
//     "did:op:" +
//     SHA256(
//       web3.utils.toChecksumAddress(freNftAddress) + DDO.chainId.toString(10)
//     );
//   DDO.nftAddress = freNftAddress;

//   ASSET_URL.datatokenAddress = freDatatokenAddress;
//   ASSET_URL.nftAddress = freNftAddress;
//   const encryptedFiles = await ProviderInstance.encrypt(ASSET_URL, providerUrl);
//   DDO.services[0].files = await encryptedFiles;
//   DDO.services[0].datatokenAddress = freDatatokenAddress;

//   console.log(`DID: ${DDO.id}`);

//   const providerResponse = await ProviderInstance.encrypt(DDO, providerUrl);
//   const encryptedDDO = await providerResponse;
//   const metadataHash = getHash(JSON.stringify(DDO));
//   await nft.setMetadata(
//     freNftAddress,
//     publisherAccount,
//     0,
//     providerUrl,
//     "",
//     "0x2",
//     encryptedDDO,
//     "0x" + metadataHash
//   );

//   const fixedRate = new FixedRateExchange(web3, freAddress);
//   const oceanAmount = await (
//     await fixedRate.calcBaseInGivenOutDT(freId, "1")
//   ).baseTokenAmount;

//   console.log(`Price of 1 ${FRE_NFT_SYMBOL} is ${oceanAmount} OCEAN`);
// }
