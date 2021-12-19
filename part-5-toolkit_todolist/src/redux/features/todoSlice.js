import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Hello", completed: false },
    { id: 2, text: "World", completed: false },
    { id: 3, text: "React", completed: true },
  ],
};

export const todoSlice = createSlice({
  name: "todo_list",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

// Action creators
export const { add, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
