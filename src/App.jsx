import "antd/dist/antd.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components";
import { AdminPage, Product } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" index element={<Product />} />
        <Route path="*" />
      </Routes>
      {/* <Product /> */}
      <AdminPage />
    </div>
  );
}

export default App;
