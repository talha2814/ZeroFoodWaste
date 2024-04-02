import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/zerofoodwaste.png';
import '../CSS/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Zero Food Waste" className="nav-logo" />
        <span className="logo-text">Zero Food Waste</span>
      </div>
      <div className="nav-links">
        <NavLink to="/About" className="nav-link">About</NavLink>
        <NavLink to="/Contact" className="nav-link">Contact Us</NavLink>
        <NavLink to="/TandC" className="nav-link">Terms and Conditions</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
