import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import instance from "../../../utils/AxiosConfig/AxiosConfig";
import SingleProduct from "./SingleProduct";
import "./styles.scss";
const ListProduct = () => {
  const [products, setProducts] = useState();
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
  return (
    <Row gutter={[16, 26]} className="listproduct__wrapper">
      {products &&
        products.map((product, id) => (
          <Col className="listproduct__item" key={id} span={6}>
            <SingleProduct product={product} />
          </Col>
        ))}
    </Row>
  );
};

export default ListProduct;
