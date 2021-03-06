import React from "react";
import "./styles.scss";
const Video = props => {
  return (
    <>
      <div className="contact">
        <h2>`// Contact`</h2>
        <div className="sns">
          <a href="mailto:jiminyun7@gmail.com" target="blank">
            <i class="fab fa-mailchimp" />
          </a>

          <a href="https://github.com/jiminyun" target="blank">
            <i class="fab fa-github" />
          </a>
          {"     "}
          <a href="https://www.linkedin.com/in/jimin-yun/" target="blank">
            <i class="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div id="skills">
        <h2>`// Skill Set`</h2>
        <div className="skill">Nodejs</div>
        <div className="skill">Express</div>
        <div className="skill">Vanila Javascript</div>
        <div className="skill">MongoDB</div>
        <div className="skill">jQUERY</div>
        <div className="skill">PHP</div>
        <div className="skill">ASP.net</div>
        <div className="skill">React</div>
        <div className="skill">GraphQL</div>
        <div className="skill">Apollo</div>
        <div className="skill">Redux</div>
        <div className="skill">Scss</div>
        <div className="skill">CSS</div>
        <div className="skill">ES6</div>
        <div className="skill">Python Django API</div>
        <div className="skill">MySql</div>
        <div className="skill">MsSql</div>
      </div>
    </>
  );
};

export default Video;
