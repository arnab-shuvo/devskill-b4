import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const todoList = [
        { no: 1, name: "Set an Alarm" },
        { no: 2, name: "Buy a new mouse" },
        { no: 3, name: "Call DBBL Helpline" },
        { no: 4, name: "Finish Assignment" },
    ]
    const [todos, setTodos] = useState(todoList);
    const handleDelete = (todoNo) => {
        const remainingTodos = todos.filter((todo) => todo.no !== todoNo);
        setTodos(remainingTodos);
        if (remainingTodos.length === 0) {
            alert("The todo list is going to be empty");
        }
    }
    return (
        <div className='flex justify-center'>
            <ul>
                {
                    todos.map((todo) => <li className='text-left py-3' key={todo.no}> {todo.no}. {todo.name}   <button onClick={()=>handleDelete(todo.no)}
                        type="button"
                        className="inline-block rounded bg-danger mx-2 px-2 py-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
                        X
                    </button></li>)
                }
            </ul>
        </div>
    );
};

export default TodoList;