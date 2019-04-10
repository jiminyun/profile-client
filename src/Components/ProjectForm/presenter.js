import React from "react";
import PropTypes from "prop-types";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { UPLOAD_URL } from "routes/const";
import "../../shared/formStyles.scss";

const ProjectForm = props => {
  return (
    <div className="form-container">
      <form
        onSubmit={props.handleSubmit}
        method="post"
        encType="multipart/form-data"
      >
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
          name="detail_a"
          value={props.detail_a}
          onChange={props.handleInputChange}
        />
        detail_b{" "}
        <textarea
          name="detail_b"
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
        <div>
          react
          <input
            type="checkbox"
            id="react"
            name="usedTechs"
            value="react"
            onChange={props.handleInputChange}
          />
          mongodb
          <input
            type="checkbox"
            id="mongodb"
            name="usedTechs"
            value="mongodb"
            onChange={props.handleInputChange}
          />
          PostgreSQL
          <input
            type="checkbox"
            id="aws"
            name="usedTechs"
            value="postgresql"
            onChange={props.handleInputChange}
          />
          Django
          <input
            type="checkbox"
            id="aws"
            name="usedTechs"
            value="django"
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
          graphql
          <input
            type="checkbox"
            id="graphql"
            name="usedTechs"
            value="graphql"
            onChange={props.handleInputChange}
          />
          prisma
          <input
            type="checkbox"
            id="prisma"
            name="usedTechs"
            value="prisma"
            onChange={props.handleInputChange}
          />
          nodejs
          <input
            type="checkbox"
            id="nodejs"
            name="usedTechs"
            value="nodejs"
            onChange={props.handleInputChange}
          />
          redux
          <input
            type="checkbox"
            id="redux"
            name="usedTechs"
            value="redux"
            onChange={props.handleInputChange}
          />
          sass
          <input
            type="checkbox"
            id="sass"
            name="usedTechs"
            value="sass"
            onChange={props.handleInputChange}
          />
          styled components
          <input
            type="checkbox"
            id="styled-components"
            name="usedTechs"
            value="styled-components"
            onChange={props.handleInputChange}
          />
          graphql
          <input
            type="checkbox"
            id="graphql"
            name="usedTechs"
            value="graphql"
            onChange={props.handleInputChange}
          />
          vanila js
          <input
            type="checkbox"
            id="js"
            name="usedTechs"
            value="js"
            onChange={props.handleInputChange}
          />{" "}
          es6
          <input
            type="checkbox"
            id="js"
            name="usedTechs"
            value="es6"
            onChange={props.handleInputChange}
          />{" "}
          pug
          <input
            type="checkbox"
            id="redux"
            name="usedTechs"
            value="pug"
            onChange={props.handleInputChange}
          />
          aws
          <input
            type="checkbox"
            id="aws"
            name="usedTechs"
            value="aws"
            onChange={props.handleInputChange}
          />
          s3
          <input
            type="checkbox"
            id="aws"
            name="usedTechs"
            value="s3"
            onChange={props.handleInputChange}
          />
          heroku
          <input
            type="checkbox"
            id="aws"
            name="usedTechs"
            value="heroku"
            onChange={props.handleInputChange}
          />
          netlify
          <input
            type="checkbox"
            id="aws"
            name="usedTechs"
            value="netlify"
            onChange={props.handleInputChange}
          />
        </div>
        <FilePond
          files={props.files}
          allowMultiple={true}
          maxFiles={3}
          server={UPLOAD_URL}
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
  detail_a: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default ProjectForm;
