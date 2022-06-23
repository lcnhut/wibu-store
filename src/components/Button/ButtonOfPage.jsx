import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ButtonOfPage.scss';

const ButtonOfPage = (props) => {
  let navigate = useNavigate();
  const { label, path } = props;
  return (
    <button
      className="Button-of-page"
      onClick={() => {
        navigate(`/${path}`, { replace: true });
      }}
    >
      <span>{label}</span>
    </button>
  );
};

export default ButtonOfPage;
