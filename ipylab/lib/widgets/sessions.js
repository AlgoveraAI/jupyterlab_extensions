// Copyright (c) ipylab contributors
// Distributed under the terms of the Modified BSD License.
import { WidgetModel } from '@jupyter-widgets/base';
import { toArray } from '@lumino/algorithm';
import { MODULE_NAME, MODULE_VERSION } from '../version';
/**
 * The model for a Session Manager
 */
export class SessionManagerModel extends WidgetModel {
    /**
     * The default attributes.
     */
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: SessionManagerModel.model_name, _model_module: SessionManagerModel.model_module, _model_module_version: SessionManagerModel.model_module_version, current_session: null, sessions: [] });
    }
    /**
     * Initialize a SessionManagerModel instance.
     *
     * @param attributes The base attributes.
     * @param options The initialization options.
     */
    initialize(attributes, options) {
        const { labShell, sessions, shell } = SessionManagerModel;
        this._sessions = sessions;
        this._shell = shell;
        this._labShell = labShell;
        sessions.runningChanged.connect(this._sendSessions, this);
        super.initialize(attributes, options);
        this.on('msg:custom', this._onMessage.bind(this));
        if (this._labShell) {
            this._labShell.currentChanged.connect(this._currentChanged, this);
            this._labShell.activeChanged.connect(this._currentChanged, this);
        }
        else {
            this._currentChanged();
        }
        this._sendSessions();
        this._sendCurrent();
        this.send({ event: 'sessions_initialized' }, {});
    }
    /**
     * Handle a custom message from the backend.
     *
     * @param msg The message to handle.
     */
    _onMessage(msg) {
        switch (msg.func) {
            case 'refreshRunning':
                this._sessions.refreshRunning().then(() => {
                    this.send({ event: 'sessions_refreshed' }, {});
                });
                break;
            default:
                break;
        }
    }
    /**
     * get sessionContext from a given widget instance
     *
     * @param widget widget tracked by app.shell._track (FocusTracker)
     */
    _getSessionContext(widget) {
        var _a, _b, _c;
        return (_c = (_b = (_a = widget === null || widget === void 0 ? void 0 : widget.sessionContext) === null || _a === void 0 ? void 0 : _a.session) === null || _b === void 0 ? void 0 : _b.model) !== null && _c !== void 0 ? _c : {};
    }
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
    _currentChanged() {
        this._current_session = this._getSessionContext(this._shell.currentWidget);
        this.set('current_session', this._current_session);
        this.set('sessions', toArray(this._sessions.running()));
        this.save_changes();
    }
    /**
     * Send the list of sessions to the backend.
     */
    _sendSessions() {
        this.set('sessions', toArray(this._sessions.running()));
        this.save_changes();
    }
    /**
     * send current session to backend
     */
    _sendCurrent() {
        this._current_session = this._getSessionContext(this._shell.currentWidget);
        this.set('current_session', this._current_session);
        this.save_changes();
    }
}
SessionManagerModel.serializers = Object.assign({}, WidgetModel.serializers);
SessionManagerModel.model_name = 'SessionManagerModel';
SessionManagerModel.model_module = MODULE_NAME;
SessionManagerModel.model_module_version = MODULE_VERSION;
SessionManagerModel.view_name = null;
SessionManagerModel.view_module = null;
SessionManagerModel.view_module_version = MODULE_VERSION;
//# sourceMappingURL=sessions.js.map