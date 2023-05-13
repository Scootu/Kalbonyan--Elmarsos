import React, {useState} from "react";
import './ExpenseForm.css'; 


const ExpenseForm = (props) => {
const [title, setTitle] = useState('');
const [amount, setAmount] = useState('');
const [date, setDate] = useState('');


const titleChangeHandler = (event) => { 
      setTitle(event.target.value);   
} ; 
const amountChangeHandler = (event) => { 
      setAmount(event.target.value);
} ; 
const dateChangeHandler = (event) => {
      setDate(event.target.value);
} ; 

const storeInputValue = (event) => {

    event.preventDefault() ; 
    let arrayDate = date.split('-');
    console.log(arrayDate);
    let expense = { 
      id:Math.random() , 
      title : title , 
      amount : amount , 
      date : new Date(arrayDate[0],arrayDate[1],arrayDate[2])
    }
  
    props.onExpenseForm(expense);
    props.onResponse();

    setTitle('');
    setAmount('');
    setDate('');

}

  
  return (
    <form className="form">
      <div className="formLabel">
        <label>Titel</label>
        <input type="text" value={title} onChange={titleChangeHandler}/>
      </div>
      <div className="formLabel">
        <label>Amount</label>
        <input type="number" value={amount} onChange={amountChangeHandler}/>
      </div>
      <div className="formLabel">
        <label>Date</label>
        <input type="Date" value={date} onChange={dateChangeHandler}/>
      </div>
      <button className="btnExpense" onClick={storeInputValue}>Add Expense</button>
     <button className="btnExpense cancel" onClick={()=>{props.onResponse()}}>Cancled</button>  
    </form>
  );
};

export default ExpenseForm;
