import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoValues: [
      {
        id: Math.random(),
        title: "do learn redux",
        completed: false,
      },
    ],
    activeCategory: "all",
  },

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random(),
        title: action.payload.title,
        completed: false,
      };
      //   console.log("action:", action);
      //   console.log("payload:", action.payload);
      state.todoValues.push(newTodo);
    },

    doneTodo: (state, action) => {
      const { id } = action.payload;
      console.log("sliceta state", state.todoValues);
      const item = state.todoValues.find((item) => {
        return item.id === id;
      });
      item.completed = !item.completed;

      console.log("compl?", item.completed);
      console.log("for done action", action);
    },

    removeTodo: (state, action) => {
      state.todoValues = state.todoValues.filter((item) => {
        return item.id !== action.payload.id;
      });
    },

    changeActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { addTodo, doneTodo, removeTodo, changeActiveCategory } =
  todoSlice.actions;

export default todoSlice.reducer;
