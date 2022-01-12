// import Web3 from 'web3';
// import { AbiItem } from 'web3-utils';


export default async function sendOcean(toAddress: string, accounts: any[]) {
//   const web3 = new Web3(window.ethereum);
  console.log('web3')
//   const oceanAddress = '0x8967BCF84170c91B0d24D4302C2376283b0B3a07';
//   // Use BigNumber
//   let decimals = web3.utils.toBN(18);
//   let amount = web3.utils.toBN(100);
//   let minABI = [
//     // transfer
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_to",
//           "type": "address"
//         },
//         {
//           "name": "_value",
//           "type": "uint256"
//         }
//       ],
//       "name": "transfer",
//       "outputs": [
//         {
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "type": "function"
//     }
//   ];
//   // Get ERC20 Token contract instance
//   let contract = new web3.eth.Contract(minABI as AbiItem[], oceanAddress);
//   // calculate ERC20 token amount
//   let value = amount.mul(web3.utils.toBN(10).pow(decimals));
//   // call transfer function
//   contract.methods.transfer(toAddress, value).send({from: accounts[0]})
//   .on('transactionHash', function(hash: any){
//     console.log(hash);
//   });
}