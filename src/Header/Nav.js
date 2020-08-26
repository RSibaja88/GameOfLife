import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";

function Nav() {
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
