// Libraries , css and static files
import React, { useState, useContext, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";

// Components and util
import { AuthContext } from "../../utils/AuthContext";

const NavbarWrapper = styled.div`
  background-color: #6a1b9a;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    padding: 20px;
    cursor: pointer;
  }

  *:hover {
    background-color: #7d3ea3;
  }

  @media (max-width: 400px) {
    * {
      padding: 20px 10px;
    }
  }
`;

export default function Navbar(props) {
  const { children } = props;
  const [auth] = useContext(AuthContext);
  const [path, setPath] = useState(window.location.pathname);
  const history = useHistory();

  useEffect(() => {
    history.listen((location) => {
      if (location.pathname !== path) {
        setPath(location.pathname);
      }
    });
  }, [history, path, auth.userId]);

  const navLinks = [
    {
      icon: <i className="fas fa-home fa-2x" style={{ color: "#4bab65", height: "75px", width: "75px" }}></i>,
      colour: "#4bab65",
      pageName: "Home",
      pageURL: "/",
      requireAuth: false,
      exact: true,
    },
    {
      icon: <i className="fas fa-layer-group fa-2x" style={{ color: "#8668fc", height: "75px", width: "75px" }}></i>,
      colour: "#8668fc",
      pageName: "Groups",
      pageURL: `/user/${auth.userId}/group`,
      requireAuth: true,
      exact: false,
    },
    {
      icon: <i className="fas fa-certificate fa-2x" style={{ color: "#FFB532", height: "75px", width: "75px" }}></i>,
      colour: "#FFB532",
      pageName: "Supporter",
      pageURL: "/supporter",
      requireAuth: false,
      exact: true,
    },
  ];

  return (
    <React.Fragment>
      <NavbarWrapper>
        {navLinks
          .filter((item) => (item.requireAuth ? auth.isAuth : true))
          .map((item) => {
            return (
              <NavLink to={item.pageURL} key={item.pageURL} activeStyle={{ borderRadius: " 4px", borderBottom: `5px solid ${item.colour}` }} exact={item.exact}>
                {item.icon}
              </NavLink>
            );
          })}
      </NavbarWrapper>
      {children}
    </React.Fragment>
  );
}
