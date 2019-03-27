import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "redux/actions/authentication";

const mapStateToProps = (state, ownProps) => {
  const { errors, auth } = state;
  return {
    errors,
    auth
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    registerUser: user => {
      dispatch(userAction.registerUser(user, ownProps.history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
