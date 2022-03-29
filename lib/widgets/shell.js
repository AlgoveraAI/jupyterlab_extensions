// Copyright (c) ipylab contributors
// Distributed under the terms of the Modified BSD License.
import { DOMUtils } from "@jupyterlab/apputils";
import { WidgetModel, unpack_models } from "@jupyter-widgets/base";
import { ArrayExt } from "@lumino/algorithm";
import { MessageLoop } from "@lumino/messaging";
import { MODULE_NAME, MODULE_VERSION } from "../version";
/**
 * The model for a shell.
 */
export class ShellModel extends WidgetModel {
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
    const model = await unpack_models(serializedWidget, this.widget_manager);
    const view = await this.widget_manager.create_view(model, {});
    const title = await unpack_models(model.get("title"), this.widget_manager);
    const pWidget = view.pWidget;
    pWidget.id = id !== null && id !== void 0 ? id : DOMUtils.createDomID();
    MessageLoop.installMessageHook(pWidget, (handler, msg) => {
      switch (msg.type) {
        case "close-request": {
          const widgets = this.get("_widgets").slice();
          ArrayExt.removeAllWhere(widgets, (w) => w.id === handler.id);
          this.set("_widgets", widgets);
          this.save_changes();
          break;
        }
      }
      return true;
    });
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
          widgets.concat(Object.assign(Object.assign({}, msg.payload), { id }))
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
ShellModel.serializers = Object.assign({}, WidgetModel.serializers);
ShellModel.model_name = "ShellModel";
ShellModel.model_module = MODULE_NAME;
ShellModel.model_module_version = MODULE_VERSION;
ShellModel.view_name = null;
ShellModel.view_module = null;
ShellModel.view_module_version = MODULE_VERSION;
//# sourceMappingURL=shell.js.map
