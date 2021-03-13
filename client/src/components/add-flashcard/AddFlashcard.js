import React, { useState, useEffect } from "react";
import Modal from ".././util/modal/Modal";
import Input from ".././util/input/Input";
import Button from "../util/button/Button";

import "./AddFlashcard.css";

export default function AddFlashcard({ show, setShow }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    setQuestion("");
    setAnswer("");
    setError({});
  }, [show]);

  function createFlashcardHandler() {
    let newErrorState = { question: "", answer: "" };
    if (question.length === 0) {
      newErrorState.question = "Cannot be empty";
    }

    if (answer.length === 0) {
      newErrorState.answer = "Cannot be empty";
    }

    setError(newErrorState);

    if (newErrorState.question !== "" && newErrorState.answer !== "") {
      console.log("creating");
    }
  }

  return (
    <>
      <Modal show={show} setShow={setShow}>
        <Input
          label="question"
          maxLength="500"
          value={question}
          setValue={setQuestion}
          error={[error.question]}
          type="textarea"
          rows="5"
          placeholder="Type the question here..."
          className="add-flashcard-input"
        />
        <Input
          label="answer"
          value={answer}
          setValue={setAnswer}
          error={[error.answer]}
          type="textarea"
          rows="11"
          placeholder="Type the answer here..."
          maxLength="1000"
          className="add-flashcard-input"
        />
        <Button className="add-flashcard-btn" onClick={createFlashcardHandler}>
          Create flashcard
        </Button>
      </Modal>
    </>
  );
}
