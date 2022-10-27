import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const grid = useSelector((state) => state.game.grid);
  console.log(grid);
  return (
    <div>
      <h1>Pixelate</h1>
      <div>
        <button id="add-row">Add a row</button>
        <select>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="brown">Brown</option>
        </select>
      </div>
      <table>
        <tbody>
          <tr>
            {grid[0].map((cell, idx) => (
              <td key={idx}>{cell}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
