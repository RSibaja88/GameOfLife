import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import "./OneStep.css";

function OneStep(props) {
  console.log("props from grid: ", props);
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSim = useCallback((props) => {
    if (!runningRef.current) {
      return;
    }
    props.setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < props.numRows; i++) {
          for (let k = 0; k < props.numCols; k++) {
            let neighbors = 0;
            props.operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (
                newI >= 0 &&
                newI < props.numRows &&
                newK >= 0 &&
                newK < props.numCols
              ) {
                neighbors += props.grid[newI][newK];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (props.grid[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSim, 1000);
  }, []);
  //had to pass props here to complete function
  return (
    <div className="oneS">
      <button
        className="oneStepButt"
        onClick={() => {
          setRunning(running);
          if (!running) {
            runningRef.current = true;
            runSim(props);
          }
        }}
      >
        ONE STEP
      </button>
    </div>
  );
}

export default OneStep;
