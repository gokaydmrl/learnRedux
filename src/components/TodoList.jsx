import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { doneTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";
import { changeActiveCategory } from "../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
const activeCategory = useSelector((state) => state.activeCategory)

  const todos = useSelector((state) => state.todos);
  
  const handleChange = (id) => {
    dispatch(doneTodo({ id}));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({ id }))
  };

  if (activeCategory !== "all") {
     todos.filter(todo => {
       return activeCategory === "done" ? todo.completed === true : todo.completed === false;
  } )
}

  return (
    
    <div>
  
      <button onClick={() => dispatch(changeActiveCategory("all"))}>all</button>
      <button onClick={() => dispatch(changeActiveCategory("done"))}>done</button>
      <button onClick={() => dispatch(changeActiveCategory("waiting"))}>waiting</button>

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
            removeTodo={() => handleRemoveTodo(todo.id)}
          />
        </div>
      ))}
      </ul>
      </div>
  );
};

export default TodoList;
