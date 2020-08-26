import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="relAbout" id="about">
      <div className="about">
        <header className="titleA">Turing Completeness</header>
        <div className="subtitle">What is Turing Completeness:</div>
        <p>
          Turing completeness is a computational system that can compute every
          Turing-computable function is called Turing-complete. Alternatively,
          such a system is one that can simulate a universal Turing machine.
        </p>
        <p>
          In computability theory, a system of data-manipulation rules (such as
          a computer's instruction set, a programming language, or a cellular
          automaton) is said to be Turing-complete or computationally universal
          if it can be used to simulate any Turing machine. This means that this
          system is able to recognize or decide other data-manipulation rule
          sets. Virtually all programming languages today are Turing-complete.
          The concept is named after English mathematician and computer
          scientist Alan Turing.
        </p>
        <div className="subtitle">More on Cellular Autonoma: </div>
        <p>
          Each cell with one or no neighbors dies, as if by solitude. Each cell
          with four or more neighbors dies, as if by overpopulation. Each cell
          with two or three neighbors survives.
        </p>
        <p>
          The chief use for cellular automata, however, is to model physical and
          biological systems. Cellular automata can often serve as simpler tools
          for modeling systems than traditional mathematical methods. They are
          ideal for modeling systems that—like cellular automata themselves—are
          composed of simple components that manifest complex behavior. A few
          examples are gas phenomena, urban development, immunological
          processes, and crystallization. The best known application of cellular
          automata, however, is modeling living systems. This application is the
          province of the emerging field of artificial life, which is concerned
          with modeling biological life or even creating an artificial form of
          life on a computer, in an attempt to fathom the mystery of the
          emergence of complex life forms in a universe of increasing entropy.
        </p>
      </div>
    </section>
  );
}
