import "./App.css";
import Todo from "./components/Todo";

import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

// const data = ["Learn React", "Learn TypeScript"];

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todo />
    </TodosContextProvider>
  );
}

export default App;
