import "./styles/style.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import FavPage from "./pages/FavPage";
import AdoptPage from "./pages/AdoptPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="adopt" element={<AdoptPage />}></Route>
          <Route path="fav" element={<FavPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
