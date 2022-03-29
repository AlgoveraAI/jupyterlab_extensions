import { ReactWidget } from "@jupyterlab/apputils";

import React from "react";

/**
 * React component for Estuary.
 *
 * @returns The React component
 */
class EstuaryComponent extends React.Component {
  upload(e: any) {
    e.persist();
    console.log(e.target.files);

    const formData = new FormData();
    formData.append("data", e.target.files[0]);

    // NOTE
    // This example uses XMLHttpRequest() instead of fetch
    // because we want to show progress. But you can use
    // fetch in this example if you like.
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      this.setState({
        loaded: event.loaded,
        total: event.total,
      });
    };

    xhr.open("POST", "https://shuttle-4.estuary.tech/content/add");
    xhr.setRequestHeader("Authorization", "Bearer REPLACE_WITH_API_KEY");
    xhr.send(formData);
  }

  render() {
    return (
      <React.Fragment>
        <input type="file" onChange={this.upload.bind(this)} />
        <br />
        <pre>{JSON.stringify(this.state, null, 1)}</pre>
      </React.Fragment>
    );
  }
}

/**
 *  Lumino Widget that wraps the EstuaryComponent.
 */
export class EstuaryWidget extends ReactWidget {
  /**
   * Constructs a new EstuaryWidget.
   */
  constructor() {
    super();
    this.addClass("jp-ReactWidget");
  }

  render(): JSX.Element {
    return <EstuaryComponent />;
  }
}
