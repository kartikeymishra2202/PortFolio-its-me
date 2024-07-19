import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../App.css";

const Header = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Front-End-Developer",
        "Backend Developer",
        "Coder",
      ],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    });

    // Clean up
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="header">
      <div className="intro">
        <h1>Hi, I'm Kartikey</h1>
        <span className="moving-text" ref={typedElement}></span>
      </div>
      <div className="photo">
       <div> <img src={`${process.env.PUBLIC_URL}/image/me.jpg`} alt="Kartikey " /></div>
      </div>
    </header>
  );
};

export default Header;
