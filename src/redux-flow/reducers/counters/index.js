"use strict";

export const ADD_COUNTER = "ADD_COUNTER";
export const REMOVE_COUNTER = "REMOVE_COUNTER";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return state.concat(0);

    case REMOVE_COUNTER:
      return state.filter((_, index) => action.index !== index);

    case INCREMENT:
      return state.map(
        (item, index) => (index === action.index ? item + 1 : item)
      );

    case DECREMENT:
      return state.map(
        (item, index) => (index === action.index ? item - 1 : item)
      );
  }

  return state;
};
