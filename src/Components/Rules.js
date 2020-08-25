import React from "react";
import "./Rules.css";

export default function Rules() {
  return (
    <section className="relRule">
      <div className="rules" id="rules">
        <header className="title">John Conway's Game of Life</header>
        <h1>The Game</h1>
        <p>
          The Game of Life is not your typical computer game. It is a 'cellular
          automaton', and was invented by Cambridge mathematician John Conway.
          This game became widely known when it was mentioned in an article
          published by Scientific American in 1970. It consists of a collection
          of cells which, based on a few mathematical rules, can live, die or
          multiply. Depending on the initial conditions, the cells form various
          patterns throughout the course of the game.
        </p>
        <h1>The Rules</h1>
        <h2>For a space that is 'populated':</h2>
        <p>
          Each cell with one or no neighbors dies, as if by solitude. Each cell
          with four or more neighbors dies, as if by overpopulation. Each cell
          with two or three neighbors survives.
        </p>
        <h2>For a space that is 'empty' or 'unpopulated'</h2>
        <p>Each cell with three neighbors becomes populated.</p>
      </div>
    </section>
  );
}
