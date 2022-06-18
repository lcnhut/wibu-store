import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Table } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CartItemCheckout, CheckoutForm } from '../../components';
import './Checkout.scss';

const Checkout = () => {
  const [paymentValue, setPaymentValue] = useState(1);
  const [loadingButton, setLoadingButton] = useState(false);

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
        <div className="checkout__list__container">
          <div className="checkout__list__wrapper">
            <div className="checkout__list__item">
              <CartItemCheckout
                product={{
                  imgSrc:
                    'https://cdn.shopify.com/s/files/1/0277/0472/1542/products/4.1_small.jpg?v=1588574459',
                  size: 36,
                  name: 'Palm Print EVA Flip Flops',
                  color: 'white',
                  price: 50,
                  quantity: 1,
                }}
              />
              <CartItemCheckout
                product={{
                  imgSrc:
                    'https://cdn.shopify.com/s/files/1/0277/0472/1542/products/15.1_small.jpg?v=1588567889',
                  size: 38,
                  name: 'Perth Fabric Twist Sliders',
                  price: 50,
                  color: 'brown',
                  quantity: 3,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
