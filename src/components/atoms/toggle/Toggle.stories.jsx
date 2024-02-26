import React from "react";
import Toggle from "./toggle.jsx";
import "./toggle.css";

export default {
  title: "Design System/Atoms/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    className: {
      type: "select",
      options: ["toggle", "toggled"],
    },
  },
};

const Template = (args) => <Toggle {...args} />;

export const ToggleNormal = Template.bind({});
ToggleNormal.args = {
  className: "toggle",
};

export const ToggleActive = Template.bind({});
ToggleActive.args = {
  className: "toggled",
};
