import ex from "../../../assets/icons/X.svg";
import Badge from "./badge.jsx";
import React from "react";
import "./badge.css";

export default {
  title: "Design System/Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    className: {
      type: 'select',
      options: ["active", "normal-disabled", "normal"],
    },
    x: {
      control: 'text',
    },
  },
};

const Template = (args) =>  <Badge {...args} />

export const ActiveBadge = Template.bind({}) 
ActiveBadge.args = {
  text: 'hello',
  className: 'active',
  x: ex
}

export const DisabledBadge = Template.bind({}) 
DisabledBadge.args = {
  text: 'hello',
  className: 'normal-disabled'
}

export const NormalBadge = Template.bind({}) 
NormalBadge.args = {
  text: 'hello',
  className: 'normal'
}

