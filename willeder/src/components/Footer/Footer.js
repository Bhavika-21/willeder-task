import React from 'react'
import './Footer.scss';
import { FaTwitter, FaFacebookF, FaInstagram, FaMusic } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer__footerLinks">
        <p>Home</p>
        <p>Page 1</p>
        <p>Page 2</p>
      </div>

      <hr className='footer__line'/>

      <div className="footer__icons">
        <div className='icon'><FaFacebookF/></div>
        <div className='icon'><FaTwitter/></div>
        <div className='icon'><FaInstagram/></div>
        <div className='icon'><FaMusic/></div>
      </div>

      <p className="footer__stamp">
        &copy; Logo, Inc.e
      </p>

    </div>
  )
}

export default Footer