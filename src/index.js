import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./Fonts/ENDLESSBUMMER-Regular.otf";
import neonVid from "./images/neonVid.mp4";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
