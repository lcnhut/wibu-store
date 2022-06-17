import { PageHeader } from 'antd';
import React, { useState } from 'react';

import { CheckoutForm } from '../../components';
import './Checkout.scss';

const Checkout = () => {
  const [loadingButton, setLoadingButton] = useState(false);
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Home',
    },
    {
      path: '/checkout',
      breadcrumbName: 'Checkout',
    },
    {
      path: '/shipping',
      breadcrumbName: 'Shipping',
    },
    {
      path: '/payment',
      breadcrumbName: 'Payment',
    },
  ];

  const handleFinishInformation = (values) => {
    setLoadingButton(true);
    setTimeout(() => {
      console.log(values);
      setLoadingButton(false);
    }, 3000);
  };

  return (
    <div className="checkout__container">
      <PageHeader
        className="site-page-header"
        breadcrumb={{
          routes,
        }}
      />
      <CheckoutForm
        handleFinishInformation={handleFinishInformation}
        loadingButton={loadingButton}
      />
    </div>
  );
};

export default Checkout;
