import React from "react";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import Notification from "../../molecules/notifications/notification";
import Image from "../../../assets/images/exampleImage.jpg";

import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import "./notifications.css";

const NotificationsOrganism = ({ notifications }) => {
  const notificationsDefault = [
    { title: "Evento con Xengler", message: "Mañana a las 10:00 AM tienes un evento con Gina", icon: Image },
    { title: "Terminar de configurar el perfil personal", message: "Aún te falta llenar unas cosas en tu perfil personal" },
    { title: "Evento con Xengler", message: "Mañana a las 12:00 PM tienes un evento con Carlos", icon: Image },
  ];

  const notificationsToRender = notifications || notificationsDefault;

  return (
    <section>
      <div className="head">
        <div>
          <Label text="Notificaciones" className="Title" />
          <Label
            text="Notificaciones sobre reuniones, eventos o demás"
            className="TitleText"
          />
        </div>
      </div>

      <div className="search--container">
        <Input
          className="input--container"
          type="search"
          placeholder="Buscar"
          icon={SearchIcon}
        />
      </div>

      <div className="notifications--container">
        {notificationsToRender.map((notification, index) => (
          <Notification
            key={index}
            title={notification.title}
            message={notification.message}
            icon={notification.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default NotificationsOrganism;
