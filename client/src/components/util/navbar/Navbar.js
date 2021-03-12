// Libraries , css and static files
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../utils/AuthContext";
import Button from "../../util/button/Button";
import Logo from "../../../static/Logo.svg";
import close from "../../../static/close.svg";

import "./Navbar.css";
import "./Sidebar.css";

export default function Navbar({ children }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);

  const navLinks = [
    {
      pageName: "Home",
      pageURL: "/",
      requireAuth: false,
      exact: true,
    },
    {
      pageName: "Test yourself",
      pageURL: `/user/${auth.userId}/test`,
      requireAuth: true,
      exact: false,
    },
  ];

  return (
    <>
      <div className={`sidebar-overlay ${!sidebar && "sidebar-overlay-hidden"}`} onClick={() => setSidebar(false)}></div>
      <div className="sidebar-panel" style={sidebar ? {} : { transform: "translateX(100%)" }}>
        <button onClick={() => setSidebar(false)} className="sidebar-close-btn">
          <img src={close} alt="close sidebar" className="sidebar-close" />
        </button>
        <ul>
          {navLinks
            .filter((item) => (item.requireAuth ? auth.isAuth : true))
            .map((item, index) => {
              return (
                <li onClick={() => setSidebar(false)} key={index} className="sidebar-list-item">
                  <NavLink to={item.pageURL} key={item.pageURL} exact={item.exact} activeClassName="nav-link-active" className="nav-link">
                    {item.pageName}
                  </NavLink>
                </li>
              );
            })}
          {auth.isAuth && (
            <li>
              <Button className="sidebar-btn" onClick={() => setAuth({ ...auth, isAuth: false })}>
                Sign out
              </Button>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-wrapper">
        <NavLink to="/">
          <img src={Logo} alt="Brand logo" className="brand-logo" />
        </NavLink>

        <div className="nav-links">
          {navLinks
            .filter((item) => (item.requireAuth ? auth.isAuth : true))
            .map((item, index) => {
              return (
                <NavLink to={item.pageURL} key={index} exact={item.exact} activeClassName="nav-link-active" className="nav-link">
                  {item.pageName}
                </NavLink>
              );
            })}
          {auth.isAuth && (
            <Button className="nav-btn" onClick={() => setAuth({ ...auth, isAuth: false })}>
              Sign out
            </Button>
          )}
        </div>

        <button className="hamburger-wrapper" onClick={() => setSidebar(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hamburger icon icon-tabler icon-tabler-menu-2"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>
      {children}
    </>
  );
}
