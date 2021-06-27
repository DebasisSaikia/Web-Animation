import React from "react";
import { LoadButton } from "./Button.style";
import PropTypes from 'prop-types'

const Button = ({ text, clickButton }) => {
  return (
    <LoadButton type="button" onClick={clickButton}>
      {text}
    </LoadButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  clickButton: PropTypes.func
}

export default Button;
