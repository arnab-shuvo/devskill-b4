import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App my-4">
    <h2 className="text-4xl font-medium leading-tight">Todo List</h2>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
