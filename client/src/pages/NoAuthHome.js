// Libraries , css and static files
import React, { useState } from "react";
import styled from "styled-components";
import authenticate from "../static/noAuthHome.svg";
// Components and util
import Modal from "../components/util/Modal";
import Button from "../components/util/button/Button";
import Auth from "../components/Auth";
import { typography, device } from "../utils/globalCSS";

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 30px;
  margin-left: 35px;

  @media ${device.laptop} {
    margin-left: 0;
  }
`;

const Heading = styled.h1`
  font-size: ${typography.h1};
  margin-bottom: 40px;
  text-align: center;

  @media ${device.mobileL} {
    font-size: ${typography.h3};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  * {
    margin-right: 10px;
  }

  @media ${device.mobileL} {
    flex-direction: column;

    * {
      margin-bottom: 10px;
    }
  }
`;

export default function NoAuliHome(props) {
  const [pageContent, setPageContent] = useState("default");
  const [show, setShow] = useState(true);

  let content;
  if (pageContent === "default") {
    content = (
      <Modal show={show} setShow={setShow} style={{ marginTop: "20px" }}>
        <Image src={authenticate} alt="authentication" />
        <Heading>Sign up for full access and features!</Heading>
        <ButtonsContainer>
          <Button type="secondary" onClick={() => setPageContent("signup")}>
            Sign up
          </Button>
          <Button type="tertiary" onClick={() => setPageContent("signin")}>
            Login
          </Button>
        </ButtonsContainer>
      </Modal>
    );
  }
  if (pageContent === "signup") {
    content = <Auth type="signup" pageContent={pageContent} setPageContent={setPageContent} />;
  }
  if (pageContent === "signin") {
    content = <Auth type="signin" pageContent={pageContent} setPageContent={setPageContent} />;
  }

  return content;
}
