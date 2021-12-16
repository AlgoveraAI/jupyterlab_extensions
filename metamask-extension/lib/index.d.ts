import { JupyterFrontEndPlugin } from '@jupyterlab/application';
declare global {
    interface Window {
        ethereum: any;
    }
}
/**
 * Initialization data for the main menu example.
 */
declare const extension: JupyterFrontEndPlugin<void>;
export default extension;
