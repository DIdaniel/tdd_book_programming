import React from "react";
import Todo from "../todo/Todo";
import { useSelector } from "react-redux";

const Lists = () => {
  const allTodos = useSelector((state) => state.todoSlice.todos);

  return (
    <ul>
      {allTodos.map((todo) => (
        <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default Lists;
