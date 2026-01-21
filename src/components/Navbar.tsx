import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-text">Olivia & Asociados</span>
        </div>
        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#seguros">Seguros</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto" className="btn btn-primary btn-sm">Cotizar</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
