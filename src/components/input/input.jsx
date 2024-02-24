import React from "react";
import "../input/input.css";

const Input = ({ className, type, placeholder, icon: Icon }) => {
  return (
    <div>
      <input className={className} type={type} placeholder={placeholder} />
      {Icon && <Icon />}
    </div>
  );
};

export default Input;
