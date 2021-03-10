import React, { useState, useEffect } from "react";
import Modal from ".././util/modal/Modal";
import Input from ".././util/Input";

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
    if (question === "") {
      newErrorState.question = "Cannot be empty";
    }

    if (answer === "") {
      newErrorState.answer = "Cannot be empty";
    }

    setError(newErrorState);
    if (question !== "" && answer !== "") {
      console.log("creating");
    }
  }

  return (
    <React.Fragment>
      <Modal show={show} setShow={setShow} asOverlay>
        <Input
          label="question"
          maxLength="200"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          error={[error.question]}
          width="100%"
          type="textarea"
          rows="5"
          margin="10px 0"
          placeholder="Type the question here"
        />
        <Input
          label="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          error={[error.answer]}
          width="100%"
          type="textarea"
          rows="11"
          margin="10px 0"
          placeholder="Type the answer here"
        />
        <button className="PrimaryButton" onClick={createFlashcardHandler}>
          Create flashcard
        </button>
      </Modal>
    </React.Fragment>
  );
}
