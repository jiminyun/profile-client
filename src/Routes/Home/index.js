import React from "react";
import "./styles.scss";
import Navigation from "components/Navigation";
import Sidebar from "components/Side";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
      <div className="column_left">
        <h2>`// ABOUT ME` </h2>
        <p>
          Nealy more than 7 years professional experience web development, I'm a
          hardworking and dedicated person, love to explore, always have a big
          hunger for new knowledge. I enjoy building applications with internet
          skills and trying to use modern web stack for efficient development in
          performance and time recently I am studying{" "}
          <span className="underline">React Hook</span>,{" "}
          <span className="underline">GraphQL</span>,{" "}
          <span className="underline">Primsa</span> and{" "}
          <span className="underline">Typescript</span> and want to grow Full
          Stack career.
        </p>
        <div className="experiences">
          <h2>'// experiences`</h2>
          <ul>
            <li>
              <div className="year">
                2018 <br /> Now
              </div>
              <div className="description">
                <div>
                  <ul className="tags">
                    <h3>Freelancer & Self taught </h3>
                  </ul>
                </div>

                <p>
                  - Insta Cloning : React + Redux + Django + PostgreSQL{" "}
                  <a
                    href="https://github.com/jiminyun/jiminstagram"
                    target="blank"
                  >
                    <span className="git-hub">git-hub</span>
                  </a>
                  <br />- Youtube Cloning : Vanila JavaScript + Pug + Nodejs +
                  Express + MongoDB{" "}
                  <a href="https://github.com/jiminyun/JTube" target="blank">
                    <span className="git-hub">git-hub</span>
                  </a>
                  <br />- Toy portfolio management : MERN stacks{" "}
                  <a
                    href="https://github.com/jiminyun/my-profile"
                    target="blank"
                  >
                    <span className="git-hub">git-hub</span>
                  </a>
                  <br />
                </p>
              </div>
            </li>
            <li>
              <div className="year">
                2014 <br /> 2016
              </div>
              <div className="description">
                <h3>Web Application Developer, CoreSolutions, London, ON </h3>
                <p>
                  - Developed independently and team various corporate website,
                  school board, inventory, order, etc <br />
                  - Worked in the Agile development methodology and Provided
                  demos to clients <br />- Used PHP, MSSQL, MySQL, HTML, CSS,
                  Bootstrap, jQuery, GIT, Torison svn
                </p>
              </div>
            </li>
            <li>
              <div className="year">
                2007 <br /> 2011
              </div>
              <div className="description">
                <h3>Senior Web Developer, LeadOn Company, Seoul, Korea </h3>
                <p>
                  - Communicated with client and system requirement analysis as
                  a project leader <br />
                  - Collaborated with designers to produce efficient interfaces
                  and simple, intuitive interactions and experiences to be able
                  to manage complicated business logics. <br />- Developed
                  product register from ware house system, display on mall,
                  order, payment and delivery- process with HTML, CSS, jQuery,
                  ASP.NET, MS-SQL, Microsoft Visual Source Safe
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
                    - Diploma in Internet Application and Web Development <br />
                    - Graduated with President's Honour Roll (4.16 GPA out of
                    4.2)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="column_right">
        <Navigation />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
