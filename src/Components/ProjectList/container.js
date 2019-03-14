import React from "react";
import PropTypes from "prop-types";
import Projects from "./presenter";

export default class extends React.Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    projects: PropTypes.array,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool
  };

  componentDidMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  render() {
    const { projects, hasErrored, isLoading } = this.props;
    return (
      <Projects
        projects={projects}
        hasErrored={hasErrored}
        isLoading={isLoading}
      />
    );
  }
}
