import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { Footer, Navbar } from './components';
import { AdminPage, Checkout, Collection, Product } from './pages';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" index element={<Product />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/Collection" element={<Collection />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
