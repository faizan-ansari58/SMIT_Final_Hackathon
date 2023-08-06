import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121120",
        color: "#fff",
        py: 3,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Our Online Store. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
