// Libraries , css and static files
import React, { useState, useContext, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import close from "../../static/close.svg";

// Components and util
import { AuthContext } from "../../utils/AuthContext";
import { colours, device, typography } from "../../utils/globalCSS";

const NavbarWrapper = styled.div`
  background-color: ${colours.primary200};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    padding: 15px;
    cursor: pointer;
  }

  *:hover {
    background-color: #1063b0;
  }

  @media (max-width: 500px) {
    *:not(:last-child) {
      display: none;
    }

    justify-content: flex-end;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: initial;
  }
`;

const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 998;
`;

const SidebarPanel = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 10px;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: ${colours.primary200};
  z-index: 999;

  @media ${device.mobileL} {
    width: 200px;
  }
`;

const SidebarList = styled.ul`
  padding-inline-start: 0;
  list-style: none;
  padding-right: 7px;
`;

const SidebarListItem = styled.li`
  cursor: pointer;
  text-align: right;
  font-size: ${typography.h4};
  margin: 10px 0;
  border-radius: 4px;
  padding: 5px;
  width: 220px;

  * {
    color: black;
    text-decoration: none;
  }

  :hover {
    background-color: #1063b0;
  }

  @media ${device.mobileL} {
    width: 170px;
  }
`;

export default function Navbar({ children }) {
  const [auth] = useContext(AuthContext);
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
      icon: <i className="fas fa-home" style={{ color: "#57cf77", height: "65px", width: "65px" }}></i>,
      colour: "#57cf77",
      pageName: "Home",
      pageURL: "/",
      requireAuth: false,
      exact: true,
    },
    {
      icon: <i className="fas fa-layer-group" style={{ color: "#0d2494", height: "65px", width: "65px" }}></i>,
      colour: "#0d2494",
      pageName: "Collections",
      pageURL: `/user/${auth.userId}/collections`,
      requireAuth: true,
      exact: false,
    },
    {
      icon: <i className="fas fa-rocket" style={{ color: "#FFB532", height: "65px", width: "65px" }}></i>,
      colour: "#FFB532",
      pageName: "Supporter",
      pageURL: "/supporter",
      requireAuth: false,
      exact: true,
    },
  ];

  return (
    <React.Fragment>
      <SidebarOverlay style={sidebar ? {} : { display: "none" }} onClick={() => setSidebar(false)}></SidebarOverlay>
      <SidebarPanel style={sidebar ? {} : { display: "none" }}>
        <img src={close} alt="close" onClick={() => setSidebar(false)} style={{ cursor: "pointer" }} />
        <SidebarList>
          {navLinks
            .filter((item) => (item.requireAuth ? auth.isAuth : true))
            .map((item) => {
              return (
                <SidebarListItem onClick={() => setSidebar(false)}>
                  <NavLink to={item.pageURL} key={item.pageURL} exact={item.exact}>
                    {item.pageName}
                  </NavLink>
                </SidebarListItem>
              );
            })}
        </SidebarList>
      </SidebarPanel>
      <NavbarWrapper>
        {navLinks
          .filter((item) => (item.requireAuth ? auth.isAuth : true))
          .map((item) => {
            return (
              <NavLink to={item.pageURL} key={item.pageURL} style={{ borderBottom: "5px solid rgba(0,0,0,0)" }} activeStyle={{ borderRadius: " 4px", borderBottom: `5px solid ${item.colour}` }} exact={item.exact}>
                {item.icon}
              </NavLink>
            );
          })}
        <Hamburger onClick={() => setSidebar(true)}>
          <i className="fas fa-bars" style={{ height: "65px", width: "65px" }}></i>
        </Hamburger>
      </NavbarWrapper>
      {children}
    </React.Fragment>
  );
}
