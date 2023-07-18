import React, { useReducer } from "react";
import CardDataContext from "./CardContext.js";

export const CardData = (props) => {

  const defaultValue = JSON.parse(
    localStorage.getItem("dataCars") || '{"items": [], "totalAmount": 0}'
  );

  const dataReducer = (state, action) => {
    if (action.type === "ADD") {
      let updateTotalAmount;

      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.item.id;
      });
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        updateTotalAmount = updatedItems.reduce((preVal, curVal) => {
          return preVal + curVal.amount;
        }, 0);
      } else {
        updatedItems = state.items.concat(action.item);
        updateTotalAmount = state.totalAmount + action.item.amount;
      }
      localStorage.setItem(
        "dataCars",
        JSON.stringify({
          items: updatedItems,
          totalAmount: updateTotalAmount,
        })
      );
      return {
        items: updatedItems,
        totalAmount: updateTotalAmount,
      };
    }

    if (action.type === "REMOVE") {
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.id;
      });

      const existingCartItem = state.items[existingCartItemIndex];
      let updateTotalAmount;
      let updatedItems;
      if (existingCartItem) {
        updateTotalAmount = state.totalAmount - existingCartItem.amount;
        updatedItems = state.items.filter((item) => {
          return item.id !== action.id;
        });
      } else {
        updateTotalAmount = state.totalAmount;
        updatedItems = state.items;
      }
      localStorage.setItem(
        "dataCars",
        JSON.stringify({
          items: updatedItems,
          totalAmount: updateTotalAmount,
        })
      );
      return {
        items: updatedItems,
        totalAmount: updateTotalAmount,
      };
    }
    if ((action.type = "REMOVEALL")) {
      localStorage.setItem(
        "dataCars",
        JSON.stringify({ items: [], totalAmount: 0 })
      );
      return {
        items: [],
        totalAmount: 0,
      };
    }
    return defaultValue;
  };

  const [data, dispatch] = useReducer(dataReducer, defaultValue);

  const addCardHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeCardHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const removeAllCartItems = () => {
    dispatch({ type: "REMOVEALL" });
  };
  /*   VALIDE VALue  */
  const cardDataValues = {
    items: data.items,
    totalAmount: data.totalAmount,
    addCard: addCardHandler,
    removeCard: removeCardHandler,
    deleteAllItems: removeAllCartItems,
  };

  return (
    <CardDataContext.Provider value={cardDataValues}>
      {props.children}
    </CardDataContext.Provider>
  );
};

export default CardDataContext;
