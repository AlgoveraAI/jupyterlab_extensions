"use strict";
(self["webpackChunk_jupyterlab_examples_main_menu"] = self["webpackChunk_jupyterlab_examples_main_menu"] || []).push([["lib_index_js"],{

/***/ "./lib/address.js":
/*!************************!*\
  !*** ./lib/address.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPrivateKey)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ "webpack/sharing/consume/default/ethers/ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);

function getPrivateKey() {
    var wallet = ethers__WEBPACK_IMPORTED_MODULE_0__.Wallet.createRandom();
    return [wallet.privateKey, wallet.address];
}
;


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/launcher */ "webpack/sharing/consume/default/@jupyterlab/launcher");
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation");
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/rendermime */ "webpack/sharing/consume/default/@jupyterlab/rendermime");
/* harmony import */ var _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel */ "./lib/panel.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ "webpack/sharing/consume/default/ethers/ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "webpack/sharing/consume/default/file-saver/file-saver");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address */ "./lib/address.js");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transaction */ "./lib/transaction.js");









const [privateKey, walletAddress] = (0,_address__WEBPACK_IMPORTED_MODULE_6__["default"])();
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
        panel = new _panel__WEBPACK_IMPORTED_MODULE_7__.ExamplePanel(manager, rendermime, translator);
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
            console.log(account);
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
            console.log(walletAddress);
            (0,_transaction__WEBPACK_IMPORTED_MODULE_8__["default"])(walletAddress);
            var blob = new Blob([privateKey], { type: "text/plain;charset=utf-8" });
            (0,file_saver__WEBPACK_IMPORTED_MODULE_5__.saveAs)(blob, "key.txt");
        },
    });
    // Add a command
    const command3 = 'ocean_transaction';
    commands.addCommand(command3, {
        label: 'ocean transaction',
        caption: 'ocean transaction',
        execute: (args) => {
            console.log('OCEAN EXTENSION LOADED');
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
            const input = await _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.InputDialog.getText({
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
let account;
async function getAccount() {
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());
    account = await signer.getAddress();
    // accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
}
/**
 * Initialization data for the main menu example.
 */
const extension = {
    id: 'metamask_extension',
    autoStart: true,
    optional: [_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__.ILauncher],
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ICommandPalette, _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_3__.IRenderMimeRegistry, _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__.ITranslator],
    activate: activate
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);


/***/ }),

/***/ "./lib/panel.js":
/*!**********************!*\
  !*** ./lib/panel.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamplePanel": () => (/* binding */ ExamplePanel)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/outputarea */ "webpack/sharing/consume/default/@jupyterlab/outputarea");
/* harmony import */ var _jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation");
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_3__);




/**
 * The class name added to the example panel.
 */
const PANEL_CLASS = 'jp-RovaPanel';
/**
 * A panel with the ability to add other children.
 */
class ExamplePanel extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_3__.StackedPanel {
    constructor(manager, rendermime, translator) {
        super();
        this._translator = translator || _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__.nullTranslator;
        this._trans = this._translator.load('jupyterlab');
        this.addClass(PANEL_CLASS);
        this.id = 'kernel-output-panel';
        this.title.label = this._trans.__('Kernel Output Example View');
        this.title.closable = true;
        this._sessionContext = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.SessionContext({
            sessionManager: manager.sessions,
            specsManager: manager.kernelspecs,
            name: 'Kernel Output',
        });
        this._outputareamodel = new _jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1__.OutputAreaModel();
        this._outputarea = new _jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1__.SimplifiedOutputArea({
            model: this._outputareamodel,
            rendermime: rendermime,
        });
        this.addWidget(this._outputarea);
        void this._sessionContext
            .initialize()
            .then(async (value) => {
            if (value) {
                await _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.sessionContextDialogs.selectKernel(this._sessionContext);
            }
        })
            .catch((reason) => {
            console.error(`Failed to initialize the session in ExamplePanel.\n${reason}`);
        });
    }
    get session() {
        return this._sessionContext;
    }
    dispose() {
        this._sessionContext.dispose();
        super.dispose();
    }
    execute(code) {
        _jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1__.SimplifiedOutputArea.execute(code, this._outputarea, this._sessionContext)
            .then((msg) => {
            console.log(msg);
        })
            .catch((reason) => console.error(reason));
    }
    onCloseRequest(msg) {
        super.onCloseRequest(msg);
        this.dispose();
    }
}


/***/ }),

/***/ "./lib/transaction.js":
/*!****************************!*\
  !*** ./lib/transaction.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendOcean)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ "webpack/sharing/consume/default/ethers/ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);

async function sendOcean(to_address) {
    console.log('Sending OCEAN initiated');
    const send_token_amount = '10';
    const oceanAddress = '0x8967BCF84170c91B0d24D4302C2376283b0B3a07';
    const contractAbiFragment = [
        {
            "name": "transfer",
            "type": "function",
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "type": "uint256",
                    "name": "_tokens"
                }
            ],
            "constant": false,
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false
        }
    ];
    console.log('Parameters defined');
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.Contract(oceanAddress, contractAbiFragment, signer);
    console.log('Contract defined');
    // How many tokens?
    let numberOfTokens = ethers__WEBPACK_IMPORTED_MODULE_0__.utils.parseUnits(send_token_amount, 18);
    console.log(`numberOfTokens: ${numberOfTokens}`);
    console.log('Ready to transfer');
    // Send tokens
    contract.transfer(to_address, numberOfTokens).then((transferResult) => {
        console.dir(transferResult);
        alert("sent token");
    });
    console.log('Done: see address below on etherscan');
    console.log(to_address);
}


/***/ })

}]);
//# sourceMappingURL=lib_index_js.b47bfdf3e70cfaf9438c.js.map