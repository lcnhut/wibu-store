import { Product } from "./pages";
import { Button } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Product />
      <Button label="Click me!" />
    </div>
  );
}

export default App;
