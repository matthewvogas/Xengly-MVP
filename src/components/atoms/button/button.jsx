import React from "react";
import "./button.css";

const Button = ({ text, className, icon: Icon, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {Icon && <Icon className="icon" />}
      {text}
    </button>
  );
};

export default Button;
