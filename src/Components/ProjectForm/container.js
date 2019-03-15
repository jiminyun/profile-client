import React from "react";
import Presenter from "./presenter";

export default class extends React.Component {
  state = {
    filePath: "",
    title: "",
    description: "",
    status: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.projectToEdit) {
      this.setState({
        title: nextProps.projectToEdit.title,
        description: nextProps.projectToEdit.description,
        filePath: nextProps.projectToEdit.filePath,
        status: nextProps.projectToEdit.status
      });
    }
  }

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
    const { saveProject, projectToEdit, updateProject } = this.props;
    event.preventDefault();
    console.log("submit");

    if (!projectToEdit) {
      saveProject(title, filePath, description, status);
    } else {
      updateProject(projectToEdit._id, title, filePath, description, status);
    }
  };
}
