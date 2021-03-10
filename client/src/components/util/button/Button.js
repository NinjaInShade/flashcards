// Libraries , css and static files
import React from "react";

import "./Button.css";

export default function Button({ children, className, onClick, type = "button", disabled }) {
  // const { children, style, onClick, type = "secondary", disabled, small, large, icon } = props;

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={`btn ${className}`}>
      {children}
    </button>
  );
}
