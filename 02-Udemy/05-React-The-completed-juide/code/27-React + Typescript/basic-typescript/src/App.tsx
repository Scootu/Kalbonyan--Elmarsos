import { useState } from "react";
import { NewTodo } from "./components/NewTodo";
import { Todos } from "./components/Todos";
import Todo from "./Models/Todo";
import classe from "./App.module.css";
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
  const removeTodoHandler = (id: string) => {
    // const itemIndex = todos.findIndex((item) => item.id === id);
    // if (itemIndex > -1) {
    setTodos((prevTodo) => prevTodo.filter((item) => item.id !== id));
    // }
  };
  return (
    <div className={classe.main}>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemove={removeTodoHandler} />
    </div>
  );
}

export default App;
