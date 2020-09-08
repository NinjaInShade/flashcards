// Libraries , css and static files
import React, { useContext } from "react";
import "./Group.css";
import { Redirect } from "react-router-dom";

// Components and util
import { AuthContext } from "../util/AuthContext";

export default function Group() {
  const [auth] = useContext(AuthContext);

  const content = (
    <div>
      <h1>hLLESdad</h1>
    </div>
  );

  return auth.isAuth ? content : <Redirect to="/" />;
}
