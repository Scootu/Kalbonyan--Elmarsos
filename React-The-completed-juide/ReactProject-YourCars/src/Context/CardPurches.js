import React, { createContext , useReducer} from "react";


const CardDataPurchese = createContext({
  info: {},
  number: 0,
  
});

export const CardPurchese = (props) => {
 
  return (
    <CardDataPurchese.Provider>{props.children}</CardDataPurchese.Provider>
  );
};

export default CardDataPurchese;
