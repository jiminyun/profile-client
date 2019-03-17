import React from "react";
import Presenter from "./presenter";

export default class extends React.Component {
  state = {
    title: "title",
    git_link: "git_link",
    image: "",
    video: "",
    description: "description",
    detail_a: "deatil_a",
    detail_b: "detail_b",
    category: "category",
    status: "status",
    usedTechs: ["test", "test2", "test3"]
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.projectToEdit) {
      this.setState({
        title: nextProps.projectToEdit.title,
        git_link: nextProps.projectToEdit.git_link,
        image: nextProps.projectToEdit.image,
        video: nextProps.projectToEdit.video,
        description: nextProps.projectToEdit.description,
        detail_a: nextProps.projectToEdit.deatil_a,
        detail_b: nextProps.projectToEdit.detail_b,
        category: nextProps.projectToEdit.category,
        status: nextProps.projectToEdit.status,
        usedTechs: nextProps.projectToEdit.usedTechs
      });
    }
  }

  render() {
    const {
      title,
      git_link,
      image,
      video,
      description,
      detail_a,
      detail_b,
      category,
      status,
      usedTechs
    } = this.state;
    return (
      <Presenter
        title={title}
        git_link={git_link}
        image={image}
        video={video}
        description={description}
        detail_a={detail_a}
        detail_b={detail_b}
        category={category}
        status={status}
        usedTechs={usedTechs}
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
    //const { title, filePath, description, status } = this.state;
    const { saveProject, projectToEdit, updateProject } = this.props;
    event.preventDefault();
    console.log("submit");

    if (!projectToEdit) {
      saveProject(this.state);
    } else {
      updateProject(projectToEdit._id, this.state);
    }
    this._handleResetState();
  };

  _handleResetState = () => {
    this.setState({
      title: "",
      git_link: "",
      image: "",
      video: "",
      description: "",
      detail_a: "",
      detail_b: "",
      category: "",
      status: "",
      usedTechs: []
    });
  };
}
