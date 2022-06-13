import { Breadcrumb, Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import instance from "../../utils/AxiosConfig/AxiosConfig";
import SingleProduct from "../Product/ListProduct/SingleProduct";
import "./Collection.scss";
import FilterField from "./filter/FilterField";
export default function Collection() {
  const [products, setProducts] = useState();
  const [showProduct, setShowProduct] = useState(false);
  const listProduct = useRef();
  const getAllProduct = () => {
    instance
      .get("/products")
      .then(function (response) {
        const { data } = response;
        data && setProducts(data);
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllProduct();
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
        <FilterField showFilterButton={ShowFilter} />
      </div>
      <div
        class="collection__container__product list__product"
        ref={listProduct}
      >
        <Row
          gutter={[16, 26]}
          className="listproduct__wrapper"
          style={{ padding: "0", marginTop: "25px" }}
        >
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
      </div>
    </div>
  );
}
