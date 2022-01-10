import { SessionManager } from '@jupyterlab/services';
import { ISerializers, WidgetModel } from '@jupyter-widgets/base';
import { ILabShell, JupyterFrontEnd } from '@jupyterlab/application';
/**
 * The model for a Session Manager
 */
export declare class SessionManagerModel extends WidgetModel {
    /**
     * The default attributes.
     */
    defaults(): any;
    /**
     * Initialize a SessionManagerModel instance.
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
     * get sessionContext from a given widget instance
     *
     * @param widget widget tracked by app.shell._track (FocusTracker)
     */
    private _getSessionContext;
    /**
     * Handle focus change in JLab
     *
     * NOTE: currentChange fires on two situations that we are concerned about here:
     * 1. when user focuses on a widget in browser, which the `change.newValue` will
     *  be the current Widget
     * 2. when user executes a code in console/notebook, where the `changed.newValue` will be null since
     *  we lost focus due to execution.
     * To solve this problem, we interrogate `this._tracker.currentWidget` directly.
     * We also added a simple fencing to reduce the number of Comm sync calls between Python/JS
     */
    private _currentChanged;
    /**
     * Send the list of sessions to the backend.
     */
    private _sendSessions;
    /**
     * send current session to backend
     */
    private _sendCurrent;
    static serializers: ISerializers;
    static model_name: string;
    static model_module: any;
    static model_module_version: any;
    static view_name: string;
    static view_module: string;
    static view_module_version: any;
    private _current_session;
    private _sessions;
    static sessions: SessionManager;
    private _shell;
    private _labShell;
    static shell: JupyterFrontEnd.IShell;
    static labShell: ILabShell | null;
}
