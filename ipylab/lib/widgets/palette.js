// Copyright (c) ipylab contributors
// Distributed under the terms of the Modified BSD License.
import { ObservableMap } from '@jupyterlab/observables';
import { DOMWidgetModel, WidgetModel, } from '@jupyter-widgets/base';
import { MODULE_NAME, MODULE_VERSION } from '../version';
/**
 * The model for a command palette.
 */
export class CommandPaletteModel extends WidgetModel {
    /**
     * The default attributes.
     */
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: CommandPaletteModel.model_name, _model_module: CommandPaletteModel.model_module, _model_module_version: CommandPaletteModel.model_module_version, _items: [] });
    }
    /**
     * Initialize a CommandPaletteModel instance.
     *
     * @param attributes The base attributes.
     * @param options The initialization options.
     */
    initialize(attributes, options) {
        this._palette = CommandPaletteModel.palette;
        super.initialize(attributes, options);
        this.on('msg:custom', this._onMessage.bind(this));
        // restore existing items
        const items = this.get('_items');
        items.forEach((item) => this._addItem(item));
    }
    /**
     * Handle a custom message from the backend.
     *
     * @param msg The message to handle.
     */
    _onMessage(msg) {
        switch (msg.func) {
            case 'addItem': {
                this._addItem(msg.payload);
                // keep track of the items
                const items = this.get('_items');
                this.set('_items', items.concat(msg.payload));
                this.save_changes();
                break;
            }
            default:
                break;
        }
    }
    /**
     * Add a new item to the command palette.
     *
     * @param options The item options.
     */
    _addItem(options) {
        if (!this._palette) {
            // no-op if no palette
            return;
        }
        const { id, category, args, rank } = options;
        const itemId = `${id}-${category}`;
        if (Private.customItems.has(itemId)) {
            // no-op if the item is already in the palette
            return;
        }
        const item = this._palette.addItem({ command: id, category, args, rank });
        Private.customItems.set(itemId, item);
    }
}
CommandPaletteModel.serializers = Object.assign({}, DOMWidgetModel.serializers);
CommandPaletteModel.model_name = 'CommandPaletteModel';
CommandPaletteModel.model_module = MODULE_NAME;
CommandPaletteModel.model_module_version = MODULE_VERSION;
CommandPaletteModel.view_name = null;
CommandPaletteModel.view_module = null;
CommandPaletteModel.view_module_version = MODULE_VERSION;
/**
 * A namespace for private data
 */
var Private;
(function (Private) {
    Private.customItems = new ObservableMap();
})(Private || (Private = {}));
//# sourceMappingURL=palette.js.map