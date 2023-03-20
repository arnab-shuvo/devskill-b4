import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const defaultData = {
  id: 0,
  done: false,
  priority: 5,
  description: "",
};

function Form({ addtodo, todo, updatetodo }) {
  const [data, setData] = useState({ ...defaultData });
  const [descriptionError, setDescriptionError] = useState(false);
  useEffect(() => {
    let newData = { ...defaultData };
    if (todo) {
      newData.id = todo.id;
      newData.done = todo.done;
      newData.priority = todo.priority;
      newData.description = todo.description;
    }
    setData(newData);
  }, [todo]);
  const updateData = (value, type) => {
    const newData = { ...data };
    if (type === "priority") {
      value = (value > 10? 10: (value < 0? 0: (value || 0)));
      newData.priority = parseInt(value);
    } else if (type === "description") {
      if(value) {
        setDescriptionError(false);
      }
      newData.description = value;
    }
    setData(newData);
  };
  const clearData = () => {
    setData({ ...defaultData });
    updatetodo(0);
  };

  const save = () => {
    if(!data.description) {
      setDescriptionError(true);
      return;
    }
    addtodo(data);
    clearData();
  };

  return (
    <>
      <Box>Add To Do</Box>
      <Box className="flex">
        <Box>
          <TextField
            type="number"
            inputProps={{ min: 1, max: 10 }}
            value={data.priority}
            label="Priority"
            onChange={(e) => updateData(e.target.value, "priority")}
            variant="standard"
          />
        </Box>

        <Box className="flex-grow-1 m-l-10 m-r-10">
          <TextField
            error={descriptionError}
            label="Description"
            value={data.description}
            onChange={(e) => updateData(e.target.value, "description")}
            helperText={descriptionError? "Please provide the task description.": ""}
            variant="standard"
            sx={{width: "100%"}}
          />
        </Box>
        <Box>
          <Button variant="contained" onClick={save} className="m-r-10">
            {todo ? "Update" : "Save"}
          </Button>
          <Button onClick={clearData}>Clear</Button>
        </Box>
      </Box>
    </>
  );
}

export default Form;
