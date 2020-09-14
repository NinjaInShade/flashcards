// Libraries , css and static files
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Redirect, useParams } from "react-router-dom";

// Components and util
import { AuthContext } from "../utils/AuthContext";
import Flashcard from "../components/Flashcard";
import Add from "../components/util/Add";

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
  // eslint-disable-next-line
  const [show, setShow] = useState(false);
  const { groupId } = useParams();

  const content = (
    <Column>
      <Row>
        <Add onClick={() => setShow(true)} />
      </Row>
      <Row>
        {auth.groups
          .filter((group) => {
            return group.id === groupId;
          })[0]
          .flashcards.map((flashcard) => {
            return <Flashcard frontContent={flashcard.question} backContent={flashcard.answer} key={flashcard.question} />;
          })}
      </Row>
    </Column>
  );

  return auth.isAuth ? content : <Redirect to="/" />;
}
