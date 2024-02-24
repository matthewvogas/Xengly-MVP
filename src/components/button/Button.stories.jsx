import React from "react";
import Button from "./button.jsx";
import "./button.css";
import { ReactComponent as ShareIcon } from "../../assets/icons/Share.svg";
import { ReactComponent as GoogleIcon } from "../../assets/icons/SociaIcon.svg";
export default {
  title: "Button",
  component: Button,
};

export const PrimaryButton = () => (
  <Button text="Create Account" className="button--primary" />
);

export const PrimaryButtonDisabled = () => (
  <Button text="Create Account" className="button--primary--disabled" />
);

export const ButtonCancel = () => (
  <Button text="Cancel" className="button--cancel" />
);

export const ButtonShare = () => (
  <Button icon={ShareIcon} className="button--share" />
);

export const ButtonSocial = () => (
  <Button
    text="Sing up with Google "
    icon={GoogleIcon}
    className="button--social"
  />
);
