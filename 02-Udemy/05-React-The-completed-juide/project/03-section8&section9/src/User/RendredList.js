import React from "react";
// import FormItem from "./FormItem";

const RendredList = (props) => {
  // list of li element bassed in array from props
  console.log(props.onAddFormArr);
  return (
    <ul>
      {props.onAddFormArr.map((elem) => {
        // return <FormItem id={elem.id} name={elem.name} age={elem.age} />;
        return (
          <li key={elem.id}> {elem.name} ({elem.age} years old)</li>
        );
      })}
    </ul>
  );
};
export default RendredList;
