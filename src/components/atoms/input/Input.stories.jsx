import React from "react";
import Input from "./input.jsx";
import { ReactComponent as ExampleIcon } from "../../../assets/icons/Search.svg";

export default {
  title: "Design System/Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: 'text' },
    withIcon: { control: 'boolean' },
  },
};

const Template = (args) => (
  <Input
    {...args}
    icon={args.withIcon ? ExampleIcon : null}
  />
);

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  className: 'input--container',
  placeholder: 'placeholder',
  withIcon: false,
};

export const IconInput = Template.bind({});
IconInput.args = {
  ...DefaultInput.args,
  withIcon: true,
};
