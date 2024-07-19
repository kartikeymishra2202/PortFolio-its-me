import React, { useEffect, useState } from "react";
import "../App.css";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <h4 className="connect">Connect with Me</h4>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/kartikey-mishra-252877256/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/image/linkedin.png`}
            alt="LinkedIn"
          />
        </a>
        <a href="kartikey" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/image/git.png`} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/_kartikey_mishra22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/image/insta.jpeg`}
            alt="Instagram"
          />
        </a>
        <a
          href="mailto:kartikeymishra160@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`${process.env.PUBLIC_URL}/image/gmail.jpeg`} alt="Gmail" />
        </a>
      </div>
      <div className="footer-text">
        <p>&copy; 2024 Kartikey</p>
      </div>
      <div className="date-time">
        <p>
          {dateTime.toLocaleDateString()}
          <br /> {dateTime.toLocaleTimeString()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
