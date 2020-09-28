import styled from "styled-components/macro";

export const NavbarWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 800;

  @media (max-width: 650px) {
    > :not(:last-child):not(:first-child) {
      display: none;
    }

    justify-content: space-between;
  }

  > svg {
    cursor: pointer;
  }
`;

export const Hamburger = styled.div`
  margin-right: 20px;
  cursor: pointer;
  display: none;

  @media (max-width: 650px) {
    display: initial;
  }
`;

export const PageLinks = styled.div`
  > a {
    text-decoration: none;
    font-size: 22px;
    color: #767474;
    margin: 0 15px;
  }

  > button {
    margin: 0 5px;
  }
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 998;
`;

export const SidebarPanel = styled.div`
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
  background-color: #fff;
  z-index: 999;
  transition-duration: 200ms;

  @media (max-width: 425px) {
    width: 200px;
  }
`;

export const SidebarList = styled.ul`
  padding-inline-start: 0;
  list-style: none;
  padding-right: 7px;
`;

export const SidebarListItem = styled.li`
  cursor: pointer;
  text-align: right;
  font-size: 24px;
  margin: 10px 0;
  border-radius: 4px;
  padding: 5px;
  width: 220px;

  * {
    color: black;
    text-decoration: none;
  }

  :hover {
    background-color: #767474;
  }

  @media (max-width: 425px) {
    width: 170px;
  }
`;
