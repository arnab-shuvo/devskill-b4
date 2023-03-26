import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const TaskForm = ({ setTasks, setTaskInput, tasks, taskInput }) => {
  const [validation, setValidation] = useState(false);
  return (
    <Grid item md={12} xs={12}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12}>
          <TextField
            required
            id="filled-basic"
            multiline
            minRows={4}
            maxRows={10}
            label="Add Task"
            variant="standard"
            onChange={(e) => setTaskInput(e.target.value)}
            value={taskInput}
          />
        </Grid>
        <Grid item xs={12} mb={4}>
          <Button
            size="small"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => {
              setValidation(true);
              if (taskInput === "") return;

              // submiting the form
              setTasks([...tasks, taskInput]);
              setTaskInput("");

              // reseting the validation
              setValidation(false);
            }}
          >
            Add
          </Button>
        </Grid>
        {validation && taskInput === "" && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Value required — <strong>fill out the input!</strong>
          </Alert>
        )}
      </Grid>
    </Grid>
  );
};
