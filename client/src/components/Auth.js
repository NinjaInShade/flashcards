// Libraries , css and static files
import React, { useState } from "react";
import "./Auth.css";
import SignupImg from "../static/Signup.svg";
import LoginImg from "../static/Security.svg";

export default function Auth(props) {
  const { type } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signupHandler(e) {
    e.preventDefault();
    if (type === "signup") {
      // Validate data, if correct send to backend to create new user
    }

    if (type === "login") {
      // Validate data, if correct send to backend to authenticate
    }
  }

  return (
    <div className="wrapper">
      <div className="imgWrapper">
        <img src={type === "signup" ? SignupImg : LoginImg} alt="Data" />
      </div>
      <form className="formWrapper">
        <label>
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>

        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>

        <button className="btn" onClick={signupHandler}>
          {type === "signup" ? "Signup" : "Login"}
        </button>
      </form>
    </div>
  );
}
