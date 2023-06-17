import React, { useEffect, useState } from "react";
import classes from "./Purchese.module.css";
import Button from "../../../UI/Button";
// import CardDataContext from "../../../../Context/CardData";
const Purchese = (props) => {
  //   const ctxValue = useContext(CardDataContext);
  const getLocalStorage = () => {
    console.log(JSON.parse(localStorage.getItem('dataCars')));
  };
  useEffect(() => {
    getLocalStorage();
  });

  return (
    <div
      className={`${classes.main} ${
        !props.response ? classes.hidden : classes.visible
      } `}
    >
      <Button className={classes.btn}>Delete All</Button>
    </div>
  );
};

export default Purchese;
