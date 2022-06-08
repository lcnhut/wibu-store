import { AdminPage, Product } from "./pages";
import { Button } from "./components";
import "antd/dist/antd.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <Product />
      <Button label="Click me!" /> */}
      <AdminPage />
    </div>
  );
}

export default App;
