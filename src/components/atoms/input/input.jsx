import React from "react";
import "./input.css";

const Input = ({
  className,
  type,
  placeholder,
  icon: Icon,
  onChange,
  value,
}) => {
  return (
    <div className={className}>
      {Icon && <Icon className="icon--input" />}
      <input
        className="textInput"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
