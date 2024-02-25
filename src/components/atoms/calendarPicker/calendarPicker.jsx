import React, { useState, useRef } from "react";
import "./calendarPicker.css";

const CalendarPicker = ({ className }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const dateInputRef = useRef(null);

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <input
      type="date"
      className="date-picker-input"
      onChange={handleChange}
      ref={dateInputRef}
    />
  );
};

export default CalendarPicker;
