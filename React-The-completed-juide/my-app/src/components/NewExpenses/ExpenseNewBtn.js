import React from "react";
import './ExpenseNewBtn.css' ; 
const ExpneseNewBtn =(props) => { 

    const getBtnData =() => { 
        props.onResponse(true);
    }

      return (
        <div className="btn" >
            <button className="newBtn" onClick={getBtnData} >Add New expense</button>
        </div>
     );
}

export default ExpneseNewBtn ; 
