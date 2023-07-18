import React, { createContext } from "react";
const CardDataData = () => {};
const CardDataContext = createContext({
  items: [],
  totalAmount: 0,
  addCard: (amount) => {},
  removeCard: (id) => {},
  deleteAllItems: () =>{},
});

export default CardDataContext;
