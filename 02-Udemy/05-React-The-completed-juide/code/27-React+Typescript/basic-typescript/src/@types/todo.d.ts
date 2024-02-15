// @types.todo.d
import Todo from "../Models/Todo";
export type TodoContextType = {
  items: Todo[];
  addTodo: (todoItem: string) => void;
  removeTodo: (id: string) => void;
};
