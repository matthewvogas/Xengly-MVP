import React from 'react';
import './label.css'

const Label = ({ text, className }) => {
  return <label className={className}>{text}</label>;
};

export default Label;
