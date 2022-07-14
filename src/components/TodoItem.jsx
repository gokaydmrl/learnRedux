import { Button } from "@mui/material";
import React from "react";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";

const TodoItem = ({ title, completed, handleChange, removeTodo }) => {
  return (
    <Box
      className="item"
      sx={{
        justifyContent:"center",
        margin: "3px",
        display:"flex"
        
      }}
    >
      
          {" "}
          <Checkbox checked={completed} onChange={handleChange} />
          {/* <input type="checkbox" checked={completed} onChange={handleChange} /> */}
        <p>{title}</p>
        <Button endIcon variant="outlined" onClick={removeTodo} size="small">
          <DeleteSweepRoundedIcon />
        </Button>
      
    </Box>
  );
};

export default TodoItem;
