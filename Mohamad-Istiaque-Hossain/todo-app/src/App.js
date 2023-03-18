import './App.css';
import { Container } from './components/Container';
import { TaskCreator } from './components/TaskCreator';
import { useState, useEffect } from "react";
import { VisibilityControl } from './components/VisibilityControl';
import { TaskTable } from './components/TaskTable';

function App() {
  const [tasksItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }]);
    } else {
      alert("The task already exist");
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTaskItems(tasksItems.filter(task => !task.done));
    setShowCompleted(false);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);


  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createTask={createTask} />
        <VisibilityControl
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
          isChecked={showCompleted}
        />

        {showCompleted === true && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )} 
      </Container>
    </main>
  );
}

export default App;
