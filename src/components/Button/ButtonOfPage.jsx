import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ButtonOfPage.scss';

const ButtonOfPage = (props) => {
  // eslint-disable-next-line react/prop-types
  let navigate = useNavigate();
  const { label, path } = props;
  return (
    <button
      className="Button-of-page"
      onClick={() => {
        navigate(`/${path}`, { replace: true });
      }}
    >
      {label}
    </button>
  );
};

export default ButtonOfPage;
