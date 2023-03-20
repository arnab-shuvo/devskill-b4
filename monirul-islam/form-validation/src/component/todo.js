import React from 'react';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {Button,TextField} from '@mui/material';

const Item=styled(Paper)(({theme})=>({
  backgroundColor: theme.palette.mode==="dark"?"#1A2027":"#fff",
  ...theme.typography.body2,
  textAlign:"center",
  width:"100%",
  padding:theme.spacing(1),
  color:theme.palette.text.secondary,
}));

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return(
    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
             <Grid container spacing={2} justifyContent="center" >
              <Grid container item xs={9}> 
              <Item>
              <Box color="text.primary" clone
                > 
                <tr>
                  <td style={{width:"10%",fontSize:"20px"}}>
                  {index + 1}
                  </td>
                  <td style={{width:"60%",fontSize:"20px"}}>

                 {task.title}
                 </td>
                 <td>
                <Button title="Completed / Not Completed" variant="contained" 
                  onClick={ (e) => markDone(task.id) }
                >
                OK
                 
                </Button>
              
         
                {task.status ? null : (
                  <Button title="Edit"  variant="contained"
                    onClick={ () => setUpdateData(task) }
                  >
                    Edit
                   
                  </Button>
                )}
             
                <Button title="Delete" variant="contained"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                 
                </Button>
                </td>
                </tr>
                </Box>
                </Item>
            </Grid>
            </Grid>
          </React.Fragment>
        )
      })
      }  
    </>
  )
}

export default ToDo;