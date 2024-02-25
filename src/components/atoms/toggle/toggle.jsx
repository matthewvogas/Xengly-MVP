import React, { useState } from 'react';
import './toggle.css';

const Toggle = ({ className }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`toggle ${className} ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
      <div className="toggle-switch"></div>
    </div>
  );
};

export default Toggle;
