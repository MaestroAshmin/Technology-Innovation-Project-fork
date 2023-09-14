// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css'; // Import the CSS file

function Navbar() {

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link"><img width="50px" height="50px" src="/images/HRLogoCMYKsmall.jpg" alt="logo" /></Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/how-to-use" className="navbar-link">How to Use</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services" className="navbar-link">Services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/test" className="navbar-link">Log Test</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" className="navbar-link"><button>Register</button></Link>
          <Link to="/login" className="navbar-link"><button>Login</button></Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
