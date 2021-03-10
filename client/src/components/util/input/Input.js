// Libraries , css and static files
import React from "react";

import "./Input.css";

export default function Input({ value, setValue, placeholder, label, type = "text", maxLength, error, rows }) {
  return (
    <div className="input-group">
      <label className={`input-label ${error.filter((error) => error !== undefined && error !== "").length > 0 && "input-label-error"}`}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea className="input-textarea" maxLength={maxLength} onChange={setValue} value={value} placeholder={placeholder} rows={rows} />
      ) : (
        <input className="input" type={type} maxLength={maxLength} onChange={setValue} value={value} placeholder={placeholder} />
      )}
      <p className="input-error">{error.map((error) => error)}</p>
    </div>
  );
}
