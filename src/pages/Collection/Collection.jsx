import { Breadcrumb, Col, Row } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FilterField, ListProduct } from '../../components';
import {
  productSelector,
  selectList,
} from '../../store/Selector/product/productSelector';
import { getAllAsync } from '../../store/Slice/product/productSlice';
import './Collection.scss';

export default function Collection() {
  const [products, setProducts] = useState();
  const [showProduct, setShowProduct] = useState(false);
  const [filterValue, setFilterValue] = useState();
  const listProduct = useRef();
  const dispatch = useDispatch();

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
        <ListProduct view_list={filterValue} />
      </div>
    </div>
  );
}
