// Copyright (c) ipylab contributors
// Distributed under the terms of the Modified BSD License.
import { ILabShell, } from '@jupyterlab/application';
import { ICommandPalette } from '@jupyterlab/apputils';
import { IJupyterWidgetRegistry } from '@jupyter-widgets/base';
import * as widgetExports from './widget';
import { MODULE_NAME, MODULE_VERSION } from './version';
const EXTENSION_ID = 'ipylab:plugin';
/**
 * The default plugin.
 */
const extension = {
    id: EXTENSION_ID,
    autoStart: true,
    requires: [IJupyterWidgetRegistry],
    optional: [ICommandPalette, ILabShell],
    activate: (app, registry, palette, labShell) => {
        // add globals
        widgetExports.JupyterFrontEndModel.app = app;
        widgetExports.ShellModel.shell = app.shell;
        widgetExports.ShellModel.labShell = labShell;
        widgetExports.CommandRegistryModel.commands = app.commands;
        widgetExports.CommandPaletteModel.palette = palette;
        widgetExports.SessionManagerModel.sessions = app.serviceManager.sessions;
        widgetExports.SessionManagerModel.shell = app.shell;
        widgetExports.SessionManagerModel.labShell = labShell;
        registry.registerWidget({
            name: MODULE_NAME,
            version: MODULE_VERSION,
            exports: widgetExports,
        });
    },
};
export default extension;
//# sourceMappingURL=plugin.js.map