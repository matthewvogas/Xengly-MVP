import React from "react";
import "./timePicker.css";
import { useState } from "react";

const TimePicker = ({
  className,
  excludedTimes = [],
  selectedTime,
  setSelectedTime,
}) => {
  const [showList, setShowList] = useState(false);

  const isTimeExcluded = (time, excludedTimes) => {
    return excludedTimes.some(({ start, end }) => {
      const [startHour, startMinute] = start.split(":").map(Number);
      const [endHour, endMinute] = end.split(":").map(Number);
      const [hour, minute] = time.split(":").map(Number);
      const startTime = startHour * 60 + startMinute;
      const endTime = endHour * 60 + endMinute;
      const currentTime = hour * 60 + minute;
      return currentTime >= startTime && currentTime <= endTime;
    });
  };

  const generateTimeList = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        if (!isTimeExcluded(time, excludedTimes)) {
          times.push(time);
        }
      }
    }
    return times;
  };

  const timeList = generateTimeList();

  return (
    <div className={`time-picker ${className}`}>
      <button
        className="time-picker-button"
        onClick={() => setShowList(!showList)}
      >
        {selectedTime || "Select Time"}
      </button>
      <div className={`time-picker-list ${showList ? "show" : ""}`}>
        {timeList.map((time, index) => (
          <div
            key={index}
            className="time-picker-item"
            onClick={() => {
              setSelectedTime(time);
              setShowList(false);
            }}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
