import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllAsync } from '../../../store/product/productSlice';
import SingleProduct from './SingleProduct';
import './styles.scss';

const ListProduct = () => {
  const products = useSelector((state) => state.product.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAsync());
  }, []);
  return (
    <>
      <Row className="listproduct__title__wrapper">
        <Col className="listproduct__title__container" span={24}>
          <h1>Shop The Collection</h1>
          <div className="listproduct__title__line"></div>
          <div className="listproduct__title__action">
            <button style={{ padding: '7px 0' }}>MEN</button>
            <button style={{ padding: '7px 0' }}>WOMEN</button>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 26]} className="listproduct__wrapper">
        {products &&
          products.map(
            (product, id) =>
              id < 8 && (
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                  className="listproduct__item"
                  key={id}
                  span={6}
                >
                  <SingleProduct product={product} />
                </Col>
              )
          )}
      </Row>
    </>
  );
};

export default ListProduct;
