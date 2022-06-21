import 'animate.css';
import { Col, Pagination, Row, Skeleton, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import SingleProduct from '../SingleProduct';
import './styles.scss';

const ListProduct = (props) => {
  const ListData = useRef();
  let { view_list, data, loading } = props;
  const [loadingChangeProduct, setLoadingChangeProduct] = useState(loading);
  const [numPagination, setNumPagination] = useState(1);

  useEffect(() => {
    setLoadingChangeProduct(!loadingChangeProduct);
    setTimeout(() => {
      setLoadingChangeProduct(false);
    }, 300);
  }, [data]);
  const ROW_SHOW_IN_PAGE = 8;
  const sliceData = data.slice((numPagination - 1) * 8, numPagination * 8);
  return (
    <div className="collection__container">
      <Row className="listproduct__title__wrapper">
        <Col className="listproduct__title__container" span={24}>
          <h1>Shop The Collection</h1>
          <div className="listproduct__title__line"></div>
        </Col>
      </Row>
      <Row gutter={[16, 26]} className="listproduct__wrapper" ref={ListData}>
        {loadingChangeProduct ? (
          <>
            {Array(ROW_SHOW_IN_PAGE)
              .fill(1)
              .map((card, index) => (
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                  className="listproduct__item"
                  key={index}
                  span={6}
                >
                  <Skeleton active />
                </Col>
              ))}
          </>
        ) : (
          sliceData &&
          sliceData.map((product, id) => {
            return (
              id < ROW_SHOW_IN_PAGE && (
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
            );
          })
        )}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
        >
          {data && (
            <Pagination
              showSizeChanger
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
              onChange={(value) => setNumPagination(value)}
              defaultCurrent={1}
              total={data.length}
              defaultPageSize={8}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ListProduct;
