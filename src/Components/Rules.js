import React from "react";
import "./Rules.css";

export default function Rules() {
  return (
    <section className="relRule" id="rules">
      <div className="rules">
        <header className="title">John Conway's Game of Life </header>
        <div className="subtit">The Game</div>
        <p>
          The Game of Life is not your typical computer game. It is a 'cellular
          automaton', and was invented by Cambridge mathematician John Conway.
          This game became widely known when it was mentioned in an article
          published by Scientific American in 1970. It consists of a collection
          of cells which, based on a few mathematical rules, can live, die or
          multiply. Depending on the initial conditions, the cells form various
          patterns throughout the course of the game.
        </p>{" "}
        <p>
          It's a zero-player game, meaning that its evolution is determined by
          its initial state, requiring no further input. One interacts with the
          Game of Life by creating an initial configuration and observing how it
          evolves. It is Turing complete and can simulate a universal
          constructor or any other Turing machine. Learn more about Turing
          Completeness in the Learn More section!
        </p>
        <div className="subtit">The Rules</div>
        <div className="subsub">For a space that is 'Alive':</div>
        <p>
          Each cell with one or no neighbors dies, as if by solitude. Each cell
          with four or more neighbors dies, as if by overpopulation. Each cell
          with two or three neighbors survives.
        </p>
        <div className="subsub">For a space that is 'Dead':</div>
        <p>Each cell with three neighbors becomes populated.</p>
      </div>
    </section>
  );
}
