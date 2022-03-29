// Copyright (c) ipylab contributors
// Distributed under the terms of the Modified BSD License.
import { VBoxView } from "@jupyter-widgets/controls";
import { SplitPanel } from "@lumino/widgets";
import $ from "jquery";
import { PanelModel } from "./panel";
import { MODULE_NAME, MODULE_VERSION } from "../version";
/**
 * A Lumino widget for split panels.
 */
class JupyterLuminoSplitPanelWidget extends SplitPanel {
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
export class SplitPanelModel extends PanelModel {
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
SplitPanelModel.model_module = MODULE_NAME;
SplitPanelModel.model_module_version = MODULE_VERSION;
SplitPanelModel.view_name = "SplitPanelView";
SplitPanelModel.view_module = MODULE_NAME;
SplitPanelModel.view_module_name = MODULE_VERSION;
/**
 * The view for a split panel.
 */
export class SplitPanelView extends VBoxView {
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
    this.$el = $(this.pWidget.node);
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
