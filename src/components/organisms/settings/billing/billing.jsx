import AppPicker from '../../../molecules/appPicker/appPicker'
import TextArea from "../../../atoms/textArea/textArea";
import Button from "../../../atoms/button/button";
import Toggle from '../../../atoms/toggle/toggle'
import Label from "../../../atoms/labels/label";
import Input from "../../../atoms/input/input";
import React from "react";
import "./billing.css";

const BillingOrganism = ({}) => {
  return (
    <section>
      <div className="head--profile profile">
        <div className="titles">
          <Label text="Conecta tus medios de pago" className="SubTitle" />
          <Label text="Actualiza tu información para facturar" className="SubTitleText" />
        </div>

        <div className="actions">
          <Button text="Cancel" className="button--cancel" />
          <Button text="Save" className="button--primary" />
        </div>
      </div>

    </section>
  );
};

export default BillingOrganism;
