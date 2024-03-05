import React from "react";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import "./signup.css";
import { ReactComponent as Google } from "../../../assets/icons/SociaIcon.svg";

const SignupForm = ({}) => {
  return (
    <>
      <div className="form--content">
        <div className="header">
          <Label className="Title" text="Sign Up" />
          <Label
            className="TitleText"
            text="Welcome back! Please enter your details."
          />
        </div>

        <div className="form--inputs">
          <div className="label--Input">
            <Label className="LabelInput" text="Name" />
            <Input
              type="name"
              placeholder="Enter your Name"
              className="input--container"
            />
          </div>

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
          <Button text="Create Account" className="button--primary" />
          <Button
            text="Sign Up With Google"
            className="button--icon-text"
            icon={Google}
          />
        </div>
      </div>
    </>
  );
};

export default SignupForm;
