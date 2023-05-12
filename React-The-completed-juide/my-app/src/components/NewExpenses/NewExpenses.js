import React from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css' ; 

const NewExpenses = (props) => { 
    const getExpenseForm = (expense) => { 
          props.onNewExpenses(expense);
}
    return (
        <div className="AddExpense">
             <ExpenseForm onExpenseForm = {getExpenseForm}/>  
        </div>
    ) ;   
}

export default NewExpenses ; 