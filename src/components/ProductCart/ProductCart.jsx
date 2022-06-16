import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import "./ProductCart.scss";
export default function ProductCart(props) {
  const { image, name, size, quantity, color } = props;
  // console.log(object);
  return (
    <div className="product-cart">
      <div className="product-cart__image">
        <img src={image[0].src} />
      </div>
      <div className="product-cart__content">
        <p>
          {name} - size / {color}
        </p>
        <p>QTY : {quantity}</p>
        <p> $125.00</p>
      </div>
      <div>
        <CloseOutlined style={{ fontSize: "18px" }} />
      </div>
    </div>
  );
}
