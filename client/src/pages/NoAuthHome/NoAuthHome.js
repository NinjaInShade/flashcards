// Libraries , css and static files
import React from "react";
import GoogleButton from "react-google-button";
import noAuthHome from "../../static/noAuthHome2.svg";

import "./NoAuthHome.css";

export default function NoAuthHome(props) {
  function authenticate() {
    window.open(`${process.env.REACT_APP_API_DOMAIN}/auth/google`, "_self");
  }

  return (
    <main className="signin-page">
      <div className="signin-container">
        <h2 className="signin-header">Sign in with google</h2>
        <img src={noAuthHome} alt="Illustration" />
        <GoogleButton
          className="google-btn"
          onClick={() => {
            authenticate();
          }}
        />
      </div>
    </main>
  );
}
