import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {Button,TextField} from '@mui/material';
import { width } from '@mui/system';
import { useState } from 'react';

const Item=styled(Paper)(({theme})=>({
  backgroundColor: theme.palette.mode==="dark"?"#1A2027":"#fff",
  ...theme.typography.body2,
  textAlign:"center",
  width:"100%",
  padding:theme.spacing(1),
  color:theme.palette.text.secondary,
}));


function Home() {
    const [data,setData]=useState({
     fname:"",
     lname:"",
     email:"",
     phone:"",
    });
    const [list,setList]=useState([data]);
    const addTodo=(todo,componenet)=>{
       const newTodo={
        id:Math.random(),
        todo:todo,
        
       }
       setList([...list,newTodo]);
       const formData={...data};
    formData[componenet]={todo};
    setData(formData);
      
    }
    const [validation,setValidation]=useState(false);
    const submit=()=>{
        setValidation(true);
        if(data.fname==='' && data.lname==='' && data.email==='' && data.phone===''){
            return;
        }
        addTodo(data.fname);
        alert('Form Submitted');
    }

    const setValue=(value,componenet)=>{
    const formData={...data};
    formData[componenet]={value};
    setData(formData);
    };
    return (

        <>
            <Grid container spacing={2} justifyContent="center" >
                <Grid container item xs={9}> 
                    <Item>
                        <Box>
                            <TextField 
                            id="standard-basic"
                            lebel="First Name"
                            variant="standard"
                            onChange={(e)=>setValue(e.target.value,"fname")}
                            placeholder="First Name"
                            />
                            {validation && data.fname==="" && <p> Value Required</p>}
                        </Box>

                    
                        <Box>
                            <TextField 
                            id="standard-basic"
                            lebel="Last Name"
                            variant="standard"
                            onChange={(e)=>setValue(e.target.value,"lname")}
                            placeholder="Last Name"
                            />
                            {validation && data.lname==="" && <p> Value Required</p>}
                        </Box>

                        <Box>
                            <TextField 
                            id="standard-basic"
                            lebel="Email"
                            variant="standard"
                            onChange={(e)=>setValue(e.target.value,"email")}
                            placeholder="Email"
                            />
                            {validation && data.email==="" && <p> Value Required</p>}
                        </Box>

                        <Box>
                            <TextField 
                            id="standard-basic"
                            lebel="Phone"
                            variant="standard"
                            onChange={(e)=>setValue(e.target.value,"phone")}
                            placeholder="Phone"
                            />
                            {validation && data.phone==="" && <p> Value Required</p>}
                        </Box>

                        <Button onClick={submit} variant={'contained'}>Register</Button>
                        <ul>
                            {list.map((todo)=>(
                            <li key={todo.id}>
                              {todo.todo}
                            </li>
                            ))}
                           
                        </ul>
                    </Item>
                 
                </Grid>

            </Grid>
        </>

    );
}

export default Home;