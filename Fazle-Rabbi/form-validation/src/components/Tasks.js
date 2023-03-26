import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import { Grid } from "@mui/material";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

const StyledTypography = styled(Typography)({
  "&:hover": {
    cursor: "pointer",
    fontWeight: "bolder",
  },
});

export const Tasks = ({ tasks, setTasks }) => {
  const [open, setOpen] = React.useState(false);
  const [editTaskInput, setEditTaskInput] = useState("");
  const [taskToEdit, setTaskToEdit] = useState("");

  const handleClose = (e) => {
    if (e.target.id === "edit-task") return;
    else if (e.target.id === "confirm-edit" && editTaskInput !== taskToEdit) {
      const newTasks = tasks.filter((task) => task !== taskToEdit);
      setTasks([...newTasks, editTaskInput]);
    } else if (e.target.id === "confirm-delete") {
      const newTasks = tasks.filter((task) => task !== taskToEdit);
      setTasks(newTasks);
    }
    setOpen(false);
  };
  const handleToggle = (e) => {
    setEditTaskInput(e.target.innerHTML);
    setTaskToEdit(e.target.innerHTML);
    setOpen(!open);
  };

  return (
    tasks.length > 0 && (
      <Grid item md={12} xs={12}>
        <Box role="group">
          <List
            component="div"
            variant="outlined"
            sx={{
              borderRadius: "sm",
              boxShadow: "sm",
              bgcolor: "background.body",
            }}
          >
            {tasks.map((value) => (
              <ListItem key={value}>
                <TurnedInNotIcon />
                <StyledTypography onClick={handleToggle} pl={4} pr={4}>
                  {value}
                </StyledTypography>
              </ListItem>
            ))}
          </List>
        </Box>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          open={open}
          onClick={handleClose}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} m={1}>
              <TextField
                id="edit-task"
                fullWidth
                multiline
                minRows={10}
                maxRows={10}
                label="Edit Task"
                variant="filled"
                onChange={(e) => setEditTaskInput(e.target.value)}
                value={editTaskInput}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
              />
            </Grid>
            <Grid item xs={12} m={1}>
              <Button
                id="confirm-edit"
                size="small"
                variant="contained"
                onClick={handleClose}
              >
                Confirm
              </Button>
            </Grid>
            <Grid item xs={12} m={1}>
              <Button
                id="confirm-delete"
                size="small"
                variant="contained"
                onClick={handleClose}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Backdrop>
      </Grid>
    )
  );
};
