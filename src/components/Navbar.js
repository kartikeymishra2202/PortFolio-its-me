import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <ul>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="menu-item"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="menu-item"
              >
                Project
              </Link>
            </li>

            <li>
              {" "}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="menu-item"
              >
                Contact Me
              </Link>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              hire me
            </button>
          </ul>
          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="" alt="" />
          <ul>
            <li>
              {" "}
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="menu-item"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="menu-item"
              >
                Project
              </Link>
            </li>

            <li>
              {" "}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="menu-item"
              >
                Contact Me
              </Link>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              hire me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
