// Libraries , css and static files
import React, { useState } from "react";
import "./AddGroup.css";

// Components and util
import { icons } from "../utils/icons";
import Modal from "./util/Modal";
import Button from "./util/Button";
import Add from "./util/Add";

export default function AddCollection() {
  const [collectionName, setCollectionName] = useState("");
  const [iconName, setIconName] = useState("");

  const [error, setError] = useState({});
  const [show, setShow] = useState(false);

  function openGroupHandler() {
    setCollectionName("");
    setIconName("");
    setError({});
    setShow(true);
    Object.entries(icons).forEach(([name]) => {
      document.getElementById(name).classList.remove("iconPreviewCardSelected");
    });
  }

  function addGroupHandler() {
    let newError = { name: "", collections: "" };
    if (collectionName === "" || collectionName.length > 15) {
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

  function iconClickHandler(icon) {
    Object.entries(icons).forEach(([name, icon]) => {
      if (name === icon) {
        return;
      }

      document.getElementById(name).classList.remove("iconPreviewCardSelected");
    });

    setIconName(icon);
    document.getElementById(icon).classList.add("iconPreviewCardSelected");
  }

  return (
    <React.Fragment>
      <Modal show={show} setShow={setShow}>
        <div className="inputGroup">
          <h2 className="nameGroup">Name your group</h2>
          <input type="text" className="addGroupInput" maxLength="15" value={collectionName} onChange={(e) => setCollectionName(e.target.value)} />
          <p className="errorText">{error.name}</p>
        </div>
        <h2 className="nameGroup">Pick an icon for your group</h2>
        <div className="iconSelectionGrid scrollbar">
          {Object.entries(icons).map(([name, icon]) => {
            return (
              <div className="iconPreviewCard" id={name} key={name} onClick={() => iconClickHandler(name)}>
                <img src={icon} alt="icon" className="groupIcon" />
              </div>
            );
          })}
        </div>
        <Button onClick={addGroupHandler}>Create group</Button>
        <p className="errorText">{error.groups}</p>
      </Modal>
      <Add onClick={openGroupHandler} />
    </React.Fragment>
  );
}
