import React from "react";
import "./styles.scss";

const SingleProduct = ({ product }) => {
  return (
    <div className="single__product__wrapper">
      <div className="single__product__image">
        <img height="100px" src={product.image} alt="product image" />
      </div>
      <div className="single__product__content">
        <h3>{product.name}</h3>
        <h5>{product.price}</h5>
      </div>
      <div className="single__product__action">
        <button>clickmen</button>
      </div>
    </div>
  );
};

export default SingleProduct;
