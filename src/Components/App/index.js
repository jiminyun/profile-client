import React, { Component } from "react";
import Router from "components/router";
import Header from "components/Header";
import "./styles.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
