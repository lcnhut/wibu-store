import { Space } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonOfPage } from '..';
import './LazyLoaderProduct.scss';

export default function LazyLoaderProduct({ image, title }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="container-lazyloader">
      <div className="item-container">
        <div className="item-description">
          <h1>{title}</h1>
          <ButtonOfPage path="collection" label={t('checkout.shop_now')} />
        </div>
        <img className="item-container-image" src={image} />
      </div>
    </div>
  );
}
