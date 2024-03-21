import React, { useEffect, useState } from "react";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import Notification from "../../molecules/notifications/notification";
import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import "./notifications.css";
import { getAuth } from "firebase/auth";

const NotificationsOrganism = () => {
  const [searchText, setSearchText] = useState("");
  const auth = getAuth();
  const userId = auth.currentUser ? auth.currentUser.uid : null;

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
        <Notification />
      </div>
    </section>
  );
};

export default NotificationsOrganism;
