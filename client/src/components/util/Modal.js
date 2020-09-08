// Libraries , css and static files
import React from "react";
import "./Modal.css";

export default function Modal(props) {
  const { show, setShow, children, position, w, h } = props;

  return (
    <React.Fragment>
      <div className="modalOverlay" style={show ? {} : { display: "none" }} onClick={() => setShow(false)}></div>
      <div className="modalContent" style={show ? { justifyContent: position, width: w, height: h } : { display: "none" }}>
        <div onClick={() => setShow(false)}>
          <i className="fas fa-times fa-2x close"></i>
        </div>
        {children}
      </div>
    </React.Fragment>
  );
}
