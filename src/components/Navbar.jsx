// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import ThemeSwitcher from './ThemeSwitcher.jsx'; // Import the switcher

const Navbar = () => {
  const getLinkClass = ({ isActive }) => isActive ? styles.activeLink : styles.link;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>Juan Diego Arias Martinez</div>
        <div className={styles.links}>
          <NavLink to="/" className={getLinkClass}>Welcome</NavLink>
          <NavLink to="/projects" className={getLinkClass}>Projects</NavLink>
          <NavLink to="/resume" className={getLinkClass}>Resume</NavLink>
          <NavLink to="/sourdough" className={getLinkClass}>Sourdough</NavLink>
          <NavLink to="/steak" className={getLinkClass}>Steak</NavLink>
        </div>
      </div>
      <ThemeSwitcher /> {/* Add the switcher here */}
    </nav>
  );
};

export default Navbar;