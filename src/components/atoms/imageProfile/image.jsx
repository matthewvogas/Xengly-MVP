import React from "react";
import "./image.css";

const Image = ({ className, profileImage }) => {
  return (
    <img className={className} src={profileImage} alt="imageProfile" />
  );
};

export default Image;
