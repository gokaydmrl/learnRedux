import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: title }));
    setTitle("");
  };

  return (
    <div className="todoinput">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="bugün naapcan"
          value={title}
          onChange={handleChange}
        />
        <Button type="submit" size="small" color="secondary">
          <AddIcon />
        </Button>
      </form>
    </div>
  );
};

export default AddTodoForm;
