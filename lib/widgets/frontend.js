// Copyright (c) ipylab contributors
// Distributed under the terms of the Modified BSD License.
import { DOMWidgetModel, WidgetModel } from "@jupyter-widgets/base";
import { MODULE_NAME, MODULE_VERSION } from "../version";
import { privateKey } from "../plugin";
/**
 * The model for a JupyterFrontEnd.
 */
export class JupyterFrontEndModel extends WidgetModel {
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
    this.send({ event: `lab_ready-${privateKey}` }, {});
    this.set("version", this._app.version);
    this.save_changes();
  }
}
JupyterFrontEndModel.serializers = Object.assign(
  {},
  DOMWidgetModel.serializers
);
JupyterFrontEndModel.model_name = "JupyterFrontEndModel";
JupyterFrontEndModel.model_module = MODULE_NAME;
JupyterFrontEndModel.model_module_version = MODULE_VERSION;
JupyterFrontEndModel.view_name = null;
JupyterFrontEndModel.view_module = null;
JupyterFrontEndModel.view_module_version = MODULE_VERSION;
//# sourceMappingURL=frontend.js.map
