// Libraries , css and static files
import React, { useContext } from "react";
import "./Groups.css";
import { Redirect } from "react-router-dom";

// Components and util
import { icons } from "../util/icons";
import AddGroup from "../components/AddGroup";
import GroupCard from "../components/GroupCard";
import { AuthContext } from "../util/AuthContext";

const groups = [
  {
    name: "Maths",
    icon: icons[0],
    id: 1,
  },
  {
    name: "Chemistry",
    icon: icons[1],
    id: 2,
  },
  {
    name: "Phsyics",
    icon: icons[2],
    id: 3,
  },
];

export default function Groups() {
  const [auth] = useContext(AuthContext);

  const content = (
    <div className="groupsContentColumn">
      <AddGroup />
      <div className="groupList">
        {groups.map((group) => {
          return <GroupCard name={group.name} icon={group.icon} key={group.id} id={group.id} />;
        })}
      </div>
    </div>
  );

  return auth.isAuth ? content : <Redirect to="/" />;
}
