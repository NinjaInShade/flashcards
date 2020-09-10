// Libraries , css and static files
import React, { useState } from "react";
import "./Flashcard.css";

export default function Flashcard(props) {
  const { frontContent, backContent } = props;
  const [flip, setFlip] = useState(false);

  return (
    <div onClick={() => setFlip(!flip)} className={flip ? "FlashcardWrapper flip" : "FlashcardWrapper"}>
      <div className="FrontContentWrapper">
        <div className="FrontContentWrapperLimit scrollbar">
          <p>{frontContent}</p>
        </div>
      </div>

      <div className="BackContentWrapper">
        <div className="BackContentWrapperLimit scrollbar">
          <p>{backContent}</p>
        </div>
      </div>
    </div>
  );
}
