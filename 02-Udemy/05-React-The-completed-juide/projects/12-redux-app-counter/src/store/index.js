import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

//how to subscribe the store with the componenet  ?

export default store;
