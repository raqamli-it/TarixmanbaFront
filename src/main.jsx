import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/style/index.scss";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const app = document.getElementById("app");

  if (loader && app) {
    setTimeout(() => {
      loader.style.display = "none";
      app.style.display = "block";
    }, 1000);
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
