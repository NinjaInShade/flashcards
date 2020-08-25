import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NoAuthHome from "./pages/NoAuthHome";
import AuthHome from "./pages/AuthHome";
import UnmatchedRoute from "./pages/UnmatchedRoute";

export default function App() {
  // eslint-disable-next-line
  const [authenticated, setAuthenticated] = useState(false);

  const routes = authenticated ? (
    <Switch>
      <Route path="/auth" exact>
        <AuthHome />
      </Route>
      <Route path="*">
        <UnmatchedRoute />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route path="/" exact>
        <NoAuthHome />
      </Route>
      <Route path="*">
        <UnmatchedRoute />
      </Route>
    </Switch>
  );
  return <Router>{routes}</Router>;
}
