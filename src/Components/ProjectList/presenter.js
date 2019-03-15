import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Projects = props => {
  const { projects, hasErrored, isLoading, setEditClick } = props;
  console.log(props);

  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (isLoading) {
    return <p>Loading…</p>;
  }

  const ListItem = props => {
    return (
      <div className="item">
        {props.title}
        <button className="btn-del">Delete</button>
        <button
          className="btn-edit"
          onClick={() => props.setEditClick(props.project)}
          //onClick={props.setEditClick(props.project)}
        >
          Edit
        </button>
      </div>
    );
  };

  const List = props => {
    const { projects, setEditClick } = props;
    return projects.map(pjt => (
      <ListItem
        key={pjt._id}
        title={pjt.title}
        project={pjt}
        setEditClick={setEditClick}
      />
    ));
  };

  return (
    <div className="projects-container">
      <div className="warpper">
        <List projects={projects} setEditClick={setEditClick} />
      </div>
    </div>
  );
};

export default Projects;
