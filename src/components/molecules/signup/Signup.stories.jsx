import React from "react";
import SignUpForm from "./signup.jsx";

export default {
  title: "Design System/Molecules/Login Form",
  component: SignUpForm,
};

const Template = (args) => <SignUpForm {...args} />;

export const SignUp = Template.bind({});
SignUp.args = {};
