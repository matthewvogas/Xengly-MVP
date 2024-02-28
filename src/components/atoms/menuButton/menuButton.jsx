import React from "react";
import './menuButton.css'

const MenuButton = ({ text, className, icon: Icon }) => {
  return (
    <button className={className}>
      {Icon && <Icon className="icon--menu" />}
      {text}
    </button>
  );
};

export default MenuButton;
