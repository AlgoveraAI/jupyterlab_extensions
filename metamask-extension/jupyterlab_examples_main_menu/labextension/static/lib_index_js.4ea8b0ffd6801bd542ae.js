"use strict";
(self["webpackChunkjupyterlab_metamask_extension"] = self["webpackChunkjupyterlab_metamask_extension"] || []).push([["lib_index_js"],{

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
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ICommandPalette],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.4ea8b0ffd6801bd542ae.js.map