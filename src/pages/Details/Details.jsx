import { StarOutlined } from '@ant-design/icons';
import {
  Carousel,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Row,
  Select,
  Space,
} from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getByIdAsync } from '../../store/product/productSlice';
import './index.less';

const { Option } = Select;

export default function Details() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.singleProduct);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getByIdAsync(id));
  }, []);
  const { image, colors } = product;
  return (
    <div className="container-page" style={{ padding: '0 7vw' }}>
      <Space className="details__page__title__container">
        <h1 className="details__page__title__h1">Home</h1>
        <h3 className="details__page__title__h3"> &gt; {product.name}</h3>
      </Space>
      <Row gutter={[26, 0]}>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          <Carousel dotPosition="bottom" autoplay autoplaySpeed={1500}>
            {image ? (
              image.map((img, key) => (
                <Image key={key} src={img.src} width={500} />
              ))
            ) : (
              <h1>loading</h1>
            )}
          </Carousel>
        </Col>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          <Space direction="vertical">
            <h1>{product.name}</h1>
            <h3>${product.price}</h3>
            <Space>
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </Space>
          </Space>
          <Divider />
          <Space direction="vertical">
            Add a touch of glam to any sunny-day ensemble with these sparkly
            sliders. The buckled straps are drenched in teeny diamantes and the
            footbeds are moulded for comfort.
            <h1>HURRY! ONLY 40 LEFT IN STOCK</h1>
          </Space>
          <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
            <Form.Item label="Color">
              <Select>
                {/* {colors.map((item, key) => (
                    <Option key={key}>{item.color}</Option>
                  ))} */}
              </Select>
            </Form.Item>
            <Form.Item label="Color">
              {/* <Select>
                  {sizes.map((item, key) => (
                    <Option key={key}>{item.size}</Option>
                  ))}
                </Select> */}
            </Form.Item>
          </Form>
        </Col>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          carousel
        </Col>
      </Row>
    </div>
  );
}
