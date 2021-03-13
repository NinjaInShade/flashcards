// Libraries , css and static files
import React, { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

// Components and util
import AuthHome from "../pages/auth-home/AuthHome";
import NoAuthHome from "../pages/NoAuthHome/NoAuthHome";

export default function Home() {
  const { auth } = useContext(AuthContext);
  return auth.isAuth ? <AuthHome /> : <NoAuthHome />;
}
