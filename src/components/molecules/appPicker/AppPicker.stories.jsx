import React from "react";
import AppPicker from "./appPicker"; 
import Image from "../../../assets/images/exampleImage.jpg";

export default {
  title: "Design System/Molecules/App Picker",
  component: AppPicker,
  args: {
    title: "Google Meet",
    message: "Connecto to Google Meet",
    icon: null, 
  },
};

const Template = (args) => <AppPicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Google Meet",
  message: "Connect to Google Meet",
  icon: Image, 
};
