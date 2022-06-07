"use strict";
(self["webpackChunkalgovera"] = self["webpackChunkalgovera"] || []).push([
  ["lib_index_js"],
  {
    /***/ "./lib/index.js":
      /*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ MODULE_NAME: () =>
            /* reexport safe */ _version__WEBPACK_IMPORTED_MODULE_0__.MODULE_NAME,
          /* harmony export */ MODULE_VERSION: () =>
            /* reexport safe */ _version__WEBPACK_IMPORTED_MODULE_0__.MODULE_VERSION,
          /* harmony export */ CommandPaletteModel: () =>
            /* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_1__.CommandPaletteModel,
          /* harmony export */ CommandRegistryModel: () =>
            /* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_1__.CommandRegistryModel,
          /* harmony export */ JupyterFrontEndModel: () =>
            /* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_1__.JupyterFrontEndModel,
          /* harmony export */ PanelModel: () =>
            /* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_1__.PanelModel,
          /* harmony export */ SessionManagerModel: () =>
            /* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_1__.SessionManagerModel,
          /* harmony export */ ShellModel: () =>
            /* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_1__.ShellModel,
          /* harmony export */ SplitPanelModel: () =>
            /* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_1__.SplitPanelModel,
          /* harmony export */ SplitPanelView: () =>
            /* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_1__.SplitPanelView,
          /* harmony export */ TitleModel: () =>
            /* reexport safe */ _widget__WEBPACK_IMPORTED_MODULE_1__.TitleModel,
          /* harmony export */ EstuaryWidget: () =>
            /* reexport safe */ _react__WEBPACK_IMPORTED_MODULE_2__.EstuaryWidget,
          /* harmony export */
        });
        /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./version */ "./lib/version.js");
        /* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./widget */ "./lib/widget.js");
        /* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./react */ "./lib/react.js");
        // Copyright (c) ipylab contributors
        // Distributed under the terms of the Modified BSD License.

        //# sourceMappingURL=index.js.map

        /***/
      },

    /***/ "./lib/react.js":
      /*!**********************!*\
  !*** ./lib/react.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ EstuaryWidget: () => /* binding */ EstuaryWidget,
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
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! react */ "webpack/sharing/consume/default/react"
          );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );

        /**
         * React component for Estuary.
         *
         * @returns The React component
         */
        class EstuaryComponent extends react__WEBPACK_IMPORTED_MODULE_1___default()
          .Component {
          constructor(props) {
            super(props);
            this.state = {
              api: "",
              file: {},
              total: {},
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }
          handleChange(event) {
            this.setState({ api: event.target.value });
          }
          handleSubmit(event) {
            alert("An API Key was submitted: " + this.state.api);
            event.preventDefault();
          }
          upload(e) {
            e.persist();
            console.log(e.target.files);
            const formData = new FormData();
            formData.append("data", e.target.files[0]);
            // NOTE
            // This example uses XMLHttpRequest() instead of fetch
            // because we want to show progress. But you can use
            // fetch in this example if you like.
            const xhr = new XMLHttpRequest();
            xhr.upload.onprogress = (event) => {
              this.setState({
                file: event.loaded,
                total: event.total,
              });
            };
            xhr.open("POST", "https://shuttle-4.estuary.tech/content/add");
            xhr.setRequestHeader("Authorization", `Bearer ${this.state.api}`);
            xhr.send(formData);
          }
          render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              react__WEBPACK_IMPORTED_MODULE_1___default().Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                "form",
                { onSubmit: this.handleSubmit },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  "label",
                  null,
                  "API Key:",
                  react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    "input",
                    {
                      type: "text",
                      value: this.state.api,
                      onChange: this.handleChange,
                    }
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  "input",
                  { type: "submit", value: "Submit" }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                "br",
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                "input",
                { type: "file", onChange: this.upload.bind(this) }
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                "br",
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                "pre",
                null,
                JSON.stringify(this.state.api, null, 1)
              )
            );
          }
        }
        /**
         *  Lumino Widget that wraps a EstuaryComponent.
         */
        class EstuaryWidget extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ReactWidget {
          /**
           * Constructs a new EstuaryWidget.
           */
          constructor() {
            super();
            this.addClass("jp-ReactWidget");
          }
          render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              EstuaryComponent,
              null
            );
          }
        }
        //# sourceMappingURL=react.js.map

        /***/
      },
  },
]);
//# sourceMappingURL=lib_index_js.eef684a0bb7e3c78fa78.js.map
