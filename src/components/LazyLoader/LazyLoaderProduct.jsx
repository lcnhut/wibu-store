import { Space } from 'antd';
import React from 'react';

import { ButtonOfPage } from '..';
import './LazyLoaderProduct.scss';

export default function LazyLoaderProduct({ image, title }) {
  return (
    // <Space>
    <div className="container-lazyloader">
      <div className="item-container">
        <div className="item-description">
          <h1>{title}</h1>
          <ButtonOfPage to="collection" label="Shop Now" />
        </div>
        <img className="item-container-image" src={image} />
        {/* <div>
        </div> */}
      </div>
    </div>

    // </Space>
  );
}
