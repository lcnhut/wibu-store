/* eslint-disable react/prop-types */
import { Badge, Image, InputNumber } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { updateQuantity } from '../../store/Slice/product/productSlice';
import formatCurrency from '../../utils/formatCurrency';
import './CartItemCheckout.scss';

const CartItemCheckout = ({ product, index }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price * product.quantity);

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const onQuantityChange = (value) => {
    const productPrice = value * product.price;
    setQuantity(value);
    setPrice(productPrice);
    dispatch(
      updateQuantity({
        ...product,
        index: index,
        quantity: value,
      })
    );
  };
  const currentLanguage = i18n.language;

  return (
    <div className="cart__item">
      <Badge
        count={quantity}
        color="rgba(114,114,114,0.9)"
        size="large"
        overflowCount={99}
      >
        <Image
          className="cart__image"
          preview={false}
          src={product.image[0].src}
        />
      </Badge>
      <div className="cart__content">
        <div className="cart__title">
          <div className="cart__name">{product.name}</div>
          <div className="cart__description">
            {product.size} / {product.color}
          </div>
        </div>
        <InputNumber
          onChange={onQuantityChange}
          min={1}
          max={product.inStock}
          value={quantity}
        />
        <div className="cart__price">
          {t('checkout.price_formatted', {
            val: formatCurrency(price, currentLanguage),
          })}
        </div>
      </div>
    </div>
  );
};

export default CartItemCheckout;
