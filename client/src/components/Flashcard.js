// Libraries , css and static files
import React, { useState } from "react";
import styled from "styled-components";

// Components and util
import { colours, typography } from "../utils/globalCSS";
import Modal from "./util/Modal";

const FlashcardWrapper = styled.div`
  border-radius: 15px;
  width: 250px;
  height: 350px;
  background-color: ${colours.primary200};
  margin: 15px;
  padding: 10px;
  transform: perspective(1000px) rotateY(0);
  transform-style: preserve-3d;
  transition: 300ms;
`;

const FlashcardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  backface-visibility: hidden;
`;

const SmallItalicText = styled.p`
  color: ${colours.neutral300};
  font-style: italic;
`;

const FlipText = styled(SmallItalicText)`
  align-self: flex-end;
  cursor: pointer;
`;

const UserInfoContainer = styled.div`
  height: 290px;
  max-width: 100%;
  word-wrap: break-word;
`;

const UserInfo = styled.p`
  padding-top: 15px;
  color: ${colours.neutral100};
  font-size: ${typography.h5};
  letter-spacing: 1px;
`;

const EllipsisOverflow = styled.span`
  cursor: pointer;
  color: ${colours.neutral100};
`;

const ModalTextContainer = styled.div`
  margin-top: 20px;
  max-width: 100%;
  word-wrap: break-word;
`;

const ModalText = styled.p`
  letter-spacing: 1px;
`;

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

  return (
    <React.Fragment>
      <Modal show={show} setShow={setShow} asOverlay>
        <h1>Full answer:</h1>
        <ModalTextContainer>
          <ModalText>{backContent}</ModalText>
        </ModalTextContainer>
      </Modal>
      <FlashcardWrapper style={flip ? { transform: "perspective(1000px) rotateY(180deg)" } : {}}>
        <FlashcardContentWrapper style={{ display: flip ? "none" : "flex" }}>
          <SmallItalicText>Question</SmallItalicText>
          <UserInfoContainer>
            <UserInfo>{frontContent}</UserInfo>
          </UserInfoContainer>
          <FlipText onClick={() => setFlip(!flip)}>Flip >></FlipText>
        </FlashcardContentWrapper>

        <FlashcardContentWrapper style={{ transform: "rotateY(180deg)", display: flip ? "flex" : "none" }}>
          <SmallItalicText>Answer</SmallItalicText>
          <UserInfoContainer>
            <UserInfo>
              {backContentFinal}
              <EllipsisOverflow onClick={() => setShow(true)}>{ellipsis}</EllipsisOverflow>
            </UserInfo>
          </UserInfoContainer>
          <FlipText onClick={() => setFlip(!flip)}>Flip >></FlipText>
        </FlashcardContentWrapper>
      </FlashcardWrapper>
    </React.Fragment>
  );
}
