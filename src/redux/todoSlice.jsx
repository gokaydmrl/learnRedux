import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: Math.random(),
      title: "do learn redux",
      completed: false,
    },
  ],
  activeCategory: [
    {
      cat: "all",
      id: 1,
    },
    {
      cat: "done",
      id: 2,
    },
    {
      cat: "waiting",
      id: 3,
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
      console.log("state", state);
      const item = state.find((item) => {
        return item.id === id;
      });
      item.completed = !item.completed;

      console.log("compl?", item.completed);
      console.log("for done action", action);
    },

    removeTodo: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },

    changeActiveCategory: (state, action) => {
      const { id } = action.payload;
      state.activeCategory = id;
    },
  },
});

export const { addTodo, doneTodo, removeTodo, changeActiveCategory } =
  todoSlice.actions;

export default todoSlice.reducer;
