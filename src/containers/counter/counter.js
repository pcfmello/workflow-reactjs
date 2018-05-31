"use strict";

import React from "react";

import Counter from "components/counter";

const CounterContainer = props => (
  <Counter
    counter={props.counter}
    increment={props.increment}
    decrement={props.decrement}
    removeCounter={props.removeCounter}
  />
);

export default CounterContainer;
