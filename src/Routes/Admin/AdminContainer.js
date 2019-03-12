import React from "react";
import AdminPresenter from "./AdmingPresenter";

export default class extends React.Component {
  state = {
    loading: false
  };

  render() {
    return <AdminPresenter />;
  }
}
