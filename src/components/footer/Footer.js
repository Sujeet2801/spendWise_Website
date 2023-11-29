import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Logo from '../image/logo1.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Your website logo */}
          <img src={Logo} alt="Your Logo" />
        </div>
        <div className="social-media" style={{marginRight: 50}}>
          <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
           <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="social-icon" />
          </a> 
        </div>
      </div>
    </footer>
  );
}

export default Footer;
