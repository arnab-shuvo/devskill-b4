import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

// const handleSubmit = async (event) => {
//   event.preventDefault();
//   try {
//     const response = await axios.post('https://api.escuelajs.co/api/v1/products/', product);
//     console.log(response.data);
//     // Clear the form fields
//     setProduct({
//       title: '',
//       price: '',
//       description: '',
//       categoryId: '',
//       images: '',
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

const AddProductForm = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    categoryId: '',
    images: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/products/', product);
      console.log(response.data);
      // Clear the form fields
      setProduct({
        title: '',
        price: '',
        description: '',
        categoryId: '',
        images: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="title"
        label="Title"
        value={product.title}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="price"
        label="Price"
        value={product.price}
        onChange={handleInputChange}
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        name="description"
        label="Description"
        value={product.description}
        onChange={handleInputChange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <TextField
        name="categoryId"
        label="Category ID"
        value={product.categoryId}
        onChange={handleInputChange}
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        name="images"
        label="Image URL"
        value={product.images}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Product
      </Button>
    </form>
  );
};

export default AddProductForm;
