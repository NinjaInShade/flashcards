// Libraries , css and static files
import React, { useState, useContext } from "react";
import "./Auth.css";
import SignupImg from "../static/Signup.svg";
import LoginImg from "../static/Security.svg";

// Components and util
import { AuthContext } from "../util/AuthContext";

const users = [{ email: "leon@gmail.com", password: "testpassword", userId: "5", premium: true }];

export default function Auth(props) {
  const { type } = props;

  const [auth, setAuth] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  function signupHandler(e) {
    e.preventDefault();
    if (type === "signup") {
      let newErrorState = { emailError: "", passwordError: "", createUserError: "", wrongUserError: "", serverError: "" };
      // Email validation
      const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(email).toLowerCase())) {
        newErrorState.emailError = "* invalid email";
      }
      if (password.length < 8) {
        newErrorState.passwordError = "* password not 8 characters or more";
      }
      setError(newErrorState);

      if (error.emailError === "" && error.passwordError === "") {
        console.log(`send email ${email} and password ${password} to backend as validated`);
        // Send to backend, if successfull, redirect to home page, if not set createUserError/serverError
        setTimeout(() => {
          setEmail("");
          setPassword("");
          console.log("sent to backend");
        }, 5000);
      }
    }

    if (type === "login") {
      let newErrorState = { emailError: "", passwordError: "", createUserError: "", serverError: "" };
      // Empty fields check
      if (email === "" && password === "") {
        newErrorState.emailError = "* Provide an email";
        newErrorState.passwordError = "* Provide password";
        setError(newErrorState);
      }
      if (email === "") {
        newErrorState.emailError = "* Provide an email";
        setError(newErrorState);
      }

      if (password === "") {
        newErrorState.passwordError = "* Provide password";
        setError(newErrorState);
      }

      // Find user in db
      if (email !== "" && password !== "") {
        const currentUser = users.filter((user) => {
          return user.email === email;
        });

        if (currentUser.length < 1) {
          newErrorState.emailError = "* Not a user";
          setError(newErrorState);
          return;
        }

        if (currentUser[0].password !== password) {
          newErrorState.passwordError = "* Incorrect password";
          setError(newErrorState);
          return;
        }

        setAuth({ ...auth, isAuth: true, userId: currentUser[0].userId, premium: currentUser[0].premium });
      }
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
          <p className="error">{error.emailError}</p>
        </label>

        <label>
          <p>
            Password{" "}
            <span style={type === "signup" ? {} : { display: "none" }} className="minLength">
              (Min 8 characters)
            </span>
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="error">{error.passwordError}</p>
        </label>

        <button className="btn" onClick={signupHandler}>
          {type === "signup" ? "Signup" : "Login"}
        </button>
        <p className="error validation">{error.createUserError || error.wrongUserError || error.serverError}</p>
      </form>
    </div>
  );
}
