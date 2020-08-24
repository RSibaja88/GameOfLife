import React from "react";
import "./App.css";
import Grid from "./Components/Grid";
import neonVid from "../src/images/BigNeonPinkHD3.mp4";

function App() {
  return (
    <div className="App">
      <div className="vidContain">
        <video className="vid" id="background-video" loop autoPlay>
          <source src={neonVid} type="video/mp4" />
        </video>
      </div>
      <Grid />
    </div>
  );
}

export default App;
