import React from "react";
import TextArea from "./textArea.jsx";
import "./textArea.css";

export default {
  title: "Design System/Atoms/TextArea",
  component: TextArea,
  argTypes: {
    className: {
      type: "select",
      options: ["textArea"],
    },
    placeholder: { control: "text" },
  },
};

const Template = (args) => <TextArea {...args} />;

export const TextAreaPrincipal = Template.bind({});
TextAreaPrincipal.args = {
  className: "textArea",
  placeholder: "Hola, Mundo!",
};
