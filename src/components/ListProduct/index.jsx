import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllAsync } from '../../store/product/productSlice';
import SingleProduct from '../SingleProduct';
import './styles.scss';

const ListProduct = () => {
  const products = useSelector((state) => state.product.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAsync());
    console.log(products);
  }, []);

  return (
    <>
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
