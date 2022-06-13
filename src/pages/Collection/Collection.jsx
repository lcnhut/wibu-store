import { Breadcrumb } from "antd";
import React from "react";
import "./Collection.scss";
import FilterField  from "./filter/FilterField";
export default function Collection() {
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
        <FilterField />
      </div>
    </div>
  );
}
