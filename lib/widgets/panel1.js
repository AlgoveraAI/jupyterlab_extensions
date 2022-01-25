import { SessionContext, sessionContextDialogs } from "@jupyterlab/apputils";
import { OutputAreaModel, SimplifiedOutputArea } from "@jupyterlab/outputarea";
import { nullTranslator } from "@jupyterlab/translation";
import { StackedPanel } from "@lumino/widgets";
/**
 * The class name added to the example panel.
 */
const PANEL_CLASS = "jp-RovaPanel";
/**
 * A panel with the ability to add other children.
 */
export class ExamplePanel extends StackedPanel {
  constructor(manager, rendermime, translator) {
    super();
    this._translator = translator || nullTranslator;
    this._trans = this._translator.load("jupyterlab");
    this.addClass(PANEL_CLASS);
    this.id = "kernel-output-panel";
    this.title.label = this._trans.__("Kernel Output Example View");
    this.title.closable = true;
    this._sessionContext = new SessionContext({
      sessionManager: manager.sessions,
      specsManager: manager.kernelspecs,
      name: "Kernel Output",
    });
    this._outputareamodel = new OutputAreaModel();
    this._outputarea = new SimplifiedOutputArea({
      model: this._outputareamodel,
      rendermime: rendermime,
    });
    this.addWidget(this._outputarea);
    void this._sessionContext
      .initialize()
      .then(async (value) => {
        if (value) {
          await sessionContextDialogs.selectKernel(this._sessionContext);
        }
      })
      .catch((reason) => {
        console.error(
          `Failed to initialize the session in ExamplePanel.\n${reason}`
        );
      });
  }
  get session() {
    return this._sessionContext;
  }
  dispose() {
    this._sessionContext.dispose();
    super.dispose();
  }
  execute(code) {
    SimplifiedOutputArea.execute(code, this._outputarea, this._sessionContext)
      .then((msg) => {
        console.log(msg);
      })
      .catch((reason) => console.error(reason));
  }
  onCloseRequest(msg) {
    super.onCloseRequest(msg);
    this.dispose();
  }
}
//# sourceMappingURL=panel1.js.map
