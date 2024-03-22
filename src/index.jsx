import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./config/RoutesApp.jsx";
import Index from "./Layout/index.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RoutesApp>
      <Index />
    </RoutesApp>
  </BrowserRouter>
);
