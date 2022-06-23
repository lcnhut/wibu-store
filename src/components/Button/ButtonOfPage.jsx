import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ButtonOfPage.scss';

const ButtonOfPage = (props) => {
  let navigate = useNavigate();
  const { label, path } = props;
  return (
    <Button
      size="large"
      className="Button-of-page"
      onClick={() => {
        navigate(`/${path}`, { replace: true });
      }}
    >
      <span>{label}</span>
    </Button>
  );
};

export default ButtonOfPage;
