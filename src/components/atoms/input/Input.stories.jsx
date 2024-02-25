import React from "react";
import Input from "./input.jsx";
import { ReactComponent as ExampleIcon } from "../../../assets/icons/Search.svg";

export default {
  title: "Input",
  component: Input,
};

export const DefaultInput = () => (
  <Input
    className="input--container"
    placeholder="placeholder"
    text="placeholder"
  />
);

export const IconInput = () => (
  <Input
    icon={ExampleIcon}
    className="input--container"
    placeholder="placeholder"
    text="placeholder"
  />
);
