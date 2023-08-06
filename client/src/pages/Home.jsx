import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('home.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Make sure the image covers the entire viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: "80px",
        paddingLeft: "20px",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          align="left"
          sx={{
            color: "#fff",
            marginBottom: 4,
            fontWeight: "bold", // Make the text bold
          }}
        >
          Welcome to Our Online Store
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/products" // Replace with the actual path to your products page
          sx={{ alignSelf: "center" }} // Center button horizontally
        >
          Shop Now
        </Button>
      </Container>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Add any additional content you want between the image and the footer */}
      </Container>
    </Box>
  );
};

export default Home;
