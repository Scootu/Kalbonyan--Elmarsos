import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import classes from "./Input.module.css";

import { createPortal } from "react-dom";
import Slip from "../../Home/Purchese/Slip";
const Input = (props) => {
  // input interact from the begning( use the value from the props ) and save  in the end (in the localStorage) 
  const item = useRef();
  const sideBarContainer = document.getElementById("slipContainer");

  const getValFromLocalStorage = () => {
    let arr = JSON.parse(localStorage.getItem('dataCars') || '[]');
    if (arr[props.props.ind] === undefined) {
      return 0;
    } else {
      return parseInt(arr[props.props.ind].value);
    }
  }
  const [inputVal, setInputVal] = useState(getValFromLocalStorage());

  console.log('new', inputVal);
  const getCountreClickMin = () => {
    setInputVal(prevVal => prevVal - 1);
  }
  const getCountreClickPlus = () => {
    setInputVal(prevVal => prevVal + 1);
  }

  const saveInLocalStorage = () => {

    let dataArr = JSON.parse(localStorage.getItem('dataCars') || '[]');

    if (dataArr[props.props.ind] !== undefined) {
      dataArr[props.props.ind].value = inputVal;
      localStorage.setItem('dataCars', JSON.stringify(dataArr));
      console.log('goodInput', dataArr);
    }

  }

  //  useEffect(()=> {
  //   const value = JSON.parse(localStorage.getItem('dataCars'));
  //   //  setInputVal(parseInt(value[props.props.ind].value));
  //  },[]);

  useEffect(() => {
    saveInLocalStorage();
  });

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
      {inputVal !== 0 ? createPortal(
        <Slip
          data={{
            value: inputVal,
            index: props.props.ind,
            name: props.props.name,
            class: props.props.class,
            image: props.props.image,
          }}
        />,
        sideBarContainer
      ) : ''}
    </div>
  );
};

export default Input;
