import React from "react";
import { useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
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

            <div className="input-wrapper">
                <input 
                    type="text" 
                    name="todo" 
                    placeholder="Add new todo" 
                    onChange = { (e) => {
                        setTodo(e.target.value);
                    } }
                    />
                <button className="add-button" onClick={addTodo} >Add</button>
            </div>
            {todos.length > 0 ? (
                <ul className="todo-list">
                {todos.map((todo, index) =>(
                    <div className="todo">
                        <li key={index}>{todo}</li>

                        <button className="delete-button"
                            onClick={() => {
                                deleteTodo(todo);
                            }}
                            >
                                Delete
                            </button>
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