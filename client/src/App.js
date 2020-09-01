// Libraries , css and static files
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

// Components and util
import Home from "./util/Home";
import Navbar from "./components/Navbar";
import Supporter from "./pages/Supporter";
import Groups from "./pages/Groups";
import { AuthProvider } from "./util/AuthContext";

export default function App() {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/supporter" exact>
        <Supporter />
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
