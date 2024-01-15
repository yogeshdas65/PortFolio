import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./socialComponents/Navigation";
import { MenuToggle } from "./socialComponents/MenuToggle";
import { useDimensions } from "./socialComponents/use-dimensions";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1> Portfolio</h1>
      </Link>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        // custom={height}
        ref={containerRef}
        className="fixed bottom-0 right-0 z-50"
      >
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>

      <ul
        className={`text-gray-100  ${click ? "nav-menu active" : "nav-menu"}`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
