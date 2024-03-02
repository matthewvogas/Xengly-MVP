import React from "react";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import { ReactComponent as Google } from "../../../assets/icons/SociaIcon.svg";

import "./login.css";

const LoginOrganism = ({}) => {
  return (
    <section>
      <div>
        <Label text="Iniciar sesion" className="Title" />
        <Label
          text="Start selling your time with others"
          className="TitleText"
        />
      </div>
      <div>
        <Label text="Email" className="TitleText" />
        <Input
          placeholder="matthew@xengly.com"
          type="email"
          className="input--container"
        />
      </div>
      <div>
        <Label text="Password" className="TitleText" />
        <Input
          placeholder="- - -"
          type="password"
          className="input--container"
        />
      </div>
      <div>
        <Button className="button--primary" text="Loguearse" />
        <Button icon={Google} className="button--social" text="Loguearse con google" />
      </div>
    </section>
  );
};

export default LoginOrganism;
