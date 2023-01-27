import React from "react";
import Navbar from "./Navbar";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
