import { NewTodo } from "./components/NewTodo";
import { Todos } from "./components/Todos";
import classe from "./App.module.css";
import TodoProvider from "./store/todos-context";
function App() {
  return (
    <TodoProvider>
      <div className={classe.main}>
        <NewTodo />
        <Todos />
      </div>
    </TodoProvider>
  );
}

export default App;
