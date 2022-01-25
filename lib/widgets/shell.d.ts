import { JupyterFrontEnd, ILabShell } from "@jupyterlab/application";
import { ISerializers, WidgetModel } from "@jupyter-widgets/base";
/**
 * The model for a shell.
 */
export declare class ShellModel extends WidgetModel {
  /**
   * The default attributes.
   */
  defaults(): any;
  /**
   * Initialize a ShellModel instance.
   *
   * @param attributes The base attributes.
   * @param options The initialization options.
   */
  initialize(attributes: any, options: any): void;
  /**
   * Add a widget to the application shell
   *
   * @param payload The payload to add
   */
  private _add;
  /**
   * Handle a custom message from the backend.
   *
   * @param msg The message to handle.
   */
  private _onMessage;
  static serializers: ISerializers;
  static model_name: string;
  static model_module: any;
  static model_module_version: any;
  static view_name: string;
  static view_module: string;
  static view_module_version: any;
  private _shell;
  private _labShell;
  static shell: JupyterFrontEnd.IShell;
  static labShell: ILabShell;
}
