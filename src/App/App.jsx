import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

function App() {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
}

export default App;
