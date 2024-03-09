import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./config/RoutesApp.jsx";
import Index from "./Layout/index.jsx";
// import { ThemeSwitcherProvider } from "react-css-theme-switcher";

// const themes = {
//   dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
//   light: `${process.env.PUBLIC_URL}/light-theme.css`,
// };

// if (!localStorage.getItem("theme")) {
//   localStorage.setItem("theme", "dark");
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme={localStorage.getItem("theme")}
      insertionPoint={document.getElementById("inject-styles-here")}
    > */}
    <RoutesApp>
      <Index />
    </RoutesApp>
    {/* </ThemeSwitcherProvider> */}
  </BrowserRouter>
);
