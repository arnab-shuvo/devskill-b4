import React from "react";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Delete, Edit, TaskAlt } from "@mui/icons-material";

const SingleTask = ({ task, onComplete, onEdit, onDelete }) => {
    return (
        <Card
            sx={{
                border: "1px solid #b1b1b1",
                backgroundColor: task.done ? "lightgreen" : "lightblue",
            }}
        >
            <CardContent>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Box mb={1}>
                            <Typography fontWeight={700}>
                                {task.title}
                            </Typography>
                        </Box>
                        <Box mb={1}>
                            <Typography textAlign={"justify"}>
                                {task.details}
                            </Typography>
                        </Box>
                        <Typography fontSize={14}>{task.time}</Typography>
                    </Box>
                    {task.done ? (
                        <Typography
                            fontSize={14}
                            fontWeight={700}
                            color={"green"}
                        >
                            DONE
                        </Typography>
                    ) : (
                        <Box display={"flex"} alignItems={"center"} ml={2}>
                            <IconButton
                                color="primary"
                                onClick={() => onComplete(task)}
                            >
                                <TaskAlt />
                            </IconButton>
                            <IconButton onClick={() => onEdit(task)}>
                                <Edit />
                            </IconButton>
                            <IconButton
                                color={"error"}
                                onClick={() => onDelete(task)}
                            >
                                <Delete />
                            </IconButton>
                        </Box>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default SingleTask;
