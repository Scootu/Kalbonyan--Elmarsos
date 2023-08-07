const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increament") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "decreament ") {
    return {
      counter: state.counter - 1,
    };
  }
  return {
    counter: state.counter,
  };
};
const store = redux.createStore(counterReducer);
const counterSubscriber = () => {
  const lastestState = store.getState();
  console.log(lastestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increament" });
store.dispatch({ type: "decreament" });
