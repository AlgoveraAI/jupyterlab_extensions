import { ICommandPalette } from "@jupyterlab/apputils";
import { ISerializers, WidgetModel } from "@jupyter-widgets/base";
/**
 * The model for a command palette.
 */
export declare class CommandPaletteModel extends WidgetModel {
  /**
   * The default attributes.
   */
  defaults(): any;
  /**
   * Initialize a CommandPaletteModel instance.
   *
   * @param attributes The base attributes.
   * @param options The initialization options.
   */
  initialize(attributes: any, options: any): void;
  /**
   * Handle a custom message from the backend.
   *
   * @param msg The message to handle.
   */
  private _onMessage;
  /**
   * Add a new item to the command palette.
   *
   * @param options The item options.
   */
  private _addItem;
  static serializers: ISerializers;
  static model_name: string;
  static model_module: any;
  static model_module_version: any;
  static view_name: string;
  static view_module: string;
  static view_module_version: any;
  private _palette;
  static palette: ICommandPalette;
}
