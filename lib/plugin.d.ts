import { JupyterFrontEndPlugin } from "@jupyterlab/application";
declare global {
  interface Window {
    ethereum: any;
  }
}
declare const privateKey: string;
export { privateKey };
/**
 * Initialization data for the main menu example.
 */
declare const extension: JupyterFrontEndPlugin<void>;
export default extension;
