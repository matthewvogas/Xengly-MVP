import React, { useState } from "react";
import "./setSchedule.css";
import TimePicker from "../../atoms/timePicker/timePicker";
import Button from "../../atoms/button/button";

const SetSchedule = ({ addSchedule }) => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleAddSchedule = () => {
    if (!startTime || !endTime) {
      alert("Please select both start and end times.");
      return;
    }

    if (startTime >= endTime) {
      alert("Start time must be earlier than end time.");
      return;
    }

    addSchedule(selectedDay, startTime, endTime);
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="setSchedule-container">
      <div className="content">
        <div className="setSchedule-day-selector">
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
      </div>
      <div className="time">
        <TimePicker selectedTime={startTime} setSelectedTime={setStartTime} />
        <TimePicker selectedTime={endTime} setSelectedTime={setEndTime} />
        <Button
          onClick={handleAddSchedule}
          className="button--primary"
          text="Añadir"
        />
      </div>
    </div>
  );
};

export default SetSchedule;
