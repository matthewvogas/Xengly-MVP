import React from "react";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import Notification from "../../molecules/notifications/notification";
import Image from "../../../assets/images/exampleImage.jpg";
import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import "./notifications.css";
import useNotificationsStore from "./store";
import { useEffect } from "react";

const NotificationsOrganism = ({ notifications = [] }) => {
  const {
    searchText,
    setSearchText,
    filterNotifications,
    removeNotification,
    filteredNotifications,
  } = useNotificationsStore();
  const notificationsToRender =
    filteredNotifications.length > 0 ? filteredNotifications : notifications;

  useEffect(() => {
    filterNotifications(searchText);
  }, [searchText, filterNotifications]);

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
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="notifications--container">
        {notificationsToRender.map((notification, index) => (
          <Notification
            key={index}
            title={notification.title}
            message={notification.message}
            icon={notification.icon}
            onDelete={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default NotificationsOrganism;
