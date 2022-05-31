import React from "react";
import { useSelector } from "react-redux";


const Footer = () => {
  const todos = useSelector((state) => state.todos.todoValues);


  const filteredTodos = todos.filter((todo) => {
    return todo.completed === false;
  });

console.log("footerda", filteredTodos);


  return (
    <div className="list">
      {filteredTodos.length === 0 ? (
        <h1>missions completed</h1>
      ) : (
        <h1>
          gotta push bro you have
          {filteredTodos.length === 1 ? (
            " an item to do"
          ) : (
            <span> {filteredTodos.length} items to do </span>
          )}
        </h1>
      )}
    </div>
  );
};

export default Footer;
