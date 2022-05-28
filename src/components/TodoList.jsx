import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { doneTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  


  const handleChange = (id) => {
    dispatch(doneTodo({ id }));
  };

  const removeTodo = (id) => {
    dispatch(removeTodo({ id }))
  };

  return (
    <ul>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={todo.completed === false ? "redtext" : "blacktext"}
        >
          <TodoItem
            id={todo.id}
            key={todo.id}
            title={todo.title}
            checked={todo.completed}
            handleChange={() => handleChange(todo.id)}
            removeTodo={() => removeTodo(todo.id)}
          />
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
