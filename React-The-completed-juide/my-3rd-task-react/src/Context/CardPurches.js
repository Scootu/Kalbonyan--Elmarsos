import React, { createContext } from "react";

const CardDataPurchese = createContext({
  info: {},
  number: 0,
  isValid: false
});

export const CardPurchese = (props) => {
  return (
    <CardDataPurchese.Provider>{props.children}</CardDataPurchese.Provider>
  );
};

export default CardDataPurchese;
