import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  return (
    <main>
      <Nav cartCount={Object.keys(cart).length} />
      <Outlet context={{ cart, setCart, products, setProducts }} />
    </main>
  );
}

export default App;
