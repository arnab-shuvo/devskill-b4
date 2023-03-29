import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {Button, Input} from '@mui/material';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Navbar from '../../Components/Header/navBar.js';

const Item=styled(Paper)(({theme})=>({
  backgroundColor: theme.palette.mode==="dark"?"#1A2027":"#fff",
  ...theme.typography.body2,
  textAlign:"center",
  width:"100%",
  padding:theme.spacing(2),
  color:theme.palette.text.secondary,
}));


function CreateProduct() {
    const [data,setData]=useState({
     title:"",
     price:"",
     description:"",
     category:"",
     images:"",
    });
   
    const [validation,setValidation]=useState(false);
    const submit=()=>{
        setValidation(true);
        if(data.title==='' || data.price==='' || data.description==='' || data.category==='' || data.images===''){
            return;
        }else{
            axios.post('https://api.escuelajs.co/api/v1/products/',{
                title: data.title,
                price:  data.price,
                description: data.description,
                categoryId:  data.category,
                images: ["https://placeimg.com/640/480/any"]
        })
             .then(res=>{
                console.log(res.data);
             })
            alert('Product Created Successfully');
        }
        
        console.log(data);
    }

    const setValue=(value,componenet)=>{
    const formData={...data};
    formData[componenet]=(value);
    setData(formData);
    };
    return (

        <>
        <Navbar/>
            <Grid container spacing={2} justifyContent="center" >
                <Grid container item xs={9}> 
                    <Item>
                    <h2>Create New Product</h2>
                        <Box>
                            <Input 
                            id="standard-basic"
                            lebel="Title"
                            type="text"
                            variant="standard"
                            onChange={(e)=>setValue(e.target.value,"title")}
                            placeholder="Product Title"
                            />
                            {validation && data.title==="" && <p> Value Required</p>}
                        </Box>

                    
                        <Box>
                            <Input 
                            id="standard-basic"
                            lebel="Price"
                            type="number"
                            variant="standard"
                            onChange={(e)=>setValue(e.target.value,"price")}
                            placeholder="Product Price"
                            />
                            {validation && data.price==="" && <p> Value Required</p>}
                        </Box>

                        <Box>
                            <Input 
                            id="standard-basic"
                            lebel="Description"
                            type="text"
                            variant="standard"
                            onChange={(e)=>setValue(e.target.value,"description")}
                            placeholder="Product Description"
                            />
                            {validation && data.description==="" && <p> Value Required</p>}
                        </Box>

                        <Box>
                            <Input 
                            id="standard-basic"
                            lebel="Category"
                            type="number"
                            variant="standard"
                            onChange={(e)=>setValue(e.target.value,"category")}
                            placeholder="Product Category"
                            />
                            {validation && data.category==="" && <p> Value Required</p>}
                        </Box>

                        <Box>
                            <Input 
                            id="standard-basic"
                            lebel="Images"
                            type="file"
                            variant="standard"
                            onChange={(e)=>setValue(e.target.value,"images")}
                            placeholder="Product Image"
                            />
                            {validation && data.images==="" && <p> Value Required</p>}
                        </Box>
                        <br/>
                        <Button onClick={submit} variant={'contained'}>Create</Button>
                    </Item>
                 
                </Grid>

            </Grid>
        </>

    );
}

export default CreateProduct;