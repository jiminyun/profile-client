import React from "react";
import "./styles.scss";
import Navigation from "components/Navigation";
const Home = () => {
  return (
    <div className="home-container">
      <div className="column_left">
        <h2>`// ABOUT ME` </h2>
        <p>
          Nealy more than 5 years professional experience web development, I'm a
          hardworking and dedicated person, love to explore, always have a big
          hunger for new knowledge. I enjoy building applications with internet
          skills and trying to use modern web frameworks for efficient web
          development in performance and time recently I am studying React Hook,
          GraphQL, Primsa and Typescript and want to grow Full Stack career.
        </p>
        <div className="experiences">
          <h2>'// experiences`</h2>
          <ul>
            <li>
              <div className="year">
                2013 <br /> 2014
              </div>
              <div className="description">
                <h3>Fanshawe Colleage, London, ON</h3>
                <p>
                  Diploma in Internet Application and Web Development <br />
                  Graduated with President's Honour Roll (4.16 GPA out of 4.2){" "}
                  <br />
                  Developed Skills : completed 5 projects in PHP, JQUERY and
                  Lamp and mastered new internet technologies ; hybrid mobile
                  application, Responsive UI, HTML5/CSS3, SEO and IIS etc.
                </p>
              </div>
            </li>
            <li>
              <div className="year">
                2004 <br /> 2006
              </div>
              <div className="description">
                <h3>Fanshawe Colleage, London, ON</h3>
                <p>
                  Diploma in Internet Application and Web Development <br />
                  Graduated with President's Honour Roll (4.16 GPA out of 4.2){" "}
                </p>
              </div>
            </li>
            <li>
              <div className="year">
                2004 <br /> 2006
              </div>
              <div className="description">
                <h3>Fanshawe Colleage, London, ON</h3>
                <p>
                  Diploma in Internet Application and Web Development <br />
                  Graduated with President's Honour Roll (4.16 GPA out of 4.2){" "}
                  <br />
                  Developed Skills : completed 5 projects in PHP, JQUERY and
                  Lamp and mastered new internet technologies ; hybrid mobile
                  application, Responsive UI, HTML5/CSS3, SEO and IIS etc.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="education">
          <h2>`// Education`</h2>
          <div>
            <ul>
              <li>
                <div className="year">
                  2013 <br /> 2014
                </div>
                <div className="description">
                  <h3>Fanshawe Colleage, London, ON</h3>
                  <p>
                    Diploma in Internet Application and Web Development <br />
                    Graduated with President's Honour Roll (4.16 GPA out of 4.2){" "}
                    <br />
                    Developed Skills : completed 5 projects in PHP, JQUERY and
                    Lamp and mastered new internet technologies ; hybrid mobile
                    application, Responsive UI, HTML5/CSS3, SEO and IIS etc.
                  </p>
                </div>
              </li>
              <li>
                <div className="year">
                  2004 <br /> 2006
                </div>
                <div className="description">
                  <h3>Fanshawe Colleage, London, ON</h3>
                  <p>
                    Diploma in Internet Application and Web Development <br />
                    Graduated with President's Honour Roll (4.16 GPA out of 4.2){" "}
                    <br />
                    Developed Skills : completed 5 projects in PHP, JQUERY and
                    Lamp and mastered new internet technologies ; hybrid mobile
                    application, Responsive UI, HTML5/CSS3, SEO and IIS etc.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="column_right">
        <Navigation />
        <div id="contact">
          <h2>`// Contact`</h2>
          <div className="tel"> 핸폰 647 - 456 -3502</div>
          <div className="tel"> 이메일 jiminyun7@gmail.com</div>
          <div className="tel"> 아이콘링크 link-in, Git-hub</div>
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
          <div className="skill">Styled Component</div>
          <div className="skill">CSS</div>
          <div className="skill">ES6</div>
          <div className="skill">Python Django API</div>
          <div className="skill">Axois</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
