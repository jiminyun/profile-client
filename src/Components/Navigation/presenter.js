import React from "react";
import "./styles.scss";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Menus = styled.li`
  list-style: none;
  a {
    background: ${props => (props.current ? "#ffbf00" : "")};
  }
`;

class Navigation extends React.Component {
  render() {
    const {
      location: { pathname },
      isAuthenticated,
      logoutUser
    } = this.props;
    return (
      <Menus>
        <ul className="tags">
          <Menus current={pathname === "/"}>
            <Link to="/">Profile</Link>
          </Menus>
          <Menus current={pathname === "/projects"}>
            <Link to="/projects">Projects</Link>
          </Menus>
          <Menus current={pathname === "/blog"}>
            <Link to="/blog">Blog</Link>
          </Menus>

          {isAuthenticated && (
            <>
              <Menus current={pathname === "/admin"}>
                <Link to="/admin">Admin</Link>
              </Menus>
              <Menus current={pathname === "/login"}>
                <button onClick={() => logoutUser(this.props.history)}>
                  logout
                </button>
              </Menus>
            </>
          )}
        </ul>
      </Menus>
    );
  }
}

export default withRouter(Navigation);
