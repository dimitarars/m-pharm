// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.tsx';
import Footer from './components/footer/Footer.tsx';
import Home from './pages/Home/Home.tsx';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact/Contact';
import './i18n';
import './App.css';
import { useGeoLanguage } from './hooks/useGeoLanguage';

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
    duration: 800,
});

const App: React.FC = () => {
    useGeoLanguage();
    return (
        <BrowserRouter>
            <div className="app-container">
                <div className="content-wrap">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
