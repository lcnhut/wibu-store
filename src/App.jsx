import React from "react";
import "antd/dist/antd.css";
import "./App.scss";
import { AdminPage, Product } from "./pages";

function App() {
  return (
    <div className="App">
      {/* <Product /> */}
      <AdminPage />
    </div>
  );
}

export default App;
