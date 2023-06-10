import React, { createContext, useEffect, useReducer, useState } from "react";

const CardDataContext = createContext({
  cars: [""],
  testimonials: [""],
  onPurchese: () => {},
  Valid: () => {},
});

export const CardData = (props) => {
  const dataReducer = (state, action) => {
    if (action.type === "update") {
      return {
        cars: action.cars,
        testimonials: action.testimonials,
      };
    } else {
      return {
        cars: ["0"],
      };
    }
  };

  const [data, dispatch] = useReducer(dataReducer, {
    type: "update",
    cars: [""],
    testimonials: [""],
  });

  useEffect(() => {
    fetch("data.json")
      .then((respons) => {
        return respons.json();
      })
      .then((result) => {
        dispatch({
          type: "update",
          cars: result.cars,
          testimonials: result.testimonials,
        });
      });
  }, []);

  const purcheseVal = (value) => {
    console.log("the value ", value);
  };

  /*   VALIDE VALue  */

const [isValid,setIsValid] = useState(true);

 
  const funValid = (event) => {
    setIsValid(!isValid);
    console.log(isValid);
  };

  return (
    <CardDataContext.Provider
      value={{
        cars: data.cars,
        testimonials: data.testimonials,
        onPurchese: purcheseVal,
        Valid: funValid,
      }}
    >
      {props.children}
    </CardDataContext.Provider>
  );
};

export default CardDataContext;
