// Libraries , css and static files
import React, { useState } from "react";
import "./Supporter.css";
import supporterBadge from "../static/supporterBadge.png";

// Components and util
import Modal from "../components/Modal";

export default function Supporter() {
  const [modal, setModal] = useState(false);

  function buttonHandler(e) {
    e.preventDefault();
    setModal(true);
  }

  return (
    <React.Fragment>
      <Modal show={modal} setShow={setModal} />
      <h1 className="title">Become a supporter</h1>
      <div className="supporterWrapper">
        <div></div>
        <div className="benefits">
          <img src={supporterBadge} alt="supporter badge" className="badge" />
          <h2>Benefits</h2>
          <ul className="benefitsList">
            <li>
              <i className="fas fa-star icon"></i>Supports me financially as a student
            </li>
            <li>
              <i className="fas fa-star icon"></i>Exclusive badge
            </li>
            <li>
              <i className="fas fa-star icon"></i>Max groups now 20
            </li>
            <li>
              <i className="fas fa-star icon"></i>Max flashcards per group now 50
            </li>
            <li>
              <i className="fas fa-star icon"></i>Send me ideas you'd like me to add
            </li>
          </ul>
          <button className="btn supportBtn" onClick={buttonHandler}>
            Support me
          </button>
        </div>
        <div></div>
      </div>
    </React.Fragment>
  );
}
