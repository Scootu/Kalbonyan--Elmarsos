import React from "react";
import ExpensItem from "./ExpensItem";
import "./ExpensList.css";
// import {  } from "./Expens";
const ExpensList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="filterText">Found not exist.</h2>;
  }

  return (
    <ul className="expense-list">
     { props.items.map((expnese) => (
      <ExpensItem
        key={expnese.id}
        title={expnese.title}
        amount={expnese.amount}
        date={expnese.date}
      />
      ))}
    </ul>
  );
};
export default ExpensList;
