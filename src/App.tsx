<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./component/spinner/spinner";
const Home = lazy(()=> import( "./pages/home/index")  )
const Shop = lazy(() => import("./pages/shop"));
const Suppout = lazy(() => import("./pages/suppout"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const Cart = lazy(() => import("./pages/cart"));
const User = lazy(() => import("./pages/user"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route Component={Home} path="/" index />
        <Route Component={Shop} path="/shop" />
        <Route Component={Suppout} path="/suppout" />
        <Route Component={Contact} path="/contact" />
        <Route Component={About} path="/about" />
        <Route Component={Cart} path="/cart" />
        <Route Component={User} path="/user" />
      </Routes>
    </Suspense>
=======
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
>>>>>>> 63aee3a (update folder names)
  );
}

export default App;
