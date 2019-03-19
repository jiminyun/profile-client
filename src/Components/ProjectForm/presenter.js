import React from "react";
import PropTypes from "prop-types";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

import "../../shared/formStyles.scss";

const ProjectForm = props => {
  return (
    <div className="form-container">
      <form
        onSubmit={props.handleSubmit}
        method="post"
        enctype="multipart/form-data"
      >
        * title{" "}
        <input
          className="text-input"
          name="title"
          type="text"
          value={props.title}
          onChange={props.handleInputChange}
        />
        <div>
          react
          <input
            type="checkbox"
            id="react"
            name="usedTechs"
            value="react"
            onChange={props.handleInputChange}
          />
          monogo
          <input
            type="checkbox"
            id="mongo"
            name="usedTechs"
            value="monogo"
            onChange={props.handleInputChange}
          />
          express
          <input
            type="checkbox"
            id="express"
            name="usedTechs"
            value="express"
            onChange={props.handleInputChange}
          />
        </div>
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
        status
        <input
          className="text-input"
          name="status"
          type="text"
          value={props.status}
          onChange={props.handleInputChange}
        />
        <FilePond
          files={props.files}
          allowMultiple={true}
          maxFiles={3}
          server="http://localhost:4000/uploads/image"
          onprocessfile={(error, file) =>
            props.handleFile(file.serverId, file.fileType)
          }
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
