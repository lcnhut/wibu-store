import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import "./ProductCart.scss";
export default function ProductCart(props) {
  const { image } = props;
  return (
    <div className="product-cart">
      <div className="product-cart__image">
        <img src={image} />
      </div>
      <div className="product-cart__content">
        <p>Perth Fabric Twist Sliders - 37 / Black</p>
        <p>QTY : 1</p>
        <p> $125.00</p>
      </div>
      <div>
        <CloseOutlined style={{ fontSize: "18px" }} />
      </div>
    </div>
  );
}
