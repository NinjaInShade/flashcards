import React, { useState, useEffect } from "react";
import { icons } from "../../utils/icons";
import Modal from ".././util/modal/Modal";
import Input from ".././util/input/Input";

import "./AddCollection.css";

export default function AddCollection({ show, setShow }) {
  const [collectionName, setCollectionName] = useState("");
  const [iconName, setIconName] = useState("");
  const [error, setError] = useState({});

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
    <>
      <Modal show={show} setShow={setShow}>
        <Input
          label="Name"
          maxLength="20"
          value={collectionName}
          setValue={(e) => setCollectionName(e.target.value)}
          error={[error.name]}
          placeholder="Collection name"
        />
        <div className="AddCollection-LabelWrapper">
          <label className="AddCollection-label">Pick an icon</label>
        </div>
        <div className="AddCollection-grid scrollbar">
          {Object.entries(icons).map(([name, icon]) => {
            return (
              <div
                className="AddCollection-preview"
                id={name}
                key={name}
                onClick={() => setIconName(name)}
                style={iconName === name ? { backgroundColor: "#e2e2e2" } : {}}
              >
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
    </>
  );
}
