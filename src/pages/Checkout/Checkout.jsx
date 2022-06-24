import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { invoiceApi } from '../../api';
import { CartItemCheckout, CheckoutForm } from '../../components';
import { clearCart } from '../../store/Slice/product/productSlice';
import formatCurrency from '../../utils/formatCurrency';
import './Checkout.scss';

const Checkout = () => {
  const productData = useSelector((state) => state.product.cart);

  const [paymentValue, setPaymentValue] = useState(1);
  const [loadingButton, setLoadingButton] = useState(false);

  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);

  const TAX_PERCENT = 0.1;

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    productData.forEach((product) => {
      total += product.quantity * product.price;
    });
    setSubTotalPrice(total);
  }, [productData]);

  useEffect(() => {
    setTax(subTotalPrice * TAX_PERCENT);
  }, [subTotalPrice]);

  useEffect(() => {
    setTotalPrice(subTotalPrice + tax);
  }, [tax]);

  const onChangeCountry = (value) => {
    console.log(`selected ${value}`);
  };

  const onChangePayment = (e) => {
    setPaymentValue(e.target.value);
  };

  const handleFinishInformation = async (values) => {
    if (productData && productData.length > 0) {
      setLoadingButton(true);
      const response = await invoiceApi.add({
        customerName: `${values.firstName} ${values.lastName}`,
        address: `${values.apartment}, ${values.address}, ${values.city}, ${values.country}`,
        contact: values.contact,
        products: productData,
        totalPrice: totalPrice,
      });
      if (response.status === 201) {
        setLoadingButton(false);
        dispatch(clearCart());
        navigate('/');
        message.success('Order successfully!!!');
      }
    } else {
      message.error('You cart is empty!!!');
    }
  };

  const currentLanguage = i18n.language;
  console.log(formatCurrency(tax, currentLanguage));

  return (
    <div className="checkout__container">
      <div className="checkout__content">
        <div className="checkout__aside">
          <Breadcrumb className="checkout__nav">
            <Breadcrumb.Item href="">
              <Link to="/">
                <HomeOutlined />
                <span style={{ marginLeft: '5px' }}>{t('checkout.home')}</span>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">{t('checkout.checkout')}</Breadcrumb.Item>
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
                    index={index}
                  />
                );
              })}
            </div>
            <div className="checkout__summary__total">
              <div className="checkout__summary__calculate">
                <div className="checkout__summary__line">
                  <div>{t('checkout.total')}</div>
                  <div className="checkout__summary__price">
                    {t('checkout.price_formatted', {
                      val: formatCurrency(subTotalPrice, currentLanguage),
                    })}
                  </div>
                </div>
                <div className="checkout__summary__line">
                  <div>{t('checkout.shipping_fee')}</div>
                  <div>{t('checkout.free')}</div>
                </div>
                <div className="checkout__summary__line">
                  <div>{t('checkout.tax')}</div>
                  <div className="checkout__summary__price">
                    {t('checkout.price_formatted', {
                      val: formatCurrency(tax, currentLanguage),
                    })}
                  </div>
                </div>
              </div>
              <div className="checkout__summary__total__price">
                <div>{t('checkout.amount')}</div>
                <div className="final__price">
                  {t('checkout.price_formatted', {
                    val: formatCurrency(totalPrice, currentLanguage),
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
