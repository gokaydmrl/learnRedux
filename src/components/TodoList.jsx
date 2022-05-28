import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { doneTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const TodoList = (id) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const handleChange = () => {
    dispatch(doneTodo({id: item.id}));
    console.log(id);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          key={todo.id}
          title={todo.title}
          checked={todo.completed}
          onChange={handleChange}
        />
      ))}
    </ul>
  );
};

export default TodoList;
