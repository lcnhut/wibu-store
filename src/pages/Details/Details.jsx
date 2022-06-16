import { Carousel, Col, Image, Row, Space, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAllAsync, getByIdAsync } from '../../store/product/productSlice';

const { Title } = Typography;
export default function Details() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.singleProduct);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getByIdAsync(id));
  }, []);
  const { image } = product;
  console.log(image);
  return (
    <div className="container-page" style={{ padding: '0 7vw' }}>
      <Space className="details__page__title">
        <Title level={5}>Home</Title>
        <span> &gt; {product.name}</span>
      </Space>
      <Row gutter={[26, 0]}>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          <Carousel dotPosition="left" autoplay autoplaySpeed={500}>
            {image ? (
              image.map((img, key) => (
                <Image key={key} src={img.src} width={100} />
              ))
            ) : (
              <h1>loading</h1>
            )}
          </Carousel>
        </Col>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          carousel
        </Col>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          carousel
        </Col>
      </Row>
    </div>
  );
}
