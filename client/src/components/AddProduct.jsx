import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";

const AddProduct= () => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    color: "",
    size: "",
    image: "",
    stock: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can send the productData to your backend API to add the product to the database
    console.log(productData);
    // Reset the form after submitting
    setProductData({
      name: "",
      category: "",
      description: "",
      price: "",
      color: "",
      size: "",
      image: "",
      stock: "",
    });
  };

  return (
    <Box sx={{
        backgroundImage: `url('add product.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
    <Container maxWidth="xl">
      <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
        Add Product
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          fullWidth
          required
          name="name"
          value={productData.name}
          onChange={handleInputChange}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",marginBottom: 2, // Transparent white
          }}
        />
        <FormControl fullWidth required sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",marginBottom: 2, // Transparent white
          }}>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={productData.category}
            onChange={handleInputChange}
          >
            <MenuItem value="clothing">Clothing</MenuItem>
            <MenuItem value="shoes">Shoes</MenuItem>
            <MenuItem value="accessories">Accessories</MenuItem>
            {/* Add more categories as needed */}
          </Select>
        </FormControl>
        <TextField
          label="Description"
          fullWidth
          required
          multiline
          rows={4}
          name="description"
          value={productData.description}
          onChange={handleInputChange}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",marginBottom: 2, // Transparent white
          }}
        />
        <TextField
          label="Price"
          fullWidth
          required
          type="number"
          name="price"
          value={productData.price}
          onChange={handleInputChange}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",marginBottom: 2, // Transparent white
          }}
        />
        <TextField
          label="Color"
          fullWidth
          required
          name="color"
          value={productData.color}
          onChange={handleInputChange}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",marginBottom: 2, // Transparent white
          }}
        />
        <TextField
          label="Size"
          fullWidth
          required
          name="size"
          value={productData.size}
          onChange={handleInputChange}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",marginBottom: 2, // Transparent white
          }}
        />
        <TextField
          label="Image URL"
          fullWidth
          required
          name="image"
          value={productData.image}
          onChange={handleInputChange}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",marginBottom: 2, // Transparent white
          }}
        />
        <TextField
          label="Stock"
          fullWidth
          required
          type="number"
          name="stock"
          value={productData.stock}
          onChange={handleInputChange}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",marginBottom: 2, // Transparent white
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
        <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: '40%', marginBottom: '30px',marginTop: '20px', backgroundColor: '#f39c12', '&:hover': { backgroundColor: '#e67e22' } ,display:"flex",justifyContent:"center" }}
          component={Link}
          to="/admin" // Replace with the actual path for deleting product
           // Align button to the left
        >
          Go To Main
        </Button>
      </Box>
      
    </Container>
    </Box>
  );
};

export default AddProduct;
