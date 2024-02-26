import React from "react";
import "./badge.css";

const Badge = ({ text, className, x }) => {
  return (
    <button className={className}>
      {text}
      {x && <img src={x} alt="x" className="icon" />}
    </button>
  );
};

export default Badge;
