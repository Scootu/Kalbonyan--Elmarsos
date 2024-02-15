import React, { useContext } from "react";
import { Task } from "./Task";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/todos-context";
export const Todos: React.FC = () => {
  const todosCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <Task
          key={item.id}
          message={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
