// Libraries , css and static files
import React from "react";
import styled from "styled-components";
import close from "../../../static/close.svg";

import "./Modal.css";

export default function Modal({ show, setShow, children }) {
  return (
    <>
      <div className={`modal-overlay ${!show && "modal-overlay-hidden"}`} onClick={() => setShow(false)}></div>
      <div className={`modal-content ${!show && "modal-content-hidden"}`}>
        <button>
          <img onClick={() => setShow(false)} src={close} alt="close icon" className="modal-close"></img>
        </button>
        {children}
      </div>
    </>
  );
}
