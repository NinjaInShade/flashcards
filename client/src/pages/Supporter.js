// Libraries , css and static files
import React, { useState } from "react";
import "./Supporter.css";
import supporterBadge from "../static/supporterBadge.png";

// Components and util
import Button from "../components/util/Button";
import Modal from "../components/util/Modal";

export default function Supporter() {
  const [modal, setModal] = useState(false);
  const [donateAmount, setDonateAmount] = useState("£");

  function buttonHandler(e) {
    e.preventDefault();
    setModal(true);
  }

  function changeHandler(e) {
    if (e.target.value[0] !== "£") {
      setDonateAmount("£");
      return;
    }

    if (/^\d+$/.test(e.target.value.substring(1)) === false) {
      if (e.target.value.substring(1) === "") {
        setDonateAmount(e.target.value);
        return;
      }

      return;
    }
    setDonateAmount(e.target.value);
  }

  function paypalHandler(e) {
    e.preventDefault();
  }

  return (
    <React.Fragment>
      <Modal show={modal} setShow={setModal} asOverlay>
        <div className="supportModalContent">
          <p>All donations are truly appreciated</p>
          <input type="text" placeholder="Please enter an amount" value={donateAmount} onChange={changeHandler} />
          <Button id="supportBtn" onClick={paypalHandler}>
            Donate
          </Button>
        </div>
      </Modal>
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
          <Button onClick={buttonHandler} type="secondary" style={{ margin: "auto" }}>
            Support me
          </Button>
        </div>
        <div></div>
      </div>
    </React.Fragment>
  );
}
