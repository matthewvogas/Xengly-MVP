import React from "react";
import "./setSchedule.css";
import Image from "../../../assets/images/exampleImage.jpg";
import TimePicker from "../../atoms/timePicker/timePicker";
import Button from "../../atoms/button/button";

const SetSchedule = ({ icon, title }) => {
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
      <TimePicker
        excludedTimes={[
          { start: "00:00", end: "12:00" },
          { start: "16:00", end: "18:00" },
        ]}
      />
      <Button className='button--primary' text="añadir" />
      </div>
    </div>
  );
};

export default SetSchedule;
