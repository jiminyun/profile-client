import React from "react";
import ProjectPresenter from "./ProjectPresenter";

export default class extends React.Component {
  state = {
    loading: false
  };

  render() {
    return <ProjectPresenter />;
  }
}
