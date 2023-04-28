import React from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css' ; 

const NewExpenses = () => { 
    return (
        <div className="AddExpense">
              <ExpenseForm /> 
        </div>
    ) ;   
}

export default NewExpenses ; 