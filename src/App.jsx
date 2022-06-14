import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { AdminPage, Product, Collection } from "./pages";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Product />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/Collection" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default App;
