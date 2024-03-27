import React from "react";
import "./notification.css";
import Image from "../../../assets/images/exampleImage.jpg";
import ex from "../../../assets/icons/X.svg";
import Button from "../../atoms/button/button"; // Asegúrate de importar el componente Button

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
      <div className="notification-actions">
        <Button text="Aceptar" className="button--primary" onClick={onAccept} />
        <Button
          text="Cancelar"
          className="button--secondary"
          onClick={onCancel}
        />
      </div>
    </div>
  );
};

export default Notification;
