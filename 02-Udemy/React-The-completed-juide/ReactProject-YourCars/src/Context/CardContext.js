import  { createContext } from "react";

const CardDataContext = createContext({
  items: [],
  totalAmount: 0,
  addCard: (amount) => {},
  removeCard: (id) => {},
  deleteAllItems: () =>{},
});

export default CardDataContext;
