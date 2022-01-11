"use strict";
(self["webpackChunk_jupyterlab_examples_main_menu"] = self["webpackChunk_jupyterlab_examples_main_menu"] || []).push([["lib_index_js"],{

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
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel */ "./lib/panel.js");





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
        panel = new _panel__WEBPACK_IMPORTED_MODULE_4__.ExamplePanel(manager, rendermime, translator);
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
                        to: '0x8b8115a4b5B97f59B57DC8d5c3BbaCb16140f785',
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


/***/ })

}]);
//# sourceMappingURL=lib_index_js.32488ff561f9f8a3febe.js.map