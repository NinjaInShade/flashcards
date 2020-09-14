// Libraries , css and static files
import React, { useState } from "react";
import styled from "styled-components";

const FlashcardWrapper = styled.div`
  border-radius: 4px;
  padding: 180px 130px;
  position: relative;
  background-color: #6a1b9a;
  margin: 15px;
  transform: perspective(1000px) rotateY(0);
  transform-style: preserve-3d;
  transition: 300ms;
  cursor: pointer;
`;

const FlashcardContentWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
`;

const TextLimiter = styled.div`
  width: 75%;
  height: 75%;
  word-wrap: break-word;
  overflow-y: scroll;
  text-align: center;
`;

export default function Flashcard(props) {
  const { frontContent, backContent } = props;
  const [flip, setFlip] = useState(false);

  return (
    <FlashcardWrapper onClick={() => setFlip(!flip)} style={flip ? { transform: "perspective(1000px) rotateY(180deg)" } : {}}>
      <FlashcardContentWrapper>
        <TextLimiter className="scrollbar">
          <p>{frontContent}</p>
        </TextLimiter>
      </FlashcardContentWrapper>

      <FlashcardContentWrapper style={{ transform: "rotateY(180deg)" }}>
        <TextLimiter className="scrollbar">
          <p>{backContent}</p>
        </TextLimiter>
      </FlashcardContentWrapper>
    </FlashcardWrapper>
  );
}
