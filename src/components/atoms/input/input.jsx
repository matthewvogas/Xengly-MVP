import React from "react";
import "./input.css";

const Input = ({ className, type, placeholder, icon: Icon }) => {
  return (
    <div className={className}>
      {Icon && <Icon />}
      <input className="textInput" type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;