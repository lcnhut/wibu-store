import React from "react";
import "./Product.scss";
import Carousel from "./Carousel";
import ListProduct from "./ListProduct";
import LazyLoaderProduct from "./Lazyloader/LazyLoaderProduct";
import { Space } from "antd";

export default function Product() {
  return (
    <>
      <Carousel />
      <div className="container-lazyLoader">
        {/* <Space> */}
        <LazyLoaderProduct  image="https://cdn.shopify.com/s/files/1/0277/0472/1542/files/banner9.1.jpg?v=1589180024"></LazyLoaderProduct>
        <LazyLoaderProduct image="https://cdn.shopify.com/s/files/1/0277/0472/1542/files/banner9.2.jpg?v=1589180282"></LazyLoaderProduct>
        {/* </Space> */}
      </div>
      <ListProduct />
    </>
  );
}
