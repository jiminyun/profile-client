import React from "react";
import "./styles.scss";

const Projects = props => {
  const { projects, hasErrored, isLoading } = props;

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
        <button className="btn-edit">Edit</button>
      </div>
    );
  };

  const List = props => {
    const projects = props.projects;
    return projects.map(pjt => <ListItem key={pjt._id} title={pjt.title} />);
  };

  return (
    <div className="projects-container">
      <div className="warpper">
        <List projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
