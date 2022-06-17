import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Table } from 'antd';
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

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Size',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      quantity: 32,
      color: 'White',
      size: 42,
      price: 200,
    },
    {
      key: '2',
      name: 'Jim Green',
      quantity: 42,
      color: 'Red',
      size: 42,
      price: 200,
    },
    {
      key: '3',
      name: 'Joe Black',
      quantity: 32,
      color: 'Blue',
      size: 42,
      price: 200,
    },
  ];

  return (
    <div className="checkout__container">
      <Breadcrumb className="checkout__nav">
        <Breadcrumb.Item href="">
          <Link to="/">
            <HomeOutlined />
            <span style={{ marginLeft: '5px' }}>Home</span>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">Checkout</Breadcrumb.Item>
      </Breadcrumb>
      <div className="checkout__content">
        <div className="checkout__form">
          <CheckoutForm
            handleFinishInformation={handleFinishInformation}
            loadingButton={loadingButton}
            paymentValue={paymentValue}
            onChangeCountry={onChangeCountry}
            onChangePayment={onChangePayment}
          />
        </div>
        <div className="checkout__list__product">
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
