import React from "react";
import Chart from "../Chart/Chart";
const ExpensChart = (props) => {
    //we inial value bassed in amount of expense item
console.log('ExpensChart');
    const dataPointsArr = [

        {label:'jan',value:0},
        {label:'feb',value:0},
        {label:'mar',value:0},
        {label:'apr',value:0},
        {label:'mai',value:0},
        {label:'jul',value:0},
        {label:'jal',value:0},
        {label:'aug',value:0},
        {label:'sep',value:0},
        {label:'oct',value:0},
        {label:'nou',value:0},
        {label:'dec',value:0},
    ];
    
    for(const expense of props.items)  {
        const expenseMonth = expense.date.getMonth(); // getMonth return int 
        dataPointsArr[expenseMonth].value += parseInt(expense.amount); 
    }
    

  return(<Chart dataPoints ={dataPointsArr}/>);
};

export default ExpensChart;
