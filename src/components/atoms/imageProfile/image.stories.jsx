import React from "react";
import Image from "./image.jsx";
import ImageExample from "../../../assets/images/imageProfile.jpg";

import "./image.css";

export default {
  title: "Image Profile",
  component: Image,
};

export const NotificationImage = () => (
  <Image
    className="imageNotification"
    profileImage={ImageExample}
  />
);

export const ImageProfile = () => (
  <Image
    className="ImageProfile"
    profileImage={ImageExample}
  />
);
