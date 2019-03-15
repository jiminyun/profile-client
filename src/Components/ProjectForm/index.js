import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as projectAction } from "redux/modules/projects";

const mapStateToProps = (state, ownProps) => {
  const {
    projects: { projectToEdit }
  } = state;
  return {
    projectToEdit
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveProject: (title, filePath, description, status) => {
      dispatch(projectAction.saveProject(title, filePath, description, status));
    },
    updateProject: (id, title, filePath, description, status) => {
      dispatch(
        projectAction.updateProject(id, title, filePath, description, status)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
