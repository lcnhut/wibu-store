import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, message } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { CartItemCheckout, CheckoutForm } from '../../components';
import { clearCart } from '../../store/product/productSlice';
import './Checkout.scss';

const Checkout = () => {
  const [paymentValue, setPaymentValue] = useState(1);
  const [loadingButton, setLoadingButton] = useState(false);
  const productData = useSelector((state) => state.product.cart);

  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);

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
  };

  const handleFinishInformation = (values) => {
    setLoadingButton(true);
    setTimeout(() => {
      console.log({
        ...values,
        productData: productData,
        totalPrice: totalPrice,
      });
      setLoadingButton(false);
      message.success('Order successfully!!!');
      dispatch(clearCart());
      navigate('/');
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
                  <div>Subtotal</div>
                  <div className="checkout__summary__price">
                    ${subTotalPrice}
                  </div>
                </div>
                <div className="checkout__summary__line">
                  <div>Shipping</div>
                  <div>free</div>
                </div>
                <div className="checkout__summary__line">
                  <div>Taxes (estimated)</div>
                  <div className="checkout__summary__price">${tax}</div>
                </div>
              </div>
              <div className="checkout__summary__total__price">
                <div>Total</div>
                <div className="final__price">${totalPrice}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
