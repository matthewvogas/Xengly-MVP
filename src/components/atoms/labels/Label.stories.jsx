import React from "react";
import Label from "./label.jsx";
import "./label.css";

export default {
  title: "Design System/Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    texto: { control: "text" },
    className: {
      type: "select",
      options: ["Title", "TitleText", "SubTitle", "SubTitleText", "BadgeLabel", "LabelInput"],
    },
  },
};

const Template = (args) => <Label {...args} />;

export const Title = Template.bind({});
Title.args = {
  className: "Title",
  text: "30px",
};

export const TitleText = Template.bind({});
TitleText.args = {
  className: "TitleText",
  text: "17px",
};

export const SubTitle = Template.bind({});
SubTitle.args = {
  className: "SubTitle",
  text: "26px",
};

export const SubTitleText = Template.bind({});
SubTitleText.args = {
  className: "SubTitleText",
  text: "16px",
};

export const LabelInput = Template.bind({});
LabelInput.args = {
  className: "LabelInput",
  text: "14px",
};

export const BadgeLabel = Template.bind({});
BadgeLabel.args = {
  className: "BadgeLabel",
  text: "14px",
};
