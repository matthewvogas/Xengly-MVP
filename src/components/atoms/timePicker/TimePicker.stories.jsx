import React from "react";
import TimePicker from "./timePicker.jsx";
import "./timePicker.css";

export default {
  title: "Design System/Atoms/Time Picker",
  component: TimePicker,
  tags: ['autodocs'],
};

const Template = (args) => <TimePicker {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ExcludingTimes = Template.bind({});
ExcludingTimes.args = {
  excludedTimes: [{ start: "00:00", end: "10:00" }],
};


export const ExcludingMultipleTimes = Template.bind({});
ExcludingMultipleTimes.args = {
  excludedTimes: [
    { start: "00:00", end: "12:00" },
    { start: "16:00", end: "18:00" }
  ],
};