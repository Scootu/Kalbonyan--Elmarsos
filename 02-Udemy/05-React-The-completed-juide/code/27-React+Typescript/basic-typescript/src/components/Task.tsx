import React from "react";
import classes from "./Task.module.css";
export const Task: React.FC<{
  message: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.message}
    </li>
  );
};
