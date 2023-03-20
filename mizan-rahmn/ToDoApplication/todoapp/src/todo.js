import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState({
        todo:"",
    });

    const setValue = (value, element) => {
        setError({
            todo:""
        });

        if (element === "todo") {
            setTodo(value);
        }
    }

    const addTodo = () => {
        if (todo === "") {
            let errorMessage = {...error };
            errorMessage.todo = "Required";
            setError(errorMessage);
            return;
        }

        if (todo !== "") {
            setTodos([...todos, todo]);
            setTodo("");
        }        
    };

    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => {
            return todo !== text;
        });
        setTodos(newTodos);
    };

    return (
        <div className="todo">
            
            <h2>Todo Application</h2>

            {/* <div className="input-wrapper">
                <input 
                    type="text" 
                    name="todo" 
                    placeholder="Add new todo" 
                    onChange = { (event) => {
                        setTodo(event.target.value);
                    } }
                />
                {error.todo === "Required" && <p>This Field is Required</p>}
                <button className="add-button" onClick={addTodo} >Add</button>
            </div> */}
            <div className="input-wrapper">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField 
                    id="outlined-basic"
                    label="Please Provide Task Name"
                    variant="outlined"
                    onChange = { (event) => {
                        setValue(event.target.value, "todo");
                    } } 
                />
                {error.todo === "Required" && <p>This Field is Required</p>}
                
                <Button variant="contained" onClick={addTodo}>
                    Add
                </Button>
            </Box>
            </div>
            
            {todos.length > 0 ? (
                <ul className="todo-list">
                {todos.map((todo, index) =>(
                    <div className="todo">
                        <li key={index}>{todo}</li>

                        {/* <button className="delete-button"
                            onClick={() => {
                                deleteTodo(todo);
                            }}
                            >
                                Delete
                        </button> */}
                        <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => {
                                deleteTodo(todo);
                            }}>
                            Delete
                        </Button>
                    </div>
                ))}
            </ul>
            ) : (
                <div className="empty">
                    <p>Task List is Empty</p>
                </div>
            )}
            
        </div>
    );
};

export default Todo;