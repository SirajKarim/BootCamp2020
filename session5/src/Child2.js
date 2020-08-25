import React, { useReducer } from "react";
import counterReducer from "./counterReducer";
const Child2 = () => {
  let [state, dispatch] = useReducer(counterReducer, 10);
  return (
    <div>
        <h1>The Second Child using Counter Reducer</h1>
      <h2>Value of reducer state is: {state}</h2>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        Increment Reducer
      </button>
    </div>
  );
};

export default Child2;
