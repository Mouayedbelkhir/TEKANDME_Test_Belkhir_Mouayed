import React from 'react';
import '../utils/styles/blocks_styles/Navbar.css';
import ButtonComponent from "../components/ButtonComponent";
import Nav_logo from '../assets/logos/logo_navbar.svg';
import dropdown from '../assets/icons/ic_dropdown.svg';

const Navbar = () => {
  return (
    <div className='main-navbar'>
      <div className='navbar-logo'>
        <Logo />
      </div>

      <nav className="navbar">
        <ul className="nav-list orbitron-extra-bold-sm">
          <NavItem href="#" active className="acceuil">ACCUEIL</NavItem>
          <NavItem href="#">A PROPOS</NavItem>
          <NavItem href="#">BUREAU D'ÉTUDES</NavItem>
          <NavItem href="#">SÉCURITISATION</NavItem>
          <NavItem href="#">SERVICES <img src={dropdown} alt="dropdown" /></NavItem>
          <NavItem href="#">RÉALISATIONS</NavItem>
          <NavItem href="#">ACTUALITÉS</NavItem>
        </ul>
      </nav>
      <div className='navbar-button'>
        <ButtonComponent text="CONTACT" />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <img src={Nav_logo} alt="Logo" className="logo" />
  );
};

const NavItem = ({ href, active, children, className }) => {
  const classes = active ? `nav-item ${className} active` : `nav-item ${className}`;

  return (
    <li className={classes}>
      <a href={href} className="nav-link">
        {children}
      </a>
    </li>
  );
};

export default Navbar;
