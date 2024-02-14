import React, { useState } from "react";
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
const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };
  const removeTodoHandler = (id: string) => {
    // const itemIndex = todos.findIndex((item) => item.id === id);
    // if (itemIndex > -1) {
    setTodos((prevTodo) => prevTodo.filter((item) => item.id !== id));
    // }
  };
  const contextValue: todosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export { TodoProvider };
