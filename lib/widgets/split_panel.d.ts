import { VBoxView } from "@jupyter-widgets/controls";
import { PanelModel } from "./panel";
/**
 * The model for a split panel.
 */
export declare class SplitPanelModel extends PanelModel {
  /**
   * The default attributes.
   */
  defaults(): any;
  static model_name: string;
  static model_module: any;
  static model_module_version: any;
  static view_name: string;
  static view_module: any;
  static view_module_name: any;
}
/**
 * The view for a split panel.
 */
export declare class SplitPanelView extends VBoxView {
  /**
   * Create the widget and return the DOM element.
   *
   * @param tagName the tag name
   */
  _createElement(tagName: string): HTMLElement;
  /**
   * Set the DOM element.
   *
   * @param el The element.
   */
  _setElement(el: HTMLElement): void;
  /**
   * Initialize a SplitPanelView instance.
   *
   * @param parameters The view parameters.
   */
  initialize(parameters: any): void;
  /**
   * Render the view.
   */
  render(): Promise<void>;
}
