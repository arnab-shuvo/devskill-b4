import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function CreateTask({ addNewTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <TextField
        id=""
        label=""
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <Button
        variant="contained"
        onClick={() => {
          if (text) {
            addNewTask(text);
            setText("");
          } else {
            alert("Invalid Text");
          }
        }}
      >
        Contained
      </Button>
    </>
  );
}
