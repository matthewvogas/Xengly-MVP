import React from "react";
import Notification from "./notification"; 
import Image from "../../../assets/images/exampleImage.jpg";

export default {
  title: "Design System/Molecules/Notification",
  component: Notification,
  args: {
    title: "Title",
    message: "Lorem ipsum dolor sit amet",
    icon: null, 
  },
};

const Template = (args) => <Notification {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  title: "Normal Notification",
  message: "This is a normal notification message.",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: "Notification with Icon",
  message: "This notification includes an icon.",
  icon: Image, 
};
