// src/Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#education" className="nav-link">
            Education
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#recommendations" className="nav-link">
            Recommendations
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
