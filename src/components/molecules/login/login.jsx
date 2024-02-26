import React from "react";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import "./login.css";
import { ReactComponent as Google } from "../../../assets/icons/SociaIcon.svg";

const LoginForm = ({}) => {
  return (
    <>
      <div className="form--content">
        <div className="header">
          <Label className="Title" text="Login" />
          <Label
            className="TitleText"
            text="Welcome back! Please enter your details."
          />
        </div>

        <div className="form--inputs">
          <div className="label--Input">
            <Label className="LabelInput" text="Email" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="input--container"
            />
          </div>

          <div className="label--Input">
            <Label className="LabelInput" text="Contraseña" />
            <Input
              type="password"
              placeholder="Enter your password"
              className="input--container"
            />
          </div>
        </div>

        <div className="form-buttons">
          <Button text="Sign In" className="button--primary" />
          <Button
            text="Sign In With Google"
            className="button--social"
            icon={Google}
          />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
