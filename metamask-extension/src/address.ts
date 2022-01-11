import * as  ethers from 'ethers';

export default function getPrivateKey() {    
    var wallet = ethers.Wallet.createRandom();
    console.log("Address: " + wallet.address);
    return [wallet.privateKey, wallet.address]
};