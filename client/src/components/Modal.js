// Libraries , css and static files
import React from "react";
import "./Modal.css";

export default function Modal(props) {
  const { show, setShow, children, id } = props;

  return (
    <React.Fragment>
      <div className="modalOverlay" style={show ? {} : { display: "none" }} onClick={() => setShow(false)}></div>
      <div className="modalContent" style={show ? {} : { display: "none" }} id={id}>
        <div onClick={() => setShow(false)}>
          <i className="fas fa-times fa-2x close"></i>
        </div>
        {children}
      </div>
    </React.Fragment>
  );
}
