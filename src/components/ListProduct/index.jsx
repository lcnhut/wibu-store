/* eslint-disable react/prop-types */
import 'animate.css';
import { Col, Pagination, Row, Skeleton, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SingleProduct from '../SingleProduct';
import './styles.scss';

const ListProduct = (props) => {
  const ListData = useRef();
  let { data, loading } = props;
  const [loadingChangeProduct, setLoadingChangeProduct] = useState(loading);

  const { t } = useTranslation();
  const [numPagination, setNumPagination] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setLoadingChangeProduct(false);
    }, 500);
    setLoadingChangeProduct(true);
  }, [data]);

  const ROW_SHOW_IN_PAGE = 8;
  const sliceData = data.slice((numPagination - 1) * 8, numPagination * 8);
  return (
    <div className="collection__container">
      <Row className="listproduct__title__wrapper">
        <Col className="listproduct__title__container" span={24}>
          <h1>{t('product_list.shop_collection')}</h1>
          <div className="listproduct__title__line"></div>
        </Col>
      </Row>

      <Row gutter={[16, 26]} className="listproduct__wrapper" ref={ListData}>
        {loadingChangeProduct ? (
          <>
            {
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
                      <Space
                        style={{ display: 'flex', flexDirection: 'column' }}
                      >
                        <Skeleton.Button
                          style={{ width: '400px', height: '400px' }}
                          active={true}
                          size={'default'}
                          shape={'square'}
                          block={true}
                        />
                        <Skeleton.Input
                          active={true}
                          style={{ width: '400px', height: '15px' }}
                        />
                        <Skeleton.Input
                          active={true}
                          style={{ width: '400px', height: '15px' }}
                        />
                      </Space>
                    </Col>
                  ))}
              </>
            }
          </>
        ) : sliceData.length > 0 ? (
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
        ) : (
          <p>not found</p>
        )}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
        >
          {sliceData.length > 0 && (
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
