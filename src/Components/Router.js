import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "routes/Home";
import Admin from "routes/Admin";
import Blog from "routes/Blog";
import Project from "routes/Project";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/projects" exact component={Project} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
