import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    
  </Box>
);

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;
    setTasks([...tasks, { name: taskName }]);
    setTaskName("");
  };

  const handleDelete = (index) => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  return (
    <div>
      <Card sx={{ justifyContent: "center" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="320"
            image="https://blog.appsumo.com/wp-content/uploads/2021/08/AS-blog-best-to-do-list-app-1536x614px-1-1-800x320.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              TodoApp
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Enter task name"
          variant="outlined"
          placeholder="Enter task name"
          value={taskName}
          onChange={handleInputChange}
        />
        <Button variant="contained" type="submit">
          Add Task
        </Button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name}{" "}
            <Button
              onClick={() => handleDelete(index)}
              variant="outlined"
              color="error"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      {/* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined"  placeholder="Enter task name"
          value={taskName}
          onChange={handleInputChange}/>
        <Button variant="contained" type="submit">Add Task</Button>
      </Box> */}
    </div>
  );
}

export default TodoApp;
