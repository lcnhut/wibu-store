import React from "react";
import "./ButtonOfPage.scss";
const ButtonOfPage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { label } = props;
  return <button className="Button-of-page">{label}</button>;
};

export default ButtonOfPage;
