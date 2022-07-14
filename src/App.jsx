import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import store from "./redux/store";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import { Box } from "@mui/system";
import { Grid, Paper, Stack } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display:"flex",
        width:"auto",
        justifyContent: "center",
        backgroundColor: "pink",
        alignItems: "center",
      }}
    >
      <Stack direction="column" alignItems="center">
        <Provider store={store}>
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddTodoForm />
          </Box>
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TodoList />
          </Box>
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <Footer />
          </Box>
        </Provider>
      </Stack>
    </Box>
  );
}

export default App;
