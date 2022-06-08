import { Product } from "./pages";
import { Button, Navbar } from "./components";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" index element={<Product />} />
        <Route path="*" />
      </Routes>
    </div>
  );
}

export default App;
