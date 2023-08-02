import "./App.css";
import Todo from "./components/Todo";
import todo from "./model/todo";
import NewTodo from "./components/NewTodo";

import { useState } from "react";

// const data = ["Learn React", "Learn TypeScript"];

function App() {
  const [todos, setTodos] = useState<todo[]>([]);
  const addTodoHandler = (text: string) => {
    const newTodo = new todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const deleteTodoHandler = (todoID: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoID);
    });
  };

  return (
    <div className="app">
      <h1>My Todos</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todo items={todos} onDelete={deleteTodoHandler} />
    </div>
  );
}

export default App;
