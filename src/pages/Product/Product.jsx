import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Carousel, LazyLoaderProduct, ListProduct } from '../../components';
import { getAllProduct } from '../../store/Selector/product/filterProductSelector';
import { getLoadingOfProduct } from '../../store/Selector/product/productSelector';
import { getAllAsync } from '../../store/Slice/product/productSlice';
import './Product.scss';

export default function Product() {
  const loading = useSelector(getLoadingOfProduct);
  const AllProduct = useSelector(getAllProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAsync());
  }, []);

  return (
    <>
      <Carousel />
      <div className="container-lazyLoader">
        <LazyLoaderProduct
          title="Tortoiseshell Buckle"
          image="https://cdn.shopify.com/s/files/1/0277/0472/1542/files/banner9.1.jpg?v=1589180024"
        ></LazyLoaderProduct>
        <LazyLoaderProduct
          title="Woven-Rope Sandals"
          image="https://cdn.shopify.com/s/files/1/0277/0472/1542/files/banner9.2.jpg?v=1589180282"
        ></LazyLoaderProduct>
      </div>
      <div className="list_product">
        <ListProduct view_list={4} data={AllProduct} loading={loading} />
      </div>
    </>
  );
}
