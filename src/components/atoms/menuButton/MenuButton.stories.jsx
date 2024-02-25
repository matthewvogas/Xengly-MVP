import React from "react";
import MenuButton from "./manuButton.jsx";
import "./menuButton.css";
import { ReactComponent as GoogleExampleIcon } from "../../../assets/icons/menu/home.svg";

export default {
  title: "Design System/Atoms/Menu Buttons",
  component: MenuButton,
  tags: ['autodocs'],
};

export const NormalButton = () => (
  <MenuButton
    text="Encuentros"
    icon={GoogleExampleIcon}
    className="button--normal"
  />
);

export const ActiveButton = () => (
  <MenuButton
    text="Encuentros"
    icon={GoogleExampleIcon}
    className="button--active"
  />
);
