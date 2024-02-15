import React from "react";
import Todo from "../Models/Todo";
type todosContextObj = {
  items: Todo[];
  addTodo: (todoItem: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<todosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
