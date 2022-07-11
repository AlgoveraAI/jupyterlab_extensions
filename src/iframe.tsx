import { ReactWidget } from "@jupyterlab/apputils";

import React from "react";

interface IState {
  call: {
    api: string;
    file?: any;
    total?: any;
  };
}

/**
 * React component for Estuary.
 *
 * @returns The React component
 */
class IFrameComponent extends React.Component<{}, IState["call"]> {
  constructor(props: any) {
    super(props);
    this.state = {
      api: "",
      file: {},
      total: {},
    };
  }

  render() {
    return (
      <React.Fragment>
        <iframe
          style={{ width: "100%", height: "640px" }}
          src="https://lit-estuary-storage.herokuapp.com/example.html"
        ></iframe>
      </React.Fragment>
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

  render(): JSX.Element {
    return <IFrameComponent />;
  }
}
