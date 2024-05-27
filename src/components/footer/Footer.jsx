import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with us:</p>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
      <p>&copy; {new Date().getFullYear()} Socialize. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
