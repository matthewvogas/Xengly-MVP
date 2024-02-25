import React from "react";
import "./badge.css";

const Badge = ({ text, className, icon: Icon }) => {
  return (
    <button className={className}>
      {text}
      {Icon && <Icon className="icon"/>}
    </button>
  );
};

export default Badge;
