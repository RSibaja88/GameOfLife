import React from "react";
import "./App.css";
import Grid from "./Components/Grid";
import Nav from "./Components/Nav";
import Rules from "./Components/Rules";

function App() {
  return (
    <div className="App">
      <Nav />
      <Rules />
      <Grid />
    </div>
  );
}

export default App;
