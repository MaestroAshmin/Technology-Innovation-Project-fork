/*Footer component
Le Vy Cao 104201234
Last edited 14/09/2023*/
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import "../Css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" className="icon">
        <i class="fa-brands fa-facebook" style={{ color: "#ffffff" }}></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-twitter" style={{ color: "#ffffff" }}></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-square-instagram" style={{ color: "#ffffff" }}></i>
        </a>
      </div>
      <div className="footer-links">
        {/* Use Link component for navigation */}
        <Link to="/about">About Us</Link>
        <Link to="/how-to-use">Learn More</Link>
        <Link to="/register">Join</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/services">Services List</Link>
        <Link to="/privacy">Privacy</Link>
      </div>
      <div className="footer-info">
        <p>123 Main Street</p>
        <p>City, Country</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: info@example.com</p>

        {/* Additional Information */}
        <p>Working Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
        <p>Emergency Contact: +1 (123) 555-1234</p>
        <p>Copyright © 2023 Your Company, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
