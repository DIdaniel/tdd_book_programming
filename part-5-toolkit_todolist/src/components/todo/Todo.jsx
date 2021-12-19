import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../../redux/features/todoSlice";

const Todo = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  const deleteClick = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  return (
    <li id={id}>
      <div>
        <span>
          <input type="checkbox" checked={completed} onChange={handleComplete} />
          {text}
        </span>
        <button onClick={deleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default Todo;
