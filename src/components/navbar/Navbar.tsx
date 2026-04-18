// src/components/navbar/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import LanguageSwitch from "../../library/LanguageSwitch/LanguageSwitch.tsx";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const closeNav = () => setIsNavCollapsed(true);

    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top shadow-sm navbar-custom">
            <div className="container">
                <Link className="navbar-brand" to="/" onClick={closeNav}>
                    <img src="/img/Mpharm_images/MedicoPharmLogo.png" alt="Medicopharm"
                         style={{ height: '80px' }} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeNav}>
                                <i className="bi bi-house-fill"></i> {t('home')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" onClick={closeNav}>
                                <i className="bi bi-box-seam"></i> {t('products')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeNav}>
                                <i className="bi bi-envelope"></i> {t('contact')}
                            </Link>
                        </li>
                        <LanguageSwitch />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
