import React, { Component } from "react";
import Register from "./presenter";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      errors: {}
    };
  }

  render() {
    return (
      <Register
        {...this.state}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    };
    console.log(user);
  };
}
