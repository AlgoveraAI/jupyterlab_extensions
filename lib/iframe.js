import { ReactWidget } from "@jupyterlab/apputils";
import React from "react";
/**
 * React component for Estuary.
 *
 * @returns The React component
 */
class IFrameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: "",
      file: {},
      total: {},
    };
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("iframe", {
        style: { width: "100%", height: "640px" },
        src: "https://lit-estuary-storage.herokuapp.com/example.html",
      })
    );
  }
}
/**
 *  Lumino Widget that wraps the Component.
 */
export class IFrameWidget extends ReactWidget {
  /*
   * Constructs a new IFrameWidget.
   */
  constructor() {
    super();
    this.addClass("jp-ReactWidget");
  }
  render() {
    return React.createElement(IFrameComponent, null);
  }
}
//# sourceMappingURL=iframe.js.map
