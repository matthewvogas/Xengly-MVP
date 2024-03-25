import React, { useState, useRef } from "react";
import "./calendarPicker.css";

const CalendarPicker = ({ className, selectedDate, setSelectedDate }) => {
  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <input
      type="date"
      className={`date-picker-input ${className || ""}`}
      value={selectedDate || ""}
      onChange={handleChange}
    />
  );
};

export default CalendarPicker;
