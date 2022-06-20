import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLayout } from '../components';
import {
  AdminPage,
  Checkout,
  Collection,
  Details,
  NotFound,
  Product,
} from '../pages/';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" index element={<Product />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/collection" element={<Collection />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
