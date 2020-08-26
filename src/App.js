import React from "react";
import "./App.css";
import Nav from "./Header/Nav";
import Grid from "./Components/Grid";
import Rules from "./Components/Rules";
import Video from "./Components/Video";
import About from "./Components/About";
import Blog from "./Components/Blog";

function App() {
  return (
    <div className="app">
      <Video />
      <Nav />
      <Rules />
      <Grid />
      <About />
      <Blog />
    </div>
  );
}

export default App;
