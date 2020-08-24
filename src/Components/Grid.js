import React, { useState, useRef, useCallback } from "react";
import produce from "immer";
import "./Grid.css";
import OneStep from "./OneStep";

let numCols = 50;
let numRows = 50;

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

let renderCount = 0;

const clearGrid = () => {
  //  copying grid from below
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    //  for loop
    rows.push(Array.from(Array(numCols), () => 0));

    //  Array.from is a mapping function to get key value and return it
  }
  return rows;
};

function Grid() {
  const [grid, setGrid] = useState(() => {
    return clearGrid();
  });
  console.log(grid); //returns an array of 50 by 50 O's to represent dead cells
  //row 21: displaying key, normally I wouldnt want to use the index for the key, but since I'm never going to shift the divs themselves I decided to go for it

  const [running, setRunning] = useState(false);
  //useRef to update state for the rumSim function since it only runs once and the state will change
  const runningRef = useRef(running);
  runningRef.current = running;

  //apparently setTimeout() doesnt accept state as a value. So, after some research I found that I had to use useRef to make it work.
  const [speed, setSpeed] = useState(500);
  const speedRef = useRef(speed);
  speedRef.current = speed;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Submitting Speed ${speedRef.current}`);
    return speedRef.current;
  };

  const [density, setDensity] = useState(0.6);
  const handleSubmitA = (evt) => {
    evt.preventDefault();
    console.log(`Submitting Density ${density}`);
    return density;
  };

  const [colSize, setColSize] = useState(numCols);
  const handleSubmitB = (evt) => {
    evt.preventDefault();
    console.log(`Submitting col Size ${colSize}`);
    return colSize;
  };

  const [rowSize, setRowSize] = useState(numRows);

  const handleSubmitC = (evt) => {
    evt.preventDefault();

    console.log(`Submitting row Size ${rowSize}`);
    return rowSize;
  };

  // console.log(
  //   "column size: ",
  //   colSize,
  //   "row size: ",
  //   colSize,
  //   "density: ",
  //   density,
  //   "speed: ",
  //   speed
  // );

  //this function is recursive
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
        renderCount += 1;
        console.log("count: ", renderCount);
      });
    });

    setTimeout(() => {
      runSim();
    }, speedRef.current);
  }, []);
  console.log("speed in runSim: ", speed);

  return (
    <section className="gridContain">
      <div className="buttonCol">
        <h1 className="count">Rounds: {renderCount}</h1>
        <div className="buttonRow">
          <button
            onClick={() => {
              setRunning(!running);
              if (!running) {
                runningRef.current = true;
                setSpeed(speed);
                runSim();
              }
            }}
          >
            {running ? "Stop" : "Start"}
          </button>

          <button
            onClick={() => {
              renderCount = 0;
              setGrid(clearGrid());
            }}
          >
            Clear
          </button>
          <button
            onClick={() => {
              if (!running) {
                const rows = [];
                for (let i = 0; i < numRows; i++) {
                  rows.push(
                    Array.from(Array(numCols), () =>
                      Math.random() > density ? 1 : 0
                    )
                  );
                }
                setGrid(rows);
              }
              console.log("density from random: ", density);
            }}
          >
            Random
          </button>

          <button
            className="invisButton"
            onClick={() => {
              renderCount = renderCount + 1;
            }}
          >
            <OneStep
              numRows={numRows}
              numCols={numCols}
              operations={operations}
              grid={grid}
              runSim={runSim}
              setGrid={setGrid}
              produce={produce}
            />
          </button>
        </div>
      </div>
      <div className="masterFormSection">
        <form className="optionsForm" onSubmit={handleSubmit}>
          <div className="inputRow">
            <label>
              Speed of Game (milliseconds):
              <input
                type="number"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <form className="optionsFormA" onSubmit={handleSubmitA}>
          <div className="inputRow">
            <label>
              Density of Live Cells in Random:{" "}
              <input
                type="number"
                value={density}
                placeholder="0.1 -0.9 is least dense"
                onChange={(e) => setDensity(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className="inputRowGrid">
          <form className="optionsFormB" onSubmit={handleSubmitC}>
            <header className="sizeHead">Size of Grid (60 max):</header>
            <label>
              Row Size:
              <input
                type="number"
                value={rowSize}
                onChange={(e) => setRowSize(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <form className="optionsFormB" onSubmit={handleSubmitB}>
            <label>
              Grid Size:
              <input
                type="number"
                value={colSize}
                onChange={(e) => setColSize(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div
        className="gridCont"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${colSize}, 10px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((cols, k) => (
            <div
              className="gridCells"
              key={`${i}-${k}`}
              onClick={() => {
                if (!running) {
                  const newGrid = produce(grid, (gridCopy) => {
                    //immer is allowing us to produce a new grid and manipulating state without mutating it
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;
                  });
                  setGrid(newGrid);
                  // return renderCount;
                }
              }}
              style={{
                width: 10,
                height: 10,
                backgroundColor: grid[i][k] ? "#39ff14" : "black",
                border: "solid 0.35px #343434",
              }}

              // ^^setting color for live or dead cells
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Grid;
