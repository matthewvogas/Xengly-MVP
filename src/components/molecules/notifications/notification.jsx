import React from "react";
import "./notification.css";
import Image from "../../../assets/images/exampleImage.jpg";
import ex from "../../../assets/icons/X.svg";

const Notification = ({
  icon,
  message,
  title,
  onDelete,
  onAccept,
  onCancel,
}) => {
  const renderedImage = icon || Image;

  return (
    <div className="notification-container">
      <div className="content">
        {icon && (
          <img
            src={renderedImage}
            alt="Notification Icon"
            className="notification-icon"
          />
        )}
        <div>
          <p className="notification-title"> {title || "Title"}</p>
          <span className="notification-message">
            {message || "Lorem Impsun dolor amet vertical position"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
