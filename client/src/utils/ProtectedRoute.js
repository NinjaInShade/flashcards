import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

export default function ProtectedRoute({ component, path, exact = true }) {
  const { auth } = useContext(AuthContext);

  return auth.isAuth ? <Route path={path} component={component} exact={exact} /> : <Redirect to="/" />;
}
