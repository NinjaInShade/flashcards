import React, { useState, useEffect } from "react";
import "./AddCollection.css";
import { icons } from "../../utils/icons";
import Modal from ".././util/Modal";
import Input from ".././util/Input";

export default function AddCollection({ show, setShow }) {
  const [screenWidth, setScreenWidth] = useState();
  const [collectionName, setCollectionName] = useState("");
  const [iconName, setIconName] = useState("");
  const [error, setError] = useState({});

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

  useEffect(() => {
    setCollectionName("");
    setIconName("");
    setError({});
  }, [show]);

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
        <div className="AddCollection-InputGroup">
          <Input label="Name" maxLength="15" value={collectionName} onChange={(e) => setCollectionName(e.target.value)} error={[error.name]} width={screenWidth ? "220px" : "300px"} placeholder="Collection name" />
        </div>
        <div className="AddCollection-LabelWrapper">
          <label className="AddCollection-label">Pick an icon</label>
        </div>
        <div className="AddCollection-grid scrollbar">
          {Object.entries(icons).map(([name, icon]) => {
            return (
              <div className="AddCollection-preview" id={name} key={name} onClick={() => setIconName(name)} style={iconName === name ? { backgroundColor: "#e2e2e2" } : {}}>
                <i className={`${icon} fa-2x`} style={{ position: "absolute", color: "#D05775" }}></i>
              </div>
            );
          })}
        </div>
        <button className="PrimaryButton" onClick={addGroupHandler}>
          Create group
        </button>
        <p className="AddCollection-error">{error.collections}</p>
      </Modal>
    </React.Fragment>
  );
}
