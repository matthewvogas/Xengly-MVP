import React from "react";
import "./badge.css";

const Badge = ({ text, className, x, onClick}) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
      {x && <img src={x} alt="x" className="icon" />}
    </button>
  );
};

export default Badge;
