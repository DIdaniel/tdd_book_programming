import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HabitPresenter from "./habit_presenter";

const habitPresenter = new HabitPresenter([
  { id: 1, name: "Reading", count: 0 },
  { id: 2, name: "Running", count: 0 },
  { id: 3, name: "Coding", count: 0 },
]);

ReactDOM.render(
  <React.StrictMode>
    <App presenter={habitPresenter} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
