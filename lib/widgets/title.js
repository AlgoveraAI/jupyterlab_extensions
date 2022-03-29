// Copyright (c) ipylab contributors
// Distributed under the terms of the Modified BSD License.
import { WidgetModel } from "@jupyter-widgets/base";
import { MODULE_NAME, MODULE_VERSION } from "../version";
/**
 * The model for a title widget.
 */
export class TitleModel extends WidgetModel {
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
TitleModel.model_module = MODULE_NAME;
TitleModel.model_module_version = MODULE_VERSION;
TitleModel.view_name = null;
TitleModel.view_module = null;
TitleModel.view_module_version = MODULE_VERSION;
//# sourceMappingURL=title.js.map
