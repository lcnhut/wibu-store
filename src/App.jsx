import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { AdminPage, Product, Collection, Details } from "./pages";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Product />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/Collection" element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
