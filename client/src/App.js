// Libraries , css and static files
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

// Components and util
import Home from "./utils/Home";
import Navbar from "./components/util/Navbar";
import Supporter from "./pages/Supporter";
import Groups from "./pages/Collections";
import Group from "./pages/Collection";
import { AuthProvider } from "./utils/AuthContext";

// TODO: CREDIT ICONS
/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */

/* <div>Icons made by <a href="http://www.google.com/" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */

// Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

// Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

/* <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */

// Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

export default function App() {
  const routes = (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/supporter" component={Supporter} exact />
      <Route path="/user/:userId/group" component={Groups} exact />
      <Route path="/user/:userId/group/:groupId" component={Group} exact />
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
