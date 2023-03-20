import {useState} from 'react'
import AddTaskForm from './component/AddTaskForm.js'
import UpdateForm from './component/updateForm.js'
import ToDo from './component/todo.js'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {

  const [toDo, setToDo] = useState([])

  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1 
      
      
      setToDo([
        ...toDo, 
        { id: num, title: newTask, status: false }
      ])

      setNewTask('')

    }
  }

  const deleteTask = (id) => {
    
    setToDo(toDo.filter(task => task.id !== id))

  }


  const markDone = (id) => {
    
  
    setToDo(toDo.map(
      task => task.id === id 
      ? ({ ...task, status: !task.status }) 
      : (task) 
    ))

  }


  const cancelUpdate = () => {
    setUpdateData('')
  }

  const changeHolder = (e) => {

    setUpdateData({...updateData, title: e.target.value})

  }

  const updateTask = () => {
    
    let removeOldRecord = [...toDo].filter(task => task.id !== updateData.id)
    setToDo([
      ...removeOldRecord, 
      updateData
    ])
    
    setUpdateData('')

  }

  return (
    <div className="container App">

    <br /><br />
    <h2>To Do List App (ReactJS)</h2>
    <br /><br />

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeHolder={changeHolder}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />  

    </div>
  );
}

export default App;