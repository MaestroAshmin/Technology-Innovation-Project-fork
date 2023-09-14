// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css'; // Import the CSS file

function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-list">
        <div className="navbar-item logo">
          <Link to="/" className="navbar-link"><img width="50px" height="50px" src="/images/HRLogoCMYKsmall.jpg" alt="logo" /></Link>
        </div>
        <div className="navbar-item pages">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About Us</Link>
          <Link to="/how-to-use" className="navbar-link">How to Use</Link>
          <Link to="/services" className="navbar-link">Services</Link>
        </div>
        <div className="navbar-item buttons">
          <Link to="/register" className="navbar-link"><button>Register</button></Link>
          <Link to="/login" className="navbar-link"><button>Login</button></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
