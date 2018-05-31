"use strict";

import React from "react";
import { connect } from "react-redux";

import Counter from "../../containers/counter/counter";

const Counters = ({ counter, increment, decrement }) => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    {[0, 0, 0].map((counter, index) => (
      <Counter
        key={index}
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    ))}
  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
