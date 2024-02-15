import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Likes from "../pages/Likes";
import Contact from "../pages/Contact";

function RoutesApp() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Likes" element={<Likes />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesApp;
