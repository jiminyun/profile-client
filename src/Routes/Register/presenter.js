import React from "react";
import Navigation from "components/Navigation";
import "./styles.scss";
import "../../shared/formStyles.scss";

const Register = props => {
  return (
    <div className="register-container">
      <div className="column_left">
        <h2>`// Sign up` </h2>
        <div className="form-container">
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={props.handleInputChange}
              value={props.name}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={props.handleInputChange}
              value={props.email}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={props.handleInputChange}
              value={props.password}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password_confirm"
              onChange={props.handleInputChange}
              value={props.password_confirm}
            />
            <button type="submit" className="button">
              Register User
            </button>
          </form>
        </div>
      </div>

      <div className="column_right">
        <Navigation />
      </div>
    </div>
  );
};

export default Register;
