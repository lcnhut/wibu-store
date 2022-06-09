import React from "react";
import "./styles.scss";
import { HeartOutlined, SearchOutlined } from "@ant-design/icons";

const SingleProduct = ({ product }) => {
  return (
    <div className="single__product__wrapper">
      <div className="single__product__image">
        <div className="single__product__image__contain">
          <img src={product.image} alt="product image" />
          <div className="single__product__image__boxmodal">
            <span>
              <HeartOutlined />
            </span>
            <span>
              <SearchOutlined />
            </span>
          </div>
        </div>
      </div>
      <div className="single__product__content">
        <h3>{product.name}</h3>
        <h5>${product.price}</h5>
      </div>
      <div className="single__product__action">
        <button>clickmen</button>
      </div>
    </div>
  );
};

export default SingleProduct;
