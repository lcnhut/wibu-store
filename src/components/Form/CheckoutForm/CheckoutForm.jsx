/* eslint-disable react/prop-types */
import { Button, Form, Input, Select } from 'antd';
import React from 'react';

import './CheckoutForm.scss';

const { Option } = Select;

const CheckoutForm = ({ handleFinishInformation, loadingButton }) => {
  const [form] = Form.useForm();

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

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
      <div className="section__contact">
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
          <Input placeholder="Email or mobile phone number" />
        </Form.Item>
      </div>
      <div className="section__address">
        <h2>Shipping address</h2>
        <Form.Item
          name="country"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select country" onChange={onChange}>
            <Option value="vietnam">Vietnam</Option>
            <Option value="usa">USA</Option>
            <Option value="eu">EU</Option>
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

        <Button
          loading={loadingButton}
          type="primary"
          size={'large'}
          htmlType="submit"
        >
          Continue to shipping
        </Button>
      </div>
    </Form>
  );
};

export default CheckoutForm;
