import React, { useState, useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import Modal from ".././util/modal/Modal";
import AddFlashcard from "../add-flashcard/AddFlashcard";
import ReactCardFlip from "react-card-flip";

import "./Flashcard.css";

export default function Flashcard({ frontContent, backContent, id, currentCollectionId }) {
  const [modalContent, setModalContent] = useState("");
  const [flip, setFlip] = useState(false);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const { auth, setAuth } = useContext(AuthContext);

  function showFull(type) {
    if (type === "answer") {
      setModalContent("answer");
    } else {
      setModalContent("question");
    }

    setShow(!show);
  }

  function deleteFlashcard() {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/flashcards/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        const collectionIndex = auth.collections.findIndex((c) => c._id.toString() === currentCollectionId.toString());

        const updatedFlashcards = auth.collections[collectionIndex].flashcards.filter((f) => f._id !== id);
        const updatedCollection = { ...auth.collections[collectionIndex], flashcards: updatedFlashcards };

        let updatedCollections = [...auth.collections];
        updatedCollections[collectionIndex] = updatedCollection;

        setAuth({ ...auth, collections: updatedCollections });
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <AddFlashcard show={showEdit} setShow={setShowEdit} collectionId={currentCollectionId} flashcardId={id} edit={true} />
      <Modal show={show} setShow={setShow}>
        <h1 className="flashcard-modal-title">Full {modalContent}:</h1>
        <p className="flashcard-modal-content">{modalContent === "answer" ? backContent : frontContent}</p>
      </Modal>
      <ReactCardFlip isFlipped={flip} containerStyle={{ margin: "15px", width: "100%" }} infinite={true}>
        <div className="flashcard">
          <p className="flashcard-title">Question</p>
          <p className="flashcard-content">
            {frontContent.length > 150 ? (
              <>
                {`${frontContent.substring(0, 150)}`}
                <span className="flashcard-ellipsis" onClick={() => showFull("question")}>
                  ...
                </span>
              </>
            ) : (
              frontContent
            )}
          </p>
          <div className="flashcard-flip">
            <button onClick={() => setShowEdit(!showEdit)}>
              <i className="fas fa-edit flashcard-icon"></i>
            </button>
            <button onClick={() => deleteFlashcard()}>
              <i className="fas fa-trash flashcard-icon"></i>
            </button>
            <p onClick={() => setFlip(!flip)} className="flashcard-flip-text">
              Flip &gt;&gt;
            </p>
          </div>
        </div>

        <div className="flashcard">
          <p className="flashcard-title">Answer</p>
          <p className="flashcard-content">
            {backContent.length > 200 ? (
              <>
                {`${backContent.substring(0, 200)}`}
                <span className="flashcard-ellipsis" onClick={() => showFull("answer")}>
                  ...
                </span>
              </>
            ) : (
              backContent
            )}
          </p>
          <div className="flashcard-flip">
            <button onClick={() => setShowEdit(!showEdit)}>
              <i className="fas fa-edit flashcard-icon"></i>
            </button>
            <button onClick={() => deleteFlashcard()}>
              <i className="fas fa-trash flashcard-icon"></i>
            </button>
            <p onClick={() => setFlip(!flip)} className="flashcard-flip-text">
              Flip &gt;&gt;
            </p>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
}
