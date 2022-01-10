import { JupyterFrontEnd } from '@jupyterlab/application';
import { ISerializers, WidgetModel } from '@jupyter-widgets/base';
/**
 * The model for a JupyterFrontEnd.
 */
export declare class JupyterFrontEndModel extends WidgetModel {
    /**
     * The default attributes.
     */
    defaults(): any;
    /**
     * Initialize a JupyterFrontEndModel instance.
     *
     * @param attributes The base attributes.
     * @param options The initialization options.
     */
    initialize(attributes: any, options: any): void;
    static serializers: ISerializers;
    static model_name: string;
    static model_module: any;
    static model_module_version: any;
    static view_name: string;
    static view_module: string;
    static view_module_version: any;
    private _app;
    static app: JupyterFrontEnd;
}
