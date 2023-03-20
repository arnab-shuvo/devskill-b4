import React, { useState } from 'react';

const ToDoList = () => {
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: "This Is My First List",
        },
        {
            id: 2,
            task: "This Is My Second List",
        },
        {
            id: 3,
            task: "This Is My Third List",
        },
        {
            id: 4,
            task: "This Is My Fourth List",
        },
        {
            id: 5,
            task: "This Is My Fifth List",
        }
    ]);
    const addTask = task => setTasks([...tasks, { task }]);
    const handleSubmit = e => {
        e.preventDefault();
        value && addTask(value)
        setValue("");
    };
    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index);
        setTasks(newTasks);
    };

    return (
        <div className="todo-list">
            {tasks.map((task, index) => (
                <div className="todo" key={task.task}>
                    <span className="todo-task">
                        {task.task}
                    </span>
                    <button onClick={() => removeTask(index)}>Delete</button>
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <input
                    type="task"
                    value={value}
                    placeholder="Write Your Task…"
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default ToDoList;