import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sass/header.scss";
import logo from "../assets/logo_backup.png";

function Header() {
  return (
    <nav className="navBar">
      <div className="navBar_logo">
        <img src={logo} className="navBar_logo_img" alt="Kasa" />
      </div>
      <div className="navBar_link">
      <NavLink to="/" className="navBar_link_1">
        Accueil
      </NavLink>
      <NavLink to="/about" className="navBar_link_2">
        A propos
      </NavLink>
      </div>
    </nav>
   
  );
}

export default Header;
