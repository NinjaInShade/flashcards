// Libraries , css and static files
import React, { useState } from "react";
import styled from "styled-components";

// Components and util
import { icons } from "../utils/icons";
import { typography, colours } from "../utils/globalCSS";
import Modal from "./util/Modal";
import Button from "./util/Button";
import Add from "./util/Add";
import Input from "./util/Input";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.div`
  width: 300px;
  margin: 15px 0;

  @media (max-width: 330px) {
    width: 220px;
  }
`;

const Label = styled.label`
  font-family: ${typography.secondaryFont};
  font-size: ${typography.p};
`;

const ErrorText = styled(Label)`
  color: ${colours.error100};
  margin-top: 2px;
`;

const IconSelectGrid = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  max-height: 500px;
  overflow-y: scroll;
  background-color: #e1e1e1;

  @media (max-width: 660px) {
    width: 300px;
  }

  @media (max-width: 330px) {
    width: 220px;
  }
`;

const IconPreview = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 8px;
  padding: 40px;
  background-color: ${colours.primary300};
  cursor: pointer;

  :hover {
    background-color: ${colours.primary200};
  }
`;

export default function AddCollection() {
  const [screenWidth, setScreenWidth] = useState();
  const [collectionName, setCollectionName] = useState("");
  const [iconName, setIconName] = useState("");
  const [error, setError] = useState({});
  const [show, setShow] = useState(false);

  // Media query listener
  let mql = window.matchMedia("(max-width: 330px)");

  function screenTest(e) {
    if (e.matches) {
      /* the viewport is 600 pixels wide or less */
      setScreenWidth(true);
    } else {
      /* the viewport is more than than 600 pixels wide */
      setScreenWidth(false);
    }
  }

  mql.addListener(screenTest);

  function openGroupHandler() {
    setCollectionName("");
    setIconName("");
    setError({});
    setShow(true);
  }

  function addGroupHandler() {
    let newError = { name: "", collections: "" };
    if (!collectionName || collectionName.length > 15) {
      newError.name = "* Please provide a name";
    }

    if (iconName === "") {
      newError.collections = "* Please choose a collection";
    }

    setError(newError);

    if (newError.name === "" && newError.collections === "") {
      console.log(`sending ${collectionName} and ${iconName} to backend`);
      setShow(false);
    }
  }

  return (
    <React.Fragment>
      <Modal show={show} setShow={setShow} asOverlay>
        <InputGroup>
          <Input label="Name" maxLength="15" value={collectionName} onChange={(e) => setCollectionName(e.target.value)} error={[error.name]} width={screenWidth ? "220px" : "300px"} placeholder="Collection name" />
        </InputGroup>
        <LabelWrapper>
          <Label>Pick an icon</Label>
        </LabelWrapper>
        <IconSelectGrid className="scrollbar">
          {Object.entries(icons).map(([name, icon]) => {
            return (
              <IconPreview id={name} key={name} onClick={() => setIconName(name)} style={iconName === name ? { backgroundColor: `${colours.primary200}` } : {}}>
                <i className={`${icon} fa-2x`} style={{ position: "absolute", color: "#07144a" }}></i>
              </IconPreview>
            );
          })}
        </IconSelectGrid>
        <Button onClick={addGroupHandler}>Create group</Button>
        <ErrorText>{error.collections}</ErrorText>
      </Modal>
      <Add onClick={openGroupHandler} />
    </React.Fragment>
  );
}
