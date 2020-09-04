// Libraries , css and static files
import React, { useState, useContext } from "react";
import "./Auth.css";
import SignupImg from "../static/Signup.svg";
import LoginImg from "../static/Security.svg";

// Components and util
import Button from "../components/Button";
import validateEmail from "../util/validateEmail";
import validateUsername from "../util/validateUsername";
import validatePassword from "../util/validatePassword";
import { AuthContext } from "../util/AuthContext";

const users = [{ email: "leon@gmail.com", username: "Leon!", password: "testpassword", userId: "5", premium: true }];

export default function Auth(props) {
  const { type } = props;

  const [auth, setAuth] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  function signupHandler(e) {
    e.preventDefault();
    if (type === "signup") {
      let newErrorState = { emailError: "", usernameError: "", passwordError: "", createUserError: "", wrongUserError: "", serverError: "" };
      newErrorState.emailError = validateEmail(email);
      newErrorState.usernameError = validateUsername(username);
      newErrorState.passwordError = validatePassword(password);

      setError(newErrorState);

      if (newErrorState.emailError === "" && newErrorState.passwordError === "" && newErrorState.usernameError === "") {
        console.log(`send email ${email} and ${username} and password ${password} to backend as validated`);
        // Send to backend, if successfull, redirect to home page, if not set createUserError/serverError
        setTimeout(() => {
          setEmail("");
          setPassword("");
          console.log("sent to backend");
        }, 5000);
      }
    }

    if (type === "login") {
      let newErrorState = { emailError: "", usernameError: "", passwordError: "", createUserError: "", wrongUserError: "", serverError: "" };
      newErrorState.emailError = validateEmail(email);
      newErrorState.passwordError = validatePassword(password);
      setError(newErrorState);

      // Find user in db
      if (newErrorState.emailError === "" && newErrorState.passwordError === "") {
        const currentUser = users.filter((user) => {
          return user.email === email;
        });

        if (currentUser.length < 1) {
          newErrorState.emailError = "* Not a user";
          return setError(newErrorState);
        }

        if (currentUser[0].password !== password) {
          newErrorState.passwordError = "* Incorrect password";
          return setError(newErrorState);
        }

        setAuth({ ...auth, isAuth: true, userId: currentUser[0].userId, premium: currentUser[0].premium, username: currentUser[0].username });
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

        {type === "signup" && (
          <label>
            <p>Username</p>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <p className="error">{error.usernameError}</p>
          </label>
        )}

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

        <Button id="authPageBtn" onClick={signupHandler}>
          {type === "signup" ? "Signup" : "Login"}
        </Button>
        <p className="error validation">{error.createUserError || error.wrongUserError || error.serverError}</p>
      </form>
    </div>
  );
}
