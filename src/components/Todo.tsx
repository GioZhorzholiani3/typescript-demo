import todo from "../model/todo";

import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

const Todo: React.FC<{ items: todo[]; onDelete: (id: number) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.title}
          onDelete={() => props.onDelete(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todo;
