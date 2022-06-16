import { Space } from 'antd';
import React from 'react';

import { Carousel, LazyLoaderProduct, ListProduct } from '../../components';
// import Carousel from './Carousel';
// import LazyLoaderProduct from './Lazyloader/LazyLoaderProduct';
// import ListProduct from './ListProduct';
import './Product.scss';

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
      <ListProduct />
    </>
  );
}
