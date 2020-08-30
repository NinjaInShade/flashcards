// Libraries , css and static files
import React, { useContext } from "react";

// Components and util
import { AuthContext } from "../util/AuthContext";
import NoAuthHome from "./NoAuthHome";
import AuthHome from "./AuthHome";

export default function Home(props) {
  const [auth] = useContext(AuthContext);

  return auth.isAuth ? <AuthHome /> : <NoAuthHome />;
}
