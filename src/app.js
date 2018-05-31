"use strict";

import React from "react";
import "./css/style.css";

import Counters from "components/counters";

const App = () => (
  <div
    style={{
      width: 300,
      margin: "auto",
      textAlign: "center"
    }}
  >
    <Counters />
  </div>
);

export default App;
