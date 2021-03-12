import React, { useState, useEffect } from "react";
import { icons } from "../../utils/icons";
import Modal from ".././util/modal/Modal";
import Button from "../util/button/Button";
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

  function addGroupHandler(e) {
    e.preventDefault();

    let newError = { name: "", collections: "" };
    if (!collectionName) {
      newError.name = "* Please provide a name";
    }

    if (collectionName.length > 20) {
      newError.name = "* Cannot exceed 20 chars";
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
        <form className="AddCollection-form">
          <Input
            label="Name"
            maxLength="20"
            value={collectionName}
            setValue={(e) => setCollectionName(e.target.value)}
            error={[error.name]}
            placeholder="Collection name"
          />
          <div className="AddCollection-label-container">
            <label className="AddCollection-label">Pick an icon</label>
          </div>
          <div className="AddCollection-grid scrollbar">
            {Object.entries(icons).map(([name, icon]) => {
              return (
                <div
                  className={`AddCollection-preview ${iconName === name && "AddCollection-preview-active"}`}
                  id={name}
                  key={name}
                  onClick={() => setIconName(name)}
                >
                  <i className={`${icon} fa-2x AddCollection-collection-icon`}></i>
                </div>
              );
            })}
          </div>
          <Button onClick={(e) => addGroupHandler(e)} type="submit" className="AddCollection-btn">
            Create collection
          </Button>
          <p className="AddCollection-error">{error.collections}</p>
        </form>
      </Modal>
    </>
  );
}
