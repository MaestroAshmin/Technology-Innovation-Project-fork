// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css'; // Import the CSS file

function Navbar({isLoggedIn}) {
  const userProfileImage = isLoggedIn ? './images/user-profile-icon-free-vector.jpg' : null;
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        {isLoggedIn ? null : (
    <>
      <li className="navbar-item">
        <Link to="/register" className="navbar-link">Register</Link>
      </li>
      <li className="navbar-item">
        <Link to="/login" className="navbar-link">Log In</Link>
      </li>
    </>
  )}
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/how-to-use" className="navbar-link">How to Use</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services" className="navbar-link">Services</Link>
        </li>
        {/* Add more list items as needed */}
      </ul>
      {isLoggedIn && (
          <div className="navbar-user">
            <img src={userProfileImage} width ="50px" height ="50px"alt="User Profile" />
          </div>
        )}
    </nav>
  );
}

export default Navbar;
