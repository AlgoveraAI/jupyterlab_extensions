import { ICommandPalette, InputDialog } from '@jupyterlab/apputils';
import { ILauncher } from '@jupyterlab/launcher';
import { ITranslator } from '@jupyterlab/translation';
import { IRenderMimeRegistry } from '@jupyterlab/rendermime';
import { ExamplePanel } from './panel';
import { oceanTrial } from './ocean';
/**
 * The command IDs used by the console plugin.
 */
var CommandIDs;
(function (CommandIDs) {
    CommandIDs.create = 'kernel-output:create';
    CommandIDs.execute = 'kernel-output:execute';
})(CommandIDs || (CommandIDs = {}));
/**
 * Activate the JupyterLab extension.
 *
 * @param app Jupyter Front End
 * @param palette Jupyter Commands Palette
 * @param rendermime Jupyter Render Mime Registry
 * @param translator Jupyter Translator
 * @param launcher [optional] Jupyter Launcher
 */
function activate(app, palette, rendermime, translator, launcher) {
    const manager = app.serviceManager;
    const { commands, shell } = app;
    const category = 'Extension Examples';
    const trans = translator.load('jupyterlab');
    let panel;
    /**
     * Creates a example panel.
     *
     * @returns The panel
     */
    async function createPanel() {
        panel = new ExamplePanel(manager, rendermime, translator);
        shell.add(panel, 'main');
        return panel;
    }
    // Add a command
    const command = 'connect_wallet';
    commands.addCommand(command, {
        label: 'connect wallet',
        caption: 'connect wallet',
        execute: (args) => {
            getAccount();
            console.log('accounts');
            console.log(accounts);
            // window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(`METAMASK EXTENSION LOADED.`);
        },
    });
    // Add a command
    const command2 = 'send_transaction';
    commands.addCommand(command2, {
        label: 'send transaction',
        caption: 'send transaction',
        execute: (args) => {
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
                .then((txHash) => console.log(txHash))
                .catch((error) => console.error);
            console.log(`METAMASK EXTENSION LOADED.`);
        },
    });
    // Add a command
    const command3 = 'ocean_transaction';
    commands.addCommand(command3, {
        label: 'ocean transaction',
        caption: 'ocean transaction',
        execute: (args) => {
            console.log(oceanTrial);
        },
    });
    // add commands to registry
    commands.addCommand(CommandIDs.create, {
        label: trans.__('Open the Kernel Output Panel'),
        caption: trans.__('Open the Kernel Output Panel'),
        execute: createPanel,
    });
    commands.addCommand(CommandIDs.execute, {
        label: trans.__('Contact Kernel and Execute Code'),
        caption: trans.__('Contact Kernel and Execute Code'),
        execute: async () => {
            // Create the panel if it does not exist
            if (!panel) {
                await createPanel();
            }
            // Prompt the user about the statement to be executed
            const input = await InputDialog.getText({
                title: trans.__('Code to execute'),
                okLabel: trans.__('Execute'),
                placeholder: trans.__('Statement to execute'),
            });
            // Execute the statement
            if (input.button.accept) {
                const code = input.value;
                panel.execute(code);
            }
        },
    });
    // add items in command palette and menu
    [CommandIDs.create, CommandIDs.execute].forEach((command) => {
        palette.addItem({ command, category });
    });
    // Add launcher
    if (launcher) {
        launcher.add({
            command: CommandIDs.create,
            category: category,
        });
    }
}
// const provider = new ethers.providers.Web3Provider(window.ethereum)
// const signer = provider.getSigner()
// signer.connect(provider)
// console.log(signer)
let accounts = [];
async function getAccount() {
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
}
/**
 * Initialization data for the main menu example.
 */
const extension = {
    id: 'metamask_extension',
    autoStart: true,
    optional: [ILauncher],
    requires: [ICommandPalette, IRenderMimeRegistry, ITranslator],
    activate: activate
};
export default extension;
