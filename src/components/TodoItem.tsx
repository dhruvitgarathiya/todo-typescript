import React from "react";
import { Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
};

export default TodoItem;
