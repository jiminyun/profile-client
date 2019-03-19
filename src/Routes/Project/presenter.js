import React from "react";
import "./styles.scss";
import Navigation from "components/Navigation";

const ProjectPresenter = props => {
  const {
    projects,
    hasErrored,
    isLoading,
    setEditClick,
    delProjectClick
  } = props;
  console.log(props);

  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (isLoading) {
    return <p>Loading…</p>;
  }

  const ListItem = props => {
    return (
      <div className="grid-item">
        <div className="image" />
        <div>{props.title}</div>
        <div>{props.description}</div>
      </div>
    );
  };

  const List = props => {
    const { projects, setEditClick } = props;
    return projects.map(pjt => (
      <ListItem
        key={pjt._id}
        title={pjt.title}
        project={pjt}
        setEditClick={setEditClick}
        delProjectClick={delProjectClick}
      />
    ));
  };

  return (
    <div className="home-container">
      <div className="column_left">
        <h2>`// PROJECTS` </h2>
        <div class="grid-container">
          <List
            projects={projects}
            setEditClick={setEditClick}
            delProjectClick={delProjectClick}
          />
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
          <div className="skill">CSS</div>
          <div className="skill">ES6</div>
          <div className="skill">Python Django API</div>
          <div className="skill">Axois</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPresenter;
