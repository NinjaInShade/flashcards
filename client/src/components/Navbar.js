// Libraries , css and static files
import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

// Components and util
import { AuthContext } from "../util/AuthContext";

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
  }, [history, path]);

  const navLinks = [
    {
      icon: <i className="fas fa-home fa-2x" style={{ color: "#4bab65" }}></i>,
      colour: "#4bab65",
      pageName: "Home",
      pageURL: "/",
      requireAuth: false,
    },
    {
      icon: <i className="fas fa-layer-group fa-2x" style={{ color: "#8668fc" }}></i>,
      colour: "#8668fc",
      pageName: "Groups",
      pageURL: "/:userId/groups",
      requireAuth: true,
    },
    {
      icon: <i className="fas fa-certificate fa-2x" style={{ color: "#FFB532" }}></i>,
      colour: "#FFB532",
      pageName: "Supporter",
      pageURL: "/supporter",
      requireAuth: false,
    },
  ];

  return (
    <React.Fragment>
      <div className="navbar">
        {navLinks
          .filter((item) => (item.requireAuth ? auth.isAuth : true))
          .map((item) => {
            return (
              <Link to={item.pageURL} key={item.pageURL} style={path === item.pageURL ? { borderRadius: " 4px", borderBottom: `5px solid ${item.colour}` } : {}}>
                {item.icon}
              </Link>
            );
          })}
      </div>
      {children}
    </React.Fragment>
  );
}
