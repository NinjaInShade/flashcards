import React, { useState } from "react";
import "./Flashcard.css";
import Modal from ".././util/Modal";

export default function Flashcard(props) {
  const { frontContent, backContent } = props;
  const [flip, setFlip] = useState(false);
  const [show, setShow] = useState(false);

  let ellipsis;
  let backContentFinal = backContent;
  if (backContent.length > 350) {
    backContentFinal = backContent.substring(0, 350);
    ellipsis = "...";
  }

  function editFlashcard() {
    console.log("edited");
  }

  function deleteFlashcard() {
    console.log("deleted");
  }

  return (
    <div className="Flashcard-container">
      <Modal show={show} setShow={setShow} asOverlay>
        <h1>Full answer:</h1>
        <div className="Flashcard-ModalTextContainer">
          <div className="Flashcard-ModalText">{backContent}</div>
        </div>
      </Modal>
      <div className="Flashcard-card" style={flip ? { transform: "perspective(1000px) rotateY(180deg)" } : {}}>
        <div className="Flashcard-content" style={{ display: flip ? "none" : "flex" }}>
          <p className="Flashcard-title">Question</p>
          <div className="Flashcard-InsideContent">
            <p className="Flashcard-InsideTextContent">{frontContent}</p>
          </div>
          <div className="Flashcard-flip">
            <button className="Flashcard-icons" onClick={() => editFlashcard()}>
              <i className="fas fa-edit"></i>
            </button>
            <button className="Flashcard-icons" onClick={() => deleteFlashcard()}>
              <i className="fas fa-trash"></i>
            </button>
            <p onClick={() => setFlip(!flip)}>Flip &gt;&gt;</p>
          </div>
        </div>

        <div className="Flashcard-content" style={{ transform: "rotateY(180deg)", display: flip ? "flex" : "none" }}>
          <p className="Flashcard-title">Answer</p>
          <div className="Flashcard-InsideContent">
            <p className="Flashcard-InsideTextContent">
              {backContentFinal}
              <span className="Flashcard-ellipsis" onClick={() => setShow(true)}>
                {ellipsis}
              </span>
            </p>
          </div>
          <div className="Flashcard-flip">
            <button className="Flashcard-icons" onClick={() => editFlashcard()}>
              <i className="fas fa-edit"></i>
            </button>
            <button className="Flashcard-icons" onClick={() => deleteFlashcard()}>
              <i className="fas fa-trash"></i>
            </button>
            <p onClick={() => setFlip(!flip)}>Flip &gt;&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
}