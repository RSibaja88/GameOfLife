import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 140) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <Link to="game" smooth={true} duration={1200}>
          Game
        </Link>
        <Link to="rules" smooth={true} duration={1200}>
          Rules
        </Link>
      </div>
    </div>
  );
}
export default Nav;
