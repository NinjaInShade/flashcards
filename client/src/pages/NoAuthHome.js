// Libraries , css and static files
import React, { useState } from "react";
import "./NoAuthHome.css";
import UI from "../static/UI.svg";
import Analytics from "../static/Analytics.svg";

// Components and util
import Button from "../components/Button";
import Auth from "../components/Auth";

export default function NoAuliHome(props) {
  const [pageContent, setPageContent] = useState("default");

  let content;
  if (pageContent === "default") {
    content = (
      <div className="content">
        <h1 className="heading">Once logged in...</h1>
        <div className="section">
          <h2 className="mobileHeading">You gain access to multiple features!</h2>
          <div className="img">
            <img src={UI} alt="ui" className="svg" />
          </div>
          <div className="text">
            <h2>You gain access to multiple features!</h2>
            <ul className="features ">
              <li>
                <i className="fas fa-angle-double-right"></i>Create groups
              </li>
              <li>
                <i className="fas fa-angle-double-right"></i>Create flashcards
              </li>
              <li>
                <i className="fas fa-angle-double-right"></i>Test and improve your memory!
              </li>
              <li>
                <i className="fas fa-angle-double-right"></i>Track your progress
              </li>
            </ul>
          </div>
        </div>
        <div className="section order">
          <h2 className="mobileHeading">Track your progress!</h2>
          <div className="text">
            <h2>Track your progress!</h2>
            <ul className="features">
              <li>
                <i className="fas fa-angle-double-right"></i>View overall stats
              </li>
              <li>
                <i className="fas fa-angle-double-right"></i>View completion % per group
              </li>
              <li>
                <i className="fas fa-angle-double-right"></i>See your groups completed
              </li>
              <li>
                <i className="fas fa-angle-double-right"></i>Be notified of common wrong answers
              </li>
            </ul>
          </div>
          <div className="img">
            <img src={Analytics} alt="Analytics" className="svg" />
          </div>
        </div>

        <div className="buttons">
          <Button id="authBtn" onClick={() => setPageContent("signup")}>
            Sign up
          </Button>
          <Button id="authBtn" onClick={() => setPageContent("login")}>
            Login
          </Button>
        </div>
      </div>
    );
  }
  if (pageContent === "signup") {
    content = <Auth type="signup" />;
  }
  if (pageContent === "login") {
    content = <Auth type="login" />;
  }

  return content;
}
