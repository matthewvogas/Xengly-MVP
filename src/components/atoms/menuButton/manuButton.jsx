import React from "react";

const MenuButton = ({ text, className, icon: Icon }) => {
  return (
    <button className={className}>
      {Icon && <Icon className="icon" />}
      {text}
    </button>
  );
};

export default MenuButton;
