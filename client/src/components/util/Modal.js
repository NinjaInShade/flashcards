// Libraries , css and static files
import React, { useEffect } from "react";
import styled from "styled-components";
import close from "../../static/close.svg";

// Components and util
import { colours, device } from "../../utils/globalCSS";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${(props) => props.zIndex};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: ${(props) => (props.asOverlay ? "fixed" : "initial")};
  align-items: center;
  justify-content: flex-start;
  z-index: ${(props) => props.zIndex + 1};
  top: 50%;
  left: 50%;
  margin: ${(props) => (props.asOverlay ? "" : "10vh auto")};
  transform: ${(props) => (props.asOverlay ? "translate(-50%, -50%)" : "")};
  background-color: ${colours.neutral100};
  padding: ${(props) => (props.asOverlay ? "15px" : "30px")};
  width: 900px;
  height: 650px;
  box-shadow: ${(props) => (props.asOverlay ? "" : "0px 5px 16px 0px rgba(0,0,0,0.25)")};

  @media ${device.laptop} {
    width: 100%;
    height: fit-content;
    margin: ${(props) => (props.asOverlay ? "" : "0 auto")};
  }
`;

const CloseIcon = styled.img`
  cursor: pointer;
  align-self: flex-end;
  width: 40px;
  height: 40px;
`;

export default function Modal(props) {
  const { show, setShow, children, asOverlay, zIndex = "99" } = props;

  useEffect(() => {
    document.getElementById("body").style.overflow = show ? "hidden" : "initial";
  }, [show]);

  return (
    <React.Fragment>
      {asOverlay && <ModalOverlay style={show ? {} : { display: "none" }} onClick={() => setShow(false)} zIndex={zIndex}></ModalOverlay>}
      <ModalContent style={show ? {} : { display: "none" }} zIndex={zIndex} asOverlay={asOverlay}>
        {asOverlay && <CloseIcon onClick={() => setShow(false)} src={close} alt="close icon"></CloseIcon>}
        {children}
      </ModalContent>
    </React.Fragment>
  );
}
