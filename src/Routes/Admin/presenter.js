import React from "react";
import ProjectForm from "components/ProjectForm";
import Navigation from "components/Navigation";
import "./styles.scss";
const AdminPresenter = () => {
  return (
    <div className="admin-container">
      <div className="column_left">
        <h2>`// Regist Project` </h2>
        <ProjectForm />
      </div>
      <div className="column_right">
        <Navigation />
        <h2>`// List` </h2>
      </div>
    </div>
  );
};

export default AdminPresenter;
