"use strict";

import React from "react";
import { connect } from "react-redux";

import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT,
  DECREMENT
} from "../../redux-flow/reducers/counters";
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
  addCounter: () => dispatch({ type: ADD_COUNTER }),
  increment: index => () => dispatch({ type: INCREMENT, index }),
  decrement: index => () => dispatch({ type: DECREMENT, index }),
  removeCounter: index => () => dispatch({ type: REMOVE_COUNTER, index })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
