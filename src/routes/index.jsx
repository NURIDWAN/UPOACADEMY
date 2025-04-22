import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import EBookPage from "../pages/EBookPage";
import EBookDetail from "../pages/EBookDetail"; // Import komponen baru
import ArticlePage from "../pages/ArticlePage";
import SigleArticlePage from "../pages/SigleArticlePage";


function RoutesIndex({navbarItems, logoSrc, articles,  dummyEBooks}) {
  return (
    <Routes>
      <Route path="/" element={<Home navbarItems={navbarItems} logoSrc={logoSrc}/>} />
      <Route path="/about" element={<About navbarItems={navbarItems} logoSrc={logoSrc}/>} />
      <Route path="/ebook-detail/:id" element={<EBookDetail books={dummyEBooks} navbarItems={navbarItems} logoSrc={logoSrc}/>} /> {/* Rute baru */}
      <Route path="/ebook/:id" element={<EBookPage books={dummyEBooks} navbarItems={navbarItems} logoSrc={logoSrc}/>} />
      <Route path="/articles" element={<ArticlePage articles={articles} navbarItems={navbarItems} logoSrc={logoSrc}/>} />
      <Route path="/article/:id" element={<SigleArticlePage articles={articles} navbarItems={navbarItems} logoSrc={logoSrc}/>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default RoutesIndex;