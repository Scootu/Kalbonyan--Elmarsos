import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpneseNewBtn from "./ExpenseNewBtn";
import "./NewExpenses.css";

const NewExpenses = (props) => {

  const [respondedAns, setResponded] = useState(false);

  const getExpenseForm = (expense) => {
    props.onNewExpenses(expense);
  };

  const setResponseFalse = () => {
    setResponded(false);
  };

  const setResponseTrue = () => { 
    setResponded(true);
  }

  

  return (
    <div className="AddExpense">
      {respondedAns && <ExpenseForm onExpenseForm={getExpenseForm} onResponse={setResponseFalse} /> }
      {!respondedAns && <ExpneseNewBtn onResponse={setResponseTrue} /> }
    </div>
  );

};

export default NewExpenses;
