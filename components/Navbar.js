import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../components/Navbar.module.css'; // Import the styles
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-${props.mode} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className="container">
        <Link href="/" className="navbar-brand">
          Clyde<span>.</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#home-section" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about-section" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills-section" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#services-section" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#projects-section" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact-section" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  mode: PropTypes.string.isRequired, // You can set a default or validate prop types here
};

export default Navbar;
