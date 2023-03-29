import { TaskForm } from "./components/TaskForm";
import { Grid } from "@mui/material";
import * as React from "react";
import { Tasks } from "./components/Tasks";
import { useState } from "react";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <Grid
      container
      item
      spacing={2}
      xs={12}
      alignItems="center"
      justifyContent="center"
    >
      <TaskForm
        setTasks={setTasks}
        setTaskInput={setTaskInput}
        tasks={tasks}
        taskInput={taskInput}
      />

      <Tasks tasks={tasks} setTasks={setTasks} />
    </Grid>
  );
}

export default App;
