import React from 'react';
import './textArea.css'

const TextArea = ({ placeholder, className, maxLength }) => {
  return <textarea className={className} placeholder={placeholder} name="biography" maxLength={maxLength} ></textarea>
};

export default TextArea;
