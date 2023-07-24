import "./App.css";
import NewExpenses from './components/NewExpenses/NewExpenses'; 
import RenderExpens from "./components/Expenses/NewCompnentExpens";
import React , { useState } from "react";
function App() {

    let DAMMY_EXPENSES = [
    { 
      id:'e1',
      title: "Car insurances", 
      amount: "297.5", 
      date: new Date(2022,8,10,12,45,15,45)  
    },
    { 
      id : 'e2',
      title: "MBC 2 : the avenger dark of syfnie", 
      amount: "200", 
      date: new Date(2023, 6, 10) 
    },
    { 
      id : 'e3',
      title: "The Rook", 
      amount: "100", 
      date: new Date(2020, 7, 10) 
    }
  ]; 

  const [extanded,setExtanded] = useState(DAMMY_EXPENSES);

  function getNewExpenses(expense) {

    setExtanded((prevExpense) => { 
      console.log(prevExpense);
      return ([expense ,...prevExpense]) ; 
    }); // this not update the DOM 
    // console.log(extanded);
    
    // and this don't update the dom ? 

    // DAMMY_EXPENSES.push(expense); 
    // setExtanded(DAMMY_EXPENSES);
  // }
 
  }

    
    //setExtanded()
  return (
    // put attribute for make the component dynamic !
    <div className="container"> 
      <NewExpenses onNewExpenses = {getNewExpenses} />
      <RenderExpens item = {extanded} />
    </div>
  );
}


export default App ;
