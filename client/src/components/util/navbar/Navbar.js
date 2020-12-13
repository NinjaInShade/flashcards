// Libraries , css and static files
import React, { useState, useContext, useEffect } from "react";
import { SidebarOverlay, SidebarPanel, SidebarList, SidebarListItem, NavbarWrapper, PageLinks, Hamburger } from "./NavbarStyle";
import { NavLink, useHistory } from "react-router-dom";
import close from "../../../static/close.svg";
import { AuthContext } from "../../../utils/AuthContext";

export default function Navbar({ children }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [path, setPath] = useState(window.location.pathname);
  const [sidebar, setSidebar] = useState(false);
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
      pageName: "Home",
      pageURL: "/",
      requireAuth: false,
      exact: true,
    },
    {
      pageName: "Test",
      pageURL: `/user/${auth.userId}/test`,
      requireAuth: true,
      exact: false,
    },
  ];

  return (
    <React.Fragment>
      <SidebarOverlay style={sidebar ? {} : { display: "none" }} onClick={() => setSidebar(false)}></SidebarOverlay>
      <SidebarPanel style={sidebar ? {} : { transform: "translateX(100%)" }}>
        <img src={close} alt="close" onClick={() => setSidebar(false)} style={{ cursor: "pointer", fill: "white" }} />
        <SidebarList>
          {navLinks
            .filter((item) => (item.requireAuth ? auth.isAuth : true))
            .map((item) => {
              return (
                <SidebarListItem onClick={() => setSidebar(false)} key={item.pageURL}>
                  <NavLink to={item.pageURL} key={item.pageURL} exact={item.exact}>
                    {item.pageName}
                  </NavLink>
                </SidebarListItem>
              );
            })}
        </SidebarList>
      </SidebarPanel>
      <NavbarWrapper>
        <NavLink to="/">
          <svg width="80" height="67" viewBox="0 0 80 67" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "50px" }}>
            <g clipPath="url(#clip0)">
              <path d="M74.1242 0H6.32764V67H74.1242V0Z" fill="#442EBA" />
              <path d="M36.1441 44.953H50.7625V48.24H32.0551V17.755H36.1441V44.953Z" fill="white" />
              <path d="M79.6765 31.7768L73.2845 25.46L66.8926 31.7768L73.2845 38.0936L79.6765 31.7768Z" fill="#442EBA" />
              <path d="M12.7838 31.7768L6.39185 25.46L-8.12426e-05 31.7768L6.39185 38.0936L12.7838 31.7768Z" fill="#442EBA" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="80" height="67" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </NavLink>

        <PageLinks style={{ marginRight: "50px" }}>
          {navLinks
            .filter((item) => (item.requireAuth ? auth.isAuth : true))
            .map((item) => {
              return (
                <NavLink to={item.pageURL} key={item.pageURL} exact={item.exact} activeStyle={{ color: "#000" }}>
                  {item.pageName}
                </NavLink>
              );
            })}
          {auth.isAuth && (
            <button onClick={() => setAuth({ ...auth, isAuth: false })} className="PrimaryButton">
              Sign out
            </button>
          )}
        </PageLinks>

        <Hamburger onClick={() => setSidebar(true)}>
          <i className="fas fa-bars" style={{ height: "65px", width: "65px" }}></i>
        </Hamburger>
      </NavbarWrapper>
      {children}
    </React.Fragment>
  );
}
