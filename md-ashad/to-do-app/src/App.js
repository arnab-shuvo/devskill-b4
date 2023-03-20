import React, { useState } from "react";
import CreateTask from "./components/CreateTask";
import ShowTasks from "./components/ShowTasks";
const shortid = require("shortid");

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState("");

  const createNewTask = (text) => {
    const task = {
      text,
      isComplete: false,
      createAt: new Date().toLocaleDateString(),
      id: shortid.generate(),
    };
    setTasks([task, ...tasks]);
  };

  const toggleComplete = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setTasks(newTasks);
  };

  const handleVisibility = (text) => {
    setVisibility(text);
  };

  const getFilteredTask = () => {
    if (visibility === "Completed")
      return tasks.filter((item) => item.isComplete);
    if (visibility === "incomplete")
      return tasks.filter((item) => !item.isComplete);
    return tasks;
  };
  return (
    <>
      <CreateTask addNewTask={createNewTask} />
      <div>
        <button onClick={() => handleVisibility("All")}>All</button>
        <button onClick={() => handleVisibility("Completed")}>Completed</button>
        <button onClick={() => handleVisibility("incomplete")}>
          Not Completed
        </button>
      </div>
      <div>Selected visibility:{visibility}</div>
      <ShowTasks tasks={getFilteredTask()} toggleComplete={toggleComplete} />
    </>
  );
}
