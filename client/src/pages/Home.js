// Libraries , css and static files
import React, { useContext } from "react";

// Components and util
import AuthHome from "../pages/AuthHome";
import NoAuthHome from "../pages/NoAuthHome";
import { AuthContext } from "../util/AuthContext";

export default function Home() {
  const [auth] = useContext(AuthContext);
  return auth.isAuth ? <AuthHome /> : <NoAuthHome />;
}
