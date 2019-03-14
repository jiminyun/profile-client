import React from "react";
import "./styles.scss";
import Navigation from "components/Navigation";

const BlogPresenter = () => {
  return (
    <div className="home-container">
      <div className="column_left">
        <h2>`// Blog` </h2>
        <div>Under Contruction</div>
      </div>
      <div className="column_right">
        <Navigation />
        <div id="contact">
          <h2>`// Contact`</h2>
          <div class="tel"> 핸폰 647 - 456 -3502</div>
          <div class="tel"> 이메일 jiminyun7@gmail.com</div>
          <div class="tel"> 아이콘링크 link-in, Git-hub</div>
        </div>
        <div id="skills">
          <h2>`// Skills`</h2>
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
          <div className="skill">ReactNative</div>

          <div className="skill">CSS</div>
          <div className="skill">ES6</div>
          <div className="skill">Python Django API</div>
          <div className="skill">Axois</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPresenter;
