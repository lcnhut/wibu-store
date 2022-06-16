import React, { useEffect } from "react";
import { Row, Col, Carousel, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllAsync } from "../../store/productSlice";

export default function Details() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.list);
  console.log(products);
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  useEffect(() => {
    dispatch(getAllAsync());
  }, []);
  return (
    <div className="container-page" style={{ padding: "0 7vw" }}>
      <Row gutter={[26, 0]}>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          <Carousel dotPosition="left" autoplay autoplaySpeed={500}>
            {product.image.map((img, key) => {
              <h1>{console.log(img.src)}</h1>;
            })}
          </Carousel>
        </Col>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          carousel
        </Col>
        <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 12 }}>
          carousel
        </Col>
      </Row>
    </div>
  );
}
