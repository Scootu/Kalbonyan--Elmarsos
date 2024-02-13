import React from "react";
import Todo from "../Models/Todo";
import { Task } from "./Task";
import classes from "./Todos.module.css";
export const Todos: React.FC<{
  items: Todo[];
  onRemove: (id: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Task
          key={item.id}
          message={item.text}
          onRemoveTodo={props.onRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
