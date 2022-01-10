import { ISerializers, WidgetModel } from '@jupyter-widgets/base';
import { CommandRegistry } from '@lumino/commands';
/**
 * The model for a command registry.
 */
export declare class CommandRegistryModel extends WidgetModel {
    /**
     * The default attributes.
     */
    defaults(): any;
    /**
     * Initialize a CommandRegistryModel instance.
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
     * Send the list of commands to the backend.
     */
    private _sendCommandList;
    /**
     * Execute a command
     *
     * @param bundle The command bundle.
     */
    private _execute;
    /**
     * Add a new command to the command registry.
     *
     * @param options The command options.
     */
    private _addCommand;
    /**
     * Remove a command from the command registry.
     *
     * @param bundle The command bundle.
     */
    private _removeCommand;
    static serializers: ISerializers;
    static model_name: string;
    static model_module: any;
    static model_module_version: any;
    static view_name: string;
    static view_module: string;
    static view_module_version: any;
    private _commands;
    static commands: CommandRegistry;
}
