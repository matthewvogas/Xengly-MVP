import React from "react";

const Button = ({ text, className, icon: Icon }) => {
  return (
    <button className={className}>
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
