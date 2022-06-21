import 'animate.css';
import { Col, Row, Skeleton, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

// import { getAllAsync } from '../../store/slice/product/productSlice';
import { getAllAsync } from '../../store/Slice/product/productSlice';
import SingleProduct from '../SingleProduct';
import './styles.scss';

const ListProduct = (props) => {
  const ListData = useRef();
  let { view_list, data, loading } = props;
  const [loadingChangeProduct, setLoadingChangeProduct] = useState(loading);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    setLoadingChangeProduct(!loadingChangeProduct);
    setTimeout(() => {
      setLoadingChangeProduct(false);
    }, 300);
  }, [data]);
  const ROW_SHOW_IN_PAGE = 8;

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
          data &&
          data.map((product, id) => {
            return (
              id < ROW_SHOW_IN_PAGE && (
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
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
    </div>
  );
};

export default ListProduct;
