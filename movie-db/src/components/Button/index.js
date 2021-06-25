import React from "react";
import { LoadButton } from "./Button.style";

const Button = ({ text, clickButton }) => {
  return (
    <LoadButton type="button" onClick={clickButton}>
      {text}
    </LoadButton>
  );
};

export default Button;
