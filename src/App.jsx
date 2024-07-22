import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("");
  const [inputValue, setInputValue] = useState("");
  const colorChange = () => {
    setColor(inputValue);
  };
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  bg-gray-800 text-black-500">
        <h1 className="text-white text-center my-3">Background Changer</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Enter Color Name or Hex-Code"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="outline-none bg-orange-700 text-white px-3 py-0.5 shrink-0"
            onClick={colorChange}
          >
            Change Color
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
