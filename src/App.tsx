import {Route, Routes} from "react-router-dom";
import Home from "./routes/home/index";
import support from "./routes/support";
import Contact from "./routes/contact";
import About from "./routes/about";
import Cart from "./routes/cart";
import User from "./routes/user";
import Shop from "./routes/shop";

function App() {
  return (
    <Routes>
      <Route Component={Home} path="/" index />
      <Route Component={Shop} path="/shop" />
      <Route Component={support} path="/support" />
      <Route Component={Contact} path="/contact" />
      <Route Component={About} path="/about" />
      <Route Component={Cart} path="/cart" />
      <Route Component={User} path="/user" />
    </Routes>
  );
}

export default App;
