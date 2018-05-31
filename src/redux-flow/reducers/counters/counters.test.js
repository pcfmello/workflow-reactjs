"use strict";

import counters, { initialState } from "./index";
import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT } from "./actions";
import { expect } from "chai";
import deepFreeze from "deep-freeze";

it("counters should be a function", () => {
  expect(counters).to.be.a("function");
});

it("should add a new counter", () => {
  const before = deepFreeze(initialState);
  const action = deepFreeze({ type: ADD_COUNTER });
  const after = [0];
  expect(counters(before, action)).to.be.deep.equal(after);
});

it("should add a new counter again", () => {
  const before = deepFreeze([0]);
  const action = deepFreeze({ type: ADD_COUNTER });
  const after = [0, 0];
  expect(counters(before, action)).to.be.deep.equal(after);
});

it("should add a new counter and return 3 counters", () => {
  const before = deepFreeze([0, 0]);
  const action = deepFreeze({ type: ADD_COUNTER });
  const after = [0, 0, 0];
  expect(counters(before, action)).to.be.deep.equal(after);
});

it("Should remove a counter", () => {
  const before = deepFreeze([0, 2, 0]);
  const action = deepFreeze({ type: REMOVE_COUNTER, index: 1 });
  const after = [0, 0];
  expect(counters(before, action)).to.be.deep.equal(after);
});

it("Should remove a counter again", () => {
  const before = deepFreeze([0, 2, 1]);
  const action = deepFreeze({ type: REMOVE_COUNTER, index: 2 });
  const after = [0, 2];
  expect(counters(before, action)).to.be.deep.equal(after);
});

it("Should increment the counter with index 1", () => {
  const before = deepFreeze([0, 2, 10]);
  const action = deepFreeze({ type: INCREMENT, index: 1 });
  const after = [0, 3, 10];
  expect(counters(before, action)).to.be.deep.equal(after);
});

it("Should increment the counter with index 2", () => {
  const before = deepFreeze([0, 2, 10]);
  const action = deepFreeze({ type: INCREMENT, index: 2 });
  const after = [0, 2, 11];
  expect(counters(before, action)).to.be.deep.equal(after);
});

it("Should decrement the counter with index 1", () => {
  const before = deepFreeze([0, 5, 32]);
  const action = deepFreeze({ type: DECREMENT, index: 1 });
  const after = [0, 4, 32];
  expect(counters(before, action)).to.be.deep.equal(after);
});

it("Should decrement the counter with index 0", () => {
  const before = deepFreeze([15, 5, 32]);
  const action = deepFreeze({ type: DECREMENT, index: 0 });
  const after = [14, 5, 32];
  expect(counters(before, action)).to.be.deep.equal(after);
});

it("Should return the same state if action is unknown", () => {
  const before = deepFreeze([15, 5, 32]);
  const action = deepFreeze({ type: "UNKNOWN_ACTION" });
  const after = [15, 5, 32];
  expect(counters(before, action)).to.be.deep.equal(after);
});

it("Should return initial state if last state is undefined", () => {
  const before = undefined;
  const action = deepFreeze({});
  const after = initialState;
  expect(counters(before, action)).to.be.deep.equal(after);
});
