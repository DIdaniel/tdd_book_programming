import React from "react";
import "./App.css";
import Lists from "./components/lists/Lists";
import TodoInput from "./components/todo-input/TodoInput";

function App() {
  return (
    <div className="App">
      <h1>TO-DO</h1>
      <Lists />
      <TodoInput />
    </div>
  );
}

export default App;
