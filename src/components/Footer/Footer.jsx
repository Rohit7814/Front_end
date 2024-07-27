import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logos">
          <img src="logo1.png" alt="Logo 1" />
          <img src="logo2.png" alt="Logo 2" />
          <img src="logo3.png" alt="Logo 3" />
          <img src="logo4.png" alt="Logo 4" />
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <img src="/logo.png" alt="Glasses" className="logo" />
          <div className="ratings">
            <div className="rating">
              <img src="rating1.png" alt="Rating Logo 1" />
              <p>4.5/5 Rating On Lorem</p>
            </div>
            <div className="rating">
              <img src="rating2.png" alt="Rating Logo 2" />
              <p>9/10 Rating On Ipsum</p>
            </div>
            <div className="rating">
              <img src="rating3.png" alt="Rating Logo 3" />
              <p>4.5/5 Rating On Dorel</p>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Skills</li>
            <li>Education</li>
            <li>Projects</li>
            <li>Recommendations</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Portfolio</h3>
          <ul>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Website Design</li>
            <li>Machine Learning</li>
            <li>Problem Solving & DSA</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="#">
                <img src="/linkedin.png" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/insta.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/fb.png" alt="Facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Copyright, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
