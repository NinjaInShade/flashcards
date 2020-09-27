// Libraries , css and static files
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Redirect, useParams } from "react-router-dom";

// Components and util
import { AuthContext } from "../utils/AuthContext";
import CollectionCard from "../components/collection-card/CollectionCard";
import Flashcard from "../components/Flashcard";
import Modal from "../components/util/Modal";
import Input from "../components/util/Input";
import Add from "../components/util/Add";
import Button from "../components/util/Button";

const Column = styled.div`
  width: 75%;
  margin: auto;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 900px) {
    width: 95%;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Collections() {
  const [auth] = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState({});
  const { collectionId } = useParams();

  const currentCollection = auth.collections.filter((collection) => collection.id === collectionId)[0];

  function addFlashcard() {
    setQuestion("");
    setAnswer("");
    setShow(true);
  }

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

  const content = (
    <React.Fragment>
      <Modal show={show} setShow={setShow} asOverlay>
        <Input label="question" maxLength="350" value={question} onChange={(e) => setQuestion(e.target.value)} error={[error.question]} width="100%" type="textarea" rows="5" margin="10px 0" placeholder="Type the question here" />
        <Input label="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} error={[error.answer]} width="100%" type="textarea" rows="11" margin="10px 0" placeholder="Type the answer here" />
        <Button onClick={createFlashcardHandler}>Create flashcard</Button>
      </Modal>
      <Column>
        <Row>
          <CollectionCard id={collectionId} name={currentCollection.name} icon={currentCollection.icon} margin="10px" />
          <Add onClick={addFlashcard} margin="10px" />
        </Row>
        <Row>
          {auth.collections
            .filter((collection) => {
              return collection.id === collectionId;
            })[0]
            .flashcards.map((flashcard) => {
              return <Flashcard frontContent={flashcard.question} backContent={flashcard.answer} key={Math.random()} />;
            })}
        </Row>
      </Column>
    </React.Fragment>
  );

  return auth.isAuth ? content : <Redirect to="/" />;
}
