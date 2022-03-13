import * as React from "react";
import { Widget } from "@lumino/widgets";
import { ReactWidget } from "@jupyterlab/apputils";
class MyComponent extends React.Component {
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
        loaded: event.loaded,
        total: event.total,
      });
    };
    xhr.open("POST", "https://api.estuary.tech/content/add");
    xhr.setRequestHeader("Authorization", "Bearer REPLACE_ME_WITH_API_KEY");
    xhr.send(formData);
  }
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("input", {
        type: "file",
        onChange: this.upload.bind(this),
      }),
      React.createElement("br", null),
      React.createElement("pre", null, JSON.stringify(this.state, null, 1))
    );
  }
}
const myWidget = ReactWidget.create(React.createElement(MyComponent, null));
Widget.attach(myWidget, document.body);
//# sourceMappingURL=react.js.map
