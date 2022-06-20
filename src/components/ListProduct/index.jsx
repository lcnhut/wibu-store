import 'animate.css';
import { Col, Row, Skeleton, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import { axiosInstance } from '../../utils/AxiosConfig/AxiosConfig';
import SingleProduct from '../SingleProduct';
import './styles.scss';

let ROW_SHOW_IN_PAGE = 8;

const ListProduct = (props) => {
  let { view_list, data, loading } = props;
  const [loadingChangeProduct, setLoadingChangeProduct] = useState(loading);
  const ListData = useRef();
  useEffect(() => {
    setLoadingChangeProduct(!loadingChangeProduct);
    setTimeout(() => {
      setLoadingChangeProduct(false);
    }, 300);
  }, [data]);

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
      <Row gutter={[16, 26]} className="listproduct__wrapper" ref={ListData}>
        {loadingChangeProduct ? (
          <>
            {Array(ROW_SHOW_IN_PAGE)
              .fill(1)
              .map((card, index) => (
                <Col
                  xs={{ span: view_list ? 6 / view_list : 24 }}
                  sm={{ span: view_list ? 8 / view_list : 24 }}
                  md={{ span: view_list ? 12 / view_list : 12 }}
                  lg={{ span: view_list ? 24 / view_list : 8 }}
                  xl={{ span: view_list ? 24 / view_list : 6 }}
                  className="listproduct__item"
                  key={index}
                  span={6}
                >
                  <Skeleton active />
                </Col>
              ))}
          </>
        ) : (
          data &&
          data.map((product, id) => {
            return (
              id < ROW_SHOW_IN_PAGE && (
                <Col
                  xs={{ span: view_list ? 6 / view_list : 24 }}
                  sm={{ span: view_list ? 8 / view_list : 24 }}
                  md={{ span: view_list ? 12 / view_list : 12 }}
                  lg={{ span: view_list ? 24 / view_list : 8 }}
                  xl={{ span: view_list ? 24 / view_list : 6 }}
                  className="listproduct__item animate__animated animate__fadeIn"
                  key={id}
                  span={6}
                >
                  <SingleProduct product={product} />
                </Col>
              )
            );
          })
        )}
      </Row>
    </>
  );
};

export default ListProduct;
