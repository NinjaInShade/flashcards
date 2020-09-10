// Libraries , css and static files
import React, { useState, useContext, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";

// Components and util
import { AuthContext } from "../../util/AuthContext";

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
      icon: <i className="fas fa-home fa-2x" style={{ color: "#4bab65" }}></i>,
      colour: "#4bab65",
      pageName: "Home",
      pageURL: "/",
      requireAuth: false,
      exact: true,
    },
    {
      icon: <i className="fas fa-layer-group fa-2x" style={{ color: "#8668fc" }}></i>,
      colour: "#8668fc",
      pageName: "Groups",
      pageURL: `/user/${auth.userId}/group`,
      requireAuth: true,
      exact: false,
    },
    {
      icon: <i className="fas fa-certificate fa-2x" style={{ color: "#FFB532" }}></i>,
      colour: "#FFB532",
      pageName: "Supporter",
      pageURL: "/supporter",
      requireAuth: false,
      exact: true,
    },
  ];

  return (
    <React.Fragment>
      <div className="navbar">
        {navLinks
          .filter((item) => (item.requireAuth ? auth.isAuth : true))
          .map((item) => {
            return (
              <NavLink to={item.pageURL} key={item.pageURL} activeStyle={{ borderRadius: " 4px", borderBottom: `5px solid ${item.colour}` }} exact={item.exact}>
                {item.icon}
              </NavLink>
            );
          })}
      </div>
      {children}
    </React.Fragment>
  );
}
