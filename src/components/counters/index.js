"use strict";

import React from "react";
import { connect } from "react-redux";

import {
  addCounter,
  removeCounter,
  increment,
  decrement
} from "../../redux-flow/reducers/counters/action-creators";

import Counter from "../../containers/counter/counter";

const Counters = ({
  counters,
  addCounter,
  removeCounter,
  increment,
  decrement
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    }}
  >
    {counters.map((counter, index) => (
      <Counter
        {...{
          key: index,
          counter,
          increment: increment(index),
          decrement: decrement(index),
          removeCounter: removeCounter(index)
        }}
      />
    ))}
    <button onClick={addCounter}>Adicionar</button>
  </div>
);

const mapStateToProps = state => ({
  counters: state
});

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch(addCounter()),
  removeCounter: index => () => dispatch(removeCounter(index)),
  increment: index => () => dispatch(increment(index)),
  decrement: index => () => dispatch(decrement(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
