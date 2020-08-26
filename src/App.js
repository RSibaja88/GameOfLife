import React from "react";
// import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Header/Nav";
import Grid from "./Components/Grid";
import Rules from "./Components/Rules";
import Video from "./Components/Video";

function App() {
  return (
    <div className="app">
      <Video />
      <Nav />
      <Rules />
      <Grid />
    </div>
  );
}

export default App;
