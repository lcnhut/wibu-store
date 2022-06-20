import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLayout } from '../components';
import { AdminPage, Checkout, Collection, Product } from '../pages/';

export const Router = () => {
  const role = window.localStorage.getItem('role');
  return (
    <>
      <Routes>
        {role === 'admin' ? (
          <Route path="/" element={<AdminPage />} />
        ) : (
          <>
            <Route element={<AppLayout />}>
              <Route path="/" index element={<Product />} />
              <Route path="/collection" element={<Collection />} />
            </Route>
            <Route path="/checkout" element={<Checkout />} />
          </>
        )}

        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  );
};
