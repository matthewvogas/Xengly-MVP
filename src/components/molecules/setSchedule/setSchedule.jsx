import React from "react";
import "./setSchedule.css";
import Image from "../../../assets/images/exampleImage.jpg";
import TimePicker from "../../atoms/timePicker/timePicker";

const SetSchedule = ({ icon, message, title }) => {
  const renderedImage = icon || Image;

  return (
    <div className="setSchedule-container">
      <div className="content">
        <p className="setSchedule-title"> {title || "Monday"}</p>
      </div>
      <div className="time">

      <TimePicker
        excludedTimes={[
          { start: "00:00", end: "12:00" },
          { start: "16:00", end: "18:00" },
        ]}
      />
      <p>To</p>
      <TimePicker
        excludedTimes={[
          { start: "00:00", end: "12:00" },
          { start: "16:00", end: "18:00" },
        ]}
      />
      </div>
    </div>
  );
};

export default SetSchedule;
