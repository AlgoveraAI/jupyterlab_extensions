"use strict";
// import SHA256 from "crypto-js";
// import * as o from "@oceanprotocol/lib";
// let config: Config;
// let aquarius: Aquarius;
// let providerUrl: any;
// let publisherAccount: string;
// let consumerAccount: string;
// let stakerAccount: string;
// let addresses: any;
// let poolNftAddress: string;
// let poolDatatokenAddress: string;
// let poolAddress: string;
// let freNftAddress: string;
// let freDatatokenAddress: string;
// let freAddress: string;
// let freId: string;
// let dispenserNftAddress: string;
// let dispenserDatatokenAddress: string;
// let dispenserAddress: string;
// export default async function publishToOcean() {
//   console.log("Publish to Ocean Initiated");
//   const algo_url = prompt(
//     "Enter URL of raw algorithm. This should be a URL to the raw text of your model.",
//     "15"
//   );
//   const algo_description = prompt(
//     "Enter description of algorithm.",
//     "e.g. 'A computer vision model.'"
//   );
//   const author = prompt(
//     "Enter your name/name that will appear as author of the algorithm.",
//     "Name Here"
//   );
//   // Define Asset Metadata
//   const ASSET_URL: Files = {
//     datatokenAddress: "0x0",
//     nftAddress: "0x0",
//     files: [
//       {
//         type: "url",
//         url: algo_url,
//         method: "GET",
//       },
//     ],
//   };
//   // Define MetaData
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
//       description: algo_description,
//       author: author,
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
//   config = await getTestConfig(web3);
//   aquarius = new Aquarius(config.metadataCacheUri);
//   providerUrl = config.providerUri;
//   console.log(`Aquarius URL: ${config.metadataCacheUri}`);
//   console.log(`Provider URL: ${providerUrl}`);
//   //   Publish Data NFT and a Datatoken with a fixed rate exchange
//   const factory = new NftFactory(addresses.ERC721Factory, web3);
//   const nftParams: NftCreateData = {
//     name: FRE_NFT_NAME,
//     symbol: FRE_NFT_SYMBOL,
//     templateIndex: 1,
//     tokenURI: "",
//     transferable: true,
//     owner: publisherAccount,
//   };
//   const erc20Params: Erc20CreateParams = {
//     templateIndex: 1,
//     cap: "100000",
//     feeAmount: "0",
//     paymentCollector: ZERO_ADDRESS,
//     feeToken: ZERO_ADDRESS,
//     minter: publisherAccount,
//     mpFeeAddress: ZERO_ADDRESS,
//   };
//   const freParams: FreCreationParams = {
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
//# sourceMappingURL=ocean_publish.js.map
