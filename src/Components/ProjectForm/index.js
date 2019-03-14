import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as projectAction } from "redux/modules/projects";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveProject: (title, filePath, description, status) => {
      dispatch(projectAction.saveProject(title, filePath, description, status));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
