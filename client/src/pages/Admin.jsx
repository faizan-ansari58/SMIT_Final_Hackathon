import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Make sure the page covers the entire viewport height
        backgroundImage: `url('admin.jpg')`, // Replace with your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",

        flexDirection: "column",
        justifyContent: "center", // Center vertically
        padding: "80px 20px", // Add spacing to the top and sides
      }}
    >
      <Container maxWidth="xl" align="center">
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "#fff",
            fontWeight: "bold", // Make the text bold
            marginBottom: 8,
          }}
        >
          Admin Panel
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          
          sx={{ width: '40%', marginBottom: '30px', backgroundColor: '#f39c12', '&:hover': { backgroundColor: '#e67e22' },display:"flex" , flexDirection:"column" }}
          component={Link}
          to="/addproduct" // Replace with the actual path for adding product
          
        >
          Add Product
        </Button>
        <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: '40%', marginBottom: '30px', backgroundColor: '#f39c12', '&:hover': { backgroundColor: '#e67e22' } ,display:"flex" , flexDirection:"column" }}
          component={Link}
          to="/deleteproduct" // Replace with the actual path for deleting product
           // Align button to the left
        >
          Delete Product
        </Button>
        
      </Container>
    </Box>
  );
};

export default Admin;
