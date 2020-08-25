import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dinner from "./dinner.js";
import { Message } from "./Message";

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);
  return (
    <div className={`box ${isMorning ? "dayLight" : "box"}`}>
      {/* <header className="App-header">
        <h1>Hello Good Evening</h1>
      </header> */}
      {/* <Dinner dishName="Mutton Karhai" /> */}
      {/* <h1>Value of Counter is: {count}</h1> */}
      <h1>Day time = {isMorning ? "Morning" : "Night"}</h1>
      <Message counter={count} />
      <br />
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Update Counter
      </button>
      {/* <button
        onClick={() => {
          setCount(--count);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button> */}
    </div>
  );
}

export default App;
