// Libraries , css and static files
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

// Components and util
import Home from "./utils/Home";
import Navbar from "./components/util/navbar/Navbar";
import Collection from "./pages/collection/Collection";
import { AuthProvider } from "./utils/AuthContext";

export default function App() {
  const routes = (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/test" exact />
      <Route path="/test/:collectionId" exact />
      <Route path="/user/:userId/collections/:collectionId" component={Collection} exact />
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
