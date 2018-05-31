"use strict";

import React from "react";

const Counter = ({ counter, increment, decrement }) => (
  <div style={{ padding: 10, border: "2px solid black", borderRadius: 10 }}>
    <h1>{counter}</h1>
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  </div>
);

export default Counter;
