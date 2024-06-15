import React from 'react';
import './footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>We are dedicated to promoting mental health and well-being.</p>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: codecraft@gmail.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    
    </footer>
  );
}

export default Footer;
