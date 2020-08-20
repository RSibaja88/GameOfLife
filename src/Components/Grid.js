import React, { useState } from "react";
import "./Grid.css";

const numRows = 50;
const numCols = 50;

function Grid() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      //for loop
      rows.push(Array.from(Array(numCols), () => 0)); //Array.from is a mapping function to get key value and return it
    }
    return rows;
  });
  console.log(grid); //returns an array of 50 by 50 O's to represent dead cells

  // row 21: displaying key, normally I wouldnt want to use the index for the key, but since I'm never going to shift the divs themselves I decided to go for it
  return (
    <div
      className="gridContainer"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 15px)`,
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div key={`${i}-${k}`}>
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: grid[i][k] ? "#39ff14" : "#343434",
                border: "solid 0.75px black",
              }} //setting color for live or dead cells
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Grid;

//rgb(55, 255, 20)
