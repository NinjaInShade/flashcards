// Libraries , css and static files
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

// Components and util
import { AuthContext } from "../util/AuthContext";

export default function Groups() {
  const [auth] = useContext(AuthContext);

  return auth.isAuth ? (
    <div>
      <h1>GROUPS!!!!</h1>
    </div>
  ) : (
    <Redirect to="/" />
  );
}
