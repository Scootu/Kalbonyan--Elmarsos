import React, { useState } from "react";
import Card from "../UI/Card";
// import ExpensItem from "./ExpensItem";
import ExpenseFilter from "../NewExpenses/ExpenseFilter";
import ExpensList from "./ExpensList.js";
import ExpensChart from "./ExpensChart";
import "./NewCompnentExpens.css";
// import '../NewExpenses/ExpenseForm.css' ;
function RenderExpens(props) {
  const [filteredVal, setFiltered] = useState("2020");

  const getExpenseFilterVal = (filter) => {
    setFiltered(filter);
  };

  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredVal;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onNewGetOptionVal={getExpenseFilterVal} />
      <ExpensChart items= {filteredExpense} /> 
      <ExpensList items={filteredExpense} />
    </Card>
  );
}
export default RenderExpens;
