import React, { Fragment, useReducer ,useContext } from "react";
import classes from "./Input.module.css";
import CardDataContext from "../../../../Context/CardData";
const Input = (props) => {
  const ctx = useContext(CardDataContext);
 
  const inputReducer = (state, action) => {
    if (action.type === "min" && action.value !== 0)   {
      return {
        value: action.value - 1,
      };
    } else if (action.type === "plus") {
      return {
        value: action.value + 1,
      };
    } else {
      return {
        value: 0,
      };
    }
  };
  const [inputVal, dispatch] = useReducer(inputReducer, {
    value: 0,
  });

  const getCountreClickMin = () => {
    dispatch({
      type: "min",
      value: inputVal.value,
    });
  };
  const getCountreClickPlus = () => {
    dispatch({
      type: "plus",
      value: inputVal.value,
    });
  };
  ctx.onPurchese({
    ...props , 
    value:inputVal.value 
  });
  return (
    <Fragment>
      <span onClick={getCountreClickMin}>-</span>
      <input
        className={classes.input}
        type="text"
        value={inputVal.value}
        readOnly
      ></input>
      <span onClick={getCountreClickPlus}>+</span>
    </Fragment>
  );
};

export default Input;
