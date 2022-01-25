import * as ethers from "ethers";

export default async function sendOcean(to_address: string) {
  console.log("Sending OCEAN initiated");
  const send_token_amount = prompt(
    "Enter OCEAN amount. This is the amount you expect to pay for the dataset.",
    "15"
  );
  const send_eth_amount = prompt(
    "Enter ETH amount. This is the amount you expect to pay in GAS fees from the test wallet. Do not put too much if you are using mainnet!",
    "0.2"
  );

  const oceanAddress = "0x8967BCF84170c91B0d24D4302C2376283b0B3a07";
  const contractAbiFragment = [
    {
      name: "transfer",
      type: "function",
      inputs: [
        {
          name: "_to",
          type: "address",
        },
        {
          type: "uint256",
          name: "_tokens",
        },
      ],
      constant: false,
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
    },
  ];
  console.log("Parameters defined");
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  let contract = new ethers.Contract(oceanAddress, contractAbiFragment, signer);
  console.log("Contract defined");
  // How many tokens?
  let numberOfTokens = ethers.utils.parseUnits(send_token_amount, 18);
  console.log(`numberOfTokens: ${numberOfTokens}`);
  console.log("Ready to transfer");
  // Send tokens
  contract.transfer(to_address, numberOfTokens).then((transferResult: any) => {
    console.dir(transferResult);
    alert("sent token");
  });
  signer.sendTransaction({
    to: to_address,
    value: ethers.utils.parseEther(send_eth_amount),
  });
  console.log("Done: see address below on etherscan");
  console.log(to_address);
}
