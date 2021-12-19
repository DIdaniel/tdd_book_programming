import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/features/todoSlice";

const TodoInput = () => {
  const dispatch = useDispatch();
  const completedTodo = useSelector((state) =>
    state.todoSlice.todos.filter((todo) => todo.completed === true)
  );
  console.log(completedTodo.length);

  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      add({
        text: todo,
      })
    );
  };

  const changeInputHandler = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <span>{completedTodo.length}</span>
      <input
        type="text"
        value={todo}
        onChange={changeInputHandler}
        placeholder="Add Todo..."
      />
      <button>ADD</button>
    </form>
  );
};

export default TodoInput;
