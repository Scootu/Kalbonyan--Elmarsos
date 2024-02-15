import React, { useState } from "react";
import Todo from "../Models/Todo";
import { TodoContextType } from "../@types/todo";

export const TodoContext = React.createContext<TodoContextType >({
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
  const contextValue: TodoContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
export default TodoProvider;
