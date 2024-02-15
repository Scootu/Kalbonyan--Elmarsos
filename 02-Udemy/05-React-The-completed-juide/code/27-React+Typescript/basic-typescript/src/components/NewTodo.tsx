//@ts-check

import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todos-context";
export const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodoContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value; // ? if it's not can return a nonNull Value , ! is if you sure 100% that will return a nonNull value

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    todosCtx.addTodo(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label>Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
