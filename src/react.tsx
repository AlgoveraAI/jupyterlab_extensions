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
class EstuaryComponent extends React.Component<{}, IState["call"]> {
  constructor(props: any) {
    super(props);
    this.state = {
      api: "",
      file: {},
      total: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ api: event.target.value });
  }

  handleSubmit(event: any) {
    alert("An API Key was submitted: " + this.state.api);
    event.preventDefault();
  }

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

    xhr.upload.onprogress = (event: any) => {
      this.setState({
        file: event.loaded,
        total: event.total,
      });
    };

    xhr.open("POST", "https://shuttle-4.estuary.tech/content/add");
    xhr.setRequestHeader("Authorization", `Bearer ${this.state.api}`);
    xhr.send(formData);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            API Key:
            <input
              type="text"
              value={this.state.api}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br></br>
        <input type="file" onChange={this.upload.bind(this)} />
        <br />
        <pre>{JSON.stringify(this.state.api, null, 1)}</pre>
      </React.Fragment>
    );
  }
}

/**
 *  Lumino Widget that wraps a EstuaryComponent.
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
