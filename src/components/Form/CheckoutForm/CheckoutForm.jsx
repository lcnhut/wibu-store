/* eslint-disable react/prop-types */
import { Button, Form, Input, Radio, Select, Space } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
        <h2>{t('checkout.contact_information')}</h2>

        <div className="input__group">
          <Form.Item
            name="firstName"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
            }}
          >
            <Input placeholder={t('checkout.first_name')} />
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
            <Input placeholder={t('checkout.last_name')} />
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
          <Input placeholder={t('checkout.contact')} />
        </Form.Item>
      </section>
      <section className="section__address">
        <h2>{t('checkout.shipping_address')}</h2>
        <Form.Item
          name="country"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder={t('checkout.country')}
            onChange={onChangeCountry}
          >
            <Option value="Vietnam">{t('country.vietnam')}</Option>
            <Option value="USA">{t('country.usa')}</Option>
            <Option value="China">{t('country.china')}</Option>
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
          <Input placeholder={t('checkout.address')} />
        </Form.Item>
        <Form.Item name="apartment">
          <Input placeholder={t('checkout.apartment')} />
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
            <Input placeholder={t('checkout.city')} />
          </Form.Item>
          <Form.Item
            name="postalCode"
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              marginLeft: '8px',
            }}
          >
            <Input placeholder={t('checkout.postal_code')} />
          </Form.Item>
        </div>
      </section>
      <section className="section__delivery">
        <h2>{t('checkout.shipping_method')}</h2>
        <Form.Item>
          <div className="radio__button">
            <Radio defaultChecked="true">{t('checkout.standard')}</Radio>
            <span className="radio__logo">{t('checkout.free')}</span>
          </div>
        </Form.Item>
      </section>

      <section className="section__payment">
        <h2>{t('checkout.payment_methods')}</h2>
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
                {t('checkout.cod')}
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
        {t('checkout.checkout')}
      </Button>
    </Form>
  );
};

export default CheckoutForm;
