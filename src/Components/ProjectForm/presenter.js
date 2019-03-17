import React from "react";
import PropTypes from "prop-types";
import "../../shared/formStyles.scss";

const ProjectForm = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit} method="post">
        * title{" "}
        <input
          className="text-input"
          name="title"
          type="text"
          value={props.title}
          onChange={props.handleInputChange}
        />
        git_link{" "}
        <input
          className="text-input"
          name="git_link"
          type="text"
          value={props.git_link}
          onChange={props.handleInputChange}
        />
        description{" "}
        <textarea
          name="description"
          value={props.description}
          onChange={props.handleInputChange}
        />
        detail_a{" "}
        <textarea
          name="description_a"
          value={props.detail_a}
          onChange={props.handleInputChange}
        />
        detail_b{" "}
        <textarea
          name="description_b"
          value={props.detail_b}
          onChange={props.handleInputChange}
        />
        category{" "}
        <input
          className="text-input"
          name="category"
          type="text"
          value={props.category}
          onChange={props.handleInputChange}
        />
        usedTechs{" "}
        <input
          className="text-input"
          name="usedTechs"
          type="text"
          value={props.usedTechs}
          onChange={props.handleInputChange}
        />
        status
        <input
          className="text-input"
          name="status"
          type="text"
          value={props.status}
          onChange={props.handleInputChange}
        />
        image{" "}
        <input
          className="text-input"
          name="image"
          type="file"
          value={props.image}
          onChange={props.handleInputChange}
        />
        video{" "}
        <input
          className="text-input"
          name="video"
          type="file"
          value={props.video}
          onChange={props.handleInputChange}
        />
        <input className="button" type="submit" />
      </form>
    </div>
  );
};

ProjectForm.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description_a: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default ProjectForm;
