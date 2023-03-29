import React, { useState } from 'react';
import {Box,Button,TextField,Stack,Typography} from '@mui/material'
import { useForm } from 'react-hook-form';
import Showtodolist from './Showtodolist';
const Todo = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [todolist,setTodolist]=useState([])


    const onSubmit=(data,e)=>{
        e.preventDefault();
        setTodolist([...todolist,data.todolist])
       //console.log(data)
    }

    return (
        <>
            <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    m={4}
            >
            <Typography variant="h4"  gutterBottom>
                  Todo-App
            </Typography>
            </Stack>
            <Stack p={4} m={4} direction="row"
                
                justifyContent="center">

                <form onSubmit={handleSubmit(onSubmit)}>

                <TextField
                label='I will do this'
                placeholder='What will I do today'
                size='small'
                color='secondary'
                type='text'
                {...register("todolist")}
                required
                >
            
                </TextField> 
                        
                <Button type='submit' variant='contained'>Add Task</Button>
                </form>   

               
            </Stack>
            <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    bgcolor="text.secondary"
                    p={4}
                     ml={'20%'} mr={'20%'}>
                    {
                        todolist.map(data=><Showtodolist data={data}></Showtodolist>)
                    }
            </Stack>

        </>
        
    );
};

export default Todo;