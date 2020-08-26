import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";

function Nav() {
  return (
    <div className="container">
      <div className="navbar">
        <Link to="rules" smooth={true} duration={1200}>
          Rules
        </Link>
        <Link to="game" smooth={true} duration={1200}>
          Game
        </Link>
        <Link to="about" smooth={true} duration={1200}>
          Learn More
        </Link>
        <Link to="blog" smooth={true} duration={1200}>
          Dev Blog
        </Link>
      </div>
    </div>
  );
}
export default Nav;
