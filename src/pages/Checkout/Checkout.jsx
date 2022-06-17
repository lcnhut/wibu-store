import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CheckoutForm } from '../../components';
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
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <Link to="/">
            <HomeOutlined />
            <span style={{ marginLeft: '5px' }}>Home</span>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">Checkout</Breadcrumb.Item>
      </Breadcrumb>
      <CheckoutForm
        handleFinishInformation={handleFinishInformation}
        loadingButton={loadingButton}
        paymentValue={paymentValue}
        onChangeCountry={onChangeCountry}
        onChangePayment={onChangePayment}
      />
    </div>
  );
};

export default Checkout;
