import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Recommendations from "./components/Recommendations/Recommendations";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div className="app">
      <Navbar />
       <Header /> 
       <Projects /> 
       <Recommendations /> 
       <Contact /> 
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
