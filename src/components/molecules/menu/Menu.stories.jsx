import React from "react";
import Menu from "./menu.jsx";

export default {
  title: "Design System/Molecules/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const MenuBig = Template.bind({});
MenuBig.args = {};
