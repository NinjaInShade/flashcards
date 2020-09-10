// Libraries , css and static files
import React, { useContext } from "react";
import "./Group.css";
import { Redirect, useParams } from "react-router-dom";

// Components and util
import { AuthContext } from "../util/AuthContext";

export default function Group() {
  const [auth] = useContext(AuthContext);
  const { userId, groupId } = useParams();

  const content = (
    <div>
      <h1>{`${userId} ${groupId}`}</h1>
    </div>
  );

  return auth.isAuth ? content : <Redirect to="/" />;
}
