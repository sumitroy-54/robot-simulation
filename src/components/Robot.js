import React, { useState } from 'react';

const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

const Robot = () => {
  const [position, setPosition] = useState({ x: null, y: null, facing: null });
  const [commands, setCommands] = useState("");
  const [output, setOutput] = useState("");

  const isValidPosition = (x, y) => {
    return 0 <= x && x < 5 && 0 <= y && y < 5;
  };

  const executeCommands = () => {
    const lines = commands.trim().split("\n");
    let newPosition = { ...position };
    let placed = false;
    let outputText = "";

    lines.forEach((line) => {
      const parts = line.trim().split(' ');
      const action = parts[0];

      if (action === "PLACE" && parts.length === 2) {
        const [x, y, facing] = parts[1].split(',');
        const xInt = parseInt(x, 10);
        const yInt = parseInt(y, 10);
        if (isValidPosition(xInt, yInt) && DIRECTIONS.includes(facing)) {
          newPosition = { x: xInt, y: yInt, facing };
          placed = true;
        }
      } else if (placed) {
        if (action === "MOVE") {
          let { x, y, facing } = newPosition;
          if (facing === "NORTH" && isValidPosition(x, y + 1)) {
            y += 1;
          } else if (facing === "SOUTH" && isValidPosition(x, y - 1)) {
            y -= 1;
          } else if (facing === "EAST" && isValidPosition(x + 1, y)) {
            x += 1;
          } else if (facing === "WEST" && isValidPosition(x - 1, y)) {
            x -= 1;
          }
          newPosition = { ...newPosition, x, y };
        } else if (action === "LEFT") {
          const currentIndex = DIRECTIONS.indexOf(newPosition.facing);
          newPosition.facing = DIRECTIONS[(currentIndex - 1 + 4) % 4];
        } else if (action === "RIGHT") {
          const currentIndex = DIRECTIONS.indexOf(newPosition.facing);
          newPosition.facing = DIRECTIONS[(currentIndex + 1) % 4];
        } else if (action === "REPORT") {
          if (newPosition.x !== null && newPosition.y !== null && newPosition.facing !== null) {
            outputText = `${newPosition.x},${newPosition.y},${newPosition.facing}`;
          }
        }
      }
    });

    setPosition(newPosition);
    setOutput(outputText);
  };

  return (
    <div>
      <h1>Robot Simulation App</h1>
      <textarea
        rows="10"
        cols="30"
        value={commands}
        onChange={(e) => setCommands(e.target.value)}
        placeholder="Enter your commands here..."
      ></textarea>
      <br />
      <button onClick={executeCommands}>Execute</button>
      <h2>Output:</h2>
      <pre>{output}</pre>
    </div>
  );
};

export default Robot;