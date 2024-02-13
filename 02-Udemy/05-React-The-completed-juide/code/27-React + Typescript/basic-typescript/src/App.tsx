import { useState } from "react";
import "./App.css";
import { NewTodo } from "./components/NewTodo";
import { Todos } from "./components/Todos";
import Todo from "./Models/Todo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // let obj = { id: "5545", text: "hello" };
  // console.log(obj);
  // [
  //   new Todo("Learn React"),
  //   new Todo("Learn Typescript"),
  //   new Todo("DO this shit tasks"),
  // ]
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
