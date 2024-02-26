import React from "react";
import LoginForm from "./login.jsx";

export default {
  title: "Design System/Molecules/Login Form",
  component: LoginForm,
};

const Template = (args) => <LoginForm {...args} />;

export const Login = Template.bind({});
Login.args = {};
