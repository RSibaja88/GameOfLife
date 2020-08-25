import React from "react";
// import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Header/Nav";
import Grid from "./Components/Grid";
import Rules from "./Components/Rules";
import neonVid from "../src/images/neon.mp4";

function App() {
  return (
    <div className="main">
      <div className="vidContain">
        <video className="vid" id="game" loop autoPlay>
          <source src={neonVid} type="video/mp4" />
        </video>
      </div>
      <Grid />
      <Rules />
      <Nav />
    </div>
  );
}

export default App;
