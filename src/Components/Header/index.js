import React from "react";
import "./styles.scss";

const header = () => (
  <header>
    <div className="header-container">
      <div className="photo-header">
        <img src={require("assets/me.jpg")} alt="profile_image" />
      </div>
      <h1>
        <img src={require("assets/react.png")} width="50px" alt="react" />{" "}
        HELLO,{" "}
        <img src={require("assets/graphql.png")} width="50px" alt="react" />
      </h1>
      <h2>
        MY NAME IS <span>JIMIN</span>
        <sup>YUN</sup> AND FULL STACK WEB DEVELOPER
      </h2>
      <div className="line">&nbsp;</div>
    </div>
  </header>
);

export default header;
