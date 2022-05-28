import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { doneTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const handleChange = (id) => {
    dispatch(doneTodo({id}));
    console.log("clicked", id);
    
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          key={todo.id}
          title={todo.title}
          checked={todo.completed}
          handleChange={()=> handleChange(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
