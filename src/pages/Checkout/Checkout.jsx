import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartItemCheckout, CheckoutForm } from '../../components';
import './Checkout.scss';

const Checkout = () => {
  const [paymentValue, setPaymentValue] = useState(1);
  const [loadingButton, setLoadingButton] = useState(false);
  const productData = useSelector((state) => state.product.cart);

  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    let total = 0;
    productData.forEach((product) => {
      total += product.quantity * product.price;
    });
    setSubTotalPrice(total);
  }, [productData]);

  useEffect(() => {
    setTax(subTotalPrice * 0.1);
  }, [subTotalPrice]);

  useEffect(() => {
    setTotalPrice(subTotalPrice + tax);
  }, [tax]);

  const onChangeCountry = (value) => {
    console.log(`selected ${value}`);
  };

  const onChangePayment = (e) => {
    setPaymentValue(e.target.value);
    console.log(e.target.value);
  };

  const handleFinishInformation = (values) => {
    setLoadingButton(true);
    setTimeout(() => {
      console.log(values);
      setLoadingButton(false);
    }, 3000);
  };

  return (
    <div className="checkout__container">
      <div className="checkout__content">
        <div className="checkout__aside">
          <Breadcrumb className="checkout__nav">
            <Breadcrumb.Item href="">
              <Link to="/">
                <HomeOutlined />
                <span style={{ marginLeft: '5px' }}>Home</span>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">Checkout</Breadcrumb.Item>
          </Breadcrumb>
          <div className="checkout__form">
            <CheckoutForm
              handleFinishInformation={handleFinishInformation}
              loadingButton={loadingButton}
              paymentValue={paymentValue}
              onChangeCountry={onChangeCountry}
              onChangePayment={onChangePayment}
            />
          </div>
        </div>
        <div className="checkout__summary__container">
          <div className="checkout__summary__wrapper">
            <div className="checkout__summary__product">
              {productData.map((product, index) => {
                return (
                  <CartItemCheckout
                    key={index}
                    product={product}
                    setSubTotalPrice={setSubTotalPrice}
                    index={index}
                  />
                );
              })}
            </div>
            <div className="checkout__summary__total">
              <div className="checkout__summary__calculate">
                <div className="checkout__summary__line">
                  <span>Subtotal</span>
                  <span className="checkout__summary__price">
                    ${subTotalPrice}
                  </span>
                </div>
                <div className="checkout__summary__line">
                  <span>Shipping</span>
                  <span>free</span>
                </div>
                <div className="checkout__summary__line">
                  <span>Taxes (estimated)</span>
                  <span className="checkout__summary__price">${tax}</span>
                </div>
              </div>
              <div className="checkout__summary__total__price">
                <span>Total</span>
                <span className="final__price">${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
