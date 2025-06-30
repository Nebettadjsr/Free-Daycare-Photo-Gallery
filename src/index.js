import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Gallery from "./Gallery";
import Datenschutz from "./Datenschutz";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/datenschutz" element={<Datenschutz />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
