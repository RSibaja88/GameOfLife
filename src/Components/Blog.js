import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <section className="relBlog" id="blog">
      <div className="blog">
        <header className="titleB">From the Developer</header>
        <p>
          When I was first begining development on this application, I weighed
          which language I wanted to tackle Conway's Game of life. Ultimately, I
          chose React because I'm more comfortable working with it than the
          other langauges I was considering and because I knew I could knock the
          UI out of the park with React.
        </p>
        <p>
          First things first, I got to work on the Grid itself and added the
          alogrithmic logic to get my desired functionality. I also used the
          immer dependency to generate a draft copy of the next grid before
          rendering it.
        </p>
        <p>
          Before I even began coding, I knew what I wanted to do with the UI and
          over all design. And while some of my design elements added a few
          hurdles to jump over, I really feel those decsions were completely
          worth it for the end product. Go big or go home, am i right? I made
          the video loop from a choppier version and really smoothed it out and
          made it pretty seamless. I also created all the graphics for this
          application using Inkscape.
        </p>
      </div>
    </section>
  );
}
