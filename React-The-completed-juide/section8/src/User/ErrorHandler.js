// import React from "react";
import styled from './ErrorHandler.module.css';
import Button from '../UI/Button';

const ErrorHandler  = (props) => { 


return (
    <div className={styled.outErrorBox} >
        <div className={styled.insideErrorBox}>
            <h2 className={styled.insideHeaderText} >Invalid input</h2>
            <div className={styled.insidesubText} >Please enter a valid name and age (non-empty values).</div>
            <div  className={styled.button}>
            <Button onClick ={props.onGetAns}>Okay</Button>
            </div>
        </div>
    </div>
);
}
export default ErrorHandler ; 