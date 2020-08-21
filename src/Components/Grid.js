import React, { useState, useRef, useCallback } from "react";
import produce from "immer";
import "./Grid.css";

const numRows = 50;
const numCols = 50;

const operations = [
  [0, 1],
  [1, 1],
  [1, 0],
  [0, -1],
  [1, -1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
];

const clearGrid = () => {
  //copying grid from below
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    //for loop
    rows.push(Array.from(Array(numCols), () => 0));
    //Array.from is a mapping function to get key value and return it
  }
  return rows;
};

function Grid() {
  const [grid, setGrid] = useState(() => {
    return clearGrid();
  });
  console.log(grid); //returns an array of 50 by 50 O's to represent dead cells

  // row 21: displaying key, normally I wouldnt want to use the index for the key, but since I'm never going to shift the divs themselves I decided to go for it

  const [running, setRunning] = useState(false);
  //useRef to update state for the rumSim function since it only runs once and the state will change
  const runningRef = useRef();
  runningRef.current = running;

  // this function is recursive
  const runSim = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        //game rule logic, double for loop to run every cell, for loops inside produce so i can do any kind of mutation on gridCopy and it will update state setGrid
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });
            //above: logic is to determine how many neighbors (the value of neighbors)
            //below: once we know the value of neighbors, we can apply these conditions (rules of the game). The logic below is establishing rule 1, 3, and 4 as 2 needs no update to state
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSim, 500);
  }, []);

  return (
    <section>
      <div className="buttonRow">
        <button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSim();
            }
          }}
        >
          {running ? "stop" : "start"}
        </button>
        <button
          onClick={() => {
            setGrid(clearGrid());
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(numCols), () => (Math.random() > 0.5 ? 1 : 0))
              );
            }
            setGrid(rows);
          }}
        >
          Random
        </button>
      </div>
      <div
        className="gridContainer"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 12.5px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              className="gridContainer"
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  //immer is allowing us to produce a new grid and manipulating state without mutating it
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                  // gridCopy[i][k] = 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 12.5,
                height: 12.5,
                backgroundColor: grid[i][k] ? "#39ff14" : "black",
                border: "solid 0.5px #343434",
              }} //setting color for live or dead cells
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Grid;
