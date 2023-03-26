import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Input } from '@mui/material';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../Components/Header/navBar';
import axios from 'axios';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    width: "100%",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));


function ProductDetail() {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        images: "",
    });
    const { id } = useParams();
    const navigate = useNavigate();
    const { location } = useLocation();
    console.log(location, "==location");


    const [validation, setValidation] = useState(false);
    const update = () => {
        setValidation(true);

        if (product.title === '' || product.price === '' || product.description === '' || product.category === '' || product.images === '') {
            return;
        } else {
            axios.post('https://api.escuelajs.co/api/v1/products/', {
                title: product.title,
                price: product.price,
                description: product.description,
                categoryId: product.category,
                images: ["https://placeimg.com/640/480/any"]
            })
                .then(res => {
                    console.log(res.product);
                })
            alert('Product Update Successfully');
        }

        console.log(product);
    }

    const Delete = (id) => {

        axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(res => {
                console.log(res.product);
            })
        console.log('delete=', id);
        if (true) {
            alert('Delete Successfully');
        }

    }

    const setValue = (value, componenet) => {
        const formData = { ...product };
        formData[componenet] = (value);
        setProduct(formData);
    };


    useEffect(() => {
        axios
            .get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch(() => {
                navigate("/404", {
                    state: `/productDetail/${id}`,
                });
            });
        console.log(product);
    }, []);

    return (
        <>

            <Navbar />
            {!product && (
                <Grid container spacing={2} justifyContent="center">

                    <h3 style={{ color: "red" }}> Loading...</h3>
                </Grid>
            )}

            {product && (

                <Grid container spacing={2} justifyContent="center">
                    <Grid item spacing={2} container lg={6}>

                        <br />
                        <Item>
                            <Box>
                                <tr>
                                    <td style={{ fontSize: "17px", width: "35%", textAlign: "left" }}> Title: </td>

                                    <td >
                                        <Input
                                            id="standard-basic"
                                            lebel="Title"
                                            type="text"
                                            variant="standard"
                                            value={product.title}
                                            onChange={(e) => setValue(e.target.value, "title")}
                                            placeholder="Product Title"
                                        />
                                    </td>
                                </tr>
                            </Box>


                            <Box>
                                <tr>
                                    <td style={{ fontSize: "17px", width: "35%", textAlign: "left" }}> Price: </td>

                                    <td >
                                        <Input
                                            id="standard-basic"
                                            lebel="Price"
                                            type="number"
                                            value={product.price}
                                            variant="standard"
                                            onChange={(e) => setValue(e.target.value, "price")}
                                            placeholder="Product Price"
                                        />
                                    </td>
                                </tr>
                            </Box>

                            <Box>
                                <tr>
                                    <td style={{ fontSize: "17px", width: "35%", textAlign: "left" }}> Description: </td>

                                    <td>
                                        <Input
                                            id="standard-basic"
                                            lebel="Description"
                                            type="text"
                                            value={product.description}
                                            variant="standard"
                                            onChange={(e) => setValue(e.target.value, "description")}
                                            placeholder="Product Description"
                                        />
                                    </td>
                                </tr>
                            </Box>

                            <Box>
                                <tr>
                                    <td style={{ fontSize: "17px", width: "35%", textAlign: "left" }}> Category: </td>

                                    <td >
                                        <Input
                                            id="standard-basic"
                                            lebel="Category"
                                            type="number"
                                            value={product.category.id}
                                            variant="standard"
                                            onChange={(e) => setValue(e.target.value, "category")}
                                            placeholder="Product Category"
                                        />
                                    </td>
                                </tr>
                            </Box>

                            <Box>
                                <tr>
                                    <td style={{ fontSize: "17px", width: "35%", textAlign: "left" }}> Image: </td>

                                    <td >
                                        <img style={{ width: "200px", height: "100px" }} src={product.images[0]} />
                                    </td>
                                </tr>
                            </Box>
                            <br />
                            <tr>

                                <td style={{ width: "50%", paddingLeft: "50px" }}>

                                    <Button onClick={update} variant={'contained'}>Update</Button>
                                </td>
                                <td style={{ width: "50%" }}>
                                    <Button onClick={(e) => Delete(product.id)} variant={'contained'}>Delete</Button>
                                </td>
                            </tr>
                        </Item>

                    </Grid>

                </Grid>
            )
            }
        </>
    );
}

export default ProductDetail;

