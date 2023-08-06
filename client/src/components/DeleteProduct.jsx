import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products and set them to the state
    const fetchedProducts = [
      // ... your product data ...
    ];
    setProducts(fetchedProducts);
  }, []);

  const handleDelete = (productId) => {
    // Delete product logic
    // Example:
    // const updatedProducts = products.filter(product => product._id !== productId);
    // setProducts(updatedProducts);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('deleteproduct.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
          Delete Product
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.color}</TableCell>
                  <TableCell>{product.size}</TableCell>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.name}
                      width="50"
                      height="50"
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDelete(product._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: '40%', marginBottom: '30px',marginTop: '20px', backgroundColor: '#f39c12', '&:hover': { backgroundColor: '#e67e22' } ,display:"flex" , flexDirection:"column" }}
          component={Link}
          to="/admin" // Replace with the actual path for deleting product
           // Align button to the left
        >
          Go To Main
        </Button>
    </Box>
  );
};

export default DeleteProduct;
