import React, { useState } from "react";
import Modal from ".././util/modal/Modal";
import ReactCardFlip from "react-card-flip";

import "./Flashcard.css";

export default function Flashcard(props) {
  const { frontContent, backContent } = props;
  const [modalContent, setModalContent] = useState("");
  const [flip, setFlip] = useState(false);
  const [show, setShow] = useState(false);

  function showFull(type) {
    if (type === "answer") {
      setModalContent("answer");
    } else {
      setModalContent("question");
    }

    setShow(!show);
  }

  function editFlashcard() {
    console.log("edited");
  }

  function deleteFlashcard() {
    console.log("deleted");
  }

  return (
    <>
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
            <button onClick={() => editFlashcard()}>
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
            <button onClick={() => editFlashcard()}>
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
