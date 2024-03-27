import React, { useEffect, useState } from "react";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import Notification from "../../molecules/notifications/notification";
import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import "./notifications.css";
import { getAuth } from "firebase/auth";
import {
  getPendingMeetingsForCreator,
  acceptMeeting,
  cancelMeeting,
} from "../../../services/meetingService";
import { getUserById } from "../../../services/creatorService";
import { getEventsForUser } from "../../../services/eventsService";

const NotificationsOrganism = () => {
  const [searchText, setSearchText] = useState("");
  const [notifications, setNotifications] = useState([]);
  const auth = getAuth();
  const userId = auth.currentUser ? auth.currentUser.uid : null;

  useEffect(() => {
    const fetchNotifications = async () => {
      if (userId) {
        const meetings = await getPendingMeetingsForCreator(userId);
        const events = await getEventsForUser(userId);

        const notificationsWithDetails = await Promise.all([
          ...meetings.map(async (meeting) => {
            const client = await getUserById(meeting.clientId);
            return {
              id: meeting.id,
              type: "meeting",
              title: `Reunión con: ${client ? client.name : "Desconocido"}`,
              message: `Fecha: ${meeting.date}`,
            };
          }),
          ...events.map(async (event) => {
            const otherPartyId =
              event.creatorId === userId ? event.clientId : event.creatorId;
            const otherParty = await getUserById(otherPartyId);
            return {
              id: event.id,
              type: "event",
              title: `Evento con: ${
                otherParty ? otherParty.name : "Desconocido"
              }`,
              message: `Fecha: ${event.date}`,
            };
          }),
        ]);

        setNotifications(notificationsWithDetails);
      }
    };
    fetchNotifications();
  }, [userId]);

  const handleAcceptMeeting = async (meetingId) => {
    try {
      await acceptMeeting(meetingId);
      alert("Reunión aceptada con éxito.");
    } catch (error) {
      console.error("Error al aceptar la reunión:", error);
      alert("Error al aceptar la reunión.");
    }
  };

  const handleCancelMeeting = async (meetingId) => {
    try {
      await cancelMeeting(meetingId);
      alert("Reunión cancelada con éxito.");
    } catch (error) {
      console.error("Error al cancelar la reunión:", error);
      alert("Error al cancelar la reunión.");
    }
  };

  return (
    <section>
      <div className="head">
        <div>
          <Label text="Notificaciones" className="Title" />
          <Label
            text="Notificaciones sobre reuniones y eventos"
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
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            title={notification.title}
            message={notification.message}
            onAccept={
              notification.type === "meeting"
                ? () => handleAcceptMeeting(notification.id)
                : undefined
            }
            onCancel={
              notification.type === "meeting"
                ? () => handleCancelMeeting(notification.id)
                : undefined
            }
          />
        ))}
      </div>
    </section>
  );
};

export default NotificationsOrganism;
