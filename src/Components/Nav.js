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
    <section className="relContainer">
      <div className={`navSheet ${show && "nav_switch"}`}>
        <Link to="rules" smooth={true} duration={1200}>
          Rules
        </Link>
        <Link to="game" smooth={true} duration={1200}>
          Game
        </Link>
        {/* <Link Link to="stacks" smooth={true} duration={1200}>
          Stack
        </Link>
        <Link Link to="work" smooth={true} duration={1200}>
          Work
        </Link>
        <a>Contact</a> */}
      </div>
    </section>
  );
}
export default Nav;
