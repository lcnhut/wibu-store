import { Breadcrumb, Col, Row } from "antd";

import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  productSelector, selectList } from "../../store/productSelector";
import { getAllAsync } from "../../store/productSlice";
import instance from "../../utils/AxiosConfig/AxiosConfig";
import ListProduct from "../Product/ListProduct";
import SingleProduct from "../Product/ListProduct/SingleProduct";
import "./Collection.scss";

import FilterField from "./filter/FilterField";
export default function Collection() {
  const [products, setProducts] = useState();
  const [showProduct, setShowProduct] = useState(false);
  const [filterValue, setFilterValue] = useState();
  const listProduct = useRef();
  const selector = useSelector(productSelector);
  const dispatch = useDispatch();
  console.log(selector);
  const getAllProduct = () => {
    // instance
    //   .get("/products")
    //   .then(function (response) {
    //     const { data } = response;
    //     data && setProducts(data);
    //   })
    //   .catch(function (e) {
    //     console.log(e);
    //   });
  };

  useEffect(() => {
    dispatch(getAllAsync());
  }, []);
  function ShowFilter() {
    if (showProduct) {
      listProduct.current.style.transform = "translateY(0)";
    } else {
      listProduct.current.style.transform = "translateY(-280px)";
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
        <ListProduct />
      </div>
    </div>
  );
}
