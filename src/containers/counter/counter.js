"use strict";

import React from "react";
import { connect } from "react-redux";

import Counter from "components/counter";

const CounterContainer = props => (
  <Counter
    counter={props.counter}
    increment={props.increment}
    decrement={props.decrement}
  />
);

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch({ type: "INCREMENT" });
  },
  decrement: () => {
    dispatch({ type: "DECREMENT" });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
