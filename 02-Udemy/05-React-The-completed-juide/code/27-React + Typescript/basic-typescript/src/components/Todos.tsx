import React from "react";
import Todo from "../Models/Todo";
import { Task } from "./Task";
export const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Task key={item.id} message={item.text} />
      ))}
    </ul>
  );
};
