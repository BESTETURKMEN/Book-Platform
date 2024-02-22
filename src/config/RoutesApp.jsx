import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Likes from "../pages/Likes";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Alisveris from "../pages/Alisveris";
import Ayarlar from "../pages/Ayarlar";
import Payment from "../pages/Payment";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Likes" element={<Likes />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Ayarlar" element={<Ayarlar />} />
      <Route path="/Alisveris" element={<Alisveris />} />
      <Route path="/Payment" element={<Payment />} />
    </Routes>
  );
}

export default RoutesApp;
