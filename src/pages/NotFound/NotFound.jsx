import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import NotFoundGif from '../../assets/images/NotFoundGif.gif';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="notfound__container">
      <img src={NotFoundGif} />
      <Link to="/">
        <Button className="notfound__btn">Back</Button>
      </Link>
    </div>
  );
};

export default NotFound;
