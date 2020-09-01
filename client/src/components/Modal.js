// Libraries , css and static files
import React from "react";
import "./Modal.css";

export default function Modal(props) {
  const { show, setShow } = props;

  return (
    <React.Fragment>
      <div className="modalOverlay" style={show ? {} : { display: "none" }} onClick={() => setShow(false)}></div>
      <div className="modalContent" style={show ? {} : { display: "none" }}></div>
    </React.Fragment>
  );
}
