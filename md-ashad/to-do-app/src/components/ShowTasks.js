import React from "react";

export default function ShowTasks({ tasks, toggleComplete }) {
  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              onClick={() => toggleComplete(task.id)}
              style={{
                textDecoration: task.isComplete ? "line-through" : "none",
                userSelect: "none",
              }}
            >
              {task.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no tasks</p>
      )}
    </div>
  );
}
