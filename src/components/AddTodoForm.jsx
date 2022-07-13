import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: title }));
  };

  return (
    <div className="todoinput">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="bugün naapcan"
          value={title}
          onChange={handleChange}
        />
        <button type="submit"> ekle </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
