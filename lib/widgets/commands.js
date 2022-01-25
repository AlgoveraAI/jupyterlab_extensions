// Copyright (c) ipylab contributors
// Distributed under the terms of the Modified BSD License.
import { ObservableMap } from "@jupyterlab/observables";
import { WidgetModel } from "@jupyter-widgets/base";
import { ArrayExt } from "@lumino/algorithm";
import { MODULE_NAME, MODULE_VERSION } from "../version";
/**
 * The model for a command registry.
 */
export class CommandRegistryModel extends WidgetModel {
  /**
   * The default attributes.
   */
  defaults() {
    return Object.assign(Object.assign({}, super.defaults()), {
      _model_name: CommandRegistryModel.model_name,
      _model_module: CommandRegistryModel.model_module,
      _model_module_version: CommandRegistryModel.model_module_version,
      _command_list: [],
      _commands: [],
    });
  }
  /**
   * Initialize a CommandRegistryModel instance.
   *
   * @param attributes The base attributes.
   * @param options The initialization options.
   */
  initialize(attributes, options) {
    this._commands = CommandRegistryModel.commands;
    super.initialize(attributes, options);
    this.on("msg:custom", this._onMessage.bind(this));
    this.on("comm_live_update", () => {
      if (this.comm_live) {
        return;
      }
      Private.customCommands.values().forEach((command) => command.dispose());
      this._sendCommandList();
    });
    // restore existing commands
    const commands = this.get("_commands");
    commands.forEach((command) => this._addCommand(command));
    this._sendCommandList();
  }
  /**
   * Handle a custom message from the backend.
   *
   * @param msg The message to handle.
   */
  _onMessage(msg) {
    switch (msg.func) {
      case "execute":
        this._execute(msg.payload);
        break;
      case "addCommand": {
        this._addCommand(msg.payload);
        // keep track of the commands
        const commands = this.get("_commands");
        this.set("_commands", commands.concat(msg.payload));
        this.save_changes();
        break;
      }
      case "removeCommand":
        this._removeCommand(msg.payload);
        break;
      default:
        break;
    }
  }
  /**
   * Send the list of commands to the backend.
   */
  _sendCommandList() {
    this._commands.notifyCommandChanged();
    this.set("_command_list", this._commands.listCommands());
    this.save_changes();
  }
  /**
   * Execute a command
   *
   * @param bundle The command bundle.
   */
  _execute(bundle) {
    const { id, args } = bundle;
    void this._commands.execute(id, args);
  }
  /**
   * Add a new command to the command registry.
   *
   * @param options The command options.
   */
  _addCommand(options) {
    const { id, caption, label, iconClass } = options;
    if (this._commands.hasCommand(id)) {
      Private.customCommands.get(id).dispose();
    }
    const commandEnabled = (command) => {
      return !command.isDisposed && !!this.comm && this.comm_live;
    };
    const command = this._commands.addCommand(id, {
      caption,
      label,
      iconClass,
      execute: () => {
        if (!this.comm_live) {
          command.dispose();
          return;
        }
        this.send({ event: "execute", id }, {});
      },
      isEnabled: () => commandEnabled(command),
      isVisible: () => commandEnabled(command),
    });
    Private.customCommands.set(id, command);
    this._sendCommandList();
  }
  /**
   * Remove a command from the command registry.
   *
   * @param bundle The command bundle.
   */
  _removeCommand(bundle) {
    const { id } = bundle;
    if (Private.customCommands.has(id)) {
      Private.customCommands.get(id).dispose();
    }
    const commands = this.get("_commands").slice();
    ArrayExt.removeAllWhere(commands, (w) => w.id === id);
    this.set("_commands", commands);
    this.save_changes();
    this._sendCommandList();
  }
}
CommandRegistryModel.serializers = Object.assign({}, WidgetModel.serializers);
CommandRegistryModel.model_name = "CommandRegistryModel";
CommandRegistryModel.model_module = MODULE_NAME;
CommandRegistryModel.model_module_version = MODULE_VERSION;
CommandRegistryModel.view_name = null;
CommandRegistryModel.view_module = null;
CommandRegistryModel.view_module_version = MODULE_VERSION;
/**
 * A namespace for private data
 */
var Private;
(function (Private) {
  Private.customCommands = new ObservableMap();
})(Private || (Private = {}));
//# sourceMappingURL=commands.js.map
