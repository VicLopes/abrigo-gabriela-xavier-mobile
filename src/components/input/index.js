import React from "react";
import "./styles.scss";

export default function Input({
  onChange,
  label,
  placeholder,
  name,
  type,
  required,
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}{required && "*"}</label>
      <input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  );
}
