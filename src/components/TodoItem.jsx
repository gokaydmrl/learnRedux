import { Button } from "@mui/material";
import React from "react";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import "../App.css";
import Grid from "@mui/material/Grid";

const TodoItem = ({ title, completed, handleChange, removeTodo }) => {
  return (
    <Box className="item" display="flex">
      {" "}
      <Box>
        <Checkbox checked={completed} onChange={handleChange} />
      </Box>
      {/* <input type="checkbox" checked={completed} onChange={handleChange} /> */}
      <Box>
        <p>{title}</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Button
          sx={{
            borderRadius: "40%",
          }}
          variant="outlined"
          onClick={removeTodo}
          size="small"
        >
          <DeleteSweepRoundedIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default TodoItem;
