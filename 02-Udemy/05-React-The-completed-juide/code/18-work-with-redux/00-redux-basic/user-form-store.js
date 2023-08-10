const redux = require("redux");

const reducerForm = (state = { num: "0" }, action) => {
  if (action.type === "form") {
    return {
      num: "1",
    };
  }
};
const store = redux.createStore(reducerForm);

//subscription
const changeNum = () => {
  const lastestState = store.getState();
  console.log(lastestState);
};

store.subscribe(changeNum);

//dispatch actions
store.dispatch({ type: "form" });
