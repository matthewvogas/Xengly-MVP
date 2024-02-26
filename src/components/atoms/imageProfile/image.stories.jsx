import React from "react";
import Image from "./image.jsx";
import ImageExample from "../../../assets/images/imageProfile.jpg";
import "./image.css";

export default {
  title: "Design System/Atoms/Image Profile",
  component: Image,
  argTypes: {
    className: {
      type: 'select',
      options: ["imageNotification", "ImageProfile"],
    },
    profileImage: {
      control: 'text',
    }
  },
};

const Template = (args) => <Image {...args} />;

export const imageNotification = Template.bind({});
imageNotification.args = {
  className: "imageNotification",
  profileImage: ImageExample
};

export const imageProfile = Template.bind({});
imageProfile.args = {
  className: "ImageProfile",
  profileImage: ImageExample
};

export const imageProfileMenu = Template.bind({});
imageProfile.args = {
  className: "ImageProfileMenu",
  profileImage: ImageExample
};
