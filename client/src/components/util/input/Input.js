// Libraries , css and static files
import React from "react";

import "./Input.css";

export default function Input({ value, setValue, placeholder, label, type = "text", maxLength, error, rows, className }) {
  return (
    <div className={`input-group ${className && className}`}>
      <label className={`input-label ${error.filter((error) => error !== undefined && error !== "").length > 0 && "input-label-error"}`}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="input-textarea"
          maxLength={maxLength}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          rows={rows}
        />
      ) : (
        <input
          className="input"
          type={type}
          maxLength={maxLength}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      )}
      <p className="input-error">{error.map((error) => error)}</p>
    </div>
  );
}
