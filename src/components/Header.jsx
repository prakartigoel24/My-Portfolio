import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import "../styles/header.scss";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <img src="/images/logo.png" alt="Logo" />
      <nav className={`navbar ${isOpen && "slide-down"}`}>
        {navLinks.map((item) => {
          return (
            <Link key={item.id} to={item.path} onClick={() => setIsOpen(false)}>
              {item.title}
            </Link>
          );
        })}
      </nav>
      <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
        {isOpen ? (
         <GiCrossedBones/>
        ) : (
          <GiHamburgerMenu/>
        )}
      </button>
      <Link to="/contact" className="btn_accent connect_btn">Connect with me</Link>
    </header>
  );
};

export default Header;
