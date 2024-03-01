import React from 'react';
import logoFooter from '../../src/images/LOGO.png'; 
import '../styles/sass/foot.scss';

const Footer = () => (
  <footer className="footer">
    <img src={logoFooter} alt="Logo Kasa" className="footer_logo" />
    <p className="footer_text">© 2020 Kasa. Tous droits réservés</p>
  </footer>
);

export default Footer;

