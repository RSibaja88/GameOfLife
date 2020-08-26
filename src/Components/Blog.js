import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <section className="relBlog" id="blog">
      <div className="blog">
        <header className="titleB">From the Developer</header>
        <p>
          When I was first begining development on this web application, I
          weighed which language I wanted to tackle Conway's Game of life.
          Ultimately, I chose React because I'm more comfortable working with it
          than the other langauges I was considering and because I knew I could
          knock the UI out of the park with React.
        </p>
        <p>
          First things first, I got to work on the Grid itself and added the
          alogrithmic logic to get my desired functionality. I also used the
          immer dependency to generate a draft copy of the next grid before
          rendering it. After the game and all of its custom functions were
          completed, I started diving into the design of the web app itself. I
          defintely brought my vision to life and it was a blast!
        </p>
        <p>
          Before I even began coding, I knew exactly what I wanted to do with
          the UI and over all design. And while some of my design elements added
          a few hurdles to jump over, (video loop, I'm looking at you) I really
          feel those decsions were completely worth it for the end product. Go
          big or go home, am i right? I made the video loop from a choppier
          version and really smoothed it out and made it pretty seamless. I also
          created all the graphics for this application using Inkscape and Gimp.
        </p>
        <p>
          If you would like to contact to discuss this project or any other
          front-end project, you can email me at: rodrigosibaja88@outlook.com{" "}
        </p>
      </div>
    </section>
  );
}
