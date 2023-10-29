import { Route, Routes } from "react-router-dom";
import Home from './pages/home/index';
import Shop from "./pages/shop";
import Suppout from "./pages/suppout";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route Component={Home} path="/" index />
      <Route Component={Shop} path="/shop" />
      <Route Component={Suppout} path="/suppout" />
      <Route Component={Contact} path="/contact" />
    </Routes>
  );
}

export default App;
