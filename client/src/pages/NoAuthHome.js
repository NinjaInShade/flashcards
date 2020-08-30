// Libraries , css and static files
import React from "react";
import authentication from "../static/authentication.png";
import "./NoAuthHome.css";

export default function NoAuthHome(props) {
  return (
    <div className="infoBox">
      <div className="infoBoxFlex">
        <div>
          <img src={authentication} alt="Login icom" className="authentication" width="350px" height="350px" />
        </div>
        <div className="text">
          <h2 className="headingText">Please login to use</h2>
          <p className="leadText">
            You will be able to - <br />- Create flashcards
            <br /> - Create categories
            <br /> - View progress
            <br /> - Sort flashcards
          </p>
          <div></div>
          <a href="/signup">
            <button className="btn">Sign up</button>
          </a>
          <a href="/login">
            <button className="btn">Login</button>
          </a>
        </div>
      </div>
    </div>
  );
}
