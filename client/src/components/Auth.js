// Libraries , css and static files
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import signin from "../static/noAuthHome2.svg";
import signup from "../static/noAuthHome3.svg";

// Components and util
import { typography, device } from "../utils/globalCSS";
import Input from "../components/util/Input";
import Modal from "../components/util/Modal";
import Button from "../components/util/button/Button";
import validateEmail from "../utils/validateEmail";
import validateUsername from "../utils/validateUsername";
import validatePassword from "../utils/validatePassword";
import { AuthContext } from "../utils/AuthContext";

const users = [{ email: "leon@gmail.com", username: "Leon!", password: "testpassword", userId: "5", premium: true }];

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled(InnerContainer)`
  justify-content: space-between;
  align-items: flex-start;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImageContainer = styled(InnerContainer)`
  justify-content: flex-end;

  @media ${device.tablet} {
    display: none;
  }
`;

const Inputs = styled.div`
  width: 100%;
`;

const Heading = styled.h1`
  font-size: ${typography.h1};
`;

const ButtonsContainer = styled.div`
  width: 96%;
  display: flex;
  justify-content: flex-start;

  * {
    margin-right: 10px;
  }

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: flex-start;

    * {
      margin: 5px 0;
    }
  }
`;

export default function Auth(props) {
  const { type, pageContent, setPageContent } = props;
  const [auth, setAuth] = useContext(AuthContext);

  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    setError({});
  }, [pageContent]);

  function authHandler(e) {
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

    if (type === "signin") {
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

        setAuth({ ...auth, isAuth: true, userId: currentUser[0].userId, supporter: currentUser[0].supporter, username: currentUser[0].username });
      }
    }
  }

  return (
    <Modal show={show} setShow={setShow}>
      <MainContainer>
        <ContentContainer>
          <Heading>{pageContent === "signup" ? "Sign up" : "Sign in"}</Heading>
          <Inputs>
            {pageContent === "signup" && (
              <Input
                label="Username"
                maxLength="15"
                margin="15px 0"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                error={[error.usernameError, error.createUserError]}
                width="96%"
              />
            )}
            <Input
              label="Email"
              margin="15px 0"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              error={[error.emailError, error.wrongUserError, error.serverError]}
              width="96%"
            />
            <Input
              label="Password"
              password
              margin="15px 0 45px 0"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              error={[error.passwordError]}
              width="96%"
              type="password"
            />
            <ButtonsContainer>
              <Button type="tertiary" onClick={pageContent === "signup" ? () => setPageContent("signin") : () => setPageContent("signup")}>
                {pageContent === "signup" ? "Login" : "Sign up"}
              </Button>
              <Button type="secondary" onClick={authHandler}>
                {pageContent === "signup" ? "Create account" : "Login"}
              </Button>
            </ButtonsContainer>
          </Inputs>
        </ContentContainer>
        <ImageContainer>
          {pageContent === "signup" ? (
            <Image src={signup} alt="signup" style={{ marginTop: "60px" }} />
          ) : (
            <Image src={signin} alt="signin" style={{ marginTop: "60px" }} />
          )}
        </ImageContainer>
      </MainContainer>
    </Modal>
  );
}
