import { StarOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Form,
  Image,
  InputNumber,
  Row,
  Select,
  Space,
  Spin,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { productApi } from '../../api';
import {
  addToCart,
  getByIdAsync,
} from '../../store/Slice/product/productSlice';
import './Details.scss';

const { Option } = Select;
export default function Details() {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [qty] = useState(1);
  const [countQty, setCountQty] = useState(1);

  const [product, setProduct] = useState();
  const [productData, setProductData] = useState();
  const isLoading = useSelector((state) => state.product.isLoading);

  const colors =
    productData &&
    productData.colors &&
    productData.colors.map((color) => color.color);
  const selectedColor = colors && colors[0];
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    dispatch(getByIdAsync(id));
    const getProduct = async (id) => {
      const response = await productApi.getById(id);
      setProduct(response.data);
    };
    getProduct(id);
  }, []);

  useEffect(() => {
    product &&
      form.setFieldsValue({
        color: product.colors[0].color,
        size: product.colors[0].sizes[0].size,
      });
  }, [product]);

  useEffect(() => {
    productData &&
      productData.colors &&
      productData.colors.forEach((cl) => {
        cl.sizes.forEach((item) => setCountQty((pre) => (pre += item.inStock)));
        if (cl.color === selectedColor) {
          const sizes = cl.sizes.map((s) => s.size);
          setSizes(sizes);
        }
      });
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      qty: qty,
      size: sizes[0],
    });
  }, [selectedColor, sizes]);

  const handleSelectColor = (selectedColor) => {
    productData.colors.forEach((item) => {
      if (item.color === selectedColor) {
        const sizes = item.sizes.map((s) => s.size);
        setSizes(sizes);
      }
    });
  };

  // handle price of current language
  const EXCHANGE_RATE = 23231;
  const currentLanguage = i18n.language;

  useEffect(() => {
    if (currentLanguage === 'vi') {
      const formatProduct = {
        ...product,
        price: product.price * EXCHANGE_RATE,
      };
      setProductData(formatProduct);
    } else {
      setProductData(product);
    }
  }, [product, currentLanguage]);

  const data = [
    {
      Title: 'why_choose_us',
      content: 'why_choose_us_description',
    },
    {
      Title: 'return',
      content: 'return_description',
    },
    {
      Title: 'shipping',
      content: 'shipping_description',
    },
  ];

  const handleAddToCart = (values) => {
    const submitData = {
      ...values,
      id: productData.id,
      image: productData.image,
      price: qty ? productData.price * qty : productData.price * 1,
      color: values.color,
      sizes: values.sizes,
      quantity: values.qty ? values.qty : 1,
      name: productData.name,
    };
    dispatch(addToCart(submitData));
  };

  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        handleAddToCart(values);
        form.setFieldsValue({
          sizes: product.colors[0].sizes[0].size,
          color: product.colors[0].color,
        });
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Spin spinning={isLoading}>
      <>
        {productData && (
          <div className="container-page" style={{ padding: '0 7vw' }}>
            <Space className="details__page__title__container">
              <Link to="/">
                <h1 className="details__page__title__h1">
                  {t('details__page.home')}
                </h1>
              </Link>
              <h3 className="details__page__title__h3">
                {' '}
                &gt; {productData.name}
              </h3>
            </Space>
            <Row gutter={[26, 0]}>
              <Col xl={{ span: 10 }} lg={{ span: 8 }} md={{ span: 12 }}>
                <Carousel dotPosition="bottom" autoplay autoplaySpeed={1500}>
                  {productData.image ? (
                    productData.image.map((img, key) => (
                      <Image preview={false} key={key} src={img.src} />
                    ))
                  ) : (
                    <h1>loading</h1>
                  )}
                </Carousel>
              </Col>
              <Col xl={{ span: 9 }} lg={{ span: 8 }} md={{ span: 12 }}>
                <Space direction="vertical">
                  <h1>{productData.name}</h1>
                  <h3 style={{ color: '#CEA384' }}>
                    {t(`details__page.price_product`, {
                      prices: productData.price,
                    })}
                  </h3>
                  <Space style={{ color: '#CEA384' }}>
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    {t('details__page.no_review')}
                  </Space>
                </Space>
                <Divider />
                <Space
                  style={{ color: 'rgba(0,0,0,0.5)' }}
                  direction="vertical"
                >
                  {productData.description}
                  <h1>{t(`details__page.hurry`, { inStock: countQty })}</h1>
                </Space>
                <Form
                  onFinish={onFinish}
                  form={form}
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 20 }}
                  id="detailspage__form"
                >
                  <Form.Item
                    rules={[{ required: true }]}
                    name="color"
                    label={t('details__page.color')}
                  >
                    <Select onSelect={(item) => handleSelectColor(item)}>
                      {colors &&
                        colors.map((item, key) => (
                          <Option value={item} key={key}>
                            {item.color}
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    rules={[{ required: true }]}
                    name="size"
                    label={t('details__page.size')}
                  >
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
                  <Form.Item
                    rules={[{ required: true }]}
                    name="qty"
                    label={t('details__page.quantity')}
                  >
                    <InputNumber min={1} />
                  </Form.Item>
                  <Button htmlType="submit">
                    {t('details__page.add_to_cart')}
                  </Button>
                </Form>
              </Col>
              <Col xl={{ span: 5 }} lg={{ span: 8 }} md={{ span: 24 }}>
                <Row gutter={[16, 0]}>
                  {data.map((item, key) => (
                    <Col key={key} sm={8} md={8} lg={24} xl={24}>
                      <Space style={{ textAlign: 'center' }}>
                        <Card
                          hoverable
                          title={t(`details__page.${item.Title}`)}
                        >
                          {t(`details__page.${item.content}`)}
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
