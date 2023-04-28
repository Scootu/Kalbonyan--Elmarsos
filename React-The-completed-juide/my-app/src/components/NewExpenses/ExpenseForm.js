import React, {useState} from "react";
import './ExpenseForm.css'; 


const ExpenseForm = () => {
let titel ; 
let amount ; 
let date = new Date() ; 

let obj = {} ; 

const titleChangeHandler = (elem) => { 
    titel = elem.target.value ; 
    console.log(titel);
} ; 
const amountChangeHandler = (elem) => { 
  amount = elem.target.value ; 
  console.log(amount);
} ; 
const dateChangeHandler = (elem) => {
  date =  elem.target.value  ;   
  console.log(date);
} ; 

const storeInputValue = (event) => {
    event.preventDefault() ; 

    obj = { 
      titel : titel , 
      amount : amount , 
      date : date 
    }

    console.log(obj);
}

  return (
    <form className="form">
      <div className="formLabel">
        <label>Titel</label>
        <input type="text" onChange={titleChangeHandler}/>
      </div>
      <div className="formLabel">
        <label>Amount</label>
        <input type="number" onChange={amountChangeHandler}/>
      </div>
      <div className="formLabel">
        <label>Date</label>
        <input type="Date" onChange={dateChangeHandler}/>
      </div>
      <button className="btnExpense" onClick={storeInputValue}>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
