import React from "react";
import Button from "./button.jsx";
import "./button.css";
import { ReactComponent as ExampleIcon } from "../../../assets/icons/Share.svg";
import { ReactComponent as GoogleExampleIcon } from "../../../assets/icons/SociaIcon.svg";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  tags: ['autodocs'],
};

export const PrimaryButton = () => (
  <Button text="Submit" className="button--primary" />
);

export const PrimaryButtonDisablsd = () => (
  <Button text="Submit" className="button--primary--disabled" />
);

export const SecondaryButton = () => (
  <Button text="Submit" className="button--cancel" />
);

export const IconButton = () => (
  <Button icon={ExampleIcon} className="button--share" />
);

export const IconTextButton = () => (
  <Button
    text="Submit"
    icon={GoogleExampleIcon}
    className="button--social"
  />
);
