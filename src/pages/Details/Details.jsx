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
  Spin,
} from 'antd';
import { set } from 'lodash';
import { useForm } from 'rc-field-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { addToCart, getByIdAsync } from '../../store/product/productSlice';
import './Details.scss';

const { Option } = Select;
export default function Details() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [countQty, setCountQty] = useState(1);

  const product = useSelector((state) => state.product.singleProduct);
  const isLoading = useSelector((state) => state.product.isLoading);
  useEffect(() => {
    dispatch(getByIdAsync(id));
  }, [id]);

  const colors = product.colors && product.colors.map((color) => color.color);
  const selectedColor = colors && colors[0];
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    form.setFieldsValue({
      color: selectedColor,
      qty: qty,
    });
  }, [selectedColor]);
  useEffect(() => {
    product.colors &&
      product.colors.forEach((cl) => {
        cl.sizes.forEach((item) => setCountQty((pre) => (pre += item.inStock)));
        if (cl.color === selectedColor) {
          const sizes = cl.sizes.map((s) => s.size);
          setSizes(sizes);
        }
      });
  }, []);
  const handleSelectColor = (selectedColor) => {
    product.colors.forEach((item) => {
      if (item.color === selectedColor) {
        const sizes = item.sizes.map((s) => s.size);
        setSizes(sizes);
      }
    });
  };

  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        form.setFieldsValue({
          sizes: sizes[0],
          color: selectedColor,
          qty: 1,
        });
        handleAddToCart(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  useEffect(() => {
    form.setFieldsValue({
      sizes: sizes[0],
    });
  }, [sizes]);

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

  const handleAddToCart = (values) => {
    const submitData = {
      ...values,
      id: product.id,
      image: product.image,
      color: values.color,
      sizes: values.sizes,
      qty: values.qty ? values.qty : 1,
      name: product.name,
    };
    dispatch(addToCart(submitData));
  };
  return (
    <Spin spinning={isLoading}>
      <>
        {product && (
          <div className="container-page" style={{ padding: '0 7vw' }}>
            <Space className="details__page__title__container">
              <Link to="/">
                <h1 className="details__page__title__h1">Home</h1>
              </Link>
              <h3 className="details__page__title__h3"> &gt; {product.name}</h3>
            </Space>
            <Row gutter={[26, 0]}>
              <Col xl={{ span: 10 }} lg={{ span: 8 }} md={{ span: 12 }}>
                <Carousel dotPosition="bottom" autoplay autoplaySpeed={1500}>
                  {product.image ? (
                    product.image.map((img, key) => (
                      <Image preview={false} key={key} src={img.src} />
                    ))
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
                <Space
                  style={{ color: 'rgba(0,0,0,0.5)' }}
                  direction="vertical"
                >
                  Add a touch of glam to any sunny-day ensemble with these
                  sparkly sliders. The buckled straps are drenched in teeny
                  diamantes and the footbeds are moulded for comfort.
                  <h1>HURRY! ONLY {countQty} LEFT IN STOCK</h1>
                </Space>
                <Form
                  onFinish={onFinish}
                  form={form}
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 20 }}
                >
                  <Form.Item name="color" label="Color">
                    <Select onSelect={(item) => handleSelectColor(item)}>
                      {colors &&
                        colors.map((item, key) => (
                          <Option value={item} key={key}>
                            {item.color}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                  <Form.Item name="sizes" label="Size">
                    <Select>
                      {sizes &&
                        sizes
                          .sort((a, b) => a - b)
                          .map((s, key) => (
                            <Option value={s} key={key}>
                              {s}
                            </Option>
                          ))}
                    </Select>
                  </Form.Item>
                  <Form.Item name="qty" label="Quantity">
                    <InputNumber min={1} />
                  </Form.Item>
                  <Button htmlType="submit">Add To Cart</Button>
                </Form>
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
        )}
      </>
    </Spin>
  );
}
