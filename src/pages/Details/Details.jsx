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
import formatCurrency from '../../utils/formatCurrency';
import './Details.scss';

const { Option } = Select;
export default function Details() {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [qty] = useState(1);
  const [inStockPerColor, setInStockPerColor] = useState(1);
  const [product, setProduct] = useState();
  const isLoading = useSelector((state) => state.product.isLoading);

  const colors =
    product && product.colors && product.colors.map((color) => color.color);
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
    product &&
      product.colors &&
      product.colors.forEach((cl) => {
        if (cl.color === selectedColor) {
          const sizes = cl.sizes.map((s) => s.size);
          setSizes(sizes);
          cl.sizes.forEach((instock) => {
            let total = 0;
            total += instock.inStock;
            setInStockPerColor(total);
          });
        }
      });
  }, [selectedColor]);

  useEffect(() => {
    form.setFieldsValue({
      qty: qty,
      size: sizes[0],
    });
  }, [selectedColor, sizes]);

  const handleSelectColor = (selectedColor) => {
    product.colors.forEach((item) => {
      if (item.color === selectedColor) {
        const sizes = item.sizes.map((s) => s.size);
        setSizes(sizes);
        item.sizes.forEach((instock) => {
          let total = 0;
          total += instock.inStock;
          setInStockPerColor(total);
        });
      }
    });
  };

  // handle price of current language
  const currentLanguage = i18n.language;

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
      id: product.id,
      image: product.image,
      price: qty ? product.price * qty : product.price * 1,
      color: values.color,
      sizes: values.sizes,
      quantity: values.qty ? values.qty : 1,
      name: product.name,
      inStock: inStockPerColor,
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
    <>
      {isLoading && (
        <div className="spin__wrapper">
          <Spin spinning={isLoading} />
        </div>
      )}
      {product && (
        <div className="container-page" style={{ padding: '0 7vw' }}>
          <Space className="details__page__title__container">
            <Link to="/">
              <h1 className="details__page__title__h1">
                {t('details__page.home')}
              </h1>
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
                <h3 style={{ color: '#CEA384' }}>
                  {t(`details__page.price_product`, {
                    val: formatCurrency(product.price, currentLanguage),
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
              <Space style={{ color: 'rgba(0,0,0,0.5)' }} direction="vertical">
                {product.description}
                <h1>
                  {t(`details__page.hurry`, {
                    inStock: inStockPerColor,
                  })}
                </h1>
              </Space>
              <Form onFinish={onFinish} form={form} labelCol={{ span: 6 }}>
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
                  <InputNumber min={1} max={inStockPerColor} />
                </Form.Item>
                <div className="button__wrapper">
                  <Button
                    type="primary"
                    className="button__submit"
                    htmlType="submit"
                  >
                    {t('details__page.add_to_cart')}
                  </Button>
                </div>
              </Form>
            </Col>
            <Col xl={{ span: 5 }} lg={{ span: 8 }} md={{ span: 24 }}>
              <Row gutter={[16, 0]}>
                {data.map((item, key) => (
                  <Col key={key} sm={8} md={8} lg={24} xl={24}>
                    <Space style={{ textAlign: 'center' }}>
                      <Card title={t(`details__page.${item.Title}`)}>
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
  );
}
