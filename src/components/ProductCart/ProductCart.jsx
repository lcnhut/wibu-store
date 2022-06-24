/* eslint-disable react/prop-types */
import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { removeItemFromCart } from '../../store/Slice/product/productSlice';
import formatCurrency from '../../utils/formatCurrency';
import './ProductCart.scss';

export default function ProductCart(props) {
  const { image, name, size, quantity, color, price, index } = props;

  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <div className="product-cart">
      <div className="product-cart__image">
        <img src={image[0].src} />
      </div>
      <div className="product-cart__content">
        <p>
          {name} - {size} / {color}
        </p>
        <p>QTY : {quantity}</p>
        <p>
          {' '}
          {t('checkout.price_formatted', {
            val: formatCurrency(price * quantity, currentLanguage),
          })}
        </p>
      </div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          dispatch(removeItemFromCart(index));
        }}
      >
        <CloseOutlined style={{ fontSize: '18px' }} />
      </div>
    </div>
  );
}
