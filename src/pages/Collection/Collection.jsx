import { Breadcrumb, Col, Row } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FilterField, ListProduct } from '../../components';
import {
  getFilterCategories,
  getFilterProductSelector,
} from '../../store/Selector/product/filterProductSelector';
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
  useEffect(() => {
    dispatch(getAllAsync());
  }, []);
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
        <h1>Collection</h1>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Collection</Breadcrumb.Item>
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
          data={getFilter}
          loading={loading}
        />
      </div>
    </div>
  );
}
