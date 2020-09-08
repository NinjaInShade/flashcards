// Libraries , css and static files
import React from "react";
import "./Button.css";

export default function Button(props) {
  const { children, onClick, id } = props;
  return (
    <button className="btn" onClick={onClick} id={id}>
      {children}
    </button>
  );
}
