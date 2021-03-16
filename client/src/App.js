// Libraries and static files
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Components and util
import RouteTracker from "./utils/RouteTracker";
import Home from "./utils/Home";
import Navbar from "./components/util/navbar/Navbar";
import Collection from "./pages/collection/Collection";
import StartTest from "./pages/starttest/StartTest";
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthProvider } from "./utils/AuthContext";

import "./App.css";

export default function App() {
  const routes = (
    <Switch>
      <Route path="/" component={Home} exact />
      <ProtectedRoute path="/test" component={StartTest} exact />
      <ProtectedRoute path="/collections/:collectionId" component={Collection} exact />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );

  return (
    <AuthProvider>
      <Router>
        <RouteTracker>
          <Navbar>{routes}</Navbar>
        </RouteTracker>
      </Router>
    </AuthProvider>
  );
}
