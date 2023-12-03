// Import necessary libraries and components
import React from 'react';
import './Footer.scss';
import { FaTwitter, FaFacebookF, FaInstagram, FaMusic } from 'react-icons/fa';

// Footer component definition
const Footer = () => {
 // Render JSX code
 return (
    <div className='footer'>

      {/* Navigation links */}
      <div className="footer__footerLinks">
        <p>Home</p>
        <p>Page 1</p>
        <p>Page 2</p>
      </div>

      {/* Divider line */}
      <hr className='footer__line'/>

      {/* Social media icons */}
      <div className="footer__icons">
        <div className='icon'><FaFacebookF/></div>
        <div className='icon'><FaTwitter/></div>
        <div className='icon'><FaInstagram/></div>
        <div className='icon'><FaMusic/></div>
      </div>

      {/* Copyright statement */}
      <p className="footer__stamp">
        &copy; Logo, Inc.e
      </p>

    </div>
 )
}

// Export Footer component for use in other modules
export default Footer;