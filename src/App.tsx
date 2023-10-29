import { Route, Routes } from "react-router-dom";
import Home from './pages/home/index';
import Shop from "./pages/shop";
import Suppout from "./pages/suppout";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {
  return (
    <Routes>
      <Route Component={Home} path="/" index />
      <Route Component={Shop} path="/shop" />
      <Route Component={Suppout} path="/suppout" />
      <Route Component={Contact} path="/contact" />
      <Route Component={About} path="/about" />
    </Routes>
  );
}

export default App;
