import React from "react";
//create context for make interact change with two components *

const MealDataContext = React.createContext({});
export const MealData = () => {
  return <MealDataContext.Provider value={{}}></MealDataContext.Provider>;
};

export default MealDataContext;
