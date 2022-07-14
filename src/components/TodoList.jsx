import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { doneTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";
import { changeActiveCategory } from "../redux/todoSlice";
import { Box } from "@mui/system";
import "../App.css";
import { Button } from "@mui/material";

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
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
      }}
    >
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        {" "}
        <Button 
          variant="outlined"
          className="catButton"
          onClick={() => dispatch(changeActiveCategory("all"))}
        >
          all
        </Button>
        <Button
          variant="outlined"
          className="catButton"
          onClick={() => dispatch(changeActiveCategory("done"))}
        >
          done
        </Button>
        <Button
          variant="outlined"
          className="catButton"
          onClick={() => dispatch(changeActiveCategory("waiting"))}
        >
          waiting
        </Button>
      </Box>

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
    </Box>
  );
};

export default TodoList;
