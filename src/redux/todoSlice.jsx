import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: Math.random,
      title: "do learn redux",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random(),
        title: action.payload.title,
        completed: false,
      };
      //   console.log("action:", action);
      //   console.log("payload:", action.payload);
      state.push(newTodo);
    },

    doneTodo: (state, action) => {
      const { id } = action.payload;
      console.log(id);
      const item = state.todos.find((item) => {
        item.id === id;
      });
      item.completed === !item.completed;
      console.log("compl?", item.completed);
      console.log("for done", action.payload);
    },
  },
});

export const { addTodo, doneTodo } = todoSlice.actions;

export default todoSlice.reducer;
