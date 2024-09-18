import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

function App() {
  const [cart, setCart] = useState({});
  return (
    <main>
      <Nav cartCount={Object.keys(cart).length} />
      <Outlet context={[cart, setCart]} />
    </main>
  );
}

export default App;
