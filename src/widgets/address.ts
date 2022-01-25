import * as ethers from "ethers";

export default function getPrivateKey() {
  var wallet = ethers.Wallet.createRandom();
  return [wallet.privateKey, wallet.address];
}
