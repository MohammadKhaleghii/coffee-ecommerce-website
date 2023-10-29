import { Route, Routes } from "react-router-dom";
import Home from './pages/home/index';
import Shop from "./pages/shop";

function App() {
  return (
    <Routes>
      <Route Component={Home} path="/" index />
      <Route Component={Shop} path="/shop" />
    </Routes>
  );
}

export default App;
