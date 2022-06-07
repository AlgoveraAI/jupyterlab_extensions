// Copyright (c) ipylab contributors
// Distributed under the terms of the Modified BSD License.

import {
  JupyterFrontEndPlugin,
  JupyterFrontEnd,
  ILabShell,
} from "@jupyterlab/application";

import { IJupyterWidgetRegistry } from "@jupyter-widgets/base";

import * as widgetExports from "./widget";

import { MODULE_NAME, MODULE_VERSION } from "./version";

import { ICommandPalette, InputDialog } from "@jupyterlab/apputils";

import { ILauncher } from "@jupyterlab/launcher";

import { ITranslator } from "@jupyterlab/translation";

import { IRenderMimeRegistry } from "@jupyterlab/rendermime";
import { ExamplePanel } from "./widgets/panel1";
import * as ethers from "ethers";

import getPrivateKey from "./widgets/address";

import sendOcean from "./widgets/transaction";

import { MainAreaWidget } from "@jupyterlab/apputils";
import { reactIcon } from "@jupyterlab/ui-components";
import { IFrameWidget } from "./iframe";

declare global {
  interface Window {
    ethereum: any;
  }
}

const [privateKey, walletAddress] = getPrivateKey();
export { privateKey };

/**
 * The command IDs used by the console plugin.
 */
namespace CommandIDs {
  export const create = "kernel-output:create";

  export const execute = "kernel-output:execute";
}

/**
 * Activate the JupyterLab extension.
 *
 * @param app Jupyter Front End
 * @param palette Jupyter Commands Palette
 * @param rendermime Jupyter Render Mime Registry
 * @param translator Jupyter Translator
 * @param launcher [optional] Jupyter Launcher
 */

function activate(
  app: JupyterFrontEnd,
  palette: ICommandPalette,
  rendermime: IRenderMimeRegistry,
  translator: ITranslator,
  registry: IJupyterWidgetRegistry,
  launcher: ILauncher | null,
  labShell: ILabShell | null
): void {
  widgetExports.JupyterFrontEndModel.app = app;
  widgetExports.ShellModel.shell = app.shell;
  widgetExports.ShellModel.labShell = labShell;
  widgetExports.CommandRegistryModel.commands = app.commands;
  widgetExports.CommandPaletteModel.palette = palette;
  widgetExports.SessionManagerModel.sessions = app.serviceManager.sessions;
  widgetExports.SessionManagerModel.shell = app.shell;
  widgetExports.SessionManagerModel.labShell = labShell;

  const manager = app.serviceManager;
  const { commands, shell } = app;
  const category = "Algovera Extension";
  const trans = translator.load("jupyterlab");
  registry.registerWidget({
    name: MODULE_NAME,
    version: MODULE_VERSION,
    exports: widgetExports,
  });

  let panel: ExamplePanel;

  /**
   * Creates a example panel.
   *
   * @returns The panel
   */
  async function createPanel(): Promise<ExamplePanel> {
    panel = new ExamplePanel(manager, rendermime, translator);
    shell.add(panel, "main");
    return panel;
  }

  // Add a command
  const command = "connect_wallet";
  commands.addCommand(command, {
    label: "connect wallet",
    caption: "connect wallet",
    execute: (args: any) => {
      getAccount();
    },
  });

  // Add a command
  const command2 = "send_ocean";
  commands.addCommand(command2, {
    label: "send ocean",
    caption: "send ocean",
    execute: (args: any) => {
      sendOcean(walletAddress);
    },
  });

  const command4 = "save_file";
  commands.addCommand(command4, {
    caption: "Decentralized storage using Estuary",
    label: "Algovera Storage",
    icon: (args) => (args["isPalette"] ? null : "./style/algovera_logo"),
    execute: () => {
      const content = new IFrameWidget();
      const widget = new MainAreaWidget<IFrameWidget>({ content });
      widget.title.label = "Algovera";
      widget.title.icon = reactIcon;
      app.shell.add(widget, "main");
    },
  });

  // const command5 = "iframe";
  // commands.addCommand(command5, {
  //   caption: "Iframe-Lit Secured Storage",
  //   label: "Algovera Storage",
  //   icon: (args) => (args["isPalette"] ? null : reactIcon),
  //   execute: () => {
  //     const content = new iframe_extension();
  //     const widget = new MainAreaWidget<IFrameWidget>({ content });
  //     widget.title.label = "Algovera";
  //     widget.title.icon = reactIcon;
  //     app.shell.add(widget, "main");
  //   },
  // });

  // add commands to registry
  commands.addCommand(CommandIDs.create, {
    label: trans.__("Open the Kernel Output Panel"),
    caption: trans.__("Open the Kernel Output Panel"),
    execute: createPanel,
  });

  commands.addCommand(CommandIDs.execute, {
    label: trans.__("Contact Kernel and Execute Code"),
    caption: trans.__("Contact Kernel and Execute Code"),
    execute: async () => {
      // Create the panel if it does not exist
      if (!panel) {
        await createPanel();
      }
      // Prompt the user about the statement to be executed
      const input = await InputDialog.getText({
        title: trans.__("Code to execute"),
        okLabel: trans.__("Execute"),
        placeholder: trans.__("Statement to execute"),
      });
      // Execute the statement
      if (input.button.accept) {
        const code = input.value;
        panel.execute(code);
      }
    },
  });

  // add items in command palette and menu
  [CommandIDs.create, CommandIDs.execute].forEach((command) => {
    palette.addItem({ command, category });
  });

  // Add launcher
  if (launcher) {
    launcher.add({
      command: CommandIDs.create,
      category: category,
    });
  }
}

// const provider = new ethers.providers.Web3Provider(window.ethereum)
// const signer = provider.getSigner()
// signer.connect(provider)
// console.log(signer)
async function getAccount() {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  console.log("Account:", await signer.getAddress());
  await signer.getAddress();
  // accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
}

/**
 * Initialization data for the main menu example.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: "ipymetamask",
  autoStart: true,
  requires: [
    ICommandPalette,
    IRenderMimeRegistry,
    ITranslator,
    IJupyterWidgetRegistry,
  ],
  optional: [ILauncher, ILabShell],
  activate: activate,
};

export default extension;
