import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const todoList = [
    { no: 1, name: "Set an Alarm" },
    { no: 2, name: "Buy a new mouse" },
    { no: 3, name: "Call DBBL Helpline" },
    { no: 4, name: "Finish Assignment" },
  ]
  const [todos, setTodos] = useState(todoList);
  const [todo, setTodo] = useState('');

  const handleTodo = (e) => {
    setTodo(e.target.value);
  }
  const handleAdd = (e) => {
    if (!todo) {
      alert('Please enter a todo.');
    }
    else {
      todoList.push({ no: todoList.length + 1, name: todo });
      setTodos(todoList);
      setTodo('');
    }
  }
  const handleDelete = (todoNo) => {
    const remainingTodos = todos.filter((todo) => todo.no !== todoNo);
    if(window.confirm("Are you sure you want to delete this todo?")){
      setTodos(remainingTodos);
    }
    if (remainingTodos.length === 0) {
      alert("The todo list is going to be empty");
    }
  }
  return (
    <div className="App my-4">
      <h2 className="text-4xl font-medium leading-tight">Todo List</h2>
      <AddTodo todos={todos} handleAdd={handleAdd} handleTodo={handleTodo} todo={todo}/>
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
