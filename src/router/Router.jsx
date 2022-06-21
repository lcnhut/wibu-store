import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AdminLayout, AppLayout } from '../components';
import {
  Checkout,
  Collection,
  Details,
  Invoice,
  NotFound,
  Product,
  ProductAdmin,
} from '../pages/';

export const Router = () => {
  const role = window.localStorage.getItem('role');
  return (
    <>
      <Routes>
        {role === 'admin' ? (
          <Route element={<AdminLayout />}>
            <Route path="/" element={<ProductAdmin />} />
            <Route path="/invoices" element={<Invoice />} />
          </Route>
        ) : (
          <>
            <Route element={<AppLayout />}>
              <Route path="/" index element={<Product />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/details/:id" element={<Details />} />
            </Route>
            <Route path="/checkout" element={<Checkout />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
