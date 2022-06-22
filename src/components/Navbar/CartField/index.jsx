import { CloseOutlined } from '@ant-design/icons';
import { Option } from 'antd/lib/mentions';
import { sum } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

import ButtonOfPage from '../../Button/ButtonOfPage';
import ProductCart from '../../ProductCart/ProductCart';

export default function CartField({
  onCartActive,
  onActive,
  cartItem,
  SetOnActive,
  setOnCartActive,
}) {
  return (
    <div
      className="cart_field"
      style={{
        opacity: onCartActive ? '1' : '0',
        visibility: onCartActive ? 'visible' : 'hidden',
        zIndex: onCartActive ? '101' : '-1',
        width: onCartActive ? '350px' : '0',
      }}
    >
      <div className="cart_field__header">
        <div className="cart_field__header__icon">
          {' '}
          <CloseOutlined
            style={{ fontSize: '18px' }}
            onClick={() => {
              setOnCartActive(false);
              SetOnActive(!onActive);
            }}
          />
        </div>
        <div className="cart_field__header__content">
          <p>Shopping Cart</p>
        </div>
        <div className="cart_field__header__total">
          <p className="cart_field__header__total__value">{cartItem.length}</p>
        </div>
      </div>
      <div
        className="cart_field__body"
        style={{ justifyContent: cartItem.length ? 'flex-start' : 'center' }}
      >
        {cartItem.length === 0 ? (
          <>
            <div className="cart_field__body__title">
              <h3>Your shopping bag is empty</h3>
            </div>
            <ButtonOfPage path="collection" label="Shop Now" />
          </>
        ) : (
          <div className="cart_field__body__product">
            {cartItem.map((item, index) => {
              return (
                <ProductCart
                  key={index}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  color={item.color}
                  size={item.size}
                  quantity={item.quantity}
                  price={item.price}
                />
              );
            })}
          </div>
        )}
      </div>
      {cartItem.length !== 0 && (
        <div className="cart_field__footer">
          <div className="cart_field__footer__total">
            <div>Total:</div>
            <div>{sum(cartItem.map((item) => item.price))}</div>
          </div>
          <div className="cart_field__footer__button">
            <ButtonOfPage path="checkout" label="Check out" />
          </div>
        </div>
      )}
    </div>
  );
}
