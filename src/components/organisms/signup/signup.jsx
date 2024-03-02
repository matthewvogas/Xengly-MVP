import React from "react";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import { ReactComponent as Google } from "../../../assets/icons/SociaIcon.svg";

import "./signup.css";

const SignupOrganism = ({}) => {
  return (
    <section>
      <div>
        <Label text="Registrarme" className="Title" />
        <Label text="Start selling your time with others" className="TitleText" />
      </div>
      <div>
        <Label text="Name" className="TitleText" />
        <Input placeholder="Name" type='name' className="input--container" />
      </div>
      <div>
        <Label text="Email" className="TitleText" />
        <Input placeholder="matthew@xengly.com" type='email' className="input--container" />
      </div>
      <div>
        <Label text="Password" className="TitleText" />
        <Input placeholder="- - -" type='password' className="input--container" />
      </div>
      <div>
      <Button className='button--primary' text="añadir" />
      <Button icon={Google} className='button--social' text="añadir" />
      </div>
    </section>
  );
};

export default SignupOrganism;
