import React from "react";
import styled from './Card.module.css';
const Card =  (props) => { 
    return (
        <div className={`${styled.container } ${props.className}`} >{props.children}</div> 
    );
}
export default Card  ;