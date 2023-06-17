import React, {
  Fragment,
  useReducer,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import classes from "./Input.module.css";
import CardDataContext from "../../../../Context/CardData";
const Input = (props) => {
  const input = useRef();

  const ctx = useContext(CardDataContext);
  const inputReducer = (state, action) => {
    if (action.type === "min" && action.value !== 0) {
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
  const [inputVal, dispatchValue] = useReducer(inputReducer, {
    value: 0,
  });

  const getCountreClickMin = () => {
    
    dispatchValue({
      type: "min",
      value: inputVal.value,
    });
  };
  const getCountreClickPlus = () => {
     
    dispatchValue({
      type: "plus",
      value: inputVal.value,
    });
  };

  // ctx.onPurches({
  //   value: inputVal.value,
  //   info: {
  //     key: props.props.name,
  //     name: props.props.name,
  //     class: props.props.class,
  //     image: props.props.image,
  //   }
  // })

  const getChangedValue = () => {
   ctx.onPurches({
    value:input.current.value,
    index:props.props.ind,
    name:props.props.name,
    class:props.props.class,
    image:props.props.image
   })
  };
  useEffect(() => {
    getChangedValue();
  }, [inputVal]);

  return (
    <div className={classes.counter}>
      <span onClick={getCountreClickMin}>-</span>
      <input
        className={classes.input}
        type="text"
        value={inputVal.value}
        readOnly
        ref={input}
      ></input>
      <span onClick={getCountreClickPlus}>+</span>
    </div>
  );
};

export default Input;
