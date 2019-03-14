import React from "react";
import Presenter from "./presenter";

export default class extends React.Component {
  state = {
    filePath: "",
    title: "",
    description: "",
    status: ""
  };

  render() {
    const { filePath, title, description, status } = this.state;
    return (
      <Presenter
        filePath={filePath}
        title={title}
        description={description}
        status={status}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    const { title, filePath, description, status } = this.state;
    event.preventDefault();
    console.log("submit");
  };
}
