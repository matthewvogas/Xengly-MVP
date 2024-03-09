import Image from "../../../assets/images/exampleImage.jpg";
import Toggle from "../../atoms/toggle/toggle";
import React from "react";
import "./appPicker.css";

const AppPicker = ({ icon, message, title, onToggle, isToggled }) => {
  const renderedImage = icon || Image;

  return (
    <div className="appPicker-container">
      <div className="content">
        {icon && (
          <img
            src={renderedImage}
            alt="Notification Icon"
            className="appPickup-icon"
          />
        )}
        <div>
          <p className="appPickup-title"> {title || "Title"}</p>
          <span className="appPickup-message">
            {message || "Lorem Impsun dolor amet vertical position"}
          </span>
        </div>
      </div>
      <div>
        <Toggle onToggle={onToggle} isToggled={isToggled} />
      </div>
    </div>
  );
};

export default AppPicker;
