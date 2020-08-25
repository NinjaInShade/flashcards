import React from "react";
import { Link } from "react-router-dom";
import "./UnmatchedRoute.css";
import PageNotFound from "../static/page-not-found.svg";

export default function UnmatchedRoute() {
  return (
    <div className="background">
      <div className="contentWrapper">
        <h1 className="title">404 Page not found</h1>
        <Link to="/">
          <h2 className="redirect">Redirect to home page</h2>
        </Link>
        <img src={PageNotFound} alt="404 error" />
        <div className="credits">
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">
            Flat Icons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
}
