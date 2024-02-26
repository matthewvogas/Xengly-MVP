import React from "react";
import MenuButton from "./manuButton";
import "./menuButton.css";
import { ReactComponent as iconExample } from "../../../assets/icons/menu/home.svg";

export default {
  title: "Design System/Atoms/Menu Buttons",
  component: MenuButton,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    className: {
      type: "select",
      options: ["button--normal", "button--active"],
    },
  },
};

const Template = (args) => (
  <MenuButton {...args} icon={args.withIcon ? iconExample : iconExample} />
);

export const NormalButton = Template.bind({});
NormalButton.args = {
  text: "Encuentros",
  className: "button--normal",
};

export const ActiveButton = Template.bind({});
ActiveButton.args = {
  ...NormalButton.args,
  className: "button--active",
};
