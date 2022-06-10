import { Space } from "antd";
import React from "react";
import "./LazyLoaderProduct.scss";
export default function LazyLoaderProduct({ image }) {
  return (
    // <Space>
    <div className="container-lazyloader">
      <div className="item-container">
        <img className="item-container-image"/>
      </div>
    </div>

    // </Space>
  );
}
