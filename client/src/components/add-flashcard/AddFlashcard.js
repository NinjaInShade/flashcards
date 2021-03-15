import React, { useState, useEffect, useContext } from "react";
import Modal from ".././util/modal/Modal";
import Input from ".././util/input/Input";
import Button from "../util/button/Button";
import { AuthContext } from "../../utils/AuthContext";

import "./AddFlashcard.css";

export default function AddFlashcard({ show, setShow, collectionId, flashcardId, edit = false }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState({});

  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    setQuestion("");
    setAnswer("");
    setError({});

    if (edit) {
      fetch(`${process.env.REACT_APP_API_DOMAIN}/flashcards/${flashcardId}`, { method: "GET", credentials: "include" })
        .then((res) => res.json())
        .then((data) => {
          setQuestion(data.flashcard.question);
          setAnswer(data.flashcard.answer);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [show, edit, flashcardId]);

  function addOrEditFlashcard() {
    const domain = edit
      ? `${process.env.REACT_APP_API_DOMAIN}/flashcards/edit/${collectionId}/${flashcardId}`
      : `${process.env.REACT_APP_API_DOMAIN}/flashcards/add`;
    const method = edit ? "PATCH" : "POST";

    let newErrorState = { question: "", answer: "" };
    if (question.length === 0) {
      newErrorState.question = "Cannot be empty";
    }

    if (answer.length === 0) {
      newErrorState.answer = "Cannot be empty";
    }

    setError(newErrorState);

    if (newErrorState.question === "" && newErrorState.answer === "") {
      fetch(domain, {
        credentials: "include",
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: question, answer: answer, collection_id: collectionId }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.error) {
            return;
          }

          let collections = [...auth.collections];
          const collectionIndex = collections.findIndex((c) => c._id.toString() === collectionId.toString());

          let updatedCollection = { ...auth.collections[collectionIndex] };

          if (edit) {
            const flashcardIndex = collections[collectionIndex].flashcards.findIndex((f) => f._id.toString() === flashcardId.toString());

            updatedCollection.flashcards[flashcardIndex] = { ...updatedCollection.flashcards[flashcardIndex], question, answer };
          } else {
            updatedCollection.flashcards.push(data.newFlashcard);
          }

          collections[collectionIndex] = updatedCollection;

          setAuth({ ...auth, collections });
          setShow(false);
        })
        .catch((err) => {
          console.log(err);
        });
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
        <Button className="add-flashcard-btn" onClick={addOrEditFlashcard}>
          {edit ? "Edit flashcard" : "Create flashcard"}
        </Button>
      </Modal>
    </>
  );
}
