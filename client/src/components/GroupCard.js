// Libraries , css and static files
import React, { useState, useContext } from "react";
import "./GroupCard.css";

// Components and util
import { AuthContext } from "../util/AuthContext";

export default function GroupCard(props) {
  const { name, icon, id } = props;
  const [auth] = useContext(AuthContext);
  const [hovered, setHovered] = useState(false);

  function redirectHandler() {
    window.location.href = `/user/${auth.userId}/group/${id}`;
  }

  return (
    <React.Fragment>
      <div
        className="groupCardContainer"
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <div className="groupCardOverlay" style={hovered ? {} : { display: "none" }} onClick={redirectHandler}>
          <i className="fas fa-directions fa-5x redirectIcon"></i>
        </div>
        <h1 className="groupName">{name}</h1>
        <img src={icon} alt="icon" className="groupIconImg" />
      </div>
    </React.Fragment>
  );
}
