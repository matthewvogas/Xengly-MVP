import React from "react";
import './button.css'

const Button = ({ text, className, icon: Icon }) => {
  return (
    <button className={className}>
      {Icon && <Icon className='icon' />}
      {text}
    </button>
  );
};

export default Button;
