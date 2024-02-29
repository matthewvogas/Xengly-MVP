import React from "react";
import './menuButton.css'
import { Link } from 'react-router-dom';

const MenuButton = ({ text, className, icon: Icon, to }) => {
  return (
    <Link to={to} className={className}>
      {Icon && <Icon className="icon--menu" />}
      {text}
    </Link>
  );
};

export default MenuButton;
