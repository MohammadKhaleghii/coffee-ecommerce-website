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
  );
}

export default App;
