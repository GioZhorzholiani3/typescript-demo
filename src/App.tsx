import "./App.css";
import Todo from "./components/Todo";

import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

// const data = ["Learn React", "Learn TypeScript"];

function App() {
  return (
    <TodosContextProvider>
      <h1>My Todos</h1>
      <NewTodo />
      <Todo />
    </TodosContextProvider>
  );
}

export default App;
