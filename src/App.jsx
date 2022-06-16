import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { Footer, Navbar } from './components';
import { AdminPage, Collection, Product } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Product />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/Collection" element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
