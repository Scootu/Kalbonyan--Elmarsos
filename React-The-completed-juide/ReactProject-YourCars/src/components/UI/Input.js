import React, { useState, useRef, useEffect } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  // input interact from the begning( use the value from the props ) and save  in the end (in the localStorage)
  const item = useRef();
  // build the localSTorage here
  const getLocalStorageVal = () => {};
  const [inputVal, setInputVal] = useState(props.amount);
   
  const getCountreClickMin = () => {
    const entredItem = +item.current.value;
    if (entredItem - 1 < 0) {
      return;
    }
    setInputVal((preVal) => {
      return preVal - 1;
    });

    props.onGetAmount(entredItem - 1);
  };
  const getCountreClickPlus = () => {
    const entredItem = +item.current.value;

    setInputVal((preVal) => {
      return preVal + 1;
    });
    props.onGetAmount(entredItem + 1);
    getLocalStorageVal();
  };
  return (
    <div className={classes.counter}>
      <span onClick={getCountreClickMin}>-</span>
      <input
        className={classes.input}
        type="text"
        value={inputVal}
        readOnly
        ref={item}
      ></input>
      <span onClick={getCountreClickPlus}>+</span>
    </div>
  );
};

export default Input;
