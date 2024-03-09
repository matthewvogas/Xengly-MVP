import React from "react";
import "./textArea.css";

const TextArea = ({ placeholder, className, maxLength, value, onChange }) => {
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      name="biography"
      maxLength={maxLength}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
