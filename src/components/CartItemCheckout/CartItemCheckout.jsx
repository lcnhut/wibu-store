import { Badge, Image, InputNumber } from 'antd';
import React from 'react';
import { useState } from 'react';

import './CartItemCheckout.scss';

const CartItemCheckout = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price * product.quantity);

  const onQuantityChange = (value) => {
    const productPrice = value * product.price;
    setQuantity(value);
    setPrice(productPrice);
  };
  return (
    <div className="cart__item">
      <Badge
        count={quantity}
        color="rgba(114,114,114,0.9)"
        size="large"
        overflowCount={99}
      >
        <Image className="cart__image" preview={false} src={product.imgSrc} />
      </Badge>
      <div className="cart__content">
        <div className="cart__title">
          <span className="cart__name">{product.name}</span>
          <span className="cart__description">
            {product.size} / {product.color}
          </span>
        </div>
        <InputNumber onChange={onQuantityChange} min={1} defaultValue={1} />
        <span className="cart__price">${price}</span>
      </div>
    </div>
  );
};

export default CartItemCheckout;
