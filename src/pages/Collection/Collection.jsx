import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FilterField, ListProduct } from '../../components';
import { getFilterProductSelector } from '../../store/Selector/product/filterProductSelector';
import { getLoadingOfProduct } from '../../store/Selector/product/productSelector';
import { getAllAsync } from '../../store/Slice/product/productSlice';
import './Collection.scss';

export default function Collection() {
  const [showProduct, setShowProduct] = useState(false);
  const [filterValue, setFilterValue] = useState();
  const listProduct = useRef();
  const dispatch = useDispatch();
  const getFilter = useSelector(getFilterProductSelector);
  const loading = useSelector(getLoadingOfProduct);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(getAllAsync());
  }, []);

  const [productList, setProductList] = useState([]);
  const EXCHANGE_RATE = 23231;

  const currentLanguage = i18n.language;

  useEffect(() => {
    if (currentLanguage === 'vi') {
      const formatData = getFilter.map((product) => {
        return {
          ...product,
          price: product.price * EXCHANGE_RATE,
        };
      });
      setProductList(formatData);
    } else {
      setProductList(getFilter);
    }
  }, [getFilter, currentLanguage]);

  function ShowFilter() {
    if (showProduct) {
      listProduct.current.style.transform = 'translateY(0)';
    } else {
      listProduct.current.style.transform = 'translateY(-280px)';
    }
    setShowProduct(!showProduct);
  }

  return (
    <div className="collection__container">
      <div className="collection__container__title">
        <h1>{t('navbar.collection')}</h1>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">
              <HomeOutlined />
              <span style={{ marginLeft: '5px' }}>{t('navbar.home')}</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">{t('navbar.collection')}</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="collection__container__product">
        <FilterField
          showFilterButton={ShowFilter}
          setValueShowItem={setFilterValue}
        />
      </div>
      <div
        className="collection__container__product list__product"
        ref={listProduct}
      >
        <ListProduct
          view_list={filterValue}
          data={productList}
          loading={loading}
        />
      </div>
    </div>
  );
}
