import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { doneTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";
import { changeActiveCategory } from "../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  let activeCategory = useSelector((state) => state.todos.activeCategory);

  console.log("actCat", activeCategory);

  let todosList = useSelector((state) => state.todos.todoValues);

  console.log("todosss", todosList);

  const handleChange = (id) => {
    dispatch(doneTodo({ id }));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({ id }));
  };

  // if (activeCategory === "done") {
  //   return todosList.filter((item) => item.completed === true);
  // }

  // if (activeCategory !== "all") {
  //   todosList.filter((todoItem) => {
  //     activeCategory === "waiting" && todoItem.completed === false;
  //   });
  // }

  if (activeCategory !== "all") {
    if (activeCategory === "done") {
      todosList = todosList.filter((item) => item.completed === true);
    } else {
      todosList = todosList.filter(
        (waitingItem) => waitingItem.completed === false
      );
    }
  }

  return (
    <div>
      <button onClick={() => dispatch(changeActiveCategory("all"))}>all</button>
      <button onClick={() => dispatch(changeActiveCategory("done"))}>
        done
      </button>
      <button onClick={() => dispatch(changeActiveCategory("waiting"))}>
        waiting
      </button>

      <ul>
        {todosList.map((todo) => (
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
