import { ICommandPalette } from '@jupyterlab/apputils';
// const provider = new ethers.providers.Web3Provider(window.ethereum)
// const signer = provider.getSigner()
// signer.connect(provider)
// console.log(signer)
/**
 * Initialization data for the main menu example.
 */
const extension = {
    id: 'metamask_extension',
    autoStart: true,
    requires: [ICommandPalette],
    activate: (app, palette) => {
        const { commands } = app;
        // Add a command
        const command = 'jlab-examples:main-menu';
        commands.addCommand(command, {
            label: 'Execute jlab-examples:main-menu Command',
            caption: 'Execute jlab-examples:main-menu Command',
            execute: (args) => {
                window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log(`METAMASK EXTENSION LOADED.`);
                window.alert(`METAMASK EXTENSION LOADED.`);
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
