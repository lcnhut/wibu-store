import { Carousel, Col, Image, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAllAsync, getByIdAsync } from '../../store/product/productSlice';

export default function Details() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.singleProduct);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getByIdAsync(id));
  }, []);
  // console.log(product);
  return (
    <div className="container-page" style={{ padding: '0 7vw' }}>
      <Row gutter={[26, 0]}>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          <Carousel dotPosition="left" autoplay autoplaySpeed={500}>
            {product.image.map((img, key) => {
              <h1>{img.src}</h1>;
            })}
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
