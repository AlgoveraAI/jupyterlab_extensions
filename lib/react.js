import { ReactWidget } from "@jupyterlab/apputils";
import React from "react";
/**
 * React component for Estuary.
 *
 * @returns The React component
 */
class EstuaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: "",
      file: {},
      total: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ api: event.target.value });
  }
  handleSubmit(event) {
    alert("An API Key was submitted: " + this.state.api);
    event.preventDefault();
  }
  upload(e) {
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
        file: event.loaded,
        total: event.total,
      });
    };
    xhr.open("POST", "https://shuttle-4.estuary.tech/content/add");
    xhr.setRequestHeader("Authorization", `Bearer ${this.state.api}`);
    xhr.send(formData);
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "label",
          null,
          "API Key:",
          React.createElement("input", {
            type: "text",
            value: this.state.api,
            onChange: this.handleChange,
          })
        ),
        React.createElement("input", { type: "submit", value: "Submit" })
      ),
      React.createElement("br", null),
      React.createElement("input", {
        type: "file",
        onChange: this.upload.bind(this),
      }),
      React.createElement("br", null),
      React.createElement("pre", null, JSON.stringify(this.state.api, null, 1))
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
  render() {
    return React.createElement(EstuaryComponent, null);
  }
}
//# sourceMappingURL=react.js.map
