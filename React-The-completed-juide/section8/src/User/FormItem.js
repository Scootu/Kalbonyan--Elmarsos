import React from "react";


const FormItem = (props) => { 
   return <li key={props.id}>{`${props.name} (${props.age} years old)`}</li> ; 
}
export default FormItem ; 