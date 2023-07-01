import React from "react";
import styled from './Rides.module.css';
const Rides =(props) => { 
return (<div className={`${props.styled}`} >{props.children}</div>)
}

export default Rides ; 