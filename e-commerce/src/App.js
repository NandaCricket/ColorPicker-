import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [bgcolor, setBgColor] = useState("LightBlue");

  const hexCode = {
    Green: "#00FF00",
    Red: "#FF0000",
    Blue: "#0000FF",
    Brown: "#964B00",
  };

  const clickToChange = (colorr) => {
    setBgColor(hexCode[colorr]);
  };
  return (
    <div style={{ backgroundColor: bgcolor }} id="container">
      <h1>Color Picker</h1>
      <button
        id="btnGreen"
        onClick={() => {
          clickToChange("Green");
        }}
      >
        Green
      </button>
      <button
        id="btnRed"
        onClick={() => {
          clickToChange("Red");
        }}
      >
        Red
      </button>
      <button
        id="btnBlue"
        onClick={() => {
          clickToChange("Blue");
        }}
      >
        Blue
      </button>
      <button
        id="btnBrown"
        onClick={() => {
          clickToChange("Brown");
        }}
      >
        Brown
      </button>
      <div>
        <p id="bg-para">
          Backgroun Color :<span>{bgcolor}</span>
        </p>
        <p>
          Try clicking on one of the colors above to change the background color
          of this page!
        </p>
      </div>
    </div>
  );
};

export default App;
