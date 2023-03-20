import { useEffect, useState } from "react";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./App.css";
import Form from "./components/Form";
import ToDos from "./components/ToDos";

function App() {
  const [toDos, setToDos] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [updateId, setUpdateId] = useState(0);

  // console.log("toDos", toDos);
  // console.log("nextId", nextId);
  // console.log("updateId", updateId);

  useEffect(() => {
    const storedData = localStorage.getItem("todos");
    let storedToDos = [];
    if(storedData) {
      try {
        storedToDos = JSON.parse(storedData);
      }
      catch(err) {
        storedToDos = [];
      }
    }
    let maxId = 0;
    storedToDos.forEach(d => maxId = (d.id > maxId? d.id: maxId));
    setNextId(maxId + 1);
    setToDos(storedToDos);
  }, []);
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(toDos));
  // }, [toDos]);

  const updateLocalStorage = (newList) => {
    localStorage.setItem("todos", JSON.stringify(newList));
  };

  const addToDo = (newToDo) => {
    const newList = [...toDos];
    const editIndex = newList.findIndex((d) => d.id === newToDo.id);
    if (editIndex >= 0) {
      newList[editIndex] = newToDo;
    } else {
      newToDo.id = nextId;
      newList.push(newToDo);
      setNextId(nextId + 1);
    }
    setToDos(newList);
    updateLocalStorage(newList);
  };
  const deleteToDo = (toDoId) => {
    const newList = toDos.filter((d) => d.id !== toDoId);
    setToDos(newList);
    updateLocalStorage(newList);
  };
  const updateTodo = (toDoId) => {
    setUpdateId(toDoId);
  };
  const changeToDoState = (toDoId, state) => {
    const newList = [...toDos];
    const editIndex = newList.findIndex((d) => d.id === toDoId);
    if (editIndex >= 0) {
      newList[editIndex].done = state;
    }
    setToDos(newList);
    updateLocalStorage(newList);
  };

  return (
    <Container maxWidth="sm" sx={{paddingTop: "50px"}}>
      <Box className="App">
        <Form
          addtodo={addToDo}
          todo={toDos.find((d) => d.id === updateId)}
          updatetodo={updateTodo}
        />
        <Divider sx={{marginTop: "10px", marginBottom: "10px"}}/>
        <ToDos
          type="active"
          todos={toDos.filter((e) => e.done === false)}
          deletetodo={deleteToDo}
          updatetodo={updateTodo}
          statetodo={changeToDoState}
        />
        <Divider sx={{marginTop: "10px", marginBottom: "10px"}}/>
        <ToDos
          type="done"
          todos={toDos.filter((e) => e.done === true)}
          deletetodo={deleteToDo}
          updatetodo={updateTodo}
          statetodo={changeToDoState}
        />
      </Box>
    </Container>
    
  );
}

export default App;
