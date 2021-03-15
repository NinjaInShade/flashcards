import React, { useState, useEffect, useContext } from "react";
import { icons } from "../../utils/icons";
import { AuthContext } from "../../utils/AuthContext";
import Modal from ".././util/modal/Modal";
import Button from "../util/button/Button";
import Input from ".././util/input/Input";

import "./AddCollection.css";

export default function AddCollection({ show, setShow, edit = false, collectionId }) {
  const { auth, setAuth } = useContext(AuthContext);
  const [collectionName, setCollectionName] = useState("");
  const [iconName, setIconName] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    setCollectionName("");
    setIconName("");
    setError({});

    if (edit) {
      fetch(`${process.env.REACT_APP_API_DOMAIN}/collections/${collectionId}`, { method: "GET", credentials: "include" })
        .then((res) => res.json())
        .then((data) => {
          setCollectionName(data.collection.name);
          setIconName(data.collection.icon);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [show, edit, collectionId]);

  function addOrEditCollection(e) {
    e.preventDefault();

    const domain = edit
      ? `${process.env.REACT_APP_API_DOMAIN}/collections/edit/${collectionId}`
      : `${process.env.REACT_APP_API_DOMAIN}/collections/add`;
    const method = edit ? "PATCH" : "POST";

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
      fetch(domain, {
        method: method,
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: collectionName, icon: iconName }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (edit) {
            let updatedCollections = [...auth.collections];
            const collectionIndex = auth.collections.findIndex((c) => c._id.toString() === collectionId.toString());

            updatedCollections[collectionIndex] = { ...updatedCollections[collectionIndex], name: collectionName, icon: iconName };

            setAuth({ ...auth, collections: updatedCollections });
          } else {
            setAuth({ ...auth, collections: [...auth.collections, { ...data.newCollection, flashcards: [] }] });
          }
          setShow(false);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <Modal show={show} setShow={setShow}>
        <form className="AddCollection-form">
          <Input label="Name" maxLength="20" value={collectionName} setValue={setCollectionName} error={[error.name]} placeholder="Collection name" />
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
          <Button onClick={(e) => addOrEditCollection(e)} type="submit" className="AddCollection-btn">
            {edit ? "Edit collection" : "Create collection"}
          </Button>
          <p className="AddCollection-error">{error.collections}</p>
        </form>
      </Modal>
    </>
  );
}
