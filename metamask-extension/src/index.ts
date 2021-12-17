import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';
// import { ethers } from "ethers";

declare global {
  interface Window {
      ethereum:any;
  }
}

// const provider = new ethers.providers.Web3Provider(window.ethereum)
// const signer = provider.getSigner()
// signer.connect(provider)
// console.log(signer)
let accounts: any[] = [];
async function getAccount() {
  accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
}
/**
 * Initialization data for the main menu example.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'metamask_extension',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    const { commands } = app;

    // Add a command
    const command = 'connect_wallet';
    commands.addCommand(command, {
      label: 'connect wallet',
      caption: 'connect wallet',
      execute: (args: any) => {
        getAccount();
        console.log('accounts');
        console.log(accounts);
        // window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(
          `METAMASK EXTENSION LOADED.`
        );
      },
    });

    // Add a command
    const command2 = 'send_transaction';
    commands.addCommand(command2, {
      label: 'send transaction',
      caption: 'send transaction',
      execute: (args: any) => {
        window.ethereum
        .request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
              value: '0x29a2241af62c0000',
              gasPrice: '0x09184e72a000',
              gas: '0x2710',
            },
          ],
        })
        .then((txHash: any) => console.log(txHash))
        .catch((error: any) => console.error);
        console.log(
          `METAMASK EXTENSION LOADED.`
        );
      },
    });

    // Add the command to the command palette
    const category = 'Extension Examples';
    palette.addItem({
      command,
      category,
      args: { origin: 'from the palette' },
    });
  },
};

export default extension;
