import { Carousel, Col, Image, Row, Space } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getByIdAsync } from '../../store/product/productSlice';
import './index.less';

export default function Details() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.singleProduct);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getByIdAsync(id));
  }, []);
  const { image } = product;
  return (
    <div className="container-page" style={{ padding: '0 7vw' }}>
      <Space className="details__page__title__container">
        <h1 className="details__page__title__h1">Home</h1>
        <h3 className="details__page__title__h3"> &gt; {product.name}</h3>
      </Space>
      <Row gutter={[26, 0]}>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          <Carousel dotPosition="left" autoplay autoplaySpeed={500}>
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
          carousel
        </Col>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          carousel
        </Col>
      </Row>
    </div>
  );
}
