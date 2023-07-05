import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./SmallInput.module.css";
import CardDataContext from "../../../../Context/CardData";


const SmallInput = (props) => {
  const ctx = useContext(CardDataContext);

  const [slipVal, setSlipVal] = useState(0);
  const item = useRef(0);
  useEffect(() => {
    setSlipVal(parseInt(props.datas.value));
  }, [props.datas.value]);

  const saveInLocalStorage = (val) => {
    // modify make it save directly in the dataSource cars
    let dataArr = JSON.parse(localStorage.getItem("dataCars") || "[]");

    if (dataArr.length >= props.datas.index + 1) {
      dataArr[props.datas.index].value = val;
      localStorage.setItem("dataCars", JSON.stringify(dataArr));
      console.log("is good ", dataArr);
    } else if (dataArr[props.datas.index] === undefined) {
      console.log("save value", props.datas);
      ctx.array({ ...props.datas });
    }
  };

  const getCountreClickPlus = () => {
    setSlipVal((prevVal) => prevVal + 1);
  };
  const getCountreClickMin = () => {
    setSlipVal((prevVal) => prevVal - 1);
  };
  useEffect(() => {
    saveInLocalStorage(item.current.value);
    //ctx.onPurchese() for re-render the input
    if (props.valide === false) {
      saveInLocalStorage(0);
      ctx.onPurches();
    }
    // ctx.onPurches();
  });

  return (
    <>
      <div className={classes.counter}>
        <span onClick={getCountreClickMin}>-</span>
        <input
          className={classes.input}
          type="text"
          value={slipVal}
          readOnly
          ref={item}
        ></input>
        <span onClick={getCountreClickPlus}>+</span>
      </div>
      {/* {createPortal(<p>0</p>,document.getElementsByClassName('SumValues')[0])} */}
    </>
  );
};

export default SmallInput;
