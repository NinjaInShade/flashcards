import React from "react";
import "./NoAuthHome.css";
import LoginIcon from "../static/login.png";
import loginPadlock from "../static/loginPadlock3.png";
import githubImg from "../static/githubOAuth.png";

export default function NoAuthHome(props) {
  function loginHandler(e) {
    e.preventDefault();
    console.log("sign in");
  }

  return (
    <div style={{ height: "100vh" }}>
      <div className="navbarContrastBG">
        <p style={{ display: "hidden" }}>.</p>
      </div>
      <div className="navbarBG">
        <svg viewBox="0 0 100 80" width="40" height="40" className="hamburger">
          <rect width="100" height="20" style={{ fill: "#fff" }}></rect>
          <rect y="30" width="100" height="20" style={{ fill: "#fff" }}></rect>
          <rect y="60" width="100" height="20" style={{ fill: "#fff" }}></rect>
        </svg>
        <img src={LoginIcon} alt="Login icon" height="55px" width="55px" className="loginIcon" />
      </div>

      <div className="infoBox">
        <div className="infoBoxFlex">
          <div>
            <img src={loginPadlock} alt="Login icom" className="loginPadlock" width="350px" height="350px" />
          </div>
          <div className="text">
            <h2 className="headingText">Please login to use</h2>
            <p className="leadText">
              You will be able to - <br />- Create flashcards
              <br /> - Create categories
              <br /> - View progress
              <br /> - Sort flashcards
            </p>
            <img src={githubImg} alt="github oAuth temp" onClick={loginHandler} style={{ cursor: "pointer" }} className="githubLogin" />
          </div>
        </div>
      </div>
    </div>
  );
}
