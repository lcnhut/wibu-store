import { StarOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Form,
  Image,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
import { useForm } from 'rc-field-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getByIdAsync } from '../../store/product/productSlice';
import './index.less';
import './styles.scss';

const { Option } = Select;
export default function Details() {
  const form = useForm();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.singleProduct);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getByIdAsync(id));
  }, []);
  const { image, colors } = product;
  console.log(product);
  const data = [
    {
      Title: 'Why Choose Us ?',
      content:
        'Official Herschel stockist Australian warranty assistance & support Australian shipping & returns.Customer first experience environmentally focused',
    },
    {
      Title: 'Return',
      content:
        'Return this product within 100 days if you change your mind. Get a refund/replacement & free return shipping if it arrives damaged or not as described',
    },
    {
      Title: 'Shipping',
      content:
        'Free if stated near price. $9.95 Australia wide (up to 10 items). $18.95 for Express Post (generally 1 business day).',
    },
  ];
  return (
    <div className="container-page" style={{ padding: '0 7vw' }}>
      <Space className="details__page__title__container">
        <h1 className="details__page__title__h1">Home</h1>
        <h3 className="details__page__title__h3"> &gt; {product.name}</h3>
      </Space>
      <Row gutter={[26, 0]}>
        <Col xl={{ span: 10 }} lg={{ span: 8 }} md={{ span: 12 }}>
          <Carousel dotPosition="bottom" autoplay autoplaySpeed={1500}>
            {image ? (
              image.map((img, key) => <Image key={key} src={img.src} />)
            ) : (
              <h1>loading</h1>
            )}
          </Carousel>
        </Col>
        <Col xl={{ span: 9 }} lg={{ span: 8 }} md={{ span: 12 }}>
          <Space direction="vertical">
            <h1>{product.name}</h1>
            <h3 style={{ color: '#CEA384' }}>${product.price} USD</h3>
            <Space style={{ color: '#CEA384' }}>
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              No reviews
            </Space>
          </Space>
          <Divider />
          <Space style={{ color: 'rgba(0,0,0,0.5)' }} direction="vertical">
            Add a touch of glam to any sunny-day ensemble with these sparkly
            sliders. The buckled straps are drenched in teeny diamantes and the
            footbeds are moulded for comfort.
            <h1>HURRY! ONLY 40 LEFT IN STOCK</h1>
          </Space>
          <Form
            form={form}
            colon={false}
            fields={[
              {
                name: ['qty'],
                value: 1,
              },
            ]}
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 21 }}
          >
            <Form.Item label="Color">
              <Select>
                {colors &&
                  colors.map((item, key) => (
                    <Option key={key}>{item.color}</Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item label="Size">
              <Select defaultValue="">
                {colors &&
                  colors.map((item, key) =>
                    item.sizes.map((i, k) => <Option>{i.size}</Option>)
                  )}
              </Select>
            </Form.Item>
            <Form.Item name="qty">
              <InputNumber min={1} />
              <Space>
                <Button style={{ marginLeft: '10px' }}>ADD TO CART</Button>
              </Space>
            </Form.Item>
          </Form>
          <Space>
            <Button>BUY IT NOW</Button>
          </Space>
        </Col>
        <Col xl={{ span: 5 }} lg={{ span: 8 }} md={{ span: 24 }}>
          <Row gutter={[16, 0]}>
            {data.map((item, key) => (
              <Col key={key} sm={8} md={8} lg={24} xl={24}>
                <Space style={{ textAlign: 'center' }}>
                  <Card hoverable title={item.Title}>
                    {item.content}
                  </Card>
                </Space>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
