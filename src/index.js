import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./Fonts/ENDLESSBUMMER-Regular.otf";
import "./Fonts/AlienLeagueGradientBold-MPEB.otf";
import "./Fonts/airstrikehalf.ttf";
import "./Fonts/Azonix.otf";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
