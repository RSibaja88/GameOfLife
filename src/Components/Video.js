import React from "react";
import neonVid from "../images/neonVid.mp4";
import "./Video.css";

export default function Video() {
  return (
    <div className="vidContain">
      <video className="vid" autoPlay="autoplay" loop="loop">
        <source src={neonVid} type="video/mp4" />
      </video>
    </div>
  );
}
