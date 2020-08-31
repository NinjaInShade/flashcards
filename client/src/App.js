// Libraries , css and static files
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

// Components and util
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Premium from "./pages/Premium";
import Groups from "./pages/Groups";
import { AuthProvider } from "./util/AuthContext";

export default function App() {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/premium" exact>
        <Premium />
      </Route>
      <Route path="/:userId/groups" exact>
        <Groups />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );

  return (
    <AuthProvider>
      <Router>
        <Navbar>{routes}</Navbar>
      </Router>
    </AuthProvider>
  );
}
