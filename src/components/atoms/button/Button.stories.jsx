import React from "react";
import Button from "./button.jsx";
import "./button.css";
import { action } from '@storybook/addon-actions';
import { ReactComponent as ExampleIcon } from "../../../assets/icons/Share.svg";
import { ReactComponent as GoogleExampleIcon } from "../../../assets/icons/SociaIcon.svg";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: { control: 'text' },
    className: {
      type: 'select', options: ['button--primary', 'button--primary--disabled', 'button--secondary', 'button--icon', 'button--icon-text'],
    },
    withIcon: { control: 'boolean' },
  },
};

const Template = (args) => (
  <Button
    {...args}
    onClick={action('button-click')}
    icon={args.withIcon ? (args.className === 'button--icon-text' ? GoogleExampleIcon : ExampleIcon) : null}
  />
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: "Submit",
  className: "button--primary",
  withIcon: false,
};

export const PrimaryButtonDisabled = Template.bind({});
PrimaryButtonDisabled.args = {
  text: "Submit",
  className: "button--primary--disabled",
  withIcon: false,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  text: "Submit",
  className: "button--secondary",
  withIcon: false,
};

export const IconButton = Template.bind({});
IconButton.args = {
  className: "button--icon",
  withIcon: true,
};

export const IconTextButton = Template.bind({});
IconTextButton.args = {
  text: "Submit",
  className: "button--icon-text",
  withIcon: true,
};

// creador boton de solo icono
