import React from "react";
import "./Product.scss";
import Carousel from "./Carousel";
import ListProduct from "./ListProduct";
import LazyLoaderProduct from "./Lazyloader/LazyLoaderProduct";
import { Col, Row, Space } from "antd";

export default function Product() {
  return (
    <>
      <Carousel />
      <div className="container-lazyLoader">
        {/* <Space> */}
        <LazyLoaderProduct
          title="Tortoiseshell Buckle"
          image="https://cdn.shopify.com/s/files/1/0277/0472/1542/files/banner9.1.jpg?v=1589180024"
        ></LazyLoaderProduct>
        <LazyLoaderProduct
          title="Woven-Rope Sandals"
          image="https://cdn.shopify.com/s/files/1/0277/0472/1542/files/banner9.2.jpg?v=1589180282"
        ></LazyLoaderProduct>
        {/* </Space> */}
      </div>
      <Row className="listproduct__title__wrapper">
        <Col className="listproduct__title__container" span={24}>
          <h1>Shop The Collection</h1>
          <div className="listproduct__title__line"></div>
          <div className="listproduct__title__action">
            <button style={{ padding: "7px 0" }}>MEN</button>
            <button style={{ padding: "7px 0" }}>WOMEN</button>
          </div>
        </Col>
      </Row>
      <ListProduct />
    </>
  );
}
