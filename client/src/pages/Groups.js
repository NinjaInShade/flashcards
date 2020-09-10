// Libraries , css and static files
import React, { useContext } from "react";
import "./Groups.css";
import { Redirect } from "react-router-dom";

// Components and util
import AddGroup from "../components/AddGroup";
import GroupCard from "../components/GroupCard";
import { AuthContext } from "../util/AuthContext";

//CHANGE ICONS TO ${name}: SVG IMPORT,  RENDER SPECIFIC GROUP HERE.

export default function Groups() {
  const [auth] = useContext(AuthContext);

  const content = (
    <div className="groupsContentColumn">
      <AddGroup />
      <div className="groupList">
        {auth.groups.map((group) => {
          return <GroupCard name={group.name} icon={group.icon} key={group.id} id={group.id} />;
        })}
      </div>
    </div>
  );

  return auth.isAuth ? content : <Redirect to="/" />;
}
