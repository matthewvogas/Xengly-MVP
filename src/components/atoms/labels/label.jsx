import React from 'react';
import './label.css'

const Label = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};

export default Label;
