import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import MatterCloth from "./components/MatterCloth";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Header />
      </div>

      <div id="projects">
        <Projects />
      </div>
      <MatterCloth />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
