// Libraries , css and static files
import React, { useState } from "react";
import "./AddGroup.css";
import addIcon from "../static/plus.svg";
import addIconActive from "../static/plusActive.svg";

// Components and util
import { icons } from "../util/icons";
import Modal from "./util/Modal";
import Button from "./util/Button";

export default function AddGroup() {
  const [groupName, setGroupName] = useState("");
  const [iconName, setIconName] = useState("");

  const [error, setError] = useState({});
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const icon = active ? addIconActive : addIcon;

  function openGroupHandler() {
    setGroupName("");
    setIconName("");
    setError({});
    setShow(true);
    Object.entries(icons).forEach(([name]) => {
      document.getElementById(name).classList.remove("iconPreviewCardSelected");
    });
  }

  function addGroupHandler() {
    let newError = { name: "", groups: "" };
    if (groupName === "" || groupName.length > 15) {
      newError.name = "* Please provide a name";
    }

    if (iconName === "") {
      newError.groups = "* Please choose a group";
    }

    setError(newError);

    if (newError.name === "" && newError.groups === "") {
      console.log(`sending ${groupName} and ${iconName} to backend`);
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
      <Modal show={show} setShow={setShow} position="flex-start" w="75%" h="75%">
        <div className="inputGroup">
          <h2 className="nameGroup">Name your group</h2>
          <input type="text" className="addGroupInput" maxLength="15" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
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
        <Button id="addGroupBtn" onClick={addGroupHandler}>
          Create group
        </Button>
        <p className="errorText">{error.groups}</p>
      </Modal>
      <div className="addGroupContainer" style={active ? { backgroundColor: "#792ea8" } : {}} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
        <img src={icon} alt="add icon" className="addGroupIcon" onClick={openGroupHandler} />
      </div>
    </React.Fragment>
  );
}
