import React from "react";
import "./styles.scss";

const Loading = props => (
  <div className="container">
    <img
      src={require("../../assets/loading.png")}
      className="spinner"
      alt="loading"
    />
  </div>
);

export default Loading;
