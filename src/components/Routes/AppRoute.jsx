import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Product from "../Product/Product";
import Contact from "../Contact/Contact";
import Career from "../Careers/Careers";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />

      </Routes>
    </div>
  );
};

export default AppRoute;
