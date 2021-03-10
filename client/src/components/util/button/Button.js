// Libraries , css and static files
import React from "react";

import "./Button.css";

export default function Button({ children, className, onClick, type = "button", disabled, ghost }) {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={`btn ${className} ${ghost && "ghost-btn"}`}>
      {children}
    </button>
  );
}
