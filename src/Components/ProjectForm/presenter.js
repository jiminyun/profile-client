import React from "react";
import PropTypes from "prop-types";
import "../../shared/formStyles.scss";

const ProjectForm = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit} method="post">
        image{" "}
        <input
          className="text-input"
          name="filePath"
          type="text"
          value={props.filePath}
          onChange={props.handleInputChange}
        />
        title{" "}
        <input
          className="text-input"
          name="title"
          type="text"
          value={props.title}
          onChange={props.handleInputChange}
        />
        description{" "}
        <textarea
          name="description"
          value={props.description}
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
        <input className="button" type="submit" />
      </form>
    </div>
  );
};

ProjectForm.propTypes = {
  filePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default ProjectForm;
