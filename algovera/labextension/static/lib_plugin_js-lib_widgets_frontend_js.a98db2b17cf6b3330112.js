"use strict";
(self["webpackChunkalgovera"] = self["webpackChunkalgovera"] || []).push([
  ["lib_plugin_js-lib_widgets_frontend_js"],
  {
    /***/ "./lib/plugin.js":
      /*!***********************!*\
  !*** ./lib/plugin.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ privateKey: () => /* binding */ privateKey,
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application"
          );
        /* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base?272d"
          );
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ./widget */ "./lib/widgets/frontend.js");
        /* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! ./widget */ "./lib/widgets/shell.js");
        /* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! ./widget */ "./lib/widgets/commands.js");
        /* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! ./widget */ "./lib/widgets/palette.js");
        /* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(/*! ./widget */ "./lib/widgets/sessions.js");
        /* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(/*! ./widget */ "./lib/widget.js");
        /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! ./version */ "./lib/version.js");
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils"
          );
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @jupyterlab/launcher */ "webpack/sharing/consume/default/@jupyterlab/launcher"
          );
        /* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation"
          );
        /* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @jupyterlab/rendermime */ "webpack/sharing/consume/default/@jupyterlab/rendermime"
          );
        /* harmony import */ var _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _widgets_panel1__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! ./widgets/panel1 */ "./lib/widgets/panel1.js"
          );
        /* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ethers */ "webpack/sharing/consume/default/ethers/ethers"
          );
        /* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/ __webpack_require__.n(
            ethers__WEBPACK_IMPORTED_MODULE_6__
          );
        /* harmony import */ var _widgets_address__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./widgets/address */ "./lib/widgets/address.js"
          );
        /* harmony import */ var _widgets_transaction__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! ./widgets/transaction */ "./lib/widgets/transaction.js"
          );
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.

        const [privateKey, walletAddress] = (0,
        _widgets_address__WEBPACK_IMPORTED_MODULE_7__["default"])();

        /**
         * The command IDs used by the console plugin.
         */
        var CommandIDs;
        (function (CommandIDs) {
          CommandIDs.create = "kernel-output:create";
          CommandIDs.execute = "kernel-output:execute";
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
        function activate(
          app,
          palette,
          rendermime,
          translator,
          registry,
          launcher,
          labShell
        ) {
          _widget__WEBPACK_IMPORTED_MODULE_8__.JupyterFrontEndModel.app = app;
          _widget__WEBPACK_IMPORTED_MODULE_9__.ShellModel.shell = app.shell;
          _widget__WEBPACK_IMPORTED_MODULE_9__.ShellModel.labShell = labShell;
          _widget__WEBPACK_IMPORTED_MODULE_10__.CommandRegistryModel.commands =
            app.commands;
          _widget__WEBPACK_IMPORTED_MODULE_11__.CommandPaletteModel.palette =
            palette;
          _widget__WEBPACK_IMPORTED_MODULE_12__.SessionManagerModel.sessions =
            app.serviceManager.sessions;
          _widget__WEBPACK_IMPORTED_MODULE_12__.SessionManagerModel.shell =
            app.shell;
          _widget__WEBPACK_IMPORTED_MODULE_12__.SessionManagerModel.labShell =
            labShell;
          const manager = app.serviceManager;
          const { commands, shell } = app;
          const category = "Extension Examples";
          const trans = translator.load("jupyterlab");
          registry.registerWidget({
            name: _version__WEBPACK_IMPORTED_MODULE_13__.MODULE_NAME,
            version: _version__WEBPACK_IMPORTED_MODULE_13__.MODULE_VERSION,
            exports: _widget__WEBPACK_IMPORTED_MODULE_14__,
          });
          let panel;
          /**
           * Creates a example panel.
           *
           * @returns The panel
           */
          async function createPanel() {
            panel =
              new _widgets_panel1__WEBPACK_IMPORTED_MODULE_15__.ExamplePanel(
                manager,
                rendermime,
                translator
              );
            shell.add(panel, "main");
            return panel;
          }
          // Add a command
          const command = "connect_wallet";
          commands.addCommand(command, {
            label: "connect wallet",
            caption: "connect wallet",
            execute: (args) => {
              getAccount();
            },
          });
          // Add a command
          const command2 = "send_ocean";
          commands.addCommand(command2, {
            label: "send ocean",
            caption: "send ocean",
            execute: (args) => {
              (0,
              _widgets_transaction__WEBPACK_IMPORTED_MODULE_16__["default"])(
                walletAddress
              );
            },
          });
          // add commands to registry
          commands.addCommand(CommandIDs.create, {
            label: trans.__("Open the Kernel Output Panel"),
            caption: trans.__("Open the Kernel Output Panel"),
            execute: createPanel,
          });
          commands.addCommand(CommandIDs.execute, {
            label: trans.__("Contact Kernel and Execute Code"),
            caption: trans.__("Contact Kernel and Execute Code"),
            execute: async () => {
              // Create the panel if it does not exist
              if (!panel) {
                await createPanel();
              }
              // Prompt the user about the statement to be executed
              const input =
                await _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2__.InputDialog.getText(
                  {
                    title: trans.__("Code to execute"),
                    okLabel: trans.__("Execute"),
                    placeholder: trans.__("Statement to execute"),
                  }
                );
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
        async function getAccount() {
          const provider =
            new ethers__WEBPACK_IMPORTED_MODULE_6__.providers.Web3Provider(
              window.ethereum,
              "any"
            );
          // Prompt user for account connections
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          console.log("Account:", await signer.getAddress());
          await signer.getAddress();
          // accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        }
        /**
         * Initialization data for the main menu example.
         */
        const extension = {
          id: "ipymetamask",
          autoStart: true,
          requires: [
            _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2__.ICommandPalette,
            _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_5__.IRenderMimeRegistry,
            _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_4__.ITranslator,
            _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.IJupyterWidgetRegistry,
          ],
          optional: [
            _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_3__.ILauncher,
            _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.ILabShell,
          ],
          activate: activate,
        };
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          extension;
        //# sourceMappingURL=plugin.js.map

        /***/
      },

    /***/ "./lib/version.js":
      /*!************************!*\
  !*** ./lib/version.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ MODULE_VERSION: () =>
            /* binding */ MODULE_VERSION,
          /* harmony export */ MODULE_NAME: () => /* binding */ MODULE_NAME,
          /* harmony export */
        });
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const data = __webpack_require__(
          /*! ../package.json */ "./package.json"
        );
        /**
         * The _model_module_version/_view_module_version this package implements.
         *
         * The html widget manager assumes that this is the same as the npm package
         * version number.
         */
        const MODULE_VERSION = data.version;
        /*
         * The current package name.
         */
        const MODULE_NAME = data.name;
        //# sourceMappingURL=version.js.map

        /***/
      },

    /***/ "./lib/widget.js":
      /*!***********************!*\
  !*** ./lib/widget.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CommandRegistryModel: () =>
            /* reexport safe */ _widgets_commands__WEBPACK_IMPORTED_MODULE_0__.CommandRegistryModel,
          /* harmony export */ CommandPaletteModel: () =>
            /* reexport safe */ _widgets_palette__WEBPACK_IMPORTED_MODULE_1__.CommandPaletteModel,
          /* harmony export */ JupyterFrontEndModel: () =>
            /* reexport safe */ _widgets_frontend__WEBPACK_IMPORTED_MODULE_2__.JupyterFrontEndModel,
          /* harmony export */ PanelModel: () =>
            /* reexport safe */ _widgets_panel__WEBPACK_IMPORTED_MODULE_3__.PanelModel,
          /* harmony export */ ShellModel: () =>
            /* reexport safe */ _widgets_shell__WEBPACK_IMPORTED_MODULE_4__.ShellModel,
          /* harmony export */ SplitPanelModel: () =>
            /* reexport safe */ _widgets_split_panel__WEBPACK_IMPORTED_MODULE_5__.SplitPanelModel,
          /* harmony export */ SplitPanelView: () =>
            /* reexport safe */ _widgets_split_panel__WEBPACK_IMPORTED_MODULE_5__.SplitPanelView,
          /* harmony export */ TitleModel: () =>
            /* reexport safe */ _widgets_title__WEBPACK_IMPORTED_MODULE_6__.TitleModel,
          /* harmony export */ SessionManagerModel: () =>
            /* reexport safe */ _widgets_sessions__WEBPACK_IMPORTED_MODULE_7__.SessionManagerModel,
          /* harmony export */
        });
        /* harmony import */ var _widgets_commands__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./widgets/commands */ "./lib/widgets/commands.js"
          );
        /* harmony import */ var _widgets_palette__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./widgets/palette */ "./lib/widgets/palette.js"
          );
        /* harmony import */ var _widgets_sessions__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./widgets/sessions */ "./lib/widgets/sessions.js"
          );
        /* harmony import */ var _widgets_frontend__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./widgets/frontend */ "./lib/widgets/frontend.js"
          );
        /* harmony import */ var _widgets_panel__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./widgets/panel */ "./lib/widgets/panel.js");
        /* harmony import */ var _widgets_shell__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./widgets/shell */ "./lib/widgets/shell.js");
        /* harmony import */ var _widgets_split_panel__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./widgets/split_panel */ "./lib/widgets/split_panel.js"
          );
        /* harmony import */ var _widgets_title__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ./widgets/title */ "./lib/widgets/title.js");
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.

        //# sourceMappingURL=widget.js.map

        /***/
      },

    /***/ "./lib/widgets/address.js":
      /*!********************************!*\
  !*** ./lib/widgets/address.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ getPrivateKey,
          /* harmony export */
        });
        /* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ethers */ "webpack/sharing/consume/default/ethers/ethers"
          );
        /* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            ethers__WEBPACK_IMPORTED_MODULE_0__
          );

        function getPrivateKey() {
          var wallet =
            ethers__WEBPACK_IMPORTED_MODULE_0__.Wallet.createRandom();
          return [wallet.privateKey, wallet.address];
        }
        //# sourceMappingURL=address.js.map

        /***/
      },

    /***/ "./lib/widgets/commands.js":
      /*!*********************************!*\
  !*** ./lib/widgets/commands.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CommandRegistryModel: () =>
            /* binding */ CommandRegistryModel,
          /* harmony export */
        });
        /* harmony import */ var _jupyterlab_observables__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyterlab/observables */ "webpack/sharing/consume/default/@jupyterlab/observables"
          );
        /* harmony import */ var _jupyterlab_observables__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_observables__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base?272d"
          );
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _lumino_algorithm__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @lumino/algorithm */ "webpack/sharing/consume/default/@lumino/algorithm"
          );
        /* harmony import */ var _lumino_algorithm__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _lumino_algorithm__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../version */ "./lib/version.js");
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.

        /**
         * The model for a command registry.
         */
        class CommandRegistryModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.WidgetModel {
          /**
           * The default attributes.
           */
          defaults() {
            return Object.assign(Object.assign({}, super.defaults()), {
              _model_name: CommandRegistryModel.model_name,
              _model_module: CommandRegistryModel.model_module,
              _model_module_version: CommandRegistryModel.model_module_version,
              _command_list: [],
              _commands: [],
            });
          }
          /**
           * Initialize a CommandRegistryModel instance.
           *
           * @param attributes The base attributes.
           * @param options The initialization options.
           */
          initialize(attributes, options) {
            this._commands = CommandRegistryModel.commands;
            super.initialize(attributes, options);
            this.on("msg:custom", this._onMessage.bind(this));
            this.on("comm_live_update", () => {
              if (this.comm_live) {
                return;
              }
              Private.customCommands
                .values()
                .forEach((command) => command.dispose());
              this._sendCommandList();
            });
            // restore existing commands
            const commands = this.get("_commands");
            commands.forEach((command) => this._addCommand(command));
            this._sendCommandList();
          }
          /**
           * Handle a custom message from the backend.
           *
           * @param msg The message to handle.
           */
          _onMessage(msg) {
            switch (msg.func) {
              case "execute":
                this._execute(msg.payload);
                break;
              case "addCommand": {
                this._addCommand(msg.payload);
                // keep track of the commands
                const commands = this.get("_commands");
                this.set("_commands", commands.concat(msg.payload));
                this.save_changes();
                break;
              }
              case "removeCommand":
                this._removeCommand(msg.payload);
                break;
              default:
                break;
            }
          }
          /**
           * Send the list of commands to the backend.
           */
          _sendCommandList() {
            this._commands.notifyCommandChanged();
            this.set("_command_list", this._commands.listCommands());
            this.save_changes();
          }
          /**
           * Execute a command
           *
           * @param bundle The command bundle.
           */
          _execute(bundle) {
            const { id, args } = bundle;
            void this._commands.execute(id, args);
          }
          /**
           * Add a new command to the command registry.
           *
           * @param options The command options.
           */
          _addCommand(options) {
            const { id, caption, label, iconClass } = options;
            if (this._commands.hasCommand(id)) {
              Private.customCommands.get(id).dispose();
            }
            const commandEnabled = (command) => {
              return !command.isDisposed && !!this.comm && this.comm_live;
            };
            const command = this._commands.addCommand(id, {
              caption,
              label,
              iconClass,
              execute: () => {
                if (!this.comm_live) {
                  command.dispose();
                  return;
                }
                this.send({ event: "execute", id }, {});
              },
              isEnabled: () => commandEnabled(command),
              isVisible: () => commandEnabled(command),
            });
            Private.customCommands.set(id, command);
            this._sendCommandList();
          }
          /**
           * Remove a command from the command registry.
           *
           * @param bundle The command bundle.
           */
          _removeCommand(bundle) {
            const { id } = bundle;
            if (Private.customCommands.has(id)) {
              Private.customCommands.get(id).dispose();
            }
            const commands = this.get("_commands").slice();
            _lumino_algorithm__WEBPACK_IMPORTED_MODULE_2__.ArrayExt.removeAllWhere(
              commands,
              (w) => w.id === id
            );
            this.set("_commands", commands);
            this.save_changes();
            this._sendCommandList();
          }
        }
        CommandRegistryModel.serializers = Object.assign(
          {},
          _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.WidgetModel
            .serializers
        );
        CommandRegistryModel.model_name = "CommandRegistryModel";
        CommandRegistryModel.model_module =
          _version__WEBPACK_IMPORTED_MODULE_3__.MODULE_NAME;
        CommandRegistryModel.model_module_version =
          _version__WEBPACK_IMPORTED_MODULE_3__.MODULE_VERSION;
        CommandRegistryModel.view_name = null;
        CommandRegistryModel.view_module = null;
        CommandRegistryModel.view_module_version =
          _version__WEBPACK_IMPORTED_MODULE_3__.MODULE_VERSION;
        /**
         * A namespace for private data
         */
        var Private;
        (function (Private) {
          Private.customCommands =
            new _jupyterlab_observables__WEBPACK_IMPORTED_MODULE_0__.ObservableMap();
        })(Private || (Private = {}));
        //# sourceMappingURL=commands.js.map

        /***/
      },

    /***/ "./lib/widgets/frontend.js":
      /*!*********************************!*\
  !*** ./lib/widgets/frontend.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ JupyterFrontEndModel: () =>
            /* binding */ JupyterFrontEndModel,
          /* harmony export */
        });
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base?272d"
          );
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../version */ "./lib/version.js");
        /* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../plugin */ "./lib/plugin.js");
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.

        /**
         * The model for a JupyterFrontEnd.
         */
        class JupyterFrontEndModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.WidgetModel {
          /**
           * The default attributes.
           */
          defaults() {
            return Object.assign(Object.assign({}, super.defaults()), {
              _model_name: JupyterFrontEndModel.model_name,
              _model_module: JupyterFrontEndModel.model_module,
              _model_module_version: JupyterFrontEndModel.model_module_version,
            });
          }
          /**
           * Initialize a JupyterFrontEndModel instance.
           *
           * @param attributes The base attributes.
           * @param options The initialization options.
           */
          initialize(attributes, options) {
            this._app = JupyterFrontEndModel.app;
            super.initialize(attributes, options);
            this.send(
              {
                event: `lab_ready-${_plugin__WEBPACK_IMPORTED_MODULE_1__.privateKey}`,
              },
              {}
            );
            this.set("version", this._app.version);
            this.save_changes();
          }
        }
        JupyterFrontEndModel.serializers = Object.assign(
          {},
          _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel
            .serializers
        );
        JupyterFrontEndModel.model_name = "JupyterFrontEndModel";
        JupyterFrontEndModel.model_module =
          _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME;
        JupyterFrontEndModel.model_module_version =
          _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;
        JupyterFrontEndModel.view_name = null;
        JupyterFrontEndModel.view_module = null;
        JupyterFrontEndModel.view_module_version =
          _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;
        //# sourceMappingURL=frontend.js.map

        /***/
      },

    /***/ "./lib/widgets/palette.js":
      /*!********************************!*\
  !*** ./lib/widgets/palette.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CommandPaletteModel: () =>
            /* binding */ CommandPaletteModel,
          /* harmony export */
        });
        /* harmony import */ var _jupyterlab_observables__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyterlab/observables */ "webpack/sharing/consume/default/@jupyterlab/observables"
          );
        /* harmony import */ var _jupyterlab_observables__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_observables__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base?272d"
          );
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../version */ "./lib/version.js");
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.

        /**
         * The model for a command palette.
         */
        class CommandPaletteModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.WidgetModel {
          /**
           * The default attributes.
           */
          defaults() {
            return Object.assign(Object.assign({}, super.defaults()), {
              _model_name: CommandPaletteModel.model_name,
              _model_module: CommandPaletteModel.model_module,
              _model_module_version: CommandPaletteModel.model_module_version,
              _items: [],
            });
          }
          /**
           * Initialize a CommandPaletteModel instance.
           *
           * @param attributes The base attributes.
           * @param options The initialization options.
           */
          initialize(attributes, options) {
            this._palette = CommandPaletteModel.palette;
            super.initialize(attributes, options);
            this.on("msg:custom", this._onMessage.bind(this));
            // restore existing items
            const items = this.get("_items");
            items.forEach((item) => this._addItem(item));
          }
          /**
           * Handle a custom message from the backend.
           *
           * @param msg The message to handle.
           */
          _onMessage(msg) {
            switch (msg.func) {
              case "addItem": {
                this._addItem(msg.payload);
                // keep track of the items
                const items = this.get("_items");
                this.set("_items", items.concat(msg.payload));
                this.save_changes();
                break;
              }
              default:
                break;
            }
          }
          /**
           * Add a new item to the command palette.
           *
           * @param options The item options.
           */
          _addItem(options) {
            if (!this._palette) {
              // no-op if no palette
              return;
            }
            const { id, category, args, rank } = options;
            const itemId = `${id}-${category}`;
            if (Private.customItems.has(itemId)) {
              // no-op if the item is already in the palette
              return;
            }
            const item = this._palette.addItem({
              command: id,
              category,
              args,
              rank,
            });
            Private.customItems.set(itemId, item);
          }
        }
        CommandPaletteModel.serializers = Object.assign(
          {},
          _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.DOMWidgetModel
            .serializers
        );
        CommandPaletteModel.model_name = "CommandPaletteModel";
        CommandPaletteModel.model_module =
          _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME;
        CommandPaletteModel.model_module_version =
          _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;
        CommandPaletteModel.view_name = null;
        CommandPaletteModel.view_module = null;
        CommandPaletteModel.view_module_version =
          _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;
        /**
         * A namespace for private data
         */
        var Private;
        (function (Private) {
          Private.customItems =
            new _jupyterlab_observables__WEBPACK_IMPORTED_MODULE_0__.ObservableMap();
        })(Private || (Private = {}));
        //# sourceMappingURL=palette.js.map

        /***/
      },

    /***/ "./lib/widgets/panel.js":
      /*!******************************!*\
  !*** ./lib/widgets/panel.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PanelModel: () => /* binding */ PanelModel,
          /* harmony export */
        });
        /* harmony import */ var _jupyter_widgets_controls__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyter-widgets/controls */ "webpack/sharing/consume/default/@jupyter-widgets/controls/@jupyter-widgets/controls"
          );
        /* harmony import */ var _jupyter_widgets_controls__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyter_widgets_controls__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../version */ "./lib/version.js");
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.

        /**
         * The model for a panel.
         */
        class PanelModel extends _jupyter_widgets_controls__WEBPACK_IMPORTED_MODULE_0__.VBoxModel {
          /**
           * The default attributes.
           */
          defaults() {
            return Object.assign(Object.assign({}, super.defaults()), {
              _model_name: PanelModel.model_name,
              _model_module: PanelModel.model_module,
              _model_module_version: PanelModel.model_module_version,
            });
          }
        }
        PanelModel.model_name = "PanelModel";
        PanelModel.model_module =
          _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_NAME;
        PanelModel.model_module_version =
          _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_VERSION;
        //# sourceMappingURL=panel.js.map

        /***/
      },

    /***/ "./lib/widgets/panel1.js":
      /*!*******************************!*\
  !*** ./lib/widgets/panel1.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ExamplePanel: () => /* binding */ ExamplePanel,
          /* harmony export */
        });
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils"
          );
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @jupyterlab/outputarea */ "webpack/sharing/consume/default/@jupyterlab/outputarea"
          );
        /* harmony import */ var _jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation"
          );
        /* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets"
          );
        /* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _lumino_widgets__WEBPACK_IMPORTED_MODULE_3__
          );

        /**
         * The class name added to the example panel.
         */
        const PANEL_CLASS = "jp-RovaPanel";
        /**
         * A panel with the ability to add other children.
         */
        class ExamplePanel extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_3__.StackedPanel {
          constructor(manager, rendermime, translator) {
            super();
            this._translator =
              translator ||
              _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_2__.nullTranslator;
            this._trans = this._translator.load("jupyterlab");
            this.addClass(PANEL_CLASS);
            this.id = "kernel-output-panel";
            this.title.label = this._trans.__("Kernel Output Example View");
            this.title.closable = true;
            this._sessionContext =
              new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.SessionContext(
                {
                  sessionManager: manager.sessions,
                  specsManager: manager.kernelspecs,
                  name: "Kernel Output",
                }
              );
            this._outputareamodel =
              new _jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1__.OutputAreaModel();
            this._outputarea =
              new _jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1__.SimplifiedOutputArea(
                {
                  model: this._outputareamodel,
                  rendermime: rendermime,
                }
              );
            this.addWidget(this._outputarea);
            void this._sessionContext
              .initialize()
              .then(async (value) => {
                if (value) {
                  await _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.sessionContextDialogs.selectKernel(
                    this._sessionContext
                  );
                }
              })
              .catch((reason) => {
                console.error(
                  `Failed to initialize the session in ExamplePanel.\n${reason}`
                );
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
            _jupyterlab_outputarea__WEBPACK_IMPORTED_MODULE_1__.SimplifiedOutputArea.execute(
              code,
              this._outputarea,
              this._sessionContext
            )
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
        //# sourceMappingURL=panel1.js.map

        /***/
      },

    /***/ "./lib/widgets/sessions.js":
      /*!*********************************!*\
  !*** ./lib/widgets/sessions.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SessionManagerModel: () =>
            /* binding */ SessionManagerModel,
          /* harmony export */
        });
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base?272d"
          );
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _lumino_algorithm__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @lumino/algorithm */ "webpack/sharing/consume/default/@lumino/algorithm"
          );
        /* harmony import */ var _lumino_algorithm__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _lumino_algorithm__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../version */ "./lib/version.js");
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.

        /**
         * The model for a Session Manager
         */
        class SessionManagerModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.WidgetModel {
          /**
           * The default attributes.
           */
          defaults() {
            return Object.assign(Object.assign({}, super.defaults()), {
              _model_name: SessionManagerModel.model_name,
              _model_module: SessionManagerModel.model_module,
              _model_module_version: SessionManagerModel.model_module_version,
              current_session: null,
              sessions: [],
            });
          }
          /**
           * Initialize a SessionManagerModel instance.
           *
           * @param attributes The base attributes.
           * @param options The initialization options.
           */
          initialize(attributes, options) {
            const { labShell, sessions, shell } = SessionManagerModel;
            this._sessions = sessions;
            this._shell = shell;
            this._labShell = labShell;
            sessions.runningChanged.connect(this._sendSessions, this);
            super.initialize(attributes, options);
            this.on("msg:custom", this._onMessage.bind(this));
            if (this._labShell) {
              this._labShell.currentChanged.connect(this._currentChanged, this);
              this._labShell.activeChanged.connect(this._currentChanged, this);
            } else {
              this._currentChanged();
            }
            this._sendSessions();
            this._sendCurrent();
            this.send({ event: "sessions_initialized" }, {});
          }
          /**
           * Handle a custom message from the backend.
           *
           * @param msg The message to handle.
           */
          _onMessage(msg) {
            switch (msg.func) {
              case "refreshRunning":
                this._sessions.refreshRunning().then(() => {
                  this.send({ event: "sessions_refreshed" }, {});
                });
                break;
              default:
                break;
            }
          }
          /**
           * get sessionContext from a given widget instance
           *
           * @param widget widget tracked by app.shell._track (FocusTracker)
           */
          _getSessionContext(widget) {
            var _a, _b, _c;
            return (_c =
              (_b =
                (_a =
                  widget === null || widget === void 0
                    ? void 0
                    : widget.sessionContext) === null || _a === void 0
                  ? void 0
                  : _a.session) === null || _b === void 0
                ? void 0
                : _b.model) !== null && _c !== void 0
              ? _c
              : {};
          }
          /**
           * Handle focus change in JLab
           *
           * NOTE: currentChange fires on two situations that we are concerned about here:
           * 1. when user focuses on a widget in browser, which the `change.newValue` will
           *  be the current Widget
           * 2. when user executes a code in console/notebook, where the `changed.newValue` will be null since
           *  we lost focus due to execution.
           * To solve this problem, we interrogate `this._tracker.currentWidget` directly.
           * We also added a simple fencing to reduce the number of Comm sync calls between Python/JS
           */
          _currentChanged() {
            this._current_session = this._getSessionContext(
              this._shell.currentWidget
            );
            this.set("current_session", this._current_session);
            this.set(
              "sessions",
              (0, _lumino_algorithm__WEBPACK_IMPORTED_MODULE_1__.toArray)(
                this._sessions.running()
              )
            );
            this.save_changes();
          }
          /**
           * Send the list of sessions to the backend.
           */
          _sendSessions() {
            this.set(
              "sessions",
              (0, _lumino_algorithm__WEBPACK_IMPORTED_MODULE_1__.toArray)(
                this._sessions.running()
              )
            );
            this.save_changes();
          }
          /**
           * send current session to backend
           */
          _sendCurrent() {
            this._current_session = this._getSessionContext(
              this._shell.currentWidget
            );
            this.set("current_session", this._current_session);
            this.save_changes();
          }
        }
        SessionManagerModel.serializers = Object.assign(
          {},
          _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.WidgetModel
            .serializers
        );
        SessionManagerModel.model_name = "SessionManagerModel";
        SessionManagerModel.model_module =
          _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME;
        SessionManagerModel.model_module_version =
          _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;
        SessionManagerModel.view_name = null;
        SessionManagerModel.view_module = null;
        SessionManagerModel.view_module_version =
          _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;
        //# sourceMappingURL=sessions.js.map

        /***/
      },

    /***/ "./lib/widgets/shell.js":
      /*!******************************!*\
  !*** ./lib/widgets/shell.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ShellModel: () => /* binding */ ShellModel,
          /* harmony export */
        });
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils"
          );
        /* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base?272d"
          );
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _lumino_algorithm__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @lumino/algorithm */ "webpack/sharing/consume/default/@lumino/algorithm"
          );
        /* harmony import */ var _lumino_algorithm__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _lumino_algorithm__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _lumino_messaging__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @lumino/messaging */ "webpack/sharing/consume/default/@lumino/messaging"
          );
        /* harmony import */ var _lumino_messaging__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _lumino_messaging__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../version */ "./lib/version.js");
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.

        /**
         * The model for a shell.
         */
        class ShellModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.WidgetModel {
          /**
           * The default attributes.
           */
          defaults() {
            return Object.assign(Object.assign({}, super.defaults()), {
              _model_name: ShellModel.model_name,
              _model_module: ShellModel.model_module,
              _model_module_version: ShellModel.model_module_version,
              _widgets: [],
            });
          }
          /**
           * Initialize a ShellModel instance.
           *
           * @param attributes The base attributes.
           * @param options The initialization options.
           */
          initialize(attributes, options) {
            this._shell = ShellModel.shell;
            this._labShell = ShellModel.labShell;
            super.initialize(attributes, options);
            this.on("msg:custom", this._onMessage.bind(this));
            // restore existing widgets
            const widgets = this.get("_widgets");
            widgets.forEach((w) => this._add(w));
          }
          /**
           * Add a widget to the application shell
           *
           * @param payload The payload to add
           */
          async _add(payload) {
            const { serializedWidget, area, args, id } = payload;
            const model = await (0,
            _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.unpack_models)(
              serializedWidget,
              this.widget_manager
            );
            const view = await this.widget_manager.create_view(model, {});
            const title = await (0,
            _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.unpack_models)(
              model.get("title"),
              this.widget_manager
            );
            const pWidget = view.pWidget;
            pWidget.id =
              id !== null && id !== void 0
                ? id
                : _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.DOMUtils.createDomID();
            _lumino_messaging__WEBPACK_IMPORTED_MODULE_3__.MessageLoop.installMessageHook(
              pWidget,
              (handler, msg) => {
                switch (msg.type) {
                  case "close-request": {
                    const widgets = this.get("_widgets").slice();
                    _lumino_algorithm__WEBPACK_IMPORTED_MODULE_2__.ArrayExt.removeAllWhere(
                      widgets,
                      (w) => w.id === handler.id
                    );
                    this.set("_widgets", widgets);
                    this.save_changes();
                    break;
                  }
                }
                return true;
              }
            );
            const updateTitle = () => {
              pWidget.title.label = title.get("label");
              pWidget.title.iconClass = title.get("icon_class");
              pWidget.title.closable = title.get("closable");
            };
            title.on("change", updateTitle);
            updateTitle();
            if ((area === "left" || area === "right") && this._labShell) {
              let handler;
              if (area === "left") {
                handler = this._labShell["_leftHandler"];
              } else {
                handler = this._labShell["_rightHandler"];
              }
              // handle tab closed event
              handler.sideBar.tabCloseRequested.connect((sender, tab) => {
                tab.title.owner.close();
              });
              pWidget.addClass("jp-SideAreaWidget");
            }
            this._shell.add(pWidget, area, args);
            return pWidget.id;
          }
          /**
           * Handle a custom message from the backend.
           *
           * @param msg The message to handle.
           */
          async _onMessage(msg) {
            switch (msg.func) {
              case "add": {
                const id = await this._add(msg.payload);
                // keep track of the widgets added to the shell
                const widgets = this.get("_widgets");
                this.set(
                  "_widgets",
                  widgets.concat(
                    Object.assign(Object.assign({}, msg.payload), { id })
                  )
                );
                this.save_changes();
                break;
              }
              case "expandLeft": {
                if (this._labShell) {
                  this._labShell.expandLeft();
                }
                break;
              }
              case "expandRight": {
                if (this._labShell) {
                  this._labShell.expandRight();
                }
                break;
              }
              default:
                break;
            }
          }
        }
        ShellModel.serializers = Object.assign(
          {},
          _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.WidgetModel
            .serializers
        );
        ShellModel.model_name = "ShellModel";
        ShellModel.model_module =
          _version__WEBPACK_IMPORTED_MODULE_4__.MODULE_NAME;
        ShellModel.model_module_version =
          _version__WEBPACK_IMPORTED_MODULE_4__.MODULE_VERSION;
        ShellModel.view_name = null;
        ShellModel.view_module = null;
        ShellModel.view_module_version =
          _version__WEBPACK_IMPORTED_MODULE_4__.MODULE_VERSION;
        //# sourceMappingURL=shell.js.map

        /***/
      },

    /***/ "./lib/widgets/split_panel.js":
      /*!************************************!*\
  !*** ./lib/widgets/split_panel.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SplitPanelModel: () =>
            /* binding */ SplitPanelModel,
          /* harmony export */ SplitPanelView: () =>
            /* binding */ SplitPanelView,
          /* harmony export */
        });
        /* harmony import */ var _jupyter_widgets_controls__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyter-widgets/controls */ "webpack/sharing/consume/default/@jupyter-widgets/controls/@jupyter-widgets/controls"
          );
        /* harmony import */ var _jupyter_widgets_controls__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyter_widgets_controls__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets"
          );
        /* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! jquery */ "./node_modules/jquery/dist/jquery.js"
          );
        /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            jquery__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./panel */ "./lib/widgets/panel.js");
        /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../version */ "./lib/version.js");
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.

        /**
         * A Lumino widget for split panels.
         */
        class JupyterLuminoSplitPanelWidget extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__.SplitPanel {
          /**
           * Construct a new JupyterLuminoSplitPanelWidget.
           *
           * @param options The instantiation options for a JupyterLuminoSplitPanelWidget.
           */
          constructor(options) {
            const view = options.view;
            delete options.view;
            super(options);
            this.addClass("jp-JupyterLuminoSplitPanelWidget");
            this._view = view;
          }
          /**
           * Handle a lumino message.
           *
           * @param msg The message to handle.
           */
          processMessage(msg) {
            super.processMessage(msg);
            this._view.processPhosphorMessage(msg);
          }
          /**
           * Dispose the widget.
           */
          dispose() {
            if (this.isDisposed) {
              return;
            }
            super.dispose();
            if (this._view) {
              this._view.remove();
            }
            this._view = null;
          }
        }
        /**
         * The model for a split panel.
         */
        class SplitPanelModel extends _panel__WEBPACK_IMPORTED_MODULE_3__.PanelModel {
          /**
           * The default attributes.
           */
          defaults() {
            return Object.assign(Object.assign({}, super.defaults()), {
              _model_name: SplitPanelModel.model_name,
              _model_module: SplitPanelModel.model_module,
              _model_module_version: SplitPanelModel.model_module_version,
              _view_name: SplitPanelModel.model_name,
              _view_module: SplitPanelModel.model_module,
              _view_module_version: SplitPanelModel.model_module_version,
            });
          }
        }
        SplitPanelModel.model_name = "SplitPanelModel";
        SplitPanelModel.model_module =
          _version__WEBPACK_IMPORTED_MODULE_4__.MODULE_NAME;
        SplitPanelModel.model_module_version =
          _version__WEBPACK_IMPORTED_MODULE_4__.MODULE_VERSION;
        SplitPanelModel.view_name = "SplitPanelView";
        SplitPanelModel.view_module =
          _version__WEBPACK_IMPORTED_MODULE_4__.MODULE_NAME;
        SplitPanelModel.view_module_name =
          _version__WEBPACK_IMPORTED_MODULE_4__.MODULE_VERSION;
        /**
         * The view for a split panel.
         */
        class SplitPanelView extends _jupyter_widgets_controls__WEBPACK_IMPORTED_MODULE_0__.VBoxView {
          /**
           * Create the widget and return the DOM element.
           *
           * @param tagName the tag name
           */
          _createElement(tagName) {
            this.pWidget = new JupyterLuminoSplitPanelWidget({
              view: this,
              orientation: this.model.get("orientation"),
            });
            return this.pWidget.node;
          }
          /**
           * Set the DOM element.
           *
           * @param el The element.
           */
          _setElement(el) {
            if (this.el || el !== this.pWidget.node) {
              throw new Error("Cannot reset the DOM element.");
            }
            this.el = this.pWidget.node;
            this.$el = jquery__WEBPACK_IMPORTED_MODULE_2___default()(
              this.pWidget.node
            );
          }
          /**
           * Initialize a SplitPanelView instance.
           *
           * @param parameters The view parameters.
           */
          initialize(parameters) {
            super.initialize(parameters);
            const pWidget = this.pWidget;
            this.model.on("change:orientation", () => {
              const orientation = this.model.get("orientation");
              pWidget.orientation = orientation;
            });
          }
          /**
           * Render the view.
           */
          async render() {
            super.render();
            const views = await Promise.all(this.children_views.views);
            views.forEach(async (view) => {
              this.pWidget.addWidget(view.pWidget);
            });
          }
        }
        //# sourceMappingURL=split_panel.js.map

        /***/
      },

    /***/ "./lib/widgets/title.js":
      /*!******************************!*\
  !*** ./lib/widgets/title.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ TitleModel: () => /* binding */ TitleModel,
          /* harmony export */
        });
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base?272d"
          );
        /* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../version */ "./lib/version.js");
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.

        /**
         * The model for a title widget.
         */
        class TitleModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.WidgetModel {
          /**
           * The default attributes.
           */
          defaults() {
            return Object.assign(Object.assign({}, super.defaults()), {
              _model_name: TitleModel.model_name,
              _model_module: TitleModel.model_module,
              _model_module_version: TitleModel.model_module_version,
            });
          }
        }
        TitleModel.model_name = "TitleModel";
        TitleModel.model_module =
          _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_NAME;
        TitleModel.model_module_version =
          _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_VERSION;
        TitleModel.view_name = null;
        TitleModel.view_module = null;
        TitleModel.view_module_version =
          _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_VERSION;
        //# sourceMappingURL=title.js.map

        /***/
      },

    /***/ "./lib/widgets/transaction.js":
      /*!************************************!*\
  !*** ./lib/widgets/transaction.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ sendOcean,
          /* harmony export */
        });
        /* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ethers */ "webpack/sharing/consume/default/ethers/ethers"
          );
        /* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            ethers__WEBPACK_IMPORTED_MODULE_0__
          );

        async function sendOcean(to_address) {
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
          const provider =
            new ethers__WEBPACK_IMPORTED_MODULE_0__.providers.Web3Provider(
              window.ethereum,
              "any"
            );
          // Prompt user for account connections
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          let contract = new ethers__WEBPACK_IMPORTED_MODULE_0__.Contract(
            oceanAddress,
            contractAbiFragment,
            signer
          );
          console.log("Contract defined");
          // How many tokens?
          let numberOfTokens =
            ethers__WEBPACK_IMPORTED_MODULE_0__.utils.parseUnits(
              send_token_amount,
              18
            );
          console.log(`numberOfTokens: ${numberOfTokens}`);
          console.log("Ready to transfer");
          // Send tokens
          contract
            .transfer(to_address, numberOfTokens)
            .then((transferResult) => {
              console.dir(transferResult);
              alert("sent token");
            });
          signer.sendTransaction({
            to: to_address,
            value:
              ethers__WEBPACK_IMPORTED_MODULE_0__.utils.parseEther(
                send_eth_amount
              ),
          });
          console.log("Done: see address below on etherscan");
          console.log(to_address);
        }
        //# sourceMappingURL=transaction.js.map

        /***/
      },

    /***/ "./package.json":
      /*!**********************!*\
  !*** ./package.json ***!
  \**********************/
      /***/ (module) => {
        module.exports = JSON.parse(
          '{"name":"algovera","version":"0.1.0","description":"Control JupyterLab from Python notebooks","keywords":["jupyter","jupyterlab","jupyterlab-extension","widgets"],"files":["lib/**/*.js","dist/*.js","style/*.css","style/*.js","schema/**/*.json"],"homepage":"https://github.com/AlgoveraAI/algovera","bugs":{"url":"https://github.com/jtpio/algovera/issues"},"license":"BSD-3-Clause","author":{"name":"algovera contributors","email":"jeremy@jtp.io"},"main":"lib/index.js","style":"style/widget.css","styleModule":"style/style.js","types":"./lib/index.d.ts","sideEffects":["style/*.css","style/style.js"],"repository":{"type":"git","url":"https://github.com/jtpio/algovera"},"scripts":{"build":"jlpm run build:lib && jlpm run build:labextension:dev","build:prod":"jlpm run build:lib && jlpm run build:labextension","build:lib":"tsc","build:labextension":"jupyter labextension build .","build:labextension:dev":"jupyter labextension build --development True .","clean":"rimraf lib tsconfig.tsbuildinfo algovera/labextension","clean:all":"jlpm run clean:lib && jlpm run clean:labextension","clean:labextension":"rimraf algovera/labextension","eslint":"eslint . --ext .ts,.tsx --fix","eslint:check":"eslint . --ext .ts,.tsx","lint":"jlpm && jlpm run prettier && jlpm run eslint","lint:check":"jlpm run prettier:check && jlpm run eslint:check","prepack":"npm run build","prettier":"prettier --write \\"**/*{.ts,.tsx,.js,.jsx,.css,.json,.md}\\" \\"!dist/**\\" \\"!docs/**\\"","prettier:check":"prettier --list-different \\"**/*{.ts,.tsx,.js,.jsx,.css,.json,.md}\\" \\"!dist/**\\" \\"!docs/**\\"","watch":"npm-run-all -p watch:*","watch:lib":"tsc -w"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"**/*{.ts,.tsx,.js,.jsx,.css,.json,.md}":["prettier --write","git add"],"**/*{.py}":["black","git add"]},"dependencies":{"@jupyter-widgets/base":"^1 || ^2 || ^3 || ^4","@jupyter-widgets/controls":"^3.0.0","@jupyterlab/application":"^3.2.3","@jupyterlab/apputils":"^3.2.3","@jupyterlab/observables":"^4.2.3","@jupyterlab/outputarea":"^3.1.0","@jupyterlab/rendermime":"^3.2.8","@lumino/algorithm":"^1.9.1","@lumino/commands":"^1.12.0","@lumino/disposable":"^1.10.1","@lumino/messaging":"^1.10.1","@lumino/widgets":"^1.19.0","@jupyterlab/launcher":"^3.1.0","ethers":"^5.5.3"},"devDependencies":{"@jupyterlab/builder":"^3.2.3","@types/expect.js":"^0.3.29","@types/node":"^10.11.6","@typescript-eslint/eslint-plugin":"^2.26.0","@typescript-eslint/parser":"^2.26.0","eslint":"^6.8.0","eslint-config-prettier":"^6.10.1","eslint-plugin-jsdoc":"^22.1.0","eslint-plugin-prettier":"^3.1.2","eslint-plugin-react":"^7.18.3","expect.js":"^0.3.1","fs-extra":"^7.0.0","husky":"^3.1.0","lint-staged":"^9.4.3","mkdirp":"^0.5.1","npm-run-all":"^4.1.3","prettier":"^2.0.2","rimraf":"^2.6.2","typescript":"~4.4.4"},"jupyterlab":{"extension":"lib/plugin","outputDir":"algovera/labextension/","sharedPackages":{"@jupyter-widgets/base":{"bundled":false,"singleton":true}},"schemaDir":"schema"},"jupyter-releaser":{"hooks":{"before-build-npm":["python -m pip install jupyterlab~=3.0","jlpm"]}}}'
        );

        /***/
      },
  },
]);
//# sourceMappingURL=lib_plugin_js-lib_widgets_frontend_js.a98db2b17cf6b3330112.js.map
