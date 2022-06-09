import React from "react";

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { label } = props;
  return <button>{label}</button>;
};

export default Button;
