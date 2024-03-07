import React from 'react';
import './toggle.css';

const Toggle = ({ className, onToggle, isToggled }) => {
  return (
    <div
      className={`toggle ${className} ${isToggled ? 'toggled' : ''}`}
      onClick={onToggle}
    >
      <div className="toggle-switch"></div>
    </div>
  );
};

export default Toggle;
