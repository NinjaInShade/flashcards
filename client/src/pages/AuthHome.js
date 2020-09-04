// Libraries , css and static files
import React, { useContext } from "react";
import "./AuthHome.css";

// Components and util
import { AuthContext } from "../util/AuthContext";

export default function AuthHome(props) {
  const [auth] = useContext(AuthContext);

  const content = (
    <div className="contentColumn">
      <h1>{auth.username}</h1>
    </div>
  );
  return content;
}
