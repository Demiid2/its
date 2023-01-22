import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../assets/img/logo.webp'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand"><img src={logo} alt="Logo del Instituto" className='nav-logo'/></Link>
        <div className={`${isOpen ? 'is-active' : 'navbar-menu'}`}>
          <Link to="/about" className="navbar-item">About</Link>
          <Link to="/services" className="navbar-item">Services</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
        </div>
        <button className="navbar-burger" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;