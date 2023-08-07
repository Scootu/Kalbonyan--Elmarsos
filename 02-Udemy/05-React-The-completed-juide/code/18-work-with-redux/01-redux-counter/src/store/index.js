import { createSlice } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";

const initialState = { counter: 0, showCounter: true };
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.amount;
//     },
//     toggle(state) {
//       state.counter;
//     },
//   },
// });

const reducerFun = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "increase") {
    return {
      counter: state.counter + 11.52,
      showCounter: state.showCounter,
    };
  } else if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  } else {
    return {
      counter: state.counter,
      showCounter: state.showCounter,
    };
  }
};

const store = createStore(reducerFun);
//how to subscribe the store with the componenet  ?

export default store;
