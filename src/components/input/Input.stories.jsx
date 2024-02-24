import React from "react";
import Input from "./input.jsx";

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

// export const SearchInput = () => (
//   <Input
//     icon={Search}
//     className="input--container"
//     placeholder="placeholder"
//     text="placeholder"
//   />
// );
