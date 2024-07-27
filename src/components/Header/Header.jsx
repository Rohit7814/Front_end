// src/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="intro">
        <h1>I'm Rayan Adlrdard</h1>
        <h2>
          <span>Front-end</span> Developer
        </h2>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Et, Volutpat
          Feugiat Placerat Lobortis. Natoque Rutrum Semper Sed Suspendisse Nunc
          Lectus.
        </p>
        <button className="hire-me">HIRE ME</button>
      </div>
      <div className="illustration">
        <img src="/illustration.png" alt="Developer Illustration" />
      </div>
    </header>
  );
};

export default Header;
