export default iframe_extension;
export { activate as _activate };
declare namespace iframe_extension {
  export { activate };
  export const autoStart: boolean;
  export const id: string;
  export const requires: import("@lumino/coreutils").Token<ICommandPalette>[];
}
declare function activate(app: any, palette: any): Promise<void>;
import { ICommandPalette } from "@jupyterlab/apputils/lib/commandpalette";
