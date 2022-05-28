import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import {Provider}  from "react-redux"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <AddTodoForm />
      <TodoList />
    </Provider>
  </React.StrictMode>
);