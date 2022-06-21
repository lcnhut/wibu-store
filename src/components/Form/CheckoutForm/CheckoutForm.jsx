/* eslint-disable react/prop-types */
import { Button, Form, Input, Radio, Select, Space } from 'antd';
import React from 'react';

import paypal_logo from '../../../assets/images/paypal_logo.png';
import './CheckoutForm.scss';

const { Option } = Select;

const CheckoutForm = ({
  handleFinishInformation,
  loadingButton,
  paymentValue,
  onChangeCountry,
  onChangePayment,
}) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      className="checkout__form__wrapper"
      layout="vertical"
      size={'large'}
      onFinish={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            handleFinishInformation(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <section className="section__contact">
        <h2>Contact information</h2>

        <div className="input__group">
          <Form.Item
            name="firstName"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
            }}
          >
            <Input placeholder="First name (optional)" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              marginLeft: '8px',
            }}
          >
            <Input placeholder="Last name" />
          </Form.Item>
        </div>

        <Form.Item
          name="contact"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Mobile phone number" />
        </Form.Item>
      </section>
      <section className="section__address">
        <h2>Shipping address</h2>
        <Form.Item
          name="country"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select country" onChange={onChangeCountry}>
            <Option value="Vietnam">Vietnam</Option>
            <Option value="USA">USA</Option>
            <Option value="China">China</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item name="apartment">
          <Input placeholder="Apartment, suite, etc. (optional)" />
        </Form.Item>

        <div className="input__group">
          <Form.Item
            name="city"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
            }}
          >
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            name="postalCode"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              marginLeft: '8px',
            }}
          >
            <Input placeholder="Postal code (optional)" />
          </Form.Item>
        </div>
      </section>
      <section className="section__delivery">
        <h2>Shipping method</h2>
        <Form.Item>
          <div className="radio__button">
            <Radio defaultChecked="true">Standard</Radio>
            <span className="radio__logo">Free</span>
          </div>
        </Form.Item>
      </section>

      <section className="section__payment">
        <h2>Payment method</h2>
        <Form.Item
          name="payment"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group
            style={{ width: '100%' }}
            onChange={onChangePayment}
            value={paymentValue}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              <div>
                <Radio value={1} className="radio__button">
                  Paypal
                  <span className="radio__logo">
                    <img src={paypal_logo} alt="" style={{ width: '25px' }} />
                  </span>
                </Radio>
              </div>
              <Radio value={2} className="radio__button">
                Cash on delivery (COD)
                <span className="radio__logo">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8dkI2tu70n35oCEbOvavHq1jjhPkZGFEqQkJumJHPxMtbN7PMv3qVlifVyCtcEIAuap8&usqp=CAU"
                    alt=""
                    style={{ width: '25px' }}
                  />
                </span>
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </section>

      <Button
        loading={loadingButton}
        type="primary"
        size={'large'}
        htmlType="submit"
      >
        Checkout
      </Button>
    </Form>
  );
};

export default CheckoutForm;
