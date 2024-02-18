import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Likes from "../pages/Likes";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";

function RoutesApp() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />  tüm belirsiz yönlendirmeleri anasayfaya yapar 
      <Route path="/Home" element={<Home />} />
      <Route path="/Likes" element={<Likes />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}

export default RoutesApp;
