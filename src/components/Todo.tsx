import todo from "../model/todo";

import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

const Todo: React.FC<{ items: todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.title} />
      ))}
    </ul>
  );
};

export default Todo;
