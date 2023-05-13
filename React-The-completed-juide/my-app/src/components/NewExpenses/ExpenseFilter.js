import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const getOptionVal = (event) => {

        props.onNewGetOptionVal(event.target.value); // props cannont be directy modified in the componnet 

    }
    return (
        <div className="filter">
            <p className="filterText">Filter By year</p>
            <select className="filterSelect" onChange={getOptionVal}>
                <option value={2023} >2023</option>
                <option value={2022} >2022</option>
                <option value={2021} >2021</option>
                <option value={2020} selected>2020</option>
                <option value={2019} >2019</option>
            </select>
        </div>
    );
}

export default ExpenseFilter; 