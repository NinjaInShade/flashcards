// Libraries , css and static files
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Components and util
import { AuthContext } from "../util/AuthContext";

export default function Navbar(props) {
  const { children } = props;
  const [auth] = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);

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
      pageName: "Premium",
      pageURL: "/premium",
      requireAuth: false,
    },
  ];

  const notAuthNavLinks = navLinks.filter((item) => item.requireAuth === false);
  const userNavLinks = auth.isAuth ? navLinks : notAuthNavLinks;
  const path = window.location.pathname;

  function sidebarToggle() {
    setSidebar(!sidebar);
  }

  return (
    <React.Fragment>
      {/* Sidebar */}
      <div className={sidebar ? "sidebarPanel active" : "sidebarPanel"} style={sidebar ? { left: "0" } : { left: "-100%" }}>
        <div onClick={sidebarToggle} className="close">
          <i className="fas fa-times fa-3x" style={{ color: "white" }}></i>
        </div>
        <ul className="navList">
          {userNavLinks.map((item, index) => {
            return (
              <li className="navItem" key={index} onClick={() => setSidebar(!sidebar)}>
                <Link to={item.pageURL}>
                  {item.icon}
                  <p className="navItemText" style={{ color: `${item.colour}` }}>
                    {item.pageName}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="overlay" style={sidebar ? {} : { display: "none" }} onClick={sidebarToggle}></div>

      {/* Navbar */}
      <div className="navbar">
        {/* <button onClick={sidebarToggle} style={{ background: "none", outline: "none", border: "none", visibility: "hidden" }}>
            <i className="fas fa-bars fa-3x hamburger"></i>
          </button> */}
        {userNavLinks.map((item, index) => {
          return (
            <Link to={item.pageURL} key={index} style={path === item.pageURL ? { borderRadius: " 4px", borderBottom: `5px solid ${item.colour}` } : {}} id={index}>
              {item.icon}
            </Link>
          );
        })}
      </div>
      {children}
    </React.Fragment>
  );
}
