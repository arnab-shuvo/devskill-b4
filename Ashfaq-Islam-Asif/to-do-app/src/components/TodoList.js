import React, { useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import SingleTask from "./SingleTask";
import AddOrEditTask from "./AddOrEditTask";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const addTask = (task) => {
        setTasks([{ ...task, id: task.time }, ...tasks]);
    };

    const completeTask = (task) => {
        setTasks(
            tasks.map((element) => {
                if (element.id == task.id) element.done = true;
                return element;
            })
        );
    };

    const onEditSelect = (task) => {
        setTaskToEdit(task);
        setDialogOpen(true);
    };

    const editTask = (task) => {
        setTasks(
            tasks.map((element) => {
                if (element.id == task.id) {
                    element.title = task.title;
                    element.details = task.details;
                }
                return element;
            })
        );
        setTaskToEdit(null);
    };

    const deleteTask = (task) => {
        setTasks(tasks.filter((element) => element.id != task.id));
    };

    return (
        <Grid container justifyContent={"center"} px={{ xs: 2 }}>
            <Grid item xs={12} md={8} lg={6}>
                <Box mt={3} mb={3} display={"flex"} justifyContent={"center"}>
                    <Typography fontSize={30} fontWeight={700}>
                        Tasks to do
                    </Typography>
                </Box>
                <Box display={"flex"} justifyContent={"flex-end"}>
                    <Button
                        variant="contained"
                        startIcon={<Add />}
                        onClick={() => {
                            setDialogOpen(true);
                        }}
                    >
                        New Task
                    </Button>
                </Box>
                <Box mt={3}>
                    {!tasks.length && (
                        <Typography textAlign={"center"}>
                            No tasks to show. Please add one
                        </Typography>
                    )}
                    {tasks.length > 0 && (
                        <Stack spacing={2}>
                            {tasks.map((task, index) => (
                                <SingleTask
                                    key={index}
                                    task={task}
                                    onComplete={completeTask}
                                    onEdit={onEditSelect}
                                    onDelete={deleteTask}
                                />
                            ))}
                        </Stack>
                    )}
                </Box>
            </Grid>
            <Grid item>
                <AddOrEditTask
                    dataForEdit={taskToEdit}
                    dialogOpen={dialogOpen}
                    onClose={() => {
                        setDialogOpen(false);
                        setTaskToEdit(null);
                    }}
                    buttonAction={taskToEdit ? editTask : addTask}
                />
            </Grid>
        </Grid>
    );
};

export default TodoList;
